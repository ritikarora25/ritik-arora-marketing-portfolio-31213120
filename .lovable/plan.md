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

## Technical details
- New entry in src/data/thoughts.ts (slug retention-rate-formula) using the existing renderer.
- Cover: public/og/retention-rate-formula.jpg (1200x630) plus 640/1200 WebP.
- No FAQ structured data; no invented dates.
