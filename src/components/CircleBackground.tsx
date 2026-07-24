import { useEffect, useRef, useState } from "react";
import lottie, { type AnimationItem } from "lottie-web";
import circleJson from "@/assets/circle.json.asset.json";
import circleWebm from "@/assets/circle.webm.asset.json";

/**
 * Cinematic circle background using the uploaded Lottie animation.
 * - Recolor via CSS variables --bg-hue, --bg-sat, --bg-bright on :root
 * - Cursor: real 3D tilt + parallax on the tint layer
 * - Scroll velocity: brightness pump + slight scale
 * - Click: expanding shockwave rings on canvas overlay
 * - WebM fallback if Lottie fails
 */
const CircleBackground = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const lottieHostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [useVideoFallback, setUseVideoFallback] = useState(false);

  // Init Lottie
  useEffect(() => {
    if (useVideoFallback) return;
    const host = lottieHostRef.current;
    if (!host) return;
    let anim: AnimationItem | null = null;
    let cancelled = false;
    (async () => {
      try {
        const res = await fetch(circleJson.url);
        if (!res.ok) throw new Error("lottie fetch failed");
        const data = await res.json();
        if (cancelled) return;
        anim = lottie.loadAnimation({
          container: host,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: data,
          rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
            progressiveLoad: true,
          },
        });
        const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (rm) anim.pause();
      } catch {
        if (!cancelled) setUseVideoFallback(true);
      }
    })();
    return () => {
      cancelled = true;
      anim?.destroy();
    };
  }, [useVideoFallback]);

  // Interactions: cursor tilt, scroll pump, click shockwaves
  useEffect(() => {
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    if (!stage || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const DPR = Math.min(window.devicePixelRatio || 1, 2);
    let w = window.innerWidth, h = window.innerHeight;
    const resize = () => {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const pointer = { x: 0.5, y: 0.5 };
    const eased = { x: 0.5, y: 0.5, boost: 0 };
    let lastY = window.scrollY;
    const pulses: { x: number; y: number; t0: number }[] = [];

    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX / window.innerWidth;
      pointer.y = e.clientY / window.innerHeight;
    };
    const onScroll = () => {
      const y = window.scrollY;
      eased.boost = Math.min(eased.boost + Math.abs(y - lastY) * 0.02, 1.2);
      lastY = y;
    };
    const onDown = (e: PointerEvent) => {
      pulses.push({ x: e.clientX, y: e.clientY, t0: performance.now() });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });

    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const tick = (t: number) => {
      eased.x += (pointer.x - eased.x) * 0.08;
      eased.y += (pointer.y - eased.y) * 0.08;
      eased.boost *= 0.94;

      // 3D tilt on the stage
      const rx = (0.5 - eased.y) * (rm ? 0 : 7);   // deg
      const ry = (eased.x - 0.5) * (rm ? 0 : 9);   // deg
      const tx = (eased.x - 0.5) * 40;
      const ty = (eased.y - 0.5) * 28;
      const scale = 1 + eased.boost * 0.03;
      stage.style.transform = `perspective(1400px) rotateX(${rx}deg) rotateY(${ry}deg) translate3d(${tx}px, ${ty}px, 0) scale(${scale})`;
      stage.style.filter = `hue-rotate(var(--bg-hue, 0deg)) saturate(calc(var(--bg-sat, 1) * ${1 + eased.boost * 0.15})) brightness(calc(var(--bg-bright, 1) * ${1 + eased.boost * 0.12}))`;

      // Shockwaves
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i];
        const age = t - p.t0;
        const life = 1000;
        if (age > life) { pulses.splice(i, 1); continue; }
        const k = age / life;
        const r = 30 + k * 320;
        const alpha = (1 - k) * 0.75;
        ctx.strokeStyle = `hsla(190, 100%, 72%, ${alpha})`;
        ctx.shadowColor = `hsla(190, 100%, 72%, ${alpha})`;
        ctx.shadowBlur = 22;
        ctx.lineWidth = 2 + (1 - k) * 2.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.stroke();
        // second ring, gold
        ctx.strokeStyle = `hsla(42, 100%, 68%, ${alpha * 0.6})`;
        ctx.shadowColor = `hsla(42, 100%, 68%, ${alpha * 0.6})`;
        ctx.lineWidth = 1.2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 0.72, 0, Math.PI * 2);
        ctx.stroke();
      }

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointerdown", onDown);
    };
  }, []);

  // Section-aware hue shift via IntersectionObserver
  useEffect(() => {
    const hueByStage: Record<string, string> = {
      acquire: "0deg",
      activate: "40deg",
      engage: "90deg",
      retain: "180deg",
      monetize: "260deg",
    };
    const targets = Object.keys(hueByStage)
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!targets.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const top = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!top) return;
        const hue = hueByStage[top.target.id];
        if (hue) document.documentElement.style.setProperty("--bg-hue", hue);
      },
      { threshold: [0.35, 0.6] }
    );
    targets.forEach((t) => obs.observe(t));
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={rootRef} aria-hidden="true" className="circle-bg">
      <div ref={stageRef} className="circle-bg-stage">
        {useVideoFallback ? (
          <video
            className="circle-bg-media"
            src={circleWebm.url}
            autoPlay
            muted
            loop
            playsInline
          />
        ) : (
          <div ref={lottieHostRef} className="circle-bg-media" />
        )}
      </div>
      <canvas ref={canvasRef} className="circle-bg-canvas" />
    </div>
  );
};

export default CircleBackground;
