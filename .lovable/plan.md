## Goal

The intro isn't showing because `sessionStorage["intro-played"]` was set on a prior load and now blocks it. Remove that guard so the intro plays every time, for everyone.

## Change

**File:** `src/pages/Index.tsx` (and/or `src/components/IntroAnimation.tsx` — whichever holds the guard)

- Remove the `sessionStorage.getItem("intro-played")` check that decides whether to mount `<IntroAnimation />`.
- Remove the `sessionStorage.setItem("intro-played", "1")` write in the completion/skip handler.
- Keep the Skip button and the `prefers-reduced-motion` fallback (users who opt out of motion still bypass the 15s sequence).
- Keep the mobile/small-viewport handling as-is.

Result: on every fresh navigation to `/`, the intro overlay mounts, plays, and dismisses into the existing homepage. Refresh = replay.

## Notes

- No other files touched.
- No routing, no new state, no visual changes to the homepage itself.
- If we later want "once per visitor" back, we'd reintroduce a localStorage flag with a `?intro=1` override — noted for future, not doing it now.
