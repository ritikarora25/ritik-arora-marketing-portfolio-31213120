# Site rethink: what would change results most

Your site's foundations (pages loading fast, Google and Bing able to read them, share previews, structured data) are done. Traffic is the main gap: about 10 visits a week, almost all typed in directly, and no articles yet ranking near page one. So this rethink asks what makes a visitor stay, trust you and get in touch. It skips anything that only polishes the setup again.

## 1. The homepage's first 10 seconds
- On desktop, the intro takes about 42 seconds before the portfolio appears. Most recruiters leave long before that. Proposal: play a short version (about 8 seconds) on the first visit only, then go straight to the portfolio on later visits. Keep "Skip intro".
- Add a "proof strip" under the headline with 3 of the strongest numbers already on the page (for example ₹50L+), so the value shows before any scrolling.
- Add one clear main action, "Hiring? Get my resume + a 15-min call", in place of three buttons of equal weight.

## 2. Make getting in touch effortless
- Add a short contact form (name, email, role or company, message) that saves each message and emails it to you. Today visitors have to open their own email app or LinkedIn.
- Add a "What I'm looking for" line: role types, start date, remote or onsite. This saves recruiters a back-and-forth.

## 3. Show proof, not just claims
- Add one or two short quotes from past managers or colleagues (you supply the real quotes).
- For each company, add an optional "How I did it" expand. It shows only tools and approach you confirm, with no invented numbers.

## 4. Track what visitors actually do
- Record key actions as events: Resume opened, Email or Call clicked, LinkedIn clicked, checklist downloaded, article read to the end.
- Without this, you can't tell whether any change works.

## 5. Bring readers back
- Add an "Get new field notes by email" signup at the end of each article and on Thoughts. Each new article then reaches people who already know you.

## Suggested order
1, 4 and 2 first: small changes, with the biggest effect on whether a visitor becomes a conversation. Then 3, once you send real quotes. Then 5.

## Technical details
- Intro: a first-visit flag read in an effect, and a shortened chapter timeline in IntroAnimation.
- Contact form and newsletter: Lovable Cloud tables with insert-only public access and checks on the form fields, plus a notification email to you.
- Events: gtag custom events from the existing click handlers. No new scripts.
- Keep the design tokens, Poppins, the 5 funnel stages and the persona system unchanged.

## Needs from you
- Your real testimonial quotes, your preferred role types and availability, and whether you want visitors to book calls (Cal.com link) or only send messages.
