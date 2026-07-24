## Decision: Lottie (`circle.json`), not WebM

You asked for the option that's easier to recolor later. **Lottie wins** — colors live as RGB values inside the JSON and can be swapped at runtime with a tiny utility. A WebM is baked pixels; recoloring means re-exporting the source file. Trade-off: the Lottie you uploaded contains an embedded WebP frame sequence (I checked line 1 — it's base64 image data inside `assets`), so it's essentially a video-in-a-JSON and can't be recolored by editing shape colors. If that turns out to be true, we fall back to a **CSS `filter: hue-rotate() saturate()` layer** on top of the Lottie/WebM — still one variable to change site-wide, still reusable. Either way, the recoloring surface is a single token.

## Approach

**1. Upload both files as CDN assets**
- `lovable-assets create --file /mnt/user-uploads/circle.json` → `src/assets/circle.json.asset.json`
- `lovable-assets create --file /mnt/user-uploads/circle.webm` → `src/assets/circle.webm.asset.json` (kept as fallback if Lottie fails to load)

**2. New component `src/components/CircleBackground.tsx`**
- Install `lottie-web` (small, no React wrapper needed).
- Fixed, full-viewport, `z-index: 0`, behind all content.
- Renders the Lottie into a div, `loop: true`, `autoplay: true`, `rendererSettings: { preserveAspectRatio: "xMidYMid slice" }`.
- Wrapped in a `.circle-bg-tint` layer that applies `filter: hue-rotate(var(--bg-hue)) saturate(var(--bg-sat)) brightness(var(--bg-bright))` — **this is the recolor knob**. Change one CSS variable in `index.css` to retint the whole background later.
- Reduced-motion: pause the Lottie animation, keep the first frame as a still.
- WebM fallback: if Lottie fails to init, mount a `<video>` from the WebM asset with the same tint layer applied.

**3. Real, visible interactions layered on top (not baked into a canvas repaint)**
- **Cursor 3D tilt**: outer wrapper gets `transform: perspective(1400px) rotateX() rotateY() translate3d()` from pointer position. ~7° tilt, ~50px translate — obvious, not subtle.
- **Scroll pump**: scroll velocity boosts `--bg-bright` and adds `scale(1.02)` briefly. Decays smoothly (`requestAnimationFrame` easing).
- **Click shockwaves**: single thin canvas overlay at `z-index: 1` (above background, below content). Only draws expanding rings on `pointerdown`. No procedural ring, no dust, no funnel spine — just shockwaves.
- **Section hue shift** (optional, on by default): `IntersectionObserver` on funnel `<section>`s changes `--bg-hue` per stage (Acquire cyan → Retain magenta). Same recolor knob, driven by scroll position.

**4. Cleanup**
- Delete `src/components/HaloBackground.tsx` (procedural ring, no longer used).
- Update `src/components/PortfolioLayout.tsx`: swap `<HaloBackground />` for `<CircleBackground />`.
- Remove `.energy-background*` rules from `src/index.css`, add `.circle-bg`, `.circle-bg-tint`, and the recolor CSS variables (`--bg-hue`, `--bg-sat`, `--bg-bright`) in `:root` so recoloring later = editing one line.

**5. Untouched**
- All content, copy, funnel data, persona system, typography, layout, section order, cards.

## Verification (before I claim done)
Playwright screenshots at `/` desktop + mobile:
- Static: Lottie visibly playing behind content.
- Cursor moved to a corner: visible 3D tilt in the screenshot.
- Mid-scroll: brightness bump visible.
- Mid-click: shockwave ring captured.
If any screenshot doesn't show the expected effect, I fix before reporting back.

## Files touched
- **New**: `src/assets/circle.json.asset.json`, `src/assets/circle.webm.asset.json`, `src/components/CircleBackground.tsx`
- **Edited**: `src/components/PortfolioLayout.tsx`, `src/index.css`, `package.json` (adds `lottie-web`)
- **Deleted**: `src/components/HaloBackground.tsx`

## Recoloring later
One place, one line:
```css
:root {
  --bg-hue: 0deg;      /* rotate to shift the whole ring's color */
  --bg-sat: 1;         /* 0 = greyscale, 1 = original, >1 = more vivid */
  --bg-bright: 1;
}
```
