# Retention rate article research — 2026-11-16

## Demand (Semrush, estimates)
| Keyword | US vol / KD | India vol / KD |
|---|---|---|
| customer retention rate | 1,300 / 33 | 320 / 43 |
| how to calculate retention rate | 1,000 / 35 | 480 / 39 |
| retention rate formula | 1,000 / 42 | 1,600 / 41 |
| customer retention rate formula | 720 / 38 | 140 / 35 |
| repeat purchase rate | 260 / 25 | 20 / 0 |
| churn vs retention | 140 / 19 | — |
| cohort retention | 140 / 31 | 30 / 0 |
Primary: "retention rate formula" (largest in India) + "customer retention rate".

## SERP (US top 10, "customer retention rate")
Salesforce, Zendesk, Productive, Wall Street Prep, BusinessNewsDaily, Maven AGI, CustomerGauge, Canny, Decagon, Triple Whale.
Opened (content read 2026-11-16): Zendesk, Productive, Triple Whale, Canny, Wall Street Prep.

## Gaps found
- All five use the same ((E−N)/S)×100 formula.
- Mentions of cohorts: Zendesk 0, Triple Whale 0, Canny 0, WSP 0, Productive 1. None shows a cohort table.
- None ties the "active" window to each customer's normal buying rhythm (no purchase-interval mentions found).
- Most assume subscription/contract status; repeat-purchase businesses, where nobody "cancels", are barely covered. Productive is the exception: it defines retained rules per engagement type for agencies.
- With E−N, one period's number can hide that last month's customers churned faster than old ones.

## Sources to cite
- Amplitude docs, usage interval (median return interval per user, used to set the retention window): https://amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-interpret-usage
- Zendesk guide (standard formula, as the baseline we critique): https://www.zendesk.com/blog/customer-experience/retention/calculate-customer-retention-rate/
- Braze global control groups (incrementality, previously verified)
- Own: ApnaKlub (reported order rate +5–7%, no baseline published)

## What we add
Choosing between subscription and repeat-purchase definitions, an interval-based active window, a cohort triangle worked example (illustrative), a "why your blended number lies" check, and a worksheet.
