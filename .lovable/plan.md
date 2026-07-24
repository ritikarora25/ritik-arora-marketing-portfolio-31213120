Plan to fix the background animation

1. Replace the current background concept
- Remove the current `HaloBackground` visual from the rendered layout.
- Keep the portfolio content/funnel storytelling exactly as-is; only the background/interaction layer changes.
- Build the new background around the uploaded `circle.mp4` reference: a luminous cyan/gold elliptical energy ring on a dark cinematic field.

2. Use the reference video as the visual source of truth
- Add the uploaded MP4 through the project asset flow instead of copying the binary directly into the repo.
- Render it as a fixed, full-viewport, looping, muted, plays-inline background video.
- Position it behind all content with correct `z-index`, opacity, and blending so it is actually visible.

3. Add real interactivity on top
- Add a lightweight canvas overlay above the video but below content.
- Cursor movement will gently pull the ring field/parallax layer and attract nearby particles.
- Scroll velocity will slightly increase glow intensity, particle drift, and ring energy so the background visibly responds while scrolling.
- Click/tap will create a short radial pulse around the cursor.

4. Make the content work with the background
- Keep content readable by preserving translucent surfaces and contrast.
- Adjust only background-related CSS if needed so cards/sections do not fully hide the animated field.
- Keep the top scroll progress line only if it does not distract; otherwise reduce its prominence so the main visible animation is the ring background.

5. Verify visually
- Run the app preview after implementation.
- Check desktop and mobile viewports.
- Confirm: video is visible, animation loops, cursor movement changes the background, scroll changes the background, and text remains readable.