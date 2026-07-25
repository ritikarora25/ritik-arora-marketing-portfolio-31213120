Plan: make exactly two edits to `src/components/IntroAnimation.tsx`.

Change 1 — Reset animation-started flag on cleanup
- Location: the `return () => { ... }` cleanup function inside the main `useEffect` that contains the rAF loop and `setTimeout` sequence.
- Action: after the existing `cancelAnimationFrame(rafRef.current);` line, add `startedRef.current = false;`.
- Rationale: ensures the effect can safely re-run and re-initialize the animation timeline if the component is re-mounted or the effect re-fires.

Change 2 — Start Ritik off the bottom edge
- Location: the Ritik figure object literal where `isRitik: true` is created.
- Current state: Ritik starts at the center (`x: cx, y: cy, bx: cx, by: cy, tx: cx, ty: cy`).
- Action: change its initial `x`, `y`, `bx`, `by` to a point below the viewport (e.g. `x: cx, y: vh + 80, bx: cx, by: vh + 80`), while keeping `tx: cx` and `ty: cy` so it eases into the center along with the crowd.
- Keep all other Ritik properties unchanged (color, size, pose, opacity flags, etc.).

No other files or behavior will be modified.