# Article: Marketing glossary A–Z (growth, CRM and lifecycle terms)

## Research so far
- "marketing terms": about 1,300 searches a month in the US and 390 in India, moderate difficulty (41–43).
- "digital marketing glossary": about 390 a month in the US and 50 in India, moderate difficulty (34).
- "marketing glossary": about 140 a month in the US, "crm glossary" about 50, both lower difficulty.
- Most big glossaries (HubSpot, Semrush, Moz) cover SEO and ads broadly, but give short or vague definitions of lifecycle, retention and CRM metrics. That's the gap this article fills, because it matches your experience.

## What gets built
- A new article in Thoughts titled "Marketing glossary: A–Z of growth, CRM and lifecycle terms (with formulas)".
- About 120–150 terms, grouped under letters A to Z (with a short note on letters that have no common terms, like X and Z, using real terms such as "Zero-party data").
- Each term gets 1–3 lines: a plain meaning, then the formula in plain text where one exists. Examples: CAC = total acquisition spend ÷ new customers; LTV; churn rate; retention rate; ARPU; CTR; CVR; ROAS; DAU/MAU; NRR; payback period.
- Terms cover acquisition, activation, engagement, retention and monetization, plus CRM, analytics, SEO, paid ads and email/push.
- Where a term has its own tools (for example SEO, CRM, analytics, email, push, A/B testing, attribution), one extra line names the top 2–3 tools with links to their official sites. Example: SEO — Tools: Google Search Console, Semrush, Ahrefs. Tools are picked by wide use, not paid placement, and terms like CTR or churn rate get no tools line.
- An A–Z jump bar at the top so readers can go straight to a letter.
- Formulas are checked against public sources (for example Google Ads help, Amplitude, Mixpanel, HubSpot), and those sources are listed at the end.
- Links from terms to your existing articles: retention rate, reactivation, lifecycle strategy, Best CRM for 2027, CRM vs product.

## Being found in search and AI answers
- A short opening answer, takeaways, and question-style descriptions so ChatGPT, Perplexity and Google can quote single definitions.
- Each term marked as a definition (DefinedTerm) so search engines understand it as a glossary.
- Added to the sitemap, llms.txt and llms-full automatically, with a cover image in the same style as the other articles.
- Bing gets notified after you publish.

## Technical details
- Entry added to `src/data/thoughts.ts` (tags e.g. ["Growth","Analytics"], checked so the related-articles test still passes).
- Letter headings as H2, terms as a semantic definition list (`<dl>`) or bold-term bullets via the shared renderer; add `id` anchors per letter for the jump bar.
- `DefinedTermSet` JSON-LD in `src/lib/content-jsonld.ts` for this slug.
- Cover `public/og/marketing-glossary.jpg` + 640/1200 WebP; line in `public/llms.txt`.
- Research notes saved to `.lovable/research/marketing-glossary-2026-11-18.md`.
- Run tests and check on desktop and phone.
