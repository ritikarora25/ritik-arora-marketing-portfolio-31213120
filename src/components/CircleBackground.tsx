import { useEffect, useRef } from "react";

/**
 * Cinematic circle background using the uploaded WebM animation.
 * - Recolor via CSS variables --bg-hue, --bg-sat, --bg-bright on :root
 * - Cursor: real 3D tilt + parallax
 * - Scroll velocity: brightness pump + temporary spin acceleration
 * - Click: expanding shockwave rings on canvas overlay
 */
const CircleBackground = () => {
  const stageRef = useRef<HTMLDivElement>(null);
  const motionRef = useRef<HTMLDivElement>(null);
  const mediaRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Interactions: cursor tilt, scroll pump, click shockwaves
  useEffect(() => {
    const stage = stageRef.current;
    const motion = motionRef.current;
    const media = mediaRef.current;
    const canvas = canvasRef.current;
    if (!stage || !motion || !media || !canvas) return;
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
    const ORBIT_SPEED = rm ? 0 : 24; // deg/sec — visible circular travel
    const SPIN_SPEED = rm ? 0 : 42; // deg/sec — actual media rotation
    const SCROLL_EXTRA = rm ? 0 : 170; // deg/sec added at peak boost
    let orbit = 0;
    let spin = 0;
    let lastT = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const dt = Math.min((t - lastT) / 1000, 0.05);
      lastT = t;

      eased.x += (pointer.x - eased.x) * 0.08;
      eased.y += (pointer.y - eased.y) * 0.08;
      eased.boost *= 0.94;

      // Continuous circular travel + actual media spin.
      const cursorBias = rm ? 0 : (eased.x - 0.5) * 12;
      orbit = (orbit + (ORBIT_SPEED + eased.boost * SCROLL_EXTRA * 0.45) * dt) % 360;
      spin = (spin + (SPIN_SPEED + cursorBias + eased.boost * SCROLL_EXTRA) * dt) % 360;

      // 3D tilt on the stage
      const rx = (0.5 - eased.y) * (rm ? 0 : 7);   // deg
      const ry = (eased.x - 0.5) * (rm ? 0 : 9);   // deg
      const tx = (eased.x - 0.5) * 34;
      const ty = (eased.y - 0.5) * 24;
      stage.style.transform = `perspective(1400px) translate3d(${tx}px, ${ty}px, 0) rotateX(${rx}deg) rotateY(${ry}deg)`;
      stage.style.filter = `hue-rotate(var(--bg-hue, 0deg)) saturate(calc(var(--bg-sat, 1) * ${1 + eased.boost * 0.15})) brightness(calc(var(--bg-bright, 1) * ${1 + eased.boost * 0.12}))`;

      // Move the actual ring wrapper, not the full-screen background.
      // The Lottie art is close to radially symmetric, so a visible orbit is needed
      // for the circular motion to read clearly.
      const orbRad = (orbit * Math.PI) / 180;
      const ox = rm ? 0 : Math.cos(orbRad) * 150;
      const oy = rm ? 0 : Math.sin(orbRad) * 110;
      const breathe = rm ? 0 : Math.sin(orbRad * 2) * 0.04;
      const scale = 1 + eased.boost * 0.03 + breathe;
      motion.style.transform = `translate3d(calc(-50% + ${ox}px), calc(-50% + ${oy}px), 0) scale(${scale})`;
      media.style.transform = `rotate(${spin}deg)`;

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

  return (
    <div aria-hidden="true" className="circle-bg">
      <div ref={stageRef} className="circle-bg-stage">
        <div ref={motionRef} className="circle-bg-motion">
          <video
            ref={mediaRef}
            className="circle-bg-media"
            src="/media/circle.webm"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        </div>
      </div>
      <canvas ref={canvasRef} className="circle-bg-canvas" />
    </div>
  );
};

export default CircleBackground;
