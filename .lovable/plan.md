Plan:

1. Make the circle motion actually visible
   - Stop moving/rotating the full-screen background layer, because a full-viewport symmetric ring can look stationary even when transformed.
   - Add a dedicated inner motion wrapper around the Lottie/WebM media and animate that visible ring element directly.
   - Use a clear circular orbit plus rotation with a shorter cycle, so it visibly travels around center instead of only zooming/tilting.
   - Keep cursor tilt and click shockwaves, but separate them from the base circular motion so they do not cancel or hide the spin.

2. Stop experience-section color changes
   - Remove the section-aware hue-changing logic that updates `--bg-hue` while scrolling through Acquire / Activate / Engage / Retain / Monetize.
   - Keep `--bg-hue`, `--bg-sat`, and `--bg-bright` in CSS for future reusable recoloring, but make them static unless manually edited.
   - Do not change `.exp-card`, stage cards, journey text, metrics, or content styling/colors.

3. Validate in preview
   - Check the live page at the current journey section.
   - Confirm the ring visibly moves in a circular path without needing cursor movement.
   - Confirm scrolling the experience sections no longer changes their perceived color.
   - Check the browser console for background/Lottie errors.