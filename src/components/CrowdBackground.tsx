import { useEffect, useRef } from "react";

/**
 * Full-page interactive crowd background.
 *
 * Geometric humanoids (circle head + rounded torso + thin limbs) walk across
 * the whole viewport behind all content and react to the foreground text:
 *   - walk continuously, occasionally slowing to "look up" at nearby headings
 *   - scroll velocity accelerates them in the scroll-consistent direction
 *   - hovering any h1/h2/h3 (or [data-crowd-magnet]) pulls a small cluster to it
 *
 * Renders as a single fixed <canvas>. Respects prefers-reduced-motion.
 */

type State = "walk" | "lookup" | "gather";

interface Walker {
  x: number;
  y: number;
  laneY: number;
  baseSpeed: number; // px/frame at 60fps
  dir: 1 | -1;
  variant: 0 | 1 | 2; // plain / briefcase / phone
  scale: number;
  legPhase: number;
  legSpeed: number;
  headTilt: number; // radians, negative = looking up
  state: State;
  stateT: number; // frames remaining in current non-walk state
  accent: string; // indigo / coral / none
}

const CrowdBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // ---- colors ----
    const styles = getComputedStyle(document.documentElement);
    const inkRaw = (styles.getPropertyValue("--ink").trim() || "#F2F3F7");
    const indigoRaw = styles.getPropertyValue("--indigo").trim() || "#7B7DFF";
    const coralRaw = styles.getPropertyValue("--coral").trim() || "#FF8A6B";
    const paperRaw = styles.getPropertyValue("--paper").trim() || "#0a0a0a";
    const hexToRgb = (hex: string) => {
      const h = hex.replace("#", "");
      const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
      const n = parseInt(full, 16);
      return `${(n >> 16) & 255},${(n >> 8) & 255},${n & 255}`;
    };
    const INK = hexToRgb(inkRaw);
    const INDIGO = hexToRgb(indigoRaw);
    const CORAL = hexToRgb(coralRaw);

    // ---- sizing ----
    let dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0;
    let H = 0;
    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = window.innerWidth;
      H = window.innerHeight;
      canvas.width = Math.floor(W * dpr);
      canvas.height = Math.floor(H * dpr);
      canvas.style.width = `${W}px`;
      canvas.style.height = `${H}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildLanes();
      seedWalkers();
    };

    // ---- lanes: rows spread across viewport (denser, wider band) ----
    let lanes: number[] = [];
    const buildLanes = () => {
      const n = 7;
      lanes = [];
      for (let i = 0; i < n; i++) {
        lanes.push(H * (0.14 + (i / (n - 1)) * 0.78));
      }
    };

    // ---- walkers ----
    const walkers: Walker[] = [];
    const seedWalkers = () => {
      walkers.length = 0;
      const count = W < 640 ? 30 : W < 1100 ? 60 : 90;
      for (let i = 0; i < count; i++) {
        walkers.push(makeWalker(true));
      }
    };
    const makeWalker = (initial: boolean): Walker => {
      const laneY = lanes[Math.floor(Math.random() * lanes.length)];
      const dir: 1 | -1 = Math.random() < 0.5 ? 1 : -1;
      const scale = 1.1 + Math.random() * 0.7; // bigger figures
      const accentRoll = Math.random();
      const accent =
        accentRoll < 0.18 ? INDIGO : accentRoll < 0.3 ? CORAL : "";
      return {
        x: initial ? Math.random() * W : dir === 1 ? -40 : W + 40,
        y: laneY + (Math.random() - 0.5) * 24,
        laneY,
        baseSpeed: 0.9 + Math.random() * 1.4, // ~3-4x faster
        dir,
        variant: (Math.floor(Math.random() * 3) as 0 | 1 | 2),
        scale,
        legPhase: Math.random() * Math.PI * 2,
        legSpeed: 0.28 + Math.random() * 0.12, // more visible leg swing
        headTilt: 0,
        state: "walk",
        stateT: 0,
        accent,
      };
    };


    // ---- heading tracking (both look-up targets and hover magnets) ----
    interface Target {
      el: Element;
      cx: number;
      cy: number;
      left: number;
      right: number;
      top: number;
      hovered: boolean;
    }
    let targets: Target[] = [];
    let hoveredTarget: Target | null = null;

    const refreshTargets = () => {
      const nodes = document.querySelectorAll<HTMLElement>(
        "h1, h2, h3, [data-crowd-magnet]"
      );
      const next: Target[] = [];
      nodes.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.bottom < -80 || r.top > H + 80) return;
        if (r.width < 20 || r.height < 10) return;
        next.push({
          el,
          cx: r.left + r.width / 2,
          cy: r.top + r.height / 2,
          left: r.left,
          right: r.right,
          top: r.top,
          hovered: hoveredTarget?.el === el,
        });
      });
      targets = next;
      // keep hoveredTarget in sync
      if (hoveredTarget) {
        const still = targets.find((t) => t.el === hoveredTarget!.el);
        hoveredTarget = still || null;
      }
    };

    let targetTick = 0;

    // ---- pointer / scroll ----
    let scrollVel = 0; // smoothed
    let lastScrollY = window.scrollY;
    const onScroll = () => {
      const y = window.scrollY;
      const dy = y - lastScrollY;
      lastScrollY = y;
      scrollVel = scrollVel * 0.6 + dy * 0.4;
    };
    const onPointerOver = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest(
        "h1, h2, h3, [data-crowd-magnet]"
      );
      if (!el) return;
      const t = targets.find((t) => t.el === el);
      if (t) {
        t.hovered = true;
        hoveredTarget = t;
      } else {
        // stash a placeholder that will be resolved on next refresh
        const r = (el as HTMLElement).getBoundingClientRect();
        hoveredTarget = {
          el,
          cx: r.left + r.width / 2,
          cy: r.top + r.height / 2,
          left: r.left,
          right: r.right,
          top: r.top,
          hovered: true,
        };
      }
    };
    const onPointerOut = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest(
        "h1, h2, h3, [data-crowd-magnet]"
      );
      if (!el) return;
      const related = (e as PointerEvent).relatedTarget as Element | null;
      if (related && related.closest && related.closest("h1, h2, h3, [data-crowd-magnet]") === el) return;
      if (hoveredTarget?.el === el) hoveredTarget = null;
      const t = targets.find((t) => t.el === el);
      if (t) t.hovered = false;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("scroll", onScroll, { passive: true });
    document.addEventListener("pointerover", onPointerOver);
    document.addEventListener("pointerout", onPointerOut);

    resize();
    refreshTargets();

    // ---- drawing ----
    const drawWalker = (w: Walker) => {
      const s = w.scale;
      const bodyW = 8 * s;
      const bodyH = 16 * s;
      const headR = 4.2 * s;
      const legLen = 8 * s;
      const armLen = 7 * s;

      // Origin at feet center
      ctx.save();
      ctx.translate(w.x, w.y);

      // Legs (swinging)
      const swing = Math.sin(w.legPhase) * (w.state === "walk" ? 3.2 * s : 0.6 * s);
      const legAlpha = 0.7;
      ctx.strokeStyle = `rgba(${INK},${legAlpha})`;
      ctx.lineWidth = Math.max(1, 1.4 * s);
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(-1.2 * s, 0);
      ctx.lineTo(-1.2 * s + swing, -legLen);
      ctx.moveTo(1.2 * s, 0);
      ctx.lineTo(1.2 * s - swing, -legLen);
      ctx.stroke();

      // Torso
      const bodyBottom = -legLen;
      const bodyTop = bodyBottom - bodyH;
      const bodyAlpha = 0.85;
      const bodyColor = w.accent
        ? `rgba(${w.accent},${bodyAlpha})`
        : `rgba(${INK},${bodyAlpha * 0.85})`;
      ctx.fillStyle = bodyColor;
      const r = 3 * s;
      ctx.beginPath();
      // rounded rect (torso)
      const x0 = -bodyW / 2;
      const y0 = bodyTop;
      const x1 = bodyW / 2;
      const y1 = bodyBottom;
      ctx.moveTo(x0 + r, y0);
      ctx.lineTo(x1 - r, y0);
      ctx.quadraticCurveTo(x1, y0, x1, y0 + r);
      ctx.lineTo(x1, y1 - r);
      ctx.quadraticCurveTo(x1, y1, x1 - r, y1);
      ctx.lineTo(x0 + r, y1);
      ctx.quadraticCurveTo(x0, y1, x0, y1 - r);
      ctx.lineTo(x0, y0 + r);
      ctx.quadraticCurveTo(x0, y0, x0 + r, y0);
      ctx.closePath();
      ctx.fill();

      // Arms
      ctx.strokeStyle = `rgba(${INK},0.7)`;
      ctx.lineWidth = Math.max(1, 1.4 * s);
      const armSwing = Math.sin(w.legPhase + Math.PI) * (w.state === "walk" ? 2.6 * s : 0.4 * s);
      const shoulderY = bodyTop + 3 * s;
      ctx.beginPath();
      ctx.moveTo(-bodyW / 2, shoulderY);
      ctx.lineTo(-bodyW / 2 - armSwing, shoulderY + armLen);
      ctx.moveTo(bodyW / 2, shoulderY);
      ctx.lineTo(bodyW / 2 + armSwing, shoulderY + armLen);
      ctx.stroke();

      // Variant accessory
      if (w.variant === 1) {
        // briefcase in one hand
        const bx = bodyW / 2 + armSwing;
        const by = shoulderY + armLen;
        ctx.fillStyle = `rgba(${w.accent || INK},0.7)`;
        ctx.fillRect(bx - 3 * s, by, 6 * s, 4 * s);
      } else if (w.variant === 2) {
        // phone up near head
        const px = bodyW / 2 - 1 * s;
        const py = bodyTop + 1 * s;
        ctx.fillStyle = `rgba(${INDIGO},0.75)`;
        ctx.fillRect(px, py, 2.4 * s, 3.6 * s);
      }

      // Head (with tilt)
      const neckY = bodyTop - 1.2 * s;
      const headCenterY = neckY - headR;
      ctx.save();
      ctx.translate(0, neckY);
      ctx.rotate(w.headTilt);
      ctx.translate(0, -headR - 0.4 * s);
      ctx.fillStyle = `rgba(${INK},0.78)`;
      ctx.beginPath();
      ctx.arc(0, 0, headR, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // faint shadow ellipse under feet
      ctx.fillStyle = `rgba(${INK},0.06)`;
      ctx.beginPath();
      ctx.ellipse(0, 2, bodyW * 0.7, 1.4 * s, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();

      // silence unused
      void headCenterY;
    };

    // ---- main loop ----
    let raf = 0;
    const step = () => {
      // decay scroll velocity toward 0
      scrollVel *= 0.9;

      // refresh target positions periodically (cheap)
      targetTick++;
      if (targetTick > 12) {
        targetTick = 0;
        refreshTargets();
      }

      // paint
      ctx.clearRect(0, 0, W, H);

      // subtle vignette lines behind crowd (very faint horizon)
      // (skipped — keep it clean)

      // scroll influence: nudge x-speed in scroll-consistent horizontal push
      const scrollPush = Math.max(-1.6, Math.min(1.6, scrollVel * 0.05));

      for (const w of walkers) {
        // ---- state logic ----
        if (w.stateT > 0) w.stateT--;

        // gather: if any target is hovered and this walker is one of the closest, seek it
        let seekTarget: Target | null = null;
        if (hoveredTarget) {
          // simple heuristic: seek if walker within horizontal band + some distance
          const dx = hoveredTarget.cx - w.x;
          const dy = hoveredTarget.cy - w.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 340) seekTarget = hoveredTarget;
        }

        if (seekTarget) {
          w.state = "gather";
          const dx = seekTarget.cx - w.x;
          const dy = (seekTarget.top + 30) - w.y; // aim slightly below heading
          const dist = Math.max(1, Math.hypot(dx, dy));
          const speed = 1.1 + w.baseSpeed;
          // approach but stop at ~30px radius
          if (dist > 34) {
            w.x += (dx / dist) * speed;
            w.y += (dy / dist) * speed * 0.85;
          }
          w.dir = dx >= 0 ? 1 : -1;
          // head tilt toward target
          const targetTilt = Math.atan2(seekTarget.cy - (w.y - 20), seekTarget.cx - w.x);
          // normalize tilt to a small range around 0 (looking up = negative)
          const desired = Math.max(-0.9, Math.min(0.9, (targetTilt + Math.PI / 2) * 0.8));
          w.headTilt += (desired - w.headTilt) * 0.18;
          w.legPhase += w.legSpeed * 0.9;
        } else {
          // check heading passes for look-up
          if (w.state !== "lookup") {
            for (const t of targets) {
              if (
                w.x > t.left - 20 &&
                w.x < t.right + 20 &&
                w.y > t.top &&
                w.y < t.top + 260
              ) {
                w.state = "lookup";
                w.stateT = 40 + Math.floor(Math.random() * 30);
                break;
              }
            }
          }

          if (w.state === "lookup") {
            // decelerate + tilt head up
            const speed = w.baseSpeed * 0.35;
            w.x += w.dir * speed + scrollPush * 0.3;
            w.headTilt += (-0.55 - w.headTilt) * 0.12;
            w.legPhase += w.legSpeed * 0.35;
            if (w.stateT <= 0) w.state = "walk";
          } else {
            w.state = "walk";
            const speed = w.baseSpeed + Math.abs(scrollPush) * 0.6;
            w.x += w.dir * speed + scrollPush;
            // gentle vertical bob toward lane
            w.y += (w.laneY - w.y) * 0.04 + (scrollVel * 0.02);
            w.headTilt += (0 - w.headTilt) * 0.1;
            w.legPhase += w.legSpeed;
          }
        }

        // reduced motion: freeze all motion after seed
        if (reduced) {
          w.legPhase = 0;
          w.headTilt = 0;
        }

        // wrap around horizontally
        if (w.x < -60) {
          w.x = W + 30;
          w.laneY = lanes[Math.floor(Math.random() * lanes.length)];
          w.y = w.laneY;
        } else if (w.x > W + 60) {
          w.x = -30;
          w.laneY = lanes[Math.floor(Math.random() * lanes.length)];
          w.y = w.laneY;
        }

        drawWalker(w);
      }

      if (!reduced) raf = requestAnimationFrame(step);
    };

    if (reduced) {
      // draw one static frame
      step();
    } else {
      raf = requestAnimationFrame(step);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("pointerover", onPointerOver);
      document.removeEventListener("pointerout", onPointerOut);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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

export default CrowdBackground;
