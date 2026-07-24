import { useEffect, useRef } from "react";

/**
 * "Ethereal Halo" background.
 * A soft, self-illuminated ring of cyan/gold light over deep charcoal,
 * surrounded by drifting stardust. Reacts calmly to cursor & scroll.
 * Pure canvas, no libraries.
 */
const HaloBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const DPR = Math.min(window.devicePixelRatio || 1, 1.5);
    let w = 0, h = 0;

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

    // Smoothed pointer & scroll state
    const target = { mx: 0.5, my: 0.5, sv: 0, sp: 0 };
    const eased = { mx: 0.5, my: 0.5, sv: 0, sp: 0 };

    const onMove = (e: MouseEvent) => {
      target.mx = e.clientX / window.innerWidth;
      target.my = e.clientY / window.innerHeight;
    };
    window.addEventListener("mousemove", onMove, { passive: true });

    let lastY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      target.sv = (y - lastY);
      lastY = y;
      const doc = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      target.sp = Math.min(Math.max(y / doc, 0), 1);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Stardust particles
    type P = { x: number; y: number; r: number; a: number; twk: number; hue: number; vx: number; vy: number };
    const COUNT = w < 700 ? 180 : 320;
    const particles: P[] = [];
    const spawn = (p?: P): P => {
      const n = p ?? ({} as P);
      const cx = w * 0.5, cy = h * 0.5;
      // Bias initial positions in a broad annulus around center
      const ang = Math.random() * Math.PI * 2;
      const rad = (Math.min(w, h) * 0.15) + Math.random() * Math.min(w, h) * 0.45;
      n.x = cx + Math.cos(ang) * rad;
      n.y = cy + Math.sin(ang) * rad;
      n.r = 0.4 + Math.random() * 1.4;
      n.a = 0.15 + Math.random() * 0.55;
      n.twk = Math.random() * Math.PI * 2;
      n.hue = Math.random() < 0.55 ? 0 : 1; // 0 = cyan, 1 = gold
      n.vx = (Math.random() - 0.5) * 0.15;
      n.vy = (Math.random() - 0.5) * 0.15;
      return n;
    };
    for (let i = 0; i < COUNT; i++) particles.push(spawn());

    const drawBackdrop = () => {
      ctx.fillStyle = "#0a0a0a";
      ctx.fillRect(0, 0, w, h);
    };

    const drawHalo = (t: number) => {
      // Ease pointer & scroll
      eased.mx += (target.mx - eased.mx) * 0.04;
      eased.my += (target.my - eased.my) * 0.04;
      eased.sv += (target.sv - eased.sv) * 0.08;
      eased.sp += (target.sp - eased.sp) * 0.05;
      target.sv *= 0.9;

      // Breathing
      const breathe = 0.85 + Math.sin(t * 0.00035) * 0.15;
      const wobble = Math.sin(t * 0.00022) * 0.08;

      const baseCx = w * 0.5;
      const baseCy = h * 0.5;
      // Magnetic sway toward pointer (gentle)
      const cx = baseCx + (eased.mx - 0.5) * w * 0.14;
      const cy = baseCy + (eased.my - 0.5) * h * 0.12 - eased.sp * 40;

      const R = Math.min(w, h) * (0.32 + wobble) * breathe;

      ctx.save();
      ctx.globalCompositeOperation = "lighter";

      // Ambient bloom washes
      const bloomLayers = [
        { r: R * 2.6, a: 0.12, c: [8, 90, 110] },   // cyan wash
        { r: R * 2.2, a: 0.09, c: [140, 100, 20] }, // gold wash
      ];
      for (const b of bloomLayers) {
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, b.r);
        g.addColorStop(0, `rgba(${b.c[0]},${b.c[1]},${b.c[2]},${b.a})`);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, w, h);
      }

      // Ring: two overlapping annular gradients (cyan outer, gold inner accent)
      const rot = t * 0.00006 + eased.sp * 0.4;
      // Slight elliptical tilt with scroll
      ctx.translate(cx, cy);
      ctx.rotate(rot);
      ctx.scale(1, 0.92 + eased.sp * 0.06);

      const drawRing = (color: string, inner: number, outer: number, strength: number) => {
        const g = ctx.createRadialGradient(0, 0, inner, 0, 0, outer);
        g.addColorStop(0, "rgba(0,0,0,0)");
        g.addColorStop(0.5, color.replace("A", `${strength}`));
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(0, 0, outer, 0, Math.PI * 2);
        ctx.fill();
      };

      // cyan #06B6D4 → rgba(6,182,212,A)
      drawRing("rgba(6,182,212,A)", R * 0.72, R * 1.05, 0.55);
      // gold #EAB308 → rgba(234,179,8,A)
      drawRing("rgba(234,179,8,A)", R * 0.78, R * 1.0, 0.38);
      // Inner soft cyan core edge
      drawRing("rgba(120,220,240,A)", R * 0.86, R * 0.98, 0.42);

      // Highlight arc (rotating light concentration)
      const arcAng = t * 0.0004;
      ctx.rotate(arcAng);
      const hg = ctx.createRadialGradient(R * 0.9, 0, 0, R * 0.9, 0, R * 0.6);
      hg.addColorStop(0, "rgba(255,220,140,0.35)");
      hg.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = hg;
      ctx.beginPath();
      ctx.arc(R * 0.9, 0, R * 0.6, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
      return { cx, cy, R, breathe };
    };

    const drawParticles = (t: number, halo: { cx: number; cy: number; R: number }) => {
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        // Orbit gently around halo center, biased by scroll
        const dx = p.x - halo.cx;
        const dy = p.y - halo.cy;
        const d = Math.hypot(dx, dy) || 1;
        // tangential drift
        const tx = -dy / d;
        const ty = dx / d;
        const orbit = 0.35 + eased.sv * 0.01;
        p.vx = p.vx * 0.96 + tx * 0.05 * orbit + (Math.random() - 0.5) * 0.02;
        p.vy = p.vy * 0.96 + ty * 0.05 * orbit + (Math.random() - 0.5) * 0.02 + eased.sv * 0.002;
        // Slight radial breathing toward the ring radius
        const targetR = halo.R * (0.85 + Math.sin(p.twk + t * 0.0005) * 0.3);
        const rd = (targetR - d) * 0.0025;
        p.vx += (dx / d) * rd;
        p.vy += (dy / d) * rd;

        p.x += p.vx;
        p.y += p.vy;
        p.twk += 0.01;

        // Wrap if far off-screen
        if (p.x < -40 || p.x > w + 40 || p.y < -40 || p.y > h + 40) spawn(p);

        const twinkle = 0.7 + Math.sin(p.twk) * 0.3;
        const alpha = p.a * twinkle;
        const color = p.hue === 0
          ? `rgba(6,182,212,${alpha})`
          : `rgba(234,179,8,${alpha})`;
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        // soft glow
        const gg = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.r * 6);
        gg.addColorStop(0, color);
        gg.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = gg;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r * 6, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();
    };

    if (rm) {
      drawBackdrop();
      const halo = drawHalo(0);
      drawParticles(0, halo);
      const redraw = () => {
        resize();
        drawBackdrop();
        const h2 = drawHalo(0);
        drawParticles(0, h2);
      };
      window.addEventListener("resize", redraw);
      return () => {
        window.removeEventListener("resize", redraw);
        window.removeEventListener("resize", resize);
        window.removeEventListener("mousemove", onMove);
        window.removeEventListener("scroll", onScroll);
      };
    }

    let running = true;
    let raf = 0;
    const onVis = () => {
      running = !document.hidden;
      if (running) raf = requestAnimationFrame(tick);
    };
    document.addEventListener("visibilitychange", onVis);

    const tick = (t: number) => {
      if (!running) return;
      drawBackdrop();
      const halo = drawHalo(t);
      drawParticles(t, halo);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
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
      }}
    />
  );
};

export default HaloBackground;
