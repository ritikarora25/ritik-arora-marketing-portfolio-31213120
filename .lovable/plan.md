## Diagnosis

You're right — the core issue is a React re-render invalidating the rAF loop's DOM references. When `setPoses()` fires on stage change, React unmounts and remounts all 26 figure `<div>`s. The rAF loop keeps mutating the old (now detached) nodes via `f.el`, while the new nodes sit frozen at their initial `translate3d(...)` values. That's why motion appears to "stop" after stage 0.

The `ref` callback does reassign `f.el` on remount, but there's a frame gap and, more importantly, the freshly mounted node's inline `style.transform` reflects the *initial* render's `f.x/f.y` snapshot — so even after ref reassignment, the visual jump reads as "frozen."

Fix: bypass React entirely for pose swaps.

## Changes to `src/components/IntroAnimation.tsx`

### 1. Kill the `poses` state (root cause)
- Delete `const [poses, setPoses] = useState<PoseName[]>([])`.
- Delete every `setPoses(...)` call (in figure init and at the end of `applyStageChoreography`).
- Delete the `queueMicrotask(() => setPoses(...))` in the render-phase figure builder.
- Replace the `<Pose>` React component with a plain `const POSE_SVG: Record<PoseName, string>` map holding the 6 SVG strings (same geometry as today, color injected via a `{COLOR}` token replaced at figure-build time since each figure has its own color).
- In JSX, render each figure `<div>` with `dangerouslySetInnerHTML={{ __html: POSE_SVG[f.pose].replaceAll('{COLOR}', f.color) }}`.
- In `applyStageChoreography`, after mutating `f.pose`, do `if (f.el) f.el.innerHTML = POSE_SVG[f.pose].replaceAll('{COLOR}', f.color)`. No React state, no re-render.

### 2. Retime so labels finish appearing before stages fire
- Labels: keep at t=2000ms + 200ms stagger (fully visible ~t=3200ms).
- Stage cycle: fire at **3500, 4500, 5500, 6500, 7500ms** (was 2500–6500).

### 3. Retime the handoff so Monetize gets a full second
- Label-fly to nav: **t=8000ms** (was 6750).
- Reveal Ritik + text: **t=9650ms** (was 8400).
- Assembly to `.brand`: **t=10950ms** (was 9700).
- Fade overlay labels + reveal: **t=11750ms** (was 10400).
- Overlay fade: **t=11950ms** (was 10600).
- `finish(false)`: **t=12550ms** (was 11200).

### 4. Clean transition swap on label fade-out
- Replace `el.style.transition += ', opacity 200ms ease-out'` with a plain assignment: `el.style.transition = 'opacity 200ms ease-out'`.
- Same treatment for the `revealRef` fade in that block.

## Out of scope (explicitly not touched)
- `sessionStorage` — animation continues to play every visit.
- All other files (theme, layout, funnel nav).
- The 5 "other bugs" mentioned — not touching those unless you flag them specifically.

## Verification
- `bun run build` passes.
- Playwright screenshot at t≈4s and t≈8s: figures visibly repositioned per stage, labels highlighted, no frozen crowd.
