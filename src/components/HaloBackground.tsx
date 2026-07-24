import { useEffect, useRef } from "react";
import circleVideo from "@/assets/circle.mp4.asset.json";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  alpha: number;
  hue: number;
  phase: number;
};

type Pulse = {
  x: number;
  y: number;
  born: number;
};

/** Luminous ring background based on the uploaded reference video. */
const HaloBackground = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const DPR = Math.min(window.devicePixelRatio || 1, 1.75);
    let w = 0, h = 0;
    let lastScrollY = window.scrollY;
    let raf = 0;
    let running = true;

    const pointer = { x: 0.5, y: 0.5, active: false };
    const eased = { x: 0.5, y: 0.5, scroll: 0, velocity: 0 };
    const pulses: Pulse[] = [];

    const resize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    const particleCount = w < 700 ? 72 : 126;
    const particles: Particle[] = Array.from({ length: particleCount }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.22,
      vy: (Math.random() - 0.5) * 0.22,
      size: 0.8 + Math.random() * 2.1,
      alpha: 0.25 + Math.random() * 0.55,
      hue: Math.random() < 0.58 ? 188 : 42,
      phase: Math.random() * Math.PI * 2,
    }));

    const syncCssVars = () => {
      const swayX = (eased.x - 0.5) * 42;
      const swayY = (eased.y - 0.5) * 28 + eased.scroll * -26;
      const energy = Math.min(Math.abs(eased.velocity) / 36, 1);

      root.style.setProperty("--ring-x", `${swayX}px`);
      root.style.setProperty("--ring-y", `${swayY}px`);
      root.style.setProperty("--ring-rotate", `${(eased.x - 0.5) * 5 + eased.scroll * 2.5}deg`);
      root.style.setProperty("--ring-scale", `${1 + energy * 0.045}`);
      root.style.setProperty("--ring-glow", `${0.74 + energy * 0.2}`);
      root.style.setProperty("--ring-brightness", `${1.05 + energy * 0.16}`);
    };

    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX / window.innerWidth;
      pointer.y = e.clientY / window.innerHeight;
      pointer.active = true;
    };

    const onLeave = () => {
      pointer.active = false;
      pointer.x = 0.5;
      pointer.y = 0.5;
    };

    const onScroll = () => {
      const doc = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const y = window.scrollY;
      eased.velocity += (y - lastScrollY) * 0.16;
      eased.scroll = Math.min(Math.max(y / doc, 0), 1);
      lastScrollY = y;
    };

    const onClick = (e: PointerEvent) => {
      pulses.push({ x: e.clientX, y: e.clientY, born: performance.now() });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointerdown", onClick, { passive: true });
    onScroll();

    const onVis = () => {
      running = !document.hidden;
      if (running && !rm) raf = requestAnimationFrame(tick);
    };
    document.addEventListener("visibilitychange", onVis);

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);

      eased.x += (pointer.x - eased.x) * 0.07;
      eased.y += (pointer.y - eased.y) * 0.07;
      eased.velocity *= 0.9;
      syncCssVars();

      const centerX = w * 0.5 + (eased.x - 0.5) * 82;
      const centerY = h * 0.38 + (eased.y - 0.5) * 54 - eased.scroll * 30;
      const energy = Math.min(Math.abs(eased.velocity) / 34, 1);

      const drawEnergyRing = () => {
        const radiusX = Math.min(w, h) * (w < 700 ? 0.38 : 0.34) * (1 + energy * 0.05);
        const radiusY = radiusX * 0.34;
        const rotation = -0.16 + (eased.x - 0.5) * 0.15 + eased.scroll * 0.08;
        const spin = t * 0.00075;

        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.rotate(rotation);
        ctx.globalCompositeOperation = "lighter";

        const ambient = ctx.createRadialGradient(0, 0, radiusX * 0.1, 0, 0, radiusX * 1.7);
        ambient.addColorStop(0, `rgba(6,182,212,${0.12 + energy * 0.05})`);
        ambient.addColorStop(0.45, `rgba(234,179,8,${0.07 + energy * 0.04})`);
        ambient.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = ambient;
        ctx.beginPath();
        ctx.ellipse(0, 0, radiusX * 1.7, radiusY * 3.2, 0, 0, Math.PI * 2);
        ctx.fill();

        const strokes = [
          { hue: 188, offset: 0, width: 3.2, alpha: 0.78, blur: 20 },
          { hue: 42, offset: 1.18, width: 2.8, alpha: 0.66, blur: 18 },
          { hue: 188, offset: 2.42, width: 1.7, alpha: 0.86, blur: 12 },
          { hue: 46, offset: 3.28, width: 1.4, alpha: 0.78, blur: 10 },
          { hue: 190, offset: 4.14, width: 1.1, alpha: 0.64, blur: 8 },
        ];

        for (let pass = 0; pass < 2; pass++) {
          for (const stroke of strokes) {
            const lines = pass === 0 ? 1 : 3;
            for (let i = 0; i < lines; i++) {
              const jitter = pass === 0 ? 0 : (i - 1) * 0.038;
              const start = stroke.offset + spin * (stroke.hue === 188 ? 1 : -0.78) + jitter;
              const end = start + Math.PI * (pass === 0 ? 1.72 : 1.18 + i * 0.16);

              ctx.save();
              ctx.rotate(jitter * 2.5);
              ctx.scale(1, 0.82 + i * 0.028);
              ctx.lineCap = "round";
              ctx.lineJoin = "round";
              ctx.shadowColor = `hsla(${stroke.hue}, 100%, 68%, ${stroke.alpha})`;
              ctx.shadowBlur = stroke.blur + energy * 14;
              ctx.strokeStyle = `hsla(${stroke.hue}, 100%, ${pass === 0 ? 72 : 66}%, ${stroke.alpha * (pass === 0 ? 1 : 0.62)})`;
              ctx.lineWidth = (stroke.width + energy * 1.2) * (pass === 0 ? 1.65 : 1);
              ctx.beginPath();
              ctx.ellipse(0, 0, radiusX * (1 + i * 0.025), radiusY * (1 + i * 0.09), 0, start, end);
              ctx.stroke();
              ctx.restore();
            }
          }
        }

        for (let i = 0; i < 44; i++) {
          const a = i * 0.38 + spin * 2;
          const rx = radiusX * (0.86 + Math.sin(i * 12.989) * 0.13);
          const ry = radiusY * (0.94 + Math.cos(i * 7.23) * 0.26);
          const x = Math.cos(a) * rx;
          const y = Math.sin(a) * ry;
          const hue = i % 3 === 0 ? 42 : 188;
          const alpha = 0.25 + Math.sin(t * 0.002 + i) * 0.18 + energy * 0.25;
          const r = 1 + (i % 5) * 0.36;

          const spark = ctx.createRadialGradient(x, y, 0, x, y, r * 8);
          spark.addColorStop(0, `hsla(${hue}, 100%, 72%, ${alpha})`);
          spark.addColorStop(1, "hsla(0, 0%, 0%, 0)");
          ctx.fillStyle = spark;
          ctx.beginPath();
          ctx.arc(x, y, r * 8, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      };

      ctx.save();
      ctx.globalCompositeOperation = "lighter";

      drawEnergyRing();

      for (const p of particles) {
        const dx = centerX - p.x;
        const dy = centerY - p.y;
        const dist = Math.hypot(dx, dy) || 1;
        const cursorX = eased.x * w;
        const cursorY = eased.y * h;
        const cdx = cursorX - p.x;
        const cdy = cursorY - p.y;
        const cd = Math.hypot(cdx, cdy) || 1;
        const pull = pointer.active ? Math.max(0, 1 - cd / 260) : 0;
        const orbit = 0.018 + energy * 0.028;

        p.phase += 0.012 + energy * 0.018;
        p.vx = p.vx * 0.965 + (-dy / dist) * orbit + (cdx / cd) * pull * 0.11;
        p.vy = p.vy * 0.965 + (dx / dist) * orbit + (cdy / cd) * pull * 0.11 + eased.velocity * 0.002;
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -60) p.x = w + 60;
        if (p.x > w + 60) p.x = -60;
        if (p.y < -60) p.y = h + 60;
        if (p.y > h + 60) p.y = -60;

        const twinkle = 0.68 + Math.sin(p.phase + t * 0.001) * 0.32;
        const alpha = Math.min(p.alpha * twinkle * (0.82 + energy * 0.46), 0.92);
        const color = `hsla(${p.hue}, 96%, 68%, ${alpha})`;

        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 8);
        glow.addColorStop(0, color);
        glow.addColorStop(1, "hsla(0, 0%, 0%, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 8, 0, Math.PI * 2);
        ctx.fill();
      }

      for (let i = pulses.length - 1; i >= 0; i--) {
        const pulse = pulses[i];
        const age = t - pulse.born;
        const life = 820;

        if (age > life) {
          pulses.splice(i, 1);
          continue;
        }

        const progress = age / life;
        ctx.strokeStyle = `hsla(${progress < 0.5 ? 188 : 42}, 96%, 68%, ${0.55 * (1 - progress)})`;
        ctx.lineWidth = 1.8;
        ctx.beginPath();
        ctx.arc(pulse.x, pulse.y, 28 + progress * 180, 0, Math.PI * 2);
        ctx.stroke();
      }

      ctx.restore();
    };

    const tick = (t: number) => {
      if (!running) return;
      draw(t);
      raf = requestAnimationFrame(tick);
    };

    draw(performance.now());
    if (!rm) raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("pointerdown", onClick);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden="true"
      className="energy-background"
    >
      <video
        className="energy-background-video"
        src={circleVideo.url}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />
      <canvas ref={canvasRef} className="energy-background-canvas" />
    </div>
  );
};

export default HaloBackground;
