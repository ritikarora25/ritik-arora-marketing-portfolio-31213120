# Article: Customer retention rate, how to calculate it properly

## Goal
Write a practitioner guide for "customer retention rate", "how to calculate retention rate" and "retention rate formula" that adds what current top pages leave out. Build it the same way as the reactivation article, with a worked example and a worksheet.

## Step 1: Research before writing (nothing gets written until this is done)
1. **Search demand (Semrush, US and India):** volume, difficulty and the question variations people search for, such as cohort retention, repeat purchase rate and churn vs retention. These questions set the section headings.
2. **What already ranks:** open the top 10 pages for each target phrase. Note the formula each one uses, what it skips, and where it is wrong or vague. Typical gaps:
   - mixing up contractual (subscription) and repeat-purchase businesses
   - fixed 30/60/90-day windows
   - new customers inflating the numbers
   - no cohort table
3. **Reliable sources:** find 3–5 that define the formula and cohort method, such as analytics vendor docs (Amplitude, Mixpanel), academic or industry references on cohort analysis, and repeat-purchase benchmarks if credible ones exist. Open each page to confirm it supports the claim it is cited for.
4. **Your own evidence:** pull only the documented retention work from your portfolio (ApnaKlub repeat orders, CARS24 and Freo where relevant). Reported outcomes stay labelled as reported, with no invented baselines.
5. **Save the evidence** (URLs, the date each was opened, what each one supports, the gaps found) in the research folder, with a short "what we add that others don't" summary.

I'll share a short research brief and outline for your approval before writing.

## Step 2: Write the article (after you approve the outline)
- A short direct answer: the formula, plus key takeaways.
- Why the generic formula misleads (the gaps found in Step 1).
- Subscription vs repeat-purchase: the right definition for each.
- Step-by-step cohort calculation with a worked table, clearly labelled as an example.
- Choosing the window from each customer's normal buying rhythm (links to the reactivation article).
- Common mistakes, and a reusable worksheet.
- Visible FAQ built from real searched questions, plus a sources section.
- Links to and from the lifecycle and reactivation articles.

## Step 3: Publish setup
Share image, page title and description, sitemap, llms files, Latest writing, related posts and an IndexNow ping. Then check desktop and mobile and run the existing tests.

## Technical details
- New entry in src/data/thoughts.ts, using the existing renderer (tables, lists, quotes).
- The cover is a 1200x630 JPG plus WebP versions at 640 and 1200 in public/og.
- Research file: .lovable/research/retention-rate-<date>.md.
- No invented dates or statistics, and no FAQ structured data.
