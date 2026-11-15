# Site rethink: what would change results most

Your site's foundations (pages loading fast, Google and Bing able to read them, share previews, structured data) are done. Traffic is the main gap: about 10 visits a week, almost all typed in directly, and no articles yet ranking near page one. So this rethink asks what makes a visitor stay, trust you and get in touch. It skips anything that only polishes the setup again.

## 1. The homepage's first 10 seconds
- On desktop, the intro takes about 42 seconds before the portfolio appears. Most recruiters leave long before that. Proposal: play a short version (about 8 seconds) on the first visit only, then go straight to the portfolio on later visits. Keep "Skip intro".
- Add a "proof strip" under the headline with 3 of the strongest numbers already on the page (for example ₹50L+), so the value shows before any scrolling.
- Add one clear main action, "Hiring? Get my resume + a 15-min call", in place of three buttons of equal weight.

## 2. Track what visitors actually do
- Record key actions as events: Resume opened, Email or Call clicked, LinkedIn clicked, checklist downloaded, article read to the end.
- Without this, you can't tell whether any change works.

## Suggested order
Do 1 and 2 together. Both are small changes that show whether visitors get in touch.

## Technical details
- Intro: a first-visit flag read in an effect, and a shortened chapter timeline in IntroAnimation.
- Events: gtag custom events from the existing click handlers. No new scripts.
- Keep the design tokens, Poppins, the 5 funnel stages and the persona system unchanged.

## Needs from you
- For the main button: should it offer a Cal.com booking link, or just the resume plus email?
