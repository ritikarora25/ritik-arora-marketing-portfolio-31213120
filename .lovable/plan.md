# Make the "get in touch" and intro numbers measurable

## What the click data shows (12–19 Nov 2026, 7 days)
- **Get in touch: no recorded Email, Call, LinkedIn or 15-min chat clicks.** No clicks at all on the Contact section or on the hero buttons.
- **Resume: 1 click**, from the top bar on the Best CRM for 2027 article. The tracking for it should also have recorded a "resume opened" moment, but nothing arrived. So the tracking we added for resume, contact and checklist clicks isn't reaching the analytics.
- **Intro:** we only know about 1–2 clicks on intro controls. There's no proper "skipped" or "watched to the end" record, so we can't yet tell how many people leave during the intro.
- **What people do click:** mostly "Thoughts" in the top bar (5 clicks on the homepage) and article cards on the Thoughts page (8 clicks, 5 visits).
- **Scale:** about 47 visits in these 7 days, so these are early signals, not conclusions.

## What I'll do
1. Fix the resume, contact and checklist tracking so every click really gets recorded on the live site.
2. Add two new records for the intro: "intro skipped" (and at which chapter) and "intro finished".
3. After you publish, test it on the live site myself and confirm each record arrives.
4. After 2–3 weeks of data, come back with the real answer: how many visitors watch the intro, and how many open the resume or get in touch. Only then decide whether to shorten the intro or change the homepage.

Nothing visible on the site changes.

## Technical details
- Click handler lives in PortfolioLayout.tsx and uses window.__lovableEvents.track, but custom_events is empty while a Resume click was autocaptured. Check whether the events in .lovable/events.json are registered (schema_check), whether track is available when clicked, and whether opening a new tab drops the send.
- Add project.intro_skipped { chapter } and project.intro_completed to IntroAnimation.tsx, and register them with catalog_upsert.
