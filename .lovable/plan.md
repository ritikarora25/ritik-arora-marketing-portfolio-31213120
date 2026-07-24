## Goal
Make the Lottie circle background feel alive by giving it a continuous circular/rotational motion, on top of the existing cursor tilt, scroll pump, and click shockwaves.

## Change scope
Only `src/components/CircleBackground.tsx`. No other files, no CSS/layout changes.

## What to add
1. **Base auto-rotation** — the stage element gets a slow, always-on `rotateZ` that advances every animation frame (~6°/sec, one full revolution ≈ 60s). Respect `prefers-reduced-motion` (skip when reduced).
2. **Cursor-driven orbital drift** — instead of only tilting, the ring also *orbits* slightly around the center: cursor position offsets the rotation speed and adds a small elliptical translation (Lissajous-style x/y using `Math.cos(t)` / `Math.sin(t)`), so the ring visibly circles rather than sitting still.
3. **Scroll adds spin momentum** — scroll velocity (already tracked as `eased.boost`) temporarily accelerates the rotation, then decays back to base speed. Feels like flicking a wheel.
4. **Preserve existing effects** — 3D perspective tilt (rotateX/rotateY), hue/saturation/brightness filter, section-aware `--bg-hue`, and canvas shockwaves stay exactly as they are. The new `rotateZ` and orbital translate compose into the same `transform` string on `stage.style.transform`.

## Technical details
- Add `let spin = 0; let spinSpeed = BASE_SPEED;` in the interaction effect.
- Each frame: `spinSpeed = BASE_SPEED + eased.boost * EXTRA;` then `spin += spinSpeed * dt;`.
- Orbital offset: `ox = Math.cos(spin * 0.5) * 18; oy = Math.sin(spin * 0.5) * 12;` added to existing `tx/ty`.
- Final transform: `perspective(1400px) rotateX(...) rotateY(...) rotateZ(${spin}deg) translate3d(${tx+ox}px, ${ty+oy}px, 0) scale(...)`.
- Guard with `prefers-reduced-motion` — when reduced, `BASE_SPEED = 0` and orbital offset is 0.

## Not doing
- No change to the Lottie animation itself, WebM fallback logic, index.css, or persona system.
- No new dependencies.
