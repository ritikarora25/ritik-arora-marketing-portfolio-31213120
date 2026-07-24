import { useEffect, useRef } from "react";

/**
 * Full-page interactive vector grid.
 * - Fixed behind all content, covers the whole viewport.
 * - Dots + plus marks alternate on a lattice.
 * - Cursor casts a spotlight that scales/brightens nearby marks.
 * - Scroll velocity sends a horizontal wave through the grid.
 * - Click emits a radial shockwave ripple.
 * - Respects prefers-reduced-motion.
 */
const InteractiveGrid = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let width = 0;
    let height = 0;
    const GAP = 44; // px between marks
    let cols = 0;
    let rows = 0;

    // Pointer state (in CSS px)
    const pointer = { x: -9999, y: -9999, active: false };
    // Scroll wave state
    let lastScrollY = window.scrollY;
    let scrollWave = 0; // decays over time
    let scrollWaveY = 0; // y in viewport where the wave originated
    // Click ripples
    type Ripple = { x: number; y: number; t: number };
    const ripples: Ripple[] = [];
    // Continuous drift
    let time = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cols = Math.ceil(width / GAP) + 2;
      rows = Math.ceil(height / GAP) + 2;
    };
    resize();

    const onPointerMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
      pointer.active = true;
    };
    const onPointerLeave = () => {
      pointer.active = false;
      pointer.x = -9999;
      pointer.y = -9999;
    };
    const onScroll = () => {
      const y = window.scrollY;
      const dy = y - lastScrollY;
      lastScrollY = y;
      // Accumulate wave energy from scroll delta
      scrollWave = Math.min(1, scrollWave + Math.abs(dy) * 0.012);
      scrollWaveY = height * 0.5; // wave crosses mid-viewport
    };
    const onClick = (e: MouseEvent) => {
      ripples.push({ x: e.clientX, y: e.clientY, t: 0 });
      if (ripples.length > 6) ripples.shift();
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("click", onClick);
    window.addEventListener("resize", resize);

    // Colors — read once, refresh cheaply
    const styles = getComputedStyle(document.documentElement);
    const inkRaw = styles.getPropertyValue("--ink").trim() || "#F2F3F7";
    const indigoRaw = styles.getPropertyValue("--indigo").trim() || "#7B7DFF";
    const coralRaw = styles.getPropertyValue("--coral").trim() || "#FF8A6B";

    // Convert a hex color to "r,g,b"
    const hexToRgb = (hex: string) => {
      const h = hex.replace("#", "");
      const full = h.length === 3 ? h.split("").map(c => c + c).join("") : h;
      const num = parseInt(full, 16);
      return `${(num >> 16) & 255},${(num >> 8) & 255},${num & 255}`;
    };
    const inkRGB = hexToRgb(inkRaw);
    const indigoRGB = hexToRgb(indigoRaw);
    const coralRGB = hexToRgb(coralRaw);

    let raf = 0;
    const SPOT_RADIUS = 180;
    const SPOT_R2 = SPOT_RADIUS * SPOT_RADIUS;

    const draw = () => {
      time += 1;
      ctx.clearRect(0, 0, width, height);

      // Decay scroll wave
      scrollWave *= 0.94;
      if (scrollWave < 0.001) scrollWave = 0;

      // Advance ripples
      for (const r of ripples) r.t += 1;
      // Prune old ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        if (ripples[i].t > 140) ripples.splice(i, 1);
      }

      const drift = reduced ? 0 : Math.sin(time * 0.006) * 2;

      for (let cy = 0; cy < rows; cy++) {
        for (let cx = 0; cx < cols; cx++) {
          // Base position with slight breathing drift
          const bx = cx * GAP - GAP / 2 + drift;
          const by = cy * GAP - GAP / 2 + drift * 0.6;

          // Pointer influence
          const dx = bx - pointer.x;
          const dy = by - pointer.y;
          const d2 = dx * dx + dy * dy;
          let spot = 0;
          if (pointer.active && d2 < SPOT_R2) {
            spot = 1 - d2 / SPOT_R2; // 0..1
            spot = spot * spot; // ease
          }

          // Scroll wave influence (horizontal band moving vertically)
          let wave = 0;
          if (scrollWave > 0) {
            const bandDist = Math.abs(by - scrollWaveY);
            const bandWidth = 160;
            if (bandDist < bandWidth) {
              wave = (1 - bandDist / bandWidth) * scrollWave;
            }
          }

          // Click ripple influence
          let rip = 0;
          let ripHue = 0; // 0..1 -> indigo..coral
          for (const r of ripples) {
            const rr = r.t * 6; // radius grows
            const rdx = bx - r.x;
            const rdy = by - r.y;
            const rd = Math.sqrt(rdx * rdx + rdy * rdy);
            const shell = Math.abs(rd - rr);
            if (shell < 40) {
              const life = 1 - r.t / 140;
              const v = (1 - shell / 40) * life;
              if (v > rip) {
                rip = v;
                ripHue = Math.min(1, r.t / 90);
              }
            }
          }

          // Combine energies
          const energy = Math.min(1, spot + wave * 0.9 + rip);

          // Base mark: small dot / plus alternating
          const isPlus = (cx + cy) % 3 === 0;

          // Color mix
          // Base: ink at low alpha. Add indigo tint from spot, coral tint from ripple.
          const baseAlpha = 0.055 + energy * 0.55;
          const size = (isPlus ? 3.2 : 1.4) + energy * (isPlus ? 3.6 : 3.2);

          let rgb = inkRGB;
          if (rip > 0.15 && rip > spot * 0.9) {
            // Blend indigo->coral by ripHue
            const mix = ripHue;
            const [ir, ig, ib] = indigoRGB.split(",").map(Number);
            const [cr, cg, cb] = coralRGB.split(",").map(Number);
            rgb = `${Math.round(ir + (cr - ir) * mix)},${Math.round(ig + (cg - ig) * mix)},${Math.round(ib + (cb - ib) * mix)}`;
          } else if (spot > 0.15) {
            rgb = indigoRGB;
          }

          ctx.fillStyle = `rgba(${rgb},${baseAlpha})`;

          if (isPlus) {
            // Draw a plus mark
            const s = size;
            const t = Math.max(0.9, s * 0.35);
            ctx.fillRect(bx - s / 2, by - t / 2, s, t);
            ctx.fillRect(bx - t / 2, by - s / 2, t, s);
          } else {
            ctx.beginPath();
            ctx.arc(bx, by, size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("click", onClick);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        background: "var(--paper)",
      }}
    >
      <canvas
        ref={canvasRef}
        style={{ display: "block", width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default InteractiveGrid;
