import { useEffect, useRef } from "react";

/**
 * "Funnel Flow-Field" background.
 * Vanilla canvas, no libs. Particles drift downward through a subtly
 * funnel-shaped vector field. Cursor repels nearby particles; scroll
 * velocity feeds particle speed and shifts the hue indigo → coral.
 */
const FlowFieldBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const small = window.matchMedia("(max-width: 640px)").matches;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const DPR = Math.min(window.devicePixelRatio || 1, 1.5);
    let w = 0;
    let h = 0;

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

    const clearFrame = (alpha = 1) => {
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = `rgba(245, 244, 240, ${alpha})`;
      ctx.fillRect(0, 0, w, h);
    };

    const drawFunnelSpine = (time = 0) => {
      const cx = w * 0.5;
      const top = h * 0.06;
      const bottom = h * 1.02;
      const waistY = h * 0.62;
      const pulse = Math.sin(time * 0.0012) * 0.08 + 0.92;

      ctx.save();
      ctx.globalCompositeOperation = "multiply";

      const glow = ctx.createRadialGradient(cx, waistY, 20, cx, waistY, Math.max(w, h) * 0.55);
      glow.addColorStop(0, "rgba(61, 63, 224, 0.1)");
      glow.addColorStop(0.38, "rgba(255, 107, 74, 0.04)");
      glow.addColorStop(1, "rgba(245, 244, 240, 0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, w, h);

      ctx.lineCap = "round";
      const lines: number = small ? 18 : 34;
      for (let i = 0; i < lines; i++) {
        const t = lines === 1 ? 0.5 : i / (lines - 1);
        const side = i % 2 === 0 ? -1 : 1;
        const edgeX = cx + side * (w * (0.18 + 0.34 * t));
        const midX = cx + Math.sin(t * Math.PI * 2 + time * 0.0005) * 42 * pulse;
        const y1 = top + t * h * 0.32;

        ctx.beginPath();
        ctx.moveTo(edgeX, y1);
        ctx.bezierCurveTo(
          cx + side * w * 0.22,
          h * 0.32 + t * 30,
          midX + side * w * 0.04,
          waistY - 80 + t * 70,
          cx + side * (18 + t * 42),
          waistY + t * 130,
        );
        ctx.bezierCurveTo(
          cx + side * w * 0.08,
          h * 0.82,
          cx + side * w * 0.22,
          h * 0.92,
          cx + side * w * 0.34,
          bottom,
        );
        ctx.strokeStyle = i % 3 === 0 ? "rgba(255, 107, 74, 0.12)" : "rgba(61, 63, 224, 0.15)";
        ctx.lineWidth = i % 5 === 0 ? 1.25 : 0.75;
        ctx.stroke();
      }

      for (let i = 0; i < 5; i++) {
        const y = h * (0.2 + i * 0.15);
        const radius = 4 + i * 1.2;
        ctx.beginPath();
        ctx.arc(cx + Math.sin(time * 0.001 + i) * 20, y, radius, 0, Math.PI * 2);
        ctx.fillStyle = i % 2 === 0 ? "rgba(255, 107, 74, 0.38)" : "rgba(61, 63, 224, 0.34)";
        ctx.fill();
      }

      ctx.restore();
    };

    if (rm) {
      clearFrame();
      drawFunnelSpine();
      const drawStatic = () => {
        resize();
        clearFrame();
        drawFunnelSpine();
      };
      window.addEventListener("resize", drawStatic);
      return () => window.removeEventListener("resize", drawStatic);
    }

    // Particles
    type P = { x: number; y: number; vx: number; vy: number; life: number; max: number };
    const COUNT = small ? 95 : 240;
    const particles: P[] = [];

    const spawn = (p?: P): P => {
      const n = p ?? ({} as P);
      n.x = Math.random() * w;
      n.y = -20 + Math.random() * h * 0.25;
      n.vx = 0;
      n.vy = 0.25 + Math.random() * 0.4;
      n.life = 0;
      n.max = 600 + Math.random() * 800;
      return n;
    };
    for (let i = 0; i < COUNT; i++) particles.push(spawn());

    // Cursor
    const mouse = { x: -9999, y: -9999, active: false };
    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };
    const onLeave = () => {
      mouse.active = false;
      mouse.x = -9999;
      mouse.y = -9999;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mouseleave", onLeave);

    // Ripple on click
    const ripples: { x: number; y: number; t: number }[] = [];
    const onClick = (e: MouseEvent) => {
      ripples.push({ x: e.clientX, y: e.clientY, t: performance.now() });
      if (ripples.length > 6) ripples.shift();
    };
    window.addEventListener("click", onClick);

    // Scroll velocity & progress
    let lastScroll = window.scrollY;
    let scrollVel = 0;
    let scrollProg = 0;
    const onScroll = () => {
      const y = window.scrollY;
      scrollVel = scrollVel * 0.7 + (y - lastScroll) * 0.3;
      lastScroll = y;
      const doc = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      scrollProg = Math.min(Math.max(y / doc, 0), 1);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Visibility pause
    let running = true;
    const onVis = () => {
      running = !document.hidden;
      if (running) raf = requestAnimationFrame(tick);
    };
    document.addEventListener("visibilitychange", onVis);

    // Funnel field: gently funnels particles toward centerline as they fall.
    const field = (x: number, y: number) => {
      const cx = w * 0.5;
      const t = Math.min(y / h, 1);
      // narrowing factor: 0 at top, ~0.9 at bottom
      const pull = 0.00025 + t * 0.0018;
      const dx = (cx - x) * pull;
      // wavy drift
      const wave = Math.sin((y * 0.006) + (x * 0.003)) * 0.15;
      return { fx: dx + wave, fy: 0.02 };
    };

    let raf = 0;
    const tick = () => {
      if (!running) return;

      // fade previous frame (long trails) — very light so particles stay visible
      clearFrame(0.06);
      drawFunnelSpine(performance.now());

      // decay scroll velocity
      scrollVel *= 0.92;
      const speedBoost = 1 + Math.min(Math.abs(scrollVel) * 0.08, 3);

      // color interp indigo → coral based on scroll progress
      // indigo: 61,63,224 ; coral: 255,107,74
      const r = Math.round(61 + (255 - 61) * scrollProg);
      const g = Math.round(63 + (107 - 63) * scrollProg);
      const b = Math.round(224 + (74 - 224) * scrollProg);
      const stroke = `rgba(${r},${g},${b},0.68)`;

      ctx.lineWidth = small ? 0.9 : 1.15;
      ctx.strokeStyle = stroke;

      const now = performance.now();

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const { fx, fy } = field(p.x, p.y);
        p.vx = p.vx * 0.94 + fx;
        p.vy = p.vy * 0.94 + fy + 0.25 * speedBoost;

        // cursor repulsion
        if (mouse.active) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const d2 = dx * dx + dy * dy;
          const R = 140;
          if (d2 < R * R && d2 > 0.01) {
            const d = Math.sqrt(d2);
            const force = (1 - d / R) * 2.4;
            p.vx += (dx / d) * force;
            p.vy += (dy / d) * force;
          }
        }

        // ripple push
        for (let k = 0; k < ripples.length; k++) {
          const rp = ripples[k];
          const age = (now - rp.t) / 700;
          if (age > 1) continue;
          const radius = age * 260;
          const dx = p.x - rp.x;
          const dy = p.y - rp.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          const band = Math.abs(d - radius);
          if (band < 40) {
            const force = (1 - band / 40) * (1 - age) * 3.2;
            p.vx += (dx / (d || 1)) * force;
            p.vy += (dy / (d || 1)) * force;
          }
        }

        // clamp velocity
        const vmax = 3.2;
        if (p.vx > vmax) p.vx = vmax; else if (p.vx < -vmax) p.vx = -vmax;
        if (p.vy > vmax) p.vy = vmax; else if (p.vy < -vmax) p.vy = -vmax;

        const nx = p.x + p.vx;
        const ny = p.y + p.vy;

        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(nx, ny);
        ctx.stroke();

        p.x = nx;
        p.y = ny;
        p.life++;

        if (p.y > h + 10 || p.x < -20 || p.x > w + 20 || p.life > p.max) {
          spawn(p);
        }
      }

      // prune ripples
      while (ripples.length && now - ripples[0].t > 700) ripples.shift();

      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("click", onClick);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
        opacity: 0.9,
      }}
    />
  );
};

export default FlowFieldBackground;
