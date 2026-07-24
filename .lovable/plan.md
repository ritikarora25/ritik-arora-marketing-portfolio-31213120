
# Motion & Interactive Background

Goal: make the site feel alive without breaking the calm paper aesthetic. The background concept is tied to the portfolio's core metaphor (funnel/journey) so it feels earned, not decorative.

## 1. Background: "Funnel Flow-Field"

A single fixed `<canvas>` behind all content (z-index: -1), rendered on `#root`'s backdrop. Instead of generic dots/blobs, it draws a **living flow-field**: hundreds of tiny particles drift top→bottom along invisible vector-field streamlines that gently funnel inward — the same narrowing shape as the hero funnel bar.

- Palette: indigo particles fading to coral as they travel down (matches `--indigo` → `--coral` gradient already used in the journey line).
- Density: sparse (~180 particles), 1px, low opacity (~0.35) — paper stays dominant.
- **Cursor interaction**: cursor acts as a repulsor within ~140px radius; nearby particles bend around it (like iron filings dodging a magnet). On click, a soft ripple pushes particles outward.
- **Scroll interaction**: scroll velocity feeds particle speed and slightly rotates the field — scrolling fast makes the stream visibly rush; idle = calm drift. Scroll progress also shifts the hue mix indigo→coral top-to-bottom, mirroring the journey progress line.
- **Section awareness**: when a Journey stage enters view, particles near that stage's node briefly cluster then release (echoes the `nodePop` keyframe).
- Perf: `requestAnimationFrame`, DPR-capped at 1.5, paused when tab hidden, disabled entirely when `prefers-reduced-motion` is set or on screens <640px (static faint grid fallback).

New file: `src/components/FlowFieldBackground.tsx` (vanilla canvas, no libs). Mounted once in `PortfolioLayout.tsx`.

## 2. Site-wide motion (Motion for React)

Install `motion` (framer-motion successor) and layer motion onto existing markup — no structural changes.

**Hero**
- Existing word-reveal stays; add a soft indigo glow that tracks the cursor over the hero photo (radial-gradient mask following mouse).
- Funnel bar: staggered fade+scale-in on load; hovering a segment scales it 1.03 and pulses the coral underline.
- Proof-box cursor already blinks; add a subtle horizontal shimmer sweep every 6s.
- Persona chips: press animation (scale 0.96) + coral ripple on activation.

**Journey / Experience cards**
- Cards fade+rise as they enter viewport (already do; upgrade to Motion's `whileInView` with spring).
- Sparklines: `path` stroke-dashoffset draw-in on enter view.
- Metric numbers: count-up (0 → target) once, on first view. Cleanly implemented in a small `<CountUp>` component that respects reduced-motion.
- Stage progress bar: fills with spring easing when its stage enters view; node scales+pops.
- Card hover: lift −4px + subtle indigo border glow (extend current hover).
- Expandable `<details>`: animate height with Motion's `AnimatePresence` for smooth open/close.

**About**
- Keep character-scroll reveal; add a slow horizontal parallax on the paragraph block (~6px range) tied to scroll.

**Achievements strip**
- On enter view: numbers count-up, labels stagger-fade, coral underline draws under each stat.

**Toolkit chips**
- Stagger-fade in on view; on hover, chip lifts 2px with soft shadow.

**Education / Certifications / Awards**
- Cards stagger-fade in; hover lift.

**Contact card**
- On enter view: background dark card slides up 12px with spring; contact link buttons magnetic-hover (button gently follows cursor within ~8px).

**Global**
- Smooth scroll already on. Add a thin coral scroll-progress bar fixed at top of viewport (2px), driven by `useScroll`.
- Section headings: gradient underline wipes in left→right on enter view.
- Back-to-top button: scale+rotate on hover, ripple on click.

## 3. Accessibility & performance guardrails

- All animations respect `prefers-reduced-motion` (existing global CSS rule already zeroes durations; new JS animations check `matchMedia` and short-circuit).
- Canvas pauses on `visibilitychange` and when scrolled fully out of hero+journey range.
- No layout thrash: transforms/opacity only.
- Bundle: `motion` ~35KB gzip; canvas is dependency-free.

## Technical section

**Files created**
- `src/components/FlowFieldBackground.tsx` — canvas + rAF loop, exposes cursor/scroll listeners.
- `src/components/ScrollProgress.tsx` — top coral bar via Motion `useScroll`.
- `src/components/CountUp.tsx` — reused for metrics + achievements (IntersectionObserver + rAF, reduced-motion aware).
- `src/components/MagneticButton.tsx` — wrapper used for contact CTAs and top-bar Resume/Contact buttons.

**Files edited**
- `src/components/PortfolioLayout.tsx` — mount `FlowFieldBackground` and `ScrollProgress`.
- `src/components/PortfolioHero.tsx` — motion variants for funnel/proof/persona; cursor-glow overlay on hero photo.
- `src/components/experience/StageCard.tsx` (and the four company cards) — Motion `whileInView`, sparkline draw-in, `AnimatePresence` for details, hover lift.
- `src/components/PortfolioAchievements.tsx` — CountUp + stagger.
- `src/components/PortfolioSkills.tsx`, `PortfolioEducation.tsx`, `PortfolioAchievements.tsx`, `PortfolioContact.tsx` — `whileInView` stagger.
- `src/index.css` — a few new keyframes (`shimmer`, `underlineWipe`) and hover-glow tokens; keep tokens semantic.
- `package.json` — add `motion` (^11).

**Non-goals**
- No Three.js/WebGL; canvas 2D is enough and keeps bundle small.
- No structural layout changes, no copy changes, no color palette changes.
- No changes to routing, data, SEO, or analytics.

```text
┌─────────────────────────── viewport ───────────────────────────┐
│  ░░░  ░ ░    ░ ░  ░   flow-field particles (behind content)    │
│    ░  ░  ░ ░  ░  ░ ░   drift ↓, bend around cursor, hue shifts │
│  ░ ░    ░  ░   ░   ░   with scroll (indigo → coral)            │
│                                                                │
│  [hero content, journey, etc. render normally on top]          │
└────────────────────────────────────────────────────────────────┘
```
