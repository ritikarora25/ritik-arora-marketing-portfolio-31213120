## Cinematic intro animation — implementation plan

A 15-second SVG-crowd intro that plays over the existing homepage on first visit, tells the funnel story, and hands off to the real portfolio with no visual jump.

### Files touched
- **New:** `src/components/IntroAnimation.tsx`
- **Edit:** `src/pages/Index.tsx` (mount overlay + `onComplete` handler; no wrapper, no content hiding)

No other files change. No new npm packages. No new routes.

### Behavior rules (from your answers)
- **First visit only.** On mount, if `sessionStorage.getItem('intro-played') === '1'` → do not render overlay at all. Otherwise play, then set the flag.
- **Skip button** visible from t=0, bottom-right.
- **Reduced motion** → do not render overlay.
- **Mobile skip:** if `window.matchMedia('(max-width: 640px)').matches` → do not render overlay.
- **Portfolio loads underneath at all times.** Homepage HTML renders normally, fully indexable, no changes to LCP element. The overlay is a fixed layer with `background: var(--paper)` covering it visually. When the intro finishes, overlay fades out and the underlying page is revealed — no wrapping div, no `opacity:0` on content, no `pointer-events:none` on the topbar.

### The 15-second sequence

| Time | Beat |
|---|---|
| 0–2s | 25 figures idle in loose cluster near viewport center; per-figure sway via rAF |
| 2–4s | Five stage labels fade in 200ms apart below the crowd |
| 4–9s | Active label cycles (1s each), crowd choreography per stage: Acquire (drift to focal), Activate (lean + drop-offs walk off & fade), Engage (pair up), Retain (new figures walk in), Monetize (all turn to face same direction) |
| 9–11s | Non-Ritik figures fade upward; stage labels translate to funnel-nav target coordinates |
| 11–13.5s | "Hi, I'm Ritik Arora." fades in around Ritik figure; holds 1.5s |
| 13.5–14.5s | Reveal text shrinks + translates to `.brand` position; Ritik figure walks up and fades; label opacities cross-fade with real funnel nav |
| 14.5–15s | Overlay fades out (600ms), then `display: none` and `sessionStorage` flag set |

### Handoff math
- On mount, after `document.fonts.ready`, measure the real `.brand` element and each `#funnelNav a` via `getBoundingClientRect()`.
- Cache targets in a ref. Recompute once more at t=8.5s to catch late layout shifts.
- Overlay labels animate to these exact rects (position + font-size). At t=14.5s the overlay label opacity fades to 0 in the same 200ms window — the real funnel nav is always visible underneath, so this is a pure fade-away of the overlay label, not a cross-fade of two visible elements.
- Same technique for "Hi, I'm Ritik Arora." → `.brand`.

Because the portfolio always renders underneath, no coordination with hero visibility is needed — the real funnel nav and brand are already at their final positions from t=0.

### Figures (hand-authored SVG)
- 25 figures, ~48–64px tall; one "Ritik" ~72px.
- 6 pose components as inline SVG paths in the same file: `PoseIdle`, `PoseWalk`, `PoseLean`, `PoseCurious`, `PoseCrouch`, `PoseLeave`.
- Simple rounded silhouettes: circle head + rounded-rect torso + two limb paths. No faces. Personality from limb angle and torso tilt.
- Colors sampled from tokens: mostly `--ink` and `--slate` silhouettes, a few `--indigo` accents, Ritik in `--coral` to make him readable at reveal.
- Each figure is an absolutely-positioned wrapper `<div>` containing the SVG. All transforms (translate, rotate, scale, opacity) applied via inline `style` on the wrapper, mutated directly by rAF — never React state per frame.

### Timing engine
- One `useEffect` on mount:
  - Guard: sessionStorage flag, reduced motion, mobile → early return, call `onComplete()`.
  - Await `document.fonts.ready`, measure targets.
  - Kick off master timeline via chained `setTimeout` calls, IDs stored in a ref array.
  - Kick off per-figure idle rAF loop; loop reads current "stage" from a ref to modulate behavior.
- Cleanup: clear all timeouts, cancel rAF, on unmount and on Skip.
- Skip button: clears timers → fades overlay out over 300ms → `display:none` → sets sessionStorage flag → `onComplete()`.

### `Index.tsx` changes
- Import `IntroAnimation`.
- Render `<IntroAnimation onComplete={() => {}} />` as the first child of the returned fragment (above `<PortfolioLayout>`).
- `onComplete` is a no-op — the overlay handles its own dismissal and the underlying page needs no state toggle.

### Constraints honored
- No new packages, routes, contexts, providers, global state.
- No duplicate funnel nav / topbar / brand at any point (overlay labels are visually distinct temporary elements that fade to 0 over the real ones).
- Portfolio HTML always present → LCP unaffected, fully indexable.
- Final state pixel-identical to current homepage.

### Known trade-offs I want you to see before I build
- **Handoff precision depends on `document.fonts.ready`.** Poppins 700 is already preloaded, so this should resolve fast, but if it doesn't fire within 500ms I'll fall back to measuring anyway.
- **The 6 hand-authored poses will be geometric-minimal, not truly Notion-illustrated.** Close in spirit, not identical in fidelity. If you want higher fidelity later, you can swap in illustrated SVGs into the 6 pose components without touching choreography.
- **Choreography feel will need one round of tuning after you see it live** — easing curves, focal points, drop-off count. I'll pick sensible defaults; expect one polish pass.
