Plan:

1. **Remove failed/unnecessary background motion code**
   - Remove the current `CrowdBackground` layer from the layout.
   - Delete the `CrowdBackground` component file.
   - Search for and remove any leftover references to old failed background experiments (`CircleBackground`, `InteractiveGrid`, `HaloBackground`, circle media/Lottie references) if present.
   - Keep content, text, Journey format, and layout unchanged.

2. **Simplify remaining motion stack**
   - Keep only motion that is still useful and visible in the foreground: scroll progress, persona chip taps, card/chip hover/reveal effects, and magnetic buttons if they still build cleanly.
   - Remove anything that creates invisible or confusing background behavior.

3. **Run build**
   - Run `bun run build` after cleanup.
   - Fix only build-blocking errors caused by the cleanup.

4. **Run production preview**
   - Start/serve the production preview.
   - Visit the portfolio routes/anchors, including `/`, `/#acquire`, `/#activate`, `/#engage`, `/#retain`, `/#monetize`, and `*`/404 if applicable.

5. **Check console and network**
   - Use browser validation to confirm there are no console errors.
   - Confirm there are no failed asset requests from old background files or removed motion components.

6. **Only then validate motion visibility**
   - Use browser screenshots/frame comparison rather than assumption.
   - Verify the remaining visible motions: scroll progress, hover/tap effects, reveal animations, and any foreground interactivity.
   - If the result still feels weak, I’ll report that honestly before proposing a new whole-page interactive concept.