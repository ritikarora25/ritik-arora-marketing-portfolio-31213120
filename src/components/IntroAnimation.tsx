import { useEffect, useRef } from "react";

/**
 * Netflix-style brand intro (~10s) over the real homepage.
 * Five ribbons (one per funnel stage) rise, each stage flashes, the ribbons
 * collapse into the "Ritik Arora." wordmark, which flies into the header brand.
 * Moving the cursor faster speeds the timeline up.
 */

const STAGES = [
  { name: "Acquire", tag: "Finding the right people" },
  { name: "Activate", tag: "First value" },
  { name: "Engage", tag: "Building habits" },
  { name: "Retain", tag: "Keeping customers" },
  { name: "Monetize", tag: "Growing revenue" },
];

const T_TOTAL = 10;
const STAGE_START = 1.8;
const STAGE_LEN = 1.05;
const COLLAPSE = STAGE_START + STAGES.length * STAGE_LEN; // ~7.05
const FLY = COLLAPSE + 1.3;

const clamp = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const seg = (p: number, s: number, d: number) => ease(clamp((p - s) / d));

interface Props {
  onComplete?: () => void;
}

const IntroAnimation = ({ onComplete }: Props) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const ribbonRefs = useRef<(HTMLDivElement | null)[]>([]);
  const stageRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const tagRef = useRef<HTMLDivElement>(null);
  const numRef = useRef<HTMLDivElement>(null);
  const markRef = useRef<HTMLDivElement>(null);
  const doneRef = useRef(false);
  const rafRef = useRef(0);

  const finish = () => {
    if (doneRef.current) return;
    doneRef.current = true;
    cancelAnimationFrame(rafRef.current);
    const ov = overlayRef.current;
    if (ov) {
      ov.style.transition = "opacity 250ms ease-out";
      ov.style.opacity = "0";
      window.setTimeout(() => { ov.style.display = "none"; onComplete?.(); }, 250);
    } else onComplete?.();
  };

  useEffect(() => {
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (rm || window.innerWidth < 640) {
      if (overlayRef.current) overlayRef.current.style.display = "none";
      doneRef.current = true;
      onComplete?.();
      return;
    }

    // cursor speed → playback rate
    let speed = 0;
    let lx = -1, ly = -1, lt = 0;
    const onMove = (e: MouseEvent) => {
      const now = performance.now();
      if (lx >= 0) {
        const dt = Math.max(8, now - lt);
        const v = Math.hypot(e.clientX - lx, e.clientY - ly) / dt * 1000; // px/s
        speed = Math.max(speed, v);
      }
      lx = e.clientX; ly = e.clientY; lt = now;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    const onKey = (e: KeyboardEvent) => { if (e.key === "Enter" || e.key === "Escape") finish(); };
    window.addEventListener("keydown", onKey);

    let p = 0;
    let last = performance.now();
    let brand: DOMRect | null = null;
    let brandSize = 17;

    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      speed *= Math.pow(0.04, dt); // decay quickly when cursor stops
      const rate = 1 + Math.min(2.5, speed / 1400);
      p += dt * rate;

      const vw = window.innerWidth, vh = window.innerHeight;
      const H = Math.min(vh * 0.46, 380);
      const active = p >= STAGE_START && p < COLLAPSE
        ? Math.floor((p - STAGE_START) / STAGE_LEN) : -1;
      const k = seg(p, COLLAPSE, 1.1); // collapse progress

      // Ribbons
      ribbonRefs.current.forEach((el, i) => {
        if (!el) return;
        const rise = seg(p, 0.2 + i * 0.14, 0.9);
        const isActive = i === active;
        const h = (H * rise * (isActive ? 1.12 : 1)) * (1 - k) + 6 * k;
        const w = isActive ? 26 : 16;
        const x = (i - 2) * 34 * (1 - k);
        el.style.height = `${h}px`;
        el.style.width = `${w * (1 - k) + 6 * k}px`;
        el.style.transform = `translate(calc(-50% + ${x}px), -50%)`;
        el.style.background = isActive || (active === -1 && p < STAGE_START && i === 4)
          ? "var(--coral, #FF6B4A)"
          : i % 2 ? "var(--indigo, #3D3FE0)" : "var(--ink, #151833)";
        el.style.opacity = String((active >= 0 && !isActive ? 0.22 : 1) * (1 - k));
      });

      // Stage title
      if (active >= 0 && stageRef.current) {
        const local = (p - STAGE_START - active * STAGE_LEN) / STAGE_LEN;
        const o = clamp(local / 0.18) * clamp((1 - local) / 0.18);
        stageRef.current.style.opacity = String(o);
        stageRef.current.style.transform = `translate(-50%, 0) translateY(${(1 - o) * 10}px)`;
        const s = STAGES[active];
        if (nameRef.current && nameRef.current.textContent !== s.name) {
          nameRef.current.textContent = s.name;
          if (tagRef.current) tagRef.current.textContent = s.tag;
          if (numRef.current) numRef.current.textContent = `0${active + 1} / 05`;
        }
      } else if (stageRef.current) stageRef.current.style.opacity = "0";
      if (stageRef.current) stageRef.current.style.top = `${vh / 2 + H / 2 + 36}px`;

      // Wordmark
      const m = markRef.current;
      if (m) {
        if (p >= FLY && !brand) {
          const b = document.querySelector<HTMLElement>(".brand");
          if (b) { brand = b.getBoundingClientRect(); brandSize = parseFloat(getComputedStyle(b).fontSize) || 17; }
        }
        const f = seg(p, FLY, 1.1);
        const baseScale = 2.6 - 1.6 * k; // 2.6 → 1
        const tx = brand ? (brand.left + brand.width / 2 - vw / 2) * f : 0;
        const ty = brand ? (brand.top + brand.height / 2 - vh / 2) * f : 0;
        const scale = baseScale * (1 - f) + (brandSize / 44) * f;
        m.style.opacity = String(k);
        m.style.filter = `blur(${(1 - k) * 10}px)`;
        m.style.transform = `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(${scale})`;
        m.style.letterSpacing = `${(1 - k) * 0.3}em`;
        if (bgRef.current) bgRef.current.style.opacity = String(1 - seg(p, FLY + 0.4, 0.8));
      }

      if (p >= T_TOTAL - 0.3) { finish(); return; }
      rafRef.current = requestAnimationFrame(frame);
    };
    rafRef.current = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("keydown", onKey);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      data-intro-overlay="true"
      ref={overlayRef}
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, zIndex: 9999, overflow: "hidden", fontFamily: "Poppins, system-ui, sans-serif" }}
    >
      <div ref={bgRef} style={{ position: "absolute", inset: 0, background: "var(--paper, #F5F4F0)" }} />

      {STAGES.map((s, i) => (
        <div
          key={s.name}
          ref={(el) => { ribbonRefs.current[i] = el; }}
          style={{ position: "absolute", left: "50%", top: "50%", width: 16, height: 0, borderRadius: 3, willChange: "height, transform, opacity" }}
        />
      ))}

      <div
        ref={stageRef}
        style={{ position: "absolute", left: "50%", opacity: 0, textAlign: "center", pointerEvents: "none" }}
      >
        <div ref={numRef} style={{ fontSize: 12, fontWeight: 600, letterSpacing: "0.12em", color: "var(--slate, #8A8D9F)", fontVariantNumeric: "tabular-nums" }} />
        <div ref={nameRef} style={{ fontSize: "clamp(2.2rem, 5vw, 3.4rem)", fontWeight: 700, color: "var(--ink, #151833)", lineHeight: 1.1, marginTop: 6 }} />
        <div ref={tagRef} style={{ fontSize: 15, fontWeight: 500, color: "var(--coral, #FF6B4A)", marginTop: 6 }} />
      </div>

      <div
        ref={markRef}
        style={{ position: "absolute", left: "50%", top: "50%", fontSize: 44, fontWeight: 700, color: "var(--ink, #151833)", whiteSpace: "nowrap", opacity: 0, transformOrigin: "center", willChange: "transform, opacity, filter" }}
      >
        Ritik Arora<span style={{ color: "var(--coral, #FF6B4A)" }}>.</span>
      </div>

      <button
        onClick={finish}
        style={{ position: "absolute", right: 16, bottom: 16, fontSize: 12, color: "var(--slate, #8A8D9F)", background: "none", border: "none", cursor: "pointer", padding: "8px 16px", letterSpacing: "0.05em", fontFamily: "inherit" }}
      >
        Skip ↵
      </button>
    </div>
  );
};

export default IntroAnimation;
