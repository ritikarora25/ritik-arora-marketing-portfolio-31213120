# Article: Retention rate formula, and how to calculate it properly

## Goal
Publish a practitioner guide targeting "retention rate formula", "customer retention rate" and "how to calculate retention rate", built from the approved research. The AI advisor tool is out of scope for now.

## Article outline (ApnaKlub case study removed)
1. Quick answer: the textbook formula ((E − N) / S) × 100 with a short worked calculation, plus key takeaways.
2. Three ways the blended number misleads: new-customer churn hidden by loyal accounts, calendar windows that ignore buying rhythm, and counting accounts instead of real activity.
3. Subscription vs repeat-purchase: the right "retained" definition for each.
4. Setting the active window from each customer's normal buying rhythm (median and 80th-percentile repeat interval, citing Amplitude), linking to the reactivation article.
5. Step-by-step cohort retention with a table clearly labelled as an illustrative example.
6. Common mistakes and a reusable measurement worksheet.
7. Visible FAQ from real searched questions (churn vs retention, customer retention vs revenue retention), sources section, links to lifecycle and reactivation articles.

## Evidence rules
- Every claim tied to an opened source: Amplitude usage interval docs, Zendesk formula guide (baseline we critique), Braze global control groups.
- No ApnaKlub baselines or invented statistics; example numbers labelled illustrative.

## Publish setup
Share image, page title and description, sitemap, llms files, Latest writing, related posts and links from existing articles, IndexNow ping after publish. Check desktop and mobile and run the existing tests.

## AI answer engines (AEO/GEO)
- Open with a 40–60 word direct answer that states the formula, so AI tools and Google snippets can quote it.
- Write question-style headings that match real searches, such as "How do you calculate customer retention rate?" and "What is the difference between churn and retention?", each answered in its first sentence.
- Write takeaways as short, standalone facts. They also feed the article's description for search tools.
- Write the formula as plain text as well, and give the table a clear caption, so AI tools can read both.
- Name sources inline next to each claim, and list the author with his experience.
- Add the article to llms.txt and llms-full.txt with a one-line summary, and keep AI crawlers allowed in robots.txt.
- After publish, test the main questions in ChatGPT, Perplexity and Google AI answers, and note which sources they cite.

## Technical details
- New entry in src/data/thoughts.ts (slug retention-rate-formula) using the existing renderer.
- Cover: public/og/retention-rate-formula.jpg (1200x630) plus 640/1200 WebP.
- No FAQ structured data; no invented dates.
