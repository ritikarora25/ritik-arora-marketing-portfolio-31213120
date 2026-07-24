## Goal

Remove the funnel flow-field background and the funnel *visual metaphor from the background only*. Journey section content (5 stages, cards, metrics, personas) stays exactly as it is. Add a cinematic, cursor- and scroll-aware background plus a set of refined foreground interactions.

## 1. Background: "Ethereal Halo"

Replace `src/components/FlowFieldBackground.tsx` with a new `HaloBackground.tsx` (fixed, `inset-0`, `pointer-events-none`, `z-0`).

Scene on a deep charcoal canvas (`#0a0a0a`):
- A soft, self-illuminated ring of light near center, built from stacked radial gradients in cyan `#06B6D4` and warm gold `#EAB308`, blurred and additively blended so it reads as pure light, not a solid ring.
- 250–400 tiny glowing particles (cyan/gold) drifting along a slow curl-noise field, additive blending, gentle size/opacity twinkle.
- Ambient bloom: large low-alpha radial washes bleeding into the darkness, no hard edges.

Motion:
- Constant slow "breathing": halo radius, hue mix, and particle drift evolve on their own via time-based noise.
- Cursor awareness: halo center and particle flow lerp toward the pointer with heavy damping (magnetic sway, no snapping).
- Scroll awareness: scroll velocity biases particle drift direction and slightly rotates/tilts the halo; eases back to rest when scrolling stops.
- All easing uses critically-damped springs / lerp factors around 0.03–0.08. No jitter, no sudden reactions. Honors `prefers-reduced-motion` with a static bloom.

Because the site currently uses a warm paper theme, the charcoal background would be hidden behind opaque section backgrounds. To make the halo visible site-wide as requested, the site shifts to a **dark surface**:
- `--background` → `#0a0a0a`, `--foreground` → near-white, muted/line/card tokens re-tuned for dark.
- Section wrappers that used solid paper (`.psection`, hero, cards) become transparent or use translucent dark surfaces (`bg-background/60` with `backdrop-blur`) so the halo shows through.
- Indigo/coral accents kept for links, chips, and metrics; cyan/gold reserved for the background so brand accents don't clash.

If you'd rather keep the paper theme and only show the halo in the hero, say so and I'll scope it there instead.

## 2. Foreground interactions (site-wide)

- **Magnetic buttons & links**: extend the existing `MagneticButton` and apply it to primary CTAs, persona chips, resume, and social links. Add a lightweight `useMagnetic` hook for anchor tags.
- **Tilt / parallax cards**: new `TiltCard` wrapper using pointer position → `rotateX/rotateY` (max ~6°) with spring easing and a subtle inner-glow that follows the cursor. Applied to Stage cards, Experience cards, and Achievement tiles.
- **Custom cursor**: new `CustomCursor.tsx` — a small cyan dot + larger trailing gold ring, both spring-followed. Morphs (scales up, inverts) over `a`, `button`, `[data-cursor="hover"]`. Hidden on touch devices and when reduced motion is on. Native cursor kept as fallback.
- **Scroll-linked section transitions**: wrap each major section in a `RevealSection` that uses `useScroll` + `useTransform` to fade/scale/translate on enter and slightly parallax on exit. Sparklines and numbers keep their existing draw-in.

## 3. Journey section

No content, ordering, or structural changes. Only visual side-effects from the theme shift and the TiltCard wrapper. Persona system, stage copy, metrics, expandable cards, and the connected timeline stay as they are.

## 4. Cleanup

- Delete `FlowFieldBackground.tsx` and its usage in `src/pages/Index.tsx`.
- Update memory: background is now charcoal halo (cyan/gold), not warm paper; note dark theme shift.

## Technical notes

- Canvas rendered with `requestAnimationFrame`; DPR-capped at 1.5 for perf; pauses when tab hidden (`visibilitychange`).
- Particles stored in typed arrays; curl noise via a small inlined simplex implementation — no new deps.
- All motion via existing `motion` package (already installed). No Three.js/WebGL.
- Tokens updated in `src/index.css` and `tailwind.config.ts`; components continue to use semantic classes (`bg-background`, `text-foreground`), so no hardcoded colors are introduced.
- `CustomCursor` gated on `matchMedia('(pointer: fine)')` and reduced-motion.

## Files

- Add: `src/components/HaloBackground.tsx`, `src/components/CustomCursor.tsx`, `src/components/TiltCard.tsx`, `src/components/RevealSection.tsx`, `src/hooks/useMagnetic.ts`
- Edit: `src/pages/Index.tsx`, `src/index.css`, `tailwind.config.ts`, `PortfolioHero.tsx`, `PortfolioAbout.tsx`, `PortfolioExperience.tsx`, `StageCard.tsx`, `ApnaKlubCard.tsx`, `Cars24Card.tsx`, `StupaCard.tsx`, `PortfolioAchievements.tsx`, `PortfolioContact.tsx`, `PortfolioLayout.tsx`, `ResumeButton.tsx`
- Delete: `src/components/FlowFieldBackground.tsx`
