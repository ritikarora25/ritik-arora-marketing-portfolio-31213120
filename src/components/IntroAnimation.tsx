import { useEffect, useRef, useState } from "react";

/**
 * Cinematic intro overlay — plays over the real homepage.
 * The portfolio renders underneath at all times (LCP-safe, indexable).
 */

type PoseName = "idle" | "walk" | "lean" | "curious" | "crouch" | "leave";

const STAGES = ["Acquire", "Activate", "Engage", "Retain", "Monetize"] as const;

// ---- Poses as plain SVG strings (color injected via {COLOR} token) ---------
// Mutated directly via innerHTML — bypasses React re-renders so the rAF loop
// keeps valid references to figure DOM nodes.
const POSE_SVG: Record<PoseName, string> = {
  idle: `<svg viewBox="0 0 40 56" width="100%" height="100%"><circle cx="20" cy="8" r="5" fill="{COLOR}"/><path d="M14 14 Q20 12 26 14 L25 32 Q20 34 15 32 Z" fill="{COLOR}"/><path d="M15 32 L13 50 M25 32 L27 50" stroke="{COLOR}" stroke-width="3.5" stroke-linecap="round"/><path d="M14 16 L11 28 M26 16 L29 28" stroke="{COLOR}" stroke-width="3" stroke-linecap="round"/></svg>`,
  walk: `<svg viewBox="0 0 40 56" width="100%" height="100%"><circle cx="20" cy="8" r="5" fill="{COLOR}"/><path d="M14 14 Q20 12 26 14 L25 32 Q20 34 15 32 Z" fill="{COLOR}"/><path d="M15 32 L10 50 M25 32 L30 50" stroke="{COLOR}" stroke-width="3.5" stroke-linecap="round"/><path d="M14 16 L18 28 M26 16 L23 30" stroke="{COLOR}" stroke-width="3" stroke-linecap="round"/></svg>`,
  lean: `<svg viewBox="0 0 40 56" width="100%" height="100%"><circle cx="23" cy="8" r="5" fill="{COLOR}"/><path d="M16 14 Q22 12 28 14 L26 32 Q20 34 15 32 Z" fill="{COLOR}"/><path d="M15 32 L13 50 M26 32 L28 50" stroke="{COLOR}" stroke-width="3.5" stroke-linecap="round"/><path d="M16 16 L10 24 M28 16 L34 22" stroke="{COLOR}" stroke-width="3" stroke-linecap="round"/></svg>`,
  curious: `<svg viewBox="0 0 40 56" width="100%" height="100%"><circle cx="20" cy="8" r="5" fill="{COLOR}"/><path d="M14 14 Q20 12 26 14 L25 32 Q20 34 15 32 Z" fill="{COLOR}"/><path d="M15 32 L13 50 M25 32 L27 50" stroke="{COLOR}" stroke-width="3.5" stroke-linecap="round"/><path d="M14 16 L6 20 M26 16 L34 20" stroke="{COLOR}" stroke-width="3" stroke-linecap="round"/></svg>`,
  crouch: `<svg viewBox="0 0 40 56" width="100%" height="100%"><circle cx="20" cy="18" r="5" fill="{COLOR}"/><path d="M14 24 Q20 22 26 24 L25 38 Q20 40 15 38 Z" fill="{COLOR}"/><path d="M15 38 L11 50 L18 50 M25 38 L29 50 L22 50" stroke="{COLOR}" stroke-width="3.5" stroke-linecap="round" fill="none"/><path d="M14 26 L10 36 M26 26 L30 36" stroke="{COLOR}" stroke-width="3" stroke-linecap="round"/></svg>`,
  leave: `<svg viewBox="0 0 40 56" width="100%" height="100%"><circle cx="17" cy="8" r="5" fill="{COLOR}"/><path d="M12 14 Q18 12 24 14 L22 32 Q18 34 14 32 Z" fill="{COLOR}"/><path d="M14 32 L9 50 M22 32 L26 50" stroke="{COLOR}" stroke-width="3.5" stroke-linecap="round"/><path d="M12 16 L6 24 M24 16 L28 26" stroke="{COLOR}" stroke-width="3" stroke-linecap="round"/></svg>`,
};

const poseHtml = (pose: PoseName, color: string) =>
  POSE_SVG[pose].replace(/\{COLOR\}/g, color);

// ---- Figure state -----------------------------------------------------------
type Figure = {
  id: number;
  isRitik: boolean;
  color: string;
  size: number;
  pose: PoseName;
  // current/base position (px from top-left of viewport)
  x: number;
  y: number;
  bx: number; // base x for sway
  by: number;
  // target position for stage transitions
  tx: number;
  ty: number;
  // motion params
  swaySeed: number;
  swaySpeed: number;
  swayAmp: number;
  strideSeed: number;
  faceLeft: boolean;
  // lifecycle
  opacity: number;
  targetOpacity: number;
  dropOff: boolean; // fades/leaves during Activate
  entrant: boolean; // enters during Retain
  el: HTMLDivElement | null;
};

const rand = (a: number, b: number) => a + Math.random() * (b - a);

// Parse any CSS color string into an approximate relative luminance (0..1).
// Uses a temp element + getComputedStyle so `var(--paper)`, hex, hsl, etc. all work.
const luminanceOf = (cssColor: string): number => {
  const probe = document.createElement("div");
  probe.style.color = cssColor;
  probe.style.display = "none";
  document.body.appendChild(probe);
  const resolved = getComputedStyle(probe).color; // "rgb(r, g, b)" or "rgba(r,g,b,a)"
  document.body.removeChild(probe);
  const m = resolved.match(/rgba?\(([^)]+)\)/);
  if (!m) return 1;
  const [r, g, b] = m[1].split(",").slice(0, 3).map((s) => parseFloat(s.trim()) / 255);
  // Rec. 709 luma — good enough for a light/dark bucket check
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
};

interface Props {
  onComplete?: () => void;
}

const IntroAnimation = ({ onComplete }: Props) => {
  const [render, setRender] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const figuresRef = useRef<Figure[]>([]);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const revealRef = useRef<HTMLDivElement>(null);
  const timeoutsRef = useRef<number[]>([]);
  const rafRef = useRef<number>(0);
  const startedRef = useRef(false);
  const stageIndexRef = useRef<number>(-1);
  const doneRef = useRef(false);
  const colorsRef = useRef<{ crowd: string[]; ritik: string }>({
    crowd: ["#151833", "#8A8D9F", "#3D3FE0"],
    ritik: "#FF6B4A",
  });

  // Decide whether to play
  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mobile = window.matchMedia("(max-width: 640px)").matches;
    if (reduced || mobile) {
      onComplete?.();
      return;
    }
    setRender(true);
  }, [onComplete]);

  // Build figures once when we decide to render
  if (render && figuresRef.current.length === 0) {
    // Resolve theme-aware colors from CSS custom properties
    const rootStyle = getComputedStyle(document.documentElement);
    const readVar = (name: string, fallback: string) => {
      const v = rootStyle.getPropertyValue(name).trim();
      return v || fallback;
    };
    const paperVal = readVar("--paper", "#F5F4F0");
    const inkVal = readVar("--ink", "#151833");
    const slateVal = readVar("--slate", "#8A8D9F");
    const indigoVal = readVar("--indigo", "#3D3FE0");
    const coralVal = readVar("--coral", "#FF6B4A");
    const bgLum = luminanceOf(paperVal);
    const crowdColors =
      bgLum > 0.5
        ? [inkVal, inkVal, inkVal, slateVal, slateVal, indigoVal]
        : ["rgba(245,244,240,0.9)", "rgba(245,244,240,0.75)", slateVal, slateVal, indigoVal, indigoVal];
    colorsRef.current = { crowd: crowdColors, ritik: coralVal };

    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const cx = vw / 2;
    const cy = Math.max(180, vh / 2 - 36);
    const figs: Figure[] = [];
    const poseChoices: PoseName[] = ["idle", "idle", "walk", "curious", "lean", "crouch"];
    for (let i = 0; i < 25; i++) {
      // loose cluster within ~240x140 ellipse
      const t = Math.random() * Math.PI * 2;
      const r = Math.sqrt(Math.random());
      const targetX = cx + Math.cos(t) * r * Math.min(220, vw * 0.24) + rand(-30, 30);
      const targetY = cy + Math.sin(t) * r * Math.min(110, vh * 0.18) + rand(-20, 20);
      const lane = i % 4;
      const startX = lane === 0 ? -80 : lane === 1 ? vw + 80 : rand(vw * 0.18, vw * 0.82);
      const startY = lane === 2 ? vh + 80 : lane === 3 ? -80 : rand(vh * 0.28, vh * 0.72);
      figs.push({
        id: i,
        isRitik: false,
        color: crowdColors[Math.floor(Math.random() * crowdColors.length)],
        size: rand(54, 70),
        pose: poseChoices[Math.floor(Math.random() * poseChoices.length)],
        x: startX, y: startY, bx: startX, by: startY, tx: targetX, ty: targetY,
        swaySeed: Math.random() * Math.PI * 2,
        swaySpeed: rand(1.2, 2.4),
        swayAmp: rand(4, 9),
        strideSeed: Math.random() * Math.PI * 2,
        faceLeft: startX > targetX,
        opacity: 1,
        targetOpacity: 1,
        dropOff: false,
        entrant: false,
        el: null,
      });
    }
    // Ritik at center
    figs.push({
      id: 25,
      isRitik: true,
      color: coralVal,
      size: 82,
      pose: "idle",
      x: cx, y: cy, bx: cx, by: cy, tx: cx, ty: cy,
      swaySeed: 0, swaySpeed: 1.6, swayAmp: 5, strideSeed: 0, faceLeft: false,
      opacity: 1, targetOpacity: 1, dropOff: false, entrant: false, el: null,
    });
    // mark 6 as drop-offs, 4 as entrants (initially hidden)
    const shuffled = [...figs.filter((f) => !f.isRitik)].sort(() => Math.random() - 0.5);
    shuffled.slice(0, 6).forEach((f) => (f.dropOff = true));
    shuffled.slice(6, 10).forEach((f) => {
      f.entrant = true;
      f.opacity = 0;
      f.targetOpacity = 0;
      // start off-screen
      f.x = f.bx = rand(0, 1) < 0.5 ? -60 : vw + 60;
      f.y = f.by = rand(vh * 0.3, vh * 0.7);
    });
    figuresRef.current = figs;
  }

  // Main timeline
  useEffect(() => {
    if (!render || startedRef.current) return;
    startedRef.current = true;

    const setT = (fn: () => void, ms: number) => {
      const id = window.setTimeout(fn, ms);
      timeoutsRef.current.push(id);
    };

    const measure = () => {
      const brand = document.querySelector<HTMLElement>(".brand");
      const links = Array.from(document.querySelectorAll<HTMLElement>("#funnelNav a"));
      return {
        brand: brand?.getBoundingClientRect() ?? null,
        links: links.map((l) => l.getBoundingClientRect()),
      };
    };

    // rAF idle loop
    const startFrame = performance.now();
    const loop = (now: number) => {
      const t = (now - startFrame) / 1000;
      for (const f of figuresRef.current) {
        // ease toward target
      const easeK = 0.085;
      const dx = f.tx - f.bx;
      const dy = f.ty - f.by;
      const moving = Math.hypot(dx, dy) > 8;
        f.bx += (f.tx - f.bx) * easeK;
        f.by += (f.ty - f.by) * easeK;
      if (moving && Math.abs(dx) > 2) f.faceLeft = dx < 0;
        // sway
        const sway = Math.sin(t * f.swaySpeed + f.swaySeed) * f.swayAmp;
        const stride = Math.sin(t * 9 + f.strideSeed);
        const bob = moving
          ? Math.abs(stride) * Math.min(8, f.swayAmp)
          : Math.cos(t * f.swaySpeed * 0.7 + f.swaySeed) * (f.swayAmp * 0.55);
        const lean = moving ? Math.max(-12, Math.min(12, dx * 0.035)) + stride * 5 : sway * 0.75;
        f.x = f.bx + sway;
        f.y = f.by + bob;
        // opacity ease
        f.opacity += (f.targetOpacity - f.opacity) * 0.08;
        if (f.el) {
          const scaleX = f.faceLeft ? -1 : 1;
          f.el.style.transform = `translate3d(${f.x - f.size / 2}px, ${f.y - f.size}px, 0) scaleX(${scaleX}) rotate(${lean}deg)`;
          f.el.style.opacity = String(f.opacity);
        }
      }
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    // -- Sequence --
    // Motion begins immediately: figures enter from the viewport edges.

    // 2.0–2.8s: fade in stage labels (staggered)
    STAGES.forEach((_, i) => {
      setT(() => {
        const el = labelRefs.current[i];
        if (el) {
          el.style.opacity = "1";
          el.style.transform = "translate(-50%, 0)";
        }
      }, 2000 + i * 200);
    });

    // 2.5–7.5s: cycle active stage every 1s (starts after figures have gathered)
    STAGES.forEach((_, i) => {
      setT(() => {
        stageIndexRef.current = i;
        // highlight active
        labelRefs.current.forEach((el, j) => {
          if (!el) return;
          el.style.color = j === i ? "var(--coral, #FF6B4A)" : "var(--ink, #151833)";
          el.style.transform = `translate(-50%, 0) scale(${j === i ? 1.08 : 1})`;
        });
        applyStageChoreography(i);
      }, 2500 + i * 1000);
    });

    // 6.75–8.5s: non-Ritik figures fade up; stage labels fly to funnel nav positions
    setT(() => {
      const m = measure();
      for (const f of figuresRef.current) {
        if (f.isRitik) continue;
        f.ty = f.by - 80;
        f.targetOpacity = 0;
      }
      // move labels to nav positions
      labelRefs.current.forEach((el, i) => {
        if (!el) return;
        const target = m.links[i];
        if (!target) return;
        el.style.transition = "all 1.6s cubic-bezier(.65,0,.35,1)";
        el.style.top = `${target.top + target.height / 2}px`;
        el.style.left = `${target.left + target.width / 2}px`;
        el.style.fontSize = `12px`;
        el.style.color = "var(--ink, #151833)";
        el.style.transform = "translate(-50%, -50%) scale(1)";
      });
    }, 6750);

    // 8.4–9.6s: reveal Ritik + text
    setT(() => {
      // center Ritik precisely
      const ritik = figuresRef.current.find((f) => f.isRitik);
      if (ritik) {
        ritik.tx = window.innerWidth / 2;
        ritik.ty = window.innerHeight / 2 + 20;
      }
      if (revealRef.current) {
        revealRef.current.style.opacity = "1";
        revealRef.current.style.transform = "translate(-50%, -50%) translateY(0)";
      }
    }, 8400);

    // 9.7–10.5s: assembly — reveal text -> .brand, Ritik walks up + fades
    setT(() => {
      const m = measure();
      if (m.brand && revealRef.current) {
        const el = revealRef.current;
        const targetX = m.brand.left + m.brand.width / 2;
        const targetY = m.brand.top + m.brand.height / 2;
        el.style.transition = "all 1s cubic-bezier(.65,0,.35,1)";
        el.style.top = `${targetY}px`;
        el.style.left = `${targetX}px`;
        el.style.fontSize = "16px";
        el.style.fontWeight = "600";
        el.style.transform = "translate(-50%, -50%)";
      }
      const ritik = figuresRef.current.find((f) => f.isRitik);
      if (ritik) {
        ritik.ty = ritik.by - 200;
        ritik.targetOpacity = 0;
      }
    }, 9700);

    // Fade overlay labels to 0 right before overlay dies (real funnel nav underneath takes over visually)
    setT(() => {
      labelRefs.current.forEach((el) => {
        if (!el) return;
        el.style.transition = "opacity 200ms ease-out";
        el.style.opacity = "0";
      });
      if (revealRef.current) {
        revealRef.current.style.transition = (revealRef.current.style.transition || "") + ", opacity 200ms ease-out";
        revealRef.current.style.opacity = "0";
      }
    }, 10400);

    // Overlay fade out then finish
    setT(() => {
      if (overlayRef.current) {
        overlayRef.current.style.transition = "opacity 600ms ease-out";
        overlayRef.current.style.opacity = "0";
      }
    }, 10600);

    setT(() => finish(false), 11200);

    return () => {
      timeoutsRef.current.forEach((id) => clearTimeout(id));
      timeoutsRef.current = [];
      cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [render]);

  const applyStageChoreography = (stage: number) => {
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const cx = vw / 2;
    const cy = Math.max(180, vh / 2 - 36);
    const figs = figuresRef.current;
    switch (stage) {
      case 0: {
        // Acquire — drift toward focal (cx, cy - 20)
        figs.forEach((f, i) => {
          if (f.isRitik) return;
          if (f.entrant) return;
          const t = i * 0.4;
          const r = 90 + (i % 5) * 12;
          f.tx = cx + Math.cos(t) * r;
          f.ty = cy + Math.sin(t) * r * 0.55;
          f.pose = i % 3 === 0 ? "curious" : "walk";
          f.faceLeft = f.tx < cx;
        });
        break;
      }
      case 1: {
        // Activate — some lean, some drop off (walk away & fade)
        figs.forEach((f, i) => {
          if (f.isRitik) return;
          if (f.entrant) return;
          if (f.dropOff) {
            f.pose = "leave";
            f.tx = f.bx < cx ? -80 : vw + 80;
            f.ty = f.by + rand(-10, 10);
            f.targetOpacity = 0;
            f.faceLeft = f.tx < cx;
          } else {
            f.pose = i % 2 === 0 ? "lean" : "idle";
            // gather slightly closer
            f.tx = cx + (f.bx - cx) * 0.7;
            f.ty = cy + (f.by - cy) * 0.7;
          }
        });
        break;
      }
      case 2: {
        // Engage — pair up
        const active = figs.filter((f) => !f.isRitik && !f.dropOff && !f.entrant);
        for (let i = 0; i < active.length; i += 2) {
          const a = active[i];
          const b = active[i + 1];
          const ang = (i / active.length) * Math.PI * 2;
          const rx = 110 + (i % 3) * 20;
          const ry = 60 + (i % 2) * 15;
          const px = cx + Math.cos(ang) * rx;
          const py = cy + Math.sin(ang) * ry;
          if (a) {
            a.tx = px - 18;
            a.ty = py;
            a.pose = "lean";
            a.faceLeft = false;
          }
          if (b) {
            b.tx = px + 18;
            b.ty = py;
            b.pose = "lean";
            b.faceLeft = true;
          }
        }
        break;
      }
      case 3: {
        // Retain — entrants walk in
        const entrants = figs.filter((f) => f.entrant);
        entrants.forEach((f, i) => {
          const ang = Math.PI + (i / entrants.length) * Math.PI;
          f.tx = cx + Math.cos(ang) * 140;
          f.ty = cy + Math.sin(ang) * 70;
          f.pose = "walk";
          f.targetOpacity = 1;
          f.faceLeft = f.bx > cx;
        });
        break;
      }
      case 4: {
        // Monetize — all remaining face same direction (right), calm alignment
        figs.forEach((f) => {
          if (f.dropOff) return;
          f.pose = "idle";
          f.faceLeft = false;
        });
        break;
      }
    }
    // Directly swap SVG on each figure's DOM node — bypasses React re-renders
    // so the rAF loop keeps valid references and motion never freezes.
    for (const f of figuresRef.current) {
      if (f.el) f.el.innerHTML = poseHtml(f.pose, f.color);
    }
  };

  const finish = (fromSkip: boolean) => {
    if (doneRef.current) return;
    doneRef.current = true;
    timeoutsRef.current.forEach((id) => clearTimeout(id));
    timeoutsRef.current = [];
    cancelAnimationFrame(rafRef.current);
    
    const ov = overlayRef.current;
    if (ov) {
      ov.style.transition = "opacity 300ms ease-out";
      ov.style.opacity = "0";
      setTimeout(() => {
        if (ov) ov.style.display = "none";
        onComplete?.();
      }, fromSkip ? 300 : 100);
    } else {
      onComplete?.();
    }
  };

  if (!render) return null;

  return (
    <div
      data-intro-overlay="true"
      ref={overlayRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        pointerEvents: "auto",
        background: "var(--paper, #F5F4F0)",
        overflow: "hidden",
        fontFamily: "Poppins, system-ui, sans-serif",
      }}
    >
      {/* Figures */}
      {figuresRef.current.map((f, i) => (
        <div
          data-intro-figure="true"
          key={f.id}
          ref={(el) => { figuresRef.current[i].el = el; }}
          style={{
            position: "absolute",
            width: `${f.size * 0.72}px`,
            height: `${f.size}px`,
            top: 0,
            left: 0,
            transform: `translate3d(${f.x - f.size / 2}px, ${f.y - f.size}px, 0)`,
            opacity: f.opacity,
            willChange: "transform, opacity",
          }}
        >
          <Pose name={poses[i] ?? f.pose} color={f.color} />
        </div>
      ))}

      {/* Stage labels */}
      {STAGES.map((s, i) => (
        <div
          data-intro-label="true"
          key={s}
          ref={(el) => { labelRefs.current[i] = el; }}
          style={{
            position: "fixed",
            top: `${window.innerHeight / 2 + 120}px`,
            left: `${window.innerWidth / 2 + (i - 2) * 110}px`,
            transform: "translate(-50%, 8px)",
            opacity: 0,
            fontSize: "13px",
            fontWeight: 600,
            letterSpacing: "0.06em",
            textTransform: "uppercase",
            color: "var(--ink, #151833)",
            transition: "opacity 400ms ease-out, transform 400ms ease-out, color 300ms ease-out",
            whiteSpace: "nowrap",
            pointerEvents: "none",
          }}
        >
          {s}
        </div>
      ))}

      {/* Reveal text */}
      <div
        ref={revealRef}
        style={{
          position: "fixed",
          top: `${(typeof window !== "undefined" ? window.innerHeight : 800) / 2 - 140}px`,
          left: "50%",
          transform: "translate(-50%, -50%) translateY(16px)",
          opacity: 0,
          fontSize: "clamp(2rem, 5vw, 3.2rem)",
          fontWeight: 700,
          color: "var(--ink, #151833)",
          textAlign: "center",
          whiteSpace: "nowrap",
          transition: "opacity 600ms ease-out, transform 700ms cubic-bezier(.65,0,.35,1)",
          pointerEvents: "none",
        }}
      >
        Hi, I'm Ritik Arora.
      </div>

      {/* Skip */}
      <button
        onClick={() => finish(true)}
        style={{
          position: "fixed",
          right: 16,
          bottom: 16,
          fontSize: 12,
          color: "var(--slate, #8A8D9F)",
          fontFamily: "Poppins, system-ui, sans-serif",
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: "8px 16px",
          letterSpacing: "0.05em",
        }}
      >
        Skip
      </button>
    </div>
  );
};

export default IntroAnimation;
