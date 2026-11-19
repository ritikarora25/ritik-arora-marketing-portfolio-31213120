# Your site: what it is, why it works this way, and how to make it better

## 1. What this site is
Your portfolio works as a **case study of your own method**. It's laid out like the growth funnel you run for companies, with you as the product:

| Funnel stage | What does that job on the site |
|---|---|
| Acquire | The Thoughts articles and glossary bring in strangers from Google, Bing, AI search and LinkedIn |
| Activate | The intro and hero show the idea "growth happens in five stages" |
| Engage | The Journey section shows five roles at five stages, and the persona switch lets each visitor read it their way |
| Retain | The articles and "More thoughts" links give people a reason to keep reading and come back |
| Monetize | Resume, Book a 15-min chat, Email, Call and LinkedIn turn a visitor into a conversation |

The goal (your north star): **hiring managers, founders and recruiters find a growth marketer worth hiring and get in touch.**

## 2. Why it's built this way (decisions we already made)
- **The five stages, not a CV list:** they show you've worked across the whole funnel, not one channel ("CRM, retention, growth or brand", as your About section says).
- **Three readers:** recruiter, founder and fellow marketer. The facts stay the same; only the angle changes. That's why the site isn't aimed at one type of role.
- **Thoughts:** they show *how you think*, and they're the only part that can bring in people who don't know your name yet.
- **Warm paper look, Poppins, no gimmicks:** it reads like an editorial notebook rather than a template, which fits "understanding first".
- **Fast pages that search engines and AI can read:** so the articles can be found and quoted.

## 3. How it's performing (20 Oct – 19 Nov 2026)
- **94 visits** and 138 page views.
- **Where visits came from:** 72 Direct (no referrer recorded), 16 LinkedIn, 4 Google, 1 GitHub, 1 Peerlist.
- **Pages:** the homepage was visited in 72 sessions. Best CRM for 2027 had 21, 12 of them from LinkedIn.
- **Engagement:** Direct visits stayed about 15 seconds on average, and 64% left after one page. LinkedIn visits saw about 1.7 pages and none left after one page.
- **Devices and countries:** 77 desktop, 17 mobile. India 45, US 44.
- **Caution:** these are small numbers. Some visits are probably yours.

## 4. Where the site doesn't yet do its job
1. **Article readers don't reach "hire me".** The articles bring people in, but they end at the article. Nothing tells a reader the author does this work for companies and is open to roles.
2. **The first screen is slow to explain you.** On a first visit, a ~42-second intro plays before the hero (it can be skipped). Direct visitors stay ~15 seconds, so many may never get past the intro. This needs checking with the click tracking before we change anything.
3. **The hero text is longer than you asked.** You asked for a two-line description, but it currently wraps to more lines.
4. **Most proof is in the stage cards, further down.** A reader who doesn't scroll misses your strongest numbers. The proof line types itself out slowly.
5. **Articles cover only part of the funnel.** 5 of 6 are about Retain and CRM. Nothing covers Acquire, Activate or Monetize, so the writing looks narrower than the site's story.
6. **We can't see whether the site works.** Contact and resume clicks are tracked, but nobody has looked at them yet, so we don't know how many visitors get in touch.

## 5. What I'd improve (site only, in order)
1. **Read the contact and resume click data**, plus how many people skip the intro. Do this first to confirm points 2 and 6 before redesigning anything.
2. **Article to homepage path:** add a short author note at the end of every article. One line on the five-stage experience, then "See my work" and "Book a 15-min chat".
3. **First screen:** trim the hero description to two lines. Show the proof line in full straight away, with no typing delay. Consider a much shorter intro, depending on what step 1 shows.
4. **Balance the writing across the funnel:** research one article each for Acquire, Activate and Monetize before writing them.
5. **Persona check:** make sure the recruiter, founder and marketer views each lead with the most useful proof and clear next step for that reader.

Nothing here changes the five stages, the theme, or your wide focus.

## Technical details
- Step 1: query the tracked events (project.contact_clicked, resume_opened) and intro skips.
- Step 2: ThoughtPost.tsx, using the existing author box and click tracking.
- Step 3: PortfolioHero.tsx and the .hero-sub styles. The intro timing lives in IntroAnimation.tsx.
- Keep the stage order and names, keep persona copy in journey.ts, and keep the SEO length test passing.
