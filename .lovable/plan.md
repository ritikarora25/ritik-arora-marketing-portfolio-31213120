## Goal

Replace the current full-page dot/plus grid with a bolder, page-wide interactive background: a continuous crowd of small geometric humanoid figures (circle head + rectangle body, minimal limbs, subtle indigo/coral accents) that walks across the page and interacts with the foreground text.

## Visual style

- Geometric humanoids: circle head, rounded-rectangle torso, thin line arms and legs. 2 tiny variants (with briefcase / with phone / plain) for visual rhythm.
- Rendered on a single full-viewport `<canvas>` that sits behind all content (same slot the grid uses now).
- Palette pulled from existing CSS vars so it matches the charcoal theme: bodies in `--ink` at low alpha, accents in `--indigo` and `--coral`.
- Density: ~40–70 figures on screen at once, staggered across 3–4 vertical "lanes" so they don't feel like a single marching row.

## Interactions

Three behaviors combine into one loop:

1. **Walk + look-up at headings**
   - Figures walk horizontally across the page (each with its own speed + lane).
   - The component locates all `h1, h2, h3` in the DOM. When a walker passes under one, it briefly slows, tilts its head up toward the heading, then resumes.
   - Recomputed on resize / route-independent (single page app).

2. **Scroll drives motion**
   - Scroll velocity is sampled each frame. Fast scroll → walkers speed up in the scroll-consistent direction (down-scroll = walk right faster, up-scroll = walk left). Idle scroll → gentle wander speed.
   - Scroll delta also adds a small vertical bob so the crowd feels reactive, not glued to lanes.

3. **Hover gathers a crowd**
   - Any element tagged with `data-crowd-magnet` (headings + key CTAs) becomes an attractor while hovered.
   - Nearest ~8–12 walkers steer toward it, decelerate, and face it (head tilt toward the element's center). On `mouseleave`, they resume their lane and direction.
   - Uses `pointerover`/`pointerout` on `document` with delegation so it works for every tagged node without per-node listeners.

## Technical approach

- New component `src/components/CrowdBackground.tsx`:
  - Full-viewport fixed canvas, `pointer-events: none`, `z-index: 0`, `background: var(--paper)`.
  - Handles DPR, resize, `prefers-reduced-motion` (falls back to a static, sparse crowd with no motion).
  - Internal `Walker` objects: `{ x, y, laneY, speed, dir, variant, headTilt, targetX?, targetY?, state: 'walk' | 'gather' | 'lookup' }`.
  - Single RAF loop draws every walker each frame using `ctx` primitives (arc for head, roundRect for body, lines for limbs, small accents for props).
  - Heading positions cached; refreshed on scroll/resize via a throttled `getBoundingClientRect()` pass (viewport-space, cheap).
  - Attractor set updated from delegated pointer events.

- Wire-up in `src/components/PortfolioLayout.tsx`: swap `<InteractiveGrid />` for `<CrowdBackground />`. Remove `InteractiveGrid.tsx`.

- Tag magnets: add `data-crowd-magnet` to the hero H1 (`PortfolioHero.tsx`), section headings in `PortfolioAchievements.tsx`, `PortfolioExperience.tsx`, `PortfolioContact.tsx`, and the two topbar CTAs (`Resume`, `Contact`). No copy or layout changes.

- No new dependencies. Pure canvas 2D. Keeps existing `CustomCursor`, `ScrollProgress`, `MagneticButton` untouched.

## Performance & accessibility

- Cap walker count based on viewport width (mobile: ~25, desktop: ~65). Throttle heading-rect recompute to every ~200ms or on scroll end.
- `aria-hidden="true"` on the canvas container (already the pattern).
- `prefers-reduced-motion`: static crowd, no walking, no scroll response, hover-gather disabled — pure decorative.
- Draw is single-canvas, single-pass; no per-figure DOM nodes.

## Out of scope

- No funnel-themed visuals or funnel-linked color shifts (per your instruction).
- No changes to page copy, layout, colors, typography, or component structure beyond adding `data-crowd-magnet` attributes.
- No changes to `CustomCursor`, `ScrollProgress`, `MagneticButton`, or the resume/contact links.

## Deliverables

1. `src/components/CrowdBackground.tsx` (new).
2. `src/components/PortfolioLayout.tsx` swap.
3. `src/components/InteractiveGrid.tsx` deleted.
4. `data-crowd-magnet` attributes added to hero H1, section headings, and topbar CTAs.
