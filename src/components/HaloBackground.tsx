import { useEffect, useRef } from "react";

type Pulse = { x: number; y: number; born: number; hue: number };
type Dust = { a: number; r: number; s: number; tw: number };

/**
 * Cinematic energy-ring background.
 * - Strong 3D tilt driven by cursor (perspective + rotateX/rotateY)
 * - Scroll velocity pumps ring scale, brightness and bloom
 * - Section-aware hue: shifts as user moves through funnel stages
 * - Click anywhere -> shockwave ripple emitted from that point
 */
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
    let w = 0, h = 0, raf = 0, running = true;
    let lastY = window.scrollY;

    const pointer = { x: 0.5, y: 0.5, active: false };
    const eased = { x: 0.5, y: 0.5, scroll: 0, vel: 0, hue: 188, targetHue: 188 };
    const pulses: Pulse[] = [];

    const resize = () => {
      w = window.innerWidth; h = window.innerHeight;
      canvas.width = Math.floor(w * DPR);
      canvas.height = Math.floor(h * DPR);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    // Ambient dust motes drifting behind the ring
    const dust: Dust[] = Array.from({ length: w < 700 ? 40 : 80 }, () => ({
      a: Math.random() * Math.PI * 2,
      r: 0.15 + Math.random() * 0.75,
      s: 0.6 + Math.random() * 1.8,
      tw: Math.random() * Math.PI * 2,
    }));

    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX / window.innerWidth;
      pointer.y = e.clientY / window.innerHeight;
      pointer.active = true;
    };
    const onLeave = () => { pointer.active = false; };
    const onScroll = () => {
      const doc = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const y = window.scrollY;
      eased.vel += (y - lastY) * 0.22;
      eased.scroll = Math.min(Math.max(y / doc, 0), 1);
      lastY = y;

      // Section-aware hue palette: 188 cyan -> 265 violet -> 42 gold -> 12 coral -> 320 magenta
      const stops = [188, 265, 42, 12, 320];
      const p = eased.scroll * (stops.length - 1);
      const i = Math.floor(p);
      const frac = p - i;
      const a = stops[i];
      const b = stops[Math.min(i + 1, stops.length - 1)];
      eased.targetHue = a + (b - a) * frac;
    };
    const onDown = (e: PointerEvent) => {
      pulses.push({ x: e.clientX, y: e.clientY, born: performance.now(), hue: eased.hue });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    onScroll();

    const onVis = () => { running = !document.hidden; if (running && !rm) raf = requestAnimationFrame(tick); };
    document.addEventListener("visibilitychange", onVis);

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);

      eased.x += (pointer.x - eased.x) * 0.08;
      eased.y += (pointer.y - eased.y) * 0.08;
      eased.vel *= 0.9;
      eased.hue += (eased.targetHue - eased.hue) * 0.04;

      const energy = Math.min(Math.abs(eased.vel) / 30, 1);
      const cx = w * 0.5 + (eased.x - 0.5) * 60;
      const cy = h * 0.5 + (eased.y - 0.5) * 40;
      const tiltX = (eased.y - 0.5) * -0.7;         // radians
      const tiltY = (eased.x - 0.5) *  0.9;
      const spin = t * 0.00035 + eased.scroll * 1.2;
      const hue = eased.hue;
      const hue2 = (hue + 42) % 360;

      // Sync CSS vars so foreground elements can react
      root.style.setProperty("--halo-hue", `${hue.toFixed(0)}`);
      root.style.setProperty("--halo-energy", energy.toFixed(3));

      // 1. Deep radial ambience wash behind everything
      const amb = ctx.createRadialGradient(cx, cy, 20, cx, cy, Math.max(w, h) * 0.72);
      amb.addColorStop(0, `hsla(${hue}, 90%, 30%, ${0.34 + energy * 0.12})`);
      amb.addColorStop(0.35, `hsla(${hue2}, 90%, 18%, 0.18)`);
      amb.addColorStop(1, "hsla(0,0%,0%,0)");
      ctx.fillStyle = amb;
      ctx.fillRect(0, 0, w, h);

      // 2. Dust motes
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (const d of dust) {
        d.a += 0.0009 + energy * 0.002;
        const orbit = Math.max(w, h) * (0.28 + d.r * 0.32);
        const px = cx + Math.cos(d.a) * orbit * (0.9 + Math.sin(d.a * 2) * 0.08);
        const py = cy + Math.sin(d.a) * orbit * 0.42;
        const tw = 0.35 + (Math.sin(t * 0.001 + d.tw) * 0.5 + 0.5) * 0.55;
        const g = ctx.createRadialGradient(px, py, 0, px, py, d.s * 6);
        g.addColorStop(0, `hsla(${hue}, 100%, 78%, ${tw * 0.55})`);
        g.addColorStop(1, "hsla(0,0%,0%,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(px, py, d.s * 6, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.restore();

      // 3. THE RING — projected via a manual 3D transform
      ctx.save();
      ctx.translate(cx, cy);
      ctx.globalCompositeOperation = "lighter";

      const R = Math.min(w, h) * (w < 700 ? 0.34 : 0.30) * (1 + energy * 0.09 + eased.scroll * 0.05);
      const sinX = Math.sin(tiltX), cosX = Math.cos(tiltX);
      const sinY = Math.sin(tiltY), cosY = Math.cos(tiltY);
      const persp = 900;

      const project = (theta: number, radiusScale: number) => {
        const x = Math.cos(theta) * R * radiusScale;
        const y = 0;
        const z = Math.sin(theta) * R * radiusScale;
        // rotate around Y
        const x1 = x * cosY + z * sinY;
        const z1 = -x * sinY + z * cosY;
        // rotate around X
        const y2 = y * cosX - z1 * sinX;
        const z2 = y * sinX + z1 * cosX;
        const scale = persp / (persp - z2);
        return { x: x1 * scale, y: y2 * scale, z: z2, scale };
      };

      // Bloom halo behind the ring
      const bloom = ctx.createRadialGradient(0, 0, 0, 0, 0, R * 1.7);
      bloom.addColorStop(0, `hsla(${hue}, 100%, 68%, ${0.28 + energy * 0.18})`);
      bloom.addColorStop(0.35, `hsla(${hue2}, 100%, 60%, ${0.16 + energy * 0.14})`);
      bloom.addColorStop(1, "hsla(0,0%,0%,0)");
      ctx.fillStyle = bloom;
      ctx.beginPath();
      ctx.arc(0, 0, R * 1.7, 0, Math.PI * 2);
      ctx.fill();

      // Multiple stroke passes for volumetric feel
      const passes = [
        { rs: 1.00, w: 3.4, h: hue,  a: 0.55, blur: 34 },
        { rs: 1.00, w: 1.2, h: hue,  a: 0.95, blur: 12 },
        { rs: 1.04, w: 2.2, h: hue2, a: 0.42, blur: 28 },
        { rs: 0.96, w: 1.6, h: hue2, a: 0.36, blur: 22 },
        { rs: 1.08, w: 0.9, h: hue,  a: 0.30, blur: 18 },
      ];

      const steps = 160;
      for (const pass of passes) {
        ctx.beginPath();
        for (let i = 0; i <= steps; i++) {
          const theta = (i / steps) * Math.PI * 2 + spin;
          const wob = 1 + Math.sin(theta * 3 + t * 0.0007) * 0.015 + energy * 0.02;
          const p = project(theta, pass.rs * wob);
          if (i === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.closePath();
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.shadowColor = `hsla(${pass.h}, 100%, 70%, ${pass.a})`;
        ctx.shadowBlur = pass.blur + energy * 26;
        ctx.strokeStyle = `hsla(${pass.h}, 100%, ${72 + energy * 8}%, ${pass.a * (0.9 + energy * 0.25)})`;
        ctx.lineWidth = pass.w * (1 + energy * 0.7);
        ctx.stroke();
      }

      // Sparks travelling along the ring
      const sparkCount = 26;
      for (let i = 0; i < sparkCount; i++) {
        const theta = (i / sparkCount) * Math.PI * 2 + spin * 3 + t * 0.0009;
        const p = project(theta, 1.0);
        const shue = i % 3 === 0 ? hue2 : hue;
        const size = 1.6 + (Math.sin(t * 0.003 + i) * 0.5 + 0.5) * 2.6 + energy * 2.4;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size * 5);
        g.addColorStop(0, `hsla(${shue}, 100%, 82%, ${0.55 * p.scale + energy * 0.35})`);
        g.addColorStop(1, "hsla(0,0%,0%,0)");
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, size * 5, 0, Math.PI * 2);
        ctx.fill();
      }

      // Bright core disc
      const core = ctx.createRadialGradient(0, 0, 0, 0, 0, R * 0.32);
      core.addColorStop(0, `hsla(${hue}, 100%, 92%, ${0.18 + energy * 0.22})`);
      core.addColorStop(1, "hsla(0,0%,0%,0)");
      ctx.fillStyle = core;
      ctx.beginPath();
      ctx.arc(0, 0, R * 0.32, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      // 4. Click shockwaves
      ctx.save();
      ctx.globalCompositeOperation = "lighter";
      for (let i = pulses.length - 1; i >= 0; i--) {
        const pl = pulses[i];
        const age = t - pl.born;
        const life = 950;
        if (age > life) { pulses.splice(i, 1); continue; }
        const p = age / life;
        const radius = 20 + p * 260;
        ctx.strokeStyle = `hsla(${pl.hue}, 100%, 74%, ${0.72 * (1 - p)})`;
        ctx.shadowColor = `hsla(${pl.hue}, 100%, 70%, ${0.6 * (1 - p)})`;
        ctx.shadowBlur = 18;
        ctx.lineWidth = 2 + (1 - p) * 2.5;
        ctx.beginPath();
        ctx.arc(pl.x, pl.y, radius, 0, Math.PI * 2);
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
      window.removeEventListener("pointerdown", onDown);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, []);

  return (
    <div ref={rootRef} aria-hidden="true" className="energy-background">
      <canvas ref={canvasRef} className="energy-background-canvas" />
    </div>
  );
};

export default HaloBackground;
