import { glossaryBody, glossaryCount, glossarySources } from "./glossary";
export interface Thought {
  slug: string;
  title: string;
  date: string; // ISO
  /** ISO date of the last substantive edit. Set only when an article was genuinely revised; never default to today or copy `date`. */
  updated?: string;
  updatedDisplayDate?: string;
  displayDate: string;
  tags: string[];
  summary: string;
  body: string; // blank lines separate paragraphs; numbered topic titles become H2s
  linkedinUrl?: string;
  seoTitle?: string; // search result title, max 60 chars
  seoDescription?: string; // search result description, 120-160 chars
  ogTitle?: string; // social share headline
  ogDescription?: string; // short social share blurb
  sources?: { label: string; url: string }[];
  takeaways?: string[]; // answer-first summary shown under the title
}

export const thoughts: Thought[] = [
  {
    slug: "growth-marketing-audit-checklist",
    takeaways: [
      "Audit one funnel stage at a time: Acquire, Activate, Engage, Retain, Monetize.",
      "Each stage gets one number to check and one red flag to look for.",
      "Fix the leakiest stage first; more acquisition rarely fixes weak activation or retention.",
      "Turn the audit into one measurable 4–6 week test, then re-run the checklist.",
    ],
    seoTitle: "Growth Marketing Audit Checklist for Startups",
    seoDescription:
      "A stage-by-stage growth marketing audit checklist for early-stage startups: what to check in acquisition, activation, engagement, retention and revenue.",
    ogTitle: "Growth marketing audit checklist for early-stage startups",
    ogDescription:
      "Check each funnel stage against one number and one red flag, then fix the leakiest stage first.",
    title: "Growth marketing audit checklist for early-stage startups",
    date: "2026-11-24",
    displayDate: "Nov 24, 2026",
    tags: ["Growth", "Analytics"],
    summary:
      "A practical growth marketing audit checklist for early-stage startups: tracking basics, then one number, key questions and a red flag for each funnel stage, and how to turn the audit into a plan.",
    body: `> **Quick answer:** a growth marketing audit checks each stage of your funnel, Acquire, Activate, Engage, Retain and Monetize, against one number and one question. Find the stage where the most customers drop out, fix that first, and leave the others alone until it improves.

Most early-stage startups don't need more campaigns. They need to know which part of the funnel is leaking. This checklist is the order I work through when I look at a startup's growth for the first time.

It is a framework, not a benchmark study. The checks are questions to answer with your own data.

### 1. Before you start: get the basics right

- **One tracking source.** Pick the tool you trust for sign-ups, first value and repeat use, such as GA4 or Amplitude, and stop comparing three dashboards.
- **One definition of an active customer.** Write down what "active" means for your product, for example "placed an order in the last 30 days".
- **One north star metric.** A single number that shows customers getting value, as described in Amplitude's North Star Playbook.

### 2. Acquire: are the right people arriving?

- Which two channels bring most sign-ups, and which bring customers who stay?
- What does one new customer cost (CAC) per channel, not just overall?
- Does the landing page promise match what the product does on day one?

**Red flag:** cheap sign-ups from a channel whose users never reach first value.

### 3. Activate: do new users reach first value?

- What is the first moment a user gets value, and how many sign-ups reach it?
- How many steps and days does it take to get there?
- Where in onboarding do most users stop? A GA4 funnel exploration shows this step by step.

**Red flag:** spending more on acquisition while most sign-ups never activate.

### 4. Engage: do they come back in the first weeks?

- What share of activated users return in week 2 and week 4?
- Which messages (email, push, WhatsApp) are sent, and does anyone act on them?
- Is there a reason to come back, built into the product, not only in campaigns?

**Red flag:** high send volume with falling open or click rates.

### 5. Retain: does each new group of customers stay longer?

- Build a cohort view: of customers who joined in a given month, how many are still active 1, 3 and 6 months later? GA4's cohort exploration can do this.
- Is the retention curve flattening, or still falling towards zero?
- When customers leave, is it a product problem or a messaging problem?

**Red flag:** win-back campaigns running before anyone knows why customers left. Diagnose the gap first, then decide on a campaign.

### 6. Monetize: is the value turning into revenue?

- What is revenue per active customer, and is it rising over time?
- How does customer lifetime value (LTV) compare with CAC?
- Which upgrade, repeat-purchase or pricing moment brings in the most revenue?

**Red flag:** discounts used to hit monthly targets, training customers to wait for offers.

### 7. Turn the audit into a plan

- Score each stage red, amber or green from the answers above.
- Pick the one red stage closest to the top of the funnel that still matters for revenue.
- Agree one measurable outcome and a 4–6 week test, then re-run the checklist.

The formulas used here (CAC, LTV, retention rate, churn) are explained in the [marketing terms glossary](/thoughts/marketing-glossary). If the audit shows you need outside help, see [how to choose a freelance growth marketer](/thoughts/how-to-choose-freelance-growth-marketer).

If you'd like a second pair of eyes on your funnel, [book a 15-minute conversation](mailto:ritikchuchra1@gmail.com?subject=Growth%20audit) or [connect on LinkedIn](https://www.linkedin.com/in/ritikarora25/).`,
    sources: [
      {
        label: "Dave McClure: Startup Metrics for Pirates (AARRR funnel)",
        url: "https://www.slideshare.net/slideshow/startup-metrics-for-pirates-long-version/89026",
      },
      {
        label: "Amplitude: The North Star Playbook",
        url: "https://amplitude.com/books/north-star",
      },
      {
        label: "Google Analytics Help: funnel exploration",
        url: "https://support.google.com/analytics/answer/9327974",
      },
      {
        label: "Google Analytics Help: cohort exploration",
        url: "https://support.google.com/analytics/answer/9670133",
      },
      {
        label: "Reforge: the real definition of growth marketing",
        url: "https://www.reforge.com/blog/the-real-definition-of-growth-marketing",
      },
      {
        label: "How to choose a freelance growth marketer",
        url: "/thoughts/how-to-choose-freelance-growth-marketer",
      },
    ],
  },
  {
    slug: "what-does-a-product-marketer-do",
    title: "What do your buyers know about your product before talking to sales?",
    seoTitle: "What Does a Product Marketer Do? The B2B Buyer View",
    seoDescription:
      "B2B buyers research for about 124 days before talking to sales. Here is how product marketing answers their three questions along the way.",
    ogTitle: "What do your buyers know before talking to sales?",
    ogDescription:
      "B2B buyers research for about 124 days first. Product marketing helps them understand, compare and trust a product.",
    date: "2026-11-22",
    displayDate: "Nov 22, 2026",
    tags: ["Product Marketing", "B2B Marketing", "SaaS Marketing"],
    summary:
      "B2B buyers may spend 124 days researching before they reach sales. They ask three questions, and product marketing helps answer each one.",
    takeaways: [
      "B2B buyers may spend about 124 days researching before they contact sales.",
      "They ask three questions: what problem am I solving, which product should I choose, and can I trust it to deliver.",
      "Product marketing helps the right buyers understand a product, consider it and feel confident choosing it.",
    ],
    body: `What do your buyers know about your product before talking to sales?

In B2B, they may have spent 124 days researching, evaluating and discussing solutions even before reaching out to you. That's almost four months of comparing options and forming opinions. I came across this finding in an article by [LinkedIn for Marketing](https://www.linkedin.com/business/marketing/blog/research-and-insights/the-b2b-marketing-mistake-thats-costing-you-the-deal-outcomes).

And during this time, they're trying to figure out three things.

## 1. What problem am I trying to solve?

This is where market research, customer insights and category education come in. They help buyers understand their problems and the solutions available.

## 2. Which product should I choose?

This is where positioning, messaging, use-case pages and competitor comparisons come in. They help buyers understand what makes one product different from another.

## 3. Can I trust this product to deliver?

This is where case studies, customer stories, ROI calculations and product demos help buyers evaluate the product and justify the investment.

And that's not all.

Product marketers also spend time understanding competitors, collecting customer feedback, working with product teams on launches and helping sales teams communicate the product's value.

Put all of this together, and you get a better sense of what a product marketer actually does.

Their job is to help the right buyers understand a product, consider it and feel confident choosing it. And that work starts long before the first sales conversation.

Once a buyer chooses you, the work moves to onboarding and retention; see my [lifecycle marketing strategy](/thoughts/lifecycle-marketing-strategy) and [why CRM fails when retention is a product problem](/thoughts/crm-vs-product-problem).`,
    sources: [
      {
        label: "LinkedIn for Marketing: The B2B marketing mistake that's costing you the deal",
        url: "https://www.linkedin.com/business/marketing/blog/research-and-insights/the-b2b-marketing-mistake-thats-costing-you-the-deal-outcomes",
      },
    ],
    linkedinUrl: "https://lnkd.in/p/gc7QbAKh",
  },
  {
    slug: "how-to-choose-freelance-growth-marketer",
    takeaways: [
      "Define the funnel stage that needs fixing before evaluating anyone.",
      "The right hire for early traction looks different from the right hire for a retention or monetisation problem.",
      "Ask candidates to walk through a funnel problem end-to-end, not just name the channels they know.",
      "In-house results and freelance client results are different things; evaluate both honestly when they appear in a profile.",
    ],
    seoTitle: "How to Choose a Freelance Growth Marketer for a Startup",
    seoDescription:
      "A guide for Indian startups hiring a freelance growth marketer: match the hire to your funnel stage, five questions to ask, and how to read results.",
    ogTitle: "How should Indian startups choose a freelance growth marketer?",
    ogDescription:
      "Match the hire to the funnel stage that is failing, ask five practical questions, and read a candidate's results honestly.",
    title:
      "How should Indian startups choose a freelance growth marketer? Skills, experience and questions to ask",
    date: "2026-11-20",
    displayDate: "Nov 20, 2026",
    tags: ["Growth", "Lifecycle", "CRM"],
    summary:
      "A decision guide for Indian startups hiring a freelance growth marketer: name the failing funnel stage first, what each stage requires, generalist vs specialist, five questions to ask, and how to read in-house vs freelance results.",
    body: `> **Quick answer:** choose a freelance growth marketer by naming the one funnel stage that is failing first. Hire for acquisition if demand is missing, for activation if sign-ups drop before first value, and for lifecycle and retention if customers stop coming back. Then test candidates on a real funnel problem, end to end.

Hiring a growth marketer is easier to get wrong than it looks.

The job title covers too much. A performance marketer who grows acquisition efficiently and a CRM specialist who builds retention systems are both called growth marketers. For a startup, using the wrong one for the wrong stage is expensive.

This article is a decision guide. It covers what to look for at each funnel stage, what questions to ask before hiring, and how to read a candidate’s experience honestly.

## 1. Start with the funnel stage that actually needs work

Before evaluating candidates, name the specific stage of your growth funnel that is failing.

The five stages that matter for most consumer and B2B startups are acquire, activate, engage, retain and monetise. Each one requires different skills and a different kind of hire. The idea builds on Dave McClure’s AARRR “pirate metrics” funnel, which splits growth into acquisition, activation, retention, referral and revenue.

A startup that needs to build audience and inbound demand from scratch has an acquisition problem. A business that is signing up users but losing them before they complete a first meaningful action has an activation problem. A product with reasonable activation but low repeat usage has an engagement or retention problem.

Hiring a generalist when you have one critical bottleneck usually produces unfocused work. Hiring a retention specialist when your acquisition funnel is broken solves the wrong thing.

The clearest signal that you are evaluating this correctly: you can name the stage and the metric before you post the role.

## 2. What each stage actually requires

**Acquire.** Experience in understanding customer segments, channel selection, campaign performance and acquisition cost management. The useful skill is not just knowing how to run campaigns — it is finding where demand actually exists before scaling spend.

At Stupa Sports Analytics, a niche sports-analytics brand with no existing presence, I built social channels from zero, ran Google and Facebook campaigns across India, the USA and Germany, and used off-page SEO and market research to find where demand actually existed. The portfolio reports 13K+ followers within a year and presence in three international markets.

**Activate.** Understanding what happens between registration and first value. This includes onboarding journeys, communication triggers, friction diagnostics and cross-functional coordination with product and engineering.

At Freo, the activation gap between loan approval and disbursal was as much an operations problem as a messaging one — the fix required process documentation, team coordination and an AI-led outreach partnership with product and engineering, not a new campaign.

**Engage.** CRM channel management, event data integrity and cost discipline across channels. At Cars24, seller-side CRM spend was fragmented across five channels. A combination of event schema consolidation, continuous A/B testing on creatives and segmentation, and a WhatsApp chatbot integration produced roughly ₹8L/month in savings and 10% higher chatbot click-through. No single initiative produced that outcome on its own.

**Retain.** Behaviour-based segmentation, [cohort analysis](/thoughts/retention-rate-formula) and communication that connects to observed buying patterns rather than generic reminders. At ApnaKlub, personalised multilingual WhatsApp campaigns built from each user’s top SKUs produced a reported 5–7% improvement in order rate across 200K+ B2B users. The useful lesson is the operating approach: segment by behaviour and buying rhythm, not by days since last login.

**Monetise.** Understanding LTV, AOV, repeat purchase rate and how to build revenue lines on top of a retained base without damaging the experience. At 1K Kirana Bazaar, building the company’s first monetisation charter with FMCG brands generated ₹50L+ in revenue over six months. That initiative was built on an existing base of 150K+ retained kirana users.

> **Evidence note.** The outcomes above come from my in-house professional roles. They describe what moved in those roles, not controlled experiments or freelance client results.

### Which growth marketer fits which stage?

| Funnel stage | Signal it is the bottleneck | Hire for | Red flag in a candidate |
| --- | --- | --- | --- |
| Acquire | Little traffic or rising CAC | Segments, channels, acquisition cost | Scales spend before finding demand |
| Activate | Sign-ups drop before first value | Onboarding, triggers, product coordination | Proposes ads for a product gap |
| Engage | Fragmented channel spend, weak event data | CRM channels, event data, testing | Sends generic blasts with no triggers |
| Retain | Low repeat rate by cohort | Behaviour segments, cohort analysis | Segments only by days since last login |
| Monetise | Flat AOV or LTV | LTV, AOV, revenue lines on a retained base | Monetises at the cost of retention |

This table summarises the section above; it is a framework, not measured data. For definitions of CAC, LTV, AOV and cohort, see the [marketing terms glossary](/thoughts/marketing-glossary).

## 3. Generalist or specialist?

This depends on stage.

An early-stage startup that needs to build acquisition and onboarding simultaneously may need someone who can work across both. A business with a functioning acquisition engine but poor repeat rates needs a specialist in [lifecycle and retention](/thoughts/lifecycle-marketing-strategy). Hiring across all five stages when only one is broken usually produces unfocused output and unnecessary cost.

One useful check: can the candidate you are evaluating explain which stage of your funnel they would not be the strongest fit for? The ones who answer this honestly tend to be more reliable than the ones who say they cover everything.

## 4. Five questions worth asking before hiring

### How would you identify the biggest growth bottleneck in this business?

Look for someone who starts with funnel data and customer behaviour, not channel recommendations.

### Walk me through a campaign or project where your work improved a business metric.

Ask for the specific problem, what was built, how it was measured and what the actual outcome was. Vague answers about being “part of the team that” are not the same as owning a result.

### How do you use customer data to make marketing decisions?

Understanding dashboards is not enough. The useful answer describes how behaviour gets translated into segments, experiments and communication strategy.

### What would your first 30 days look like?

A practical answer includes understanding the business, auditing what is already running, identifying one or two priorities and agreeing on how success will be measured. A strategy deck in week one is a warning sign, not a strength.

### What would you need from our internal team to execute well?

Growth marketing usually requires coordination with product, design, engineering and data. Someone who understands these dependencies before they start will execute faster than someone who discovers them mid-project.

## 5. How to read a candidate’s results honestly

There is a meaningful difference between results from an in-house role and results from independent freelance client work. Both are worth evaluating, but they are different things.

In-house results sit inside a company infrastructure — platform access, data teams, product partnerships, existing tooling. Freelance results are built with what the client has and what the consultant brings independently.

When evaluating either, the questions that matter are the same:

- What problem were they solving?
- What did they own versus contribute to?
- What resources were available?
- What is the actual evidence for the outcome?

A strong answer to those questions is more useful than the label on the engagement.

## 6. How I can help

I am Ritik Arora, a growth and lifecycle marketing professional with 5+ years of experience across fintech, auto, B2B commerce and sports analytics, most recently at Freo.

I’m now taking on freelance and consulting projects with startups that need hands-on support with:

- Growth funnel analysis and identifying conversion bottlenecks
- Customer onboarding and activation journeys
- CRM strategy, segmentation and campaign automation
- Lifecycle marketing and retention programmes
- Customer behaviour analysis and marketing experimentation

The starting point is usually understanding the existing funnel, identifying the most important stage to work on and agreeing on a measurable outcome before execution begins.

If this matches a problem your startup is working on, [book a 15-minute conversation](mailto:ritikchuchra1@gmail.com?subject=15-min%20chat) or [connect on LinkedIn](https://www.linkedin.com/in/ritikarora25/).`,
    sources: [
      {
        label: "Dave McClure: Startup Metrics for Pirates (AARRR funnel)",
        url: "https://www.slideshare.net/slideshow/startup-metrics-for-pirates-long-version/89026",
      },
      {
        label: "Reforge: the real definition of growth marketing",
        url: "https://www.reforge.com/blog/the-real-definition-of-growth-marketing",
      },
      {
        label: "Lenny's Newsletter: how to hire your first growth team (Elena Verna, Andrea Wang)",
        url: "https://www.lennysnewsletter.com/t/hiring",
      },
      { label: "Ritik’s documented experience across all five funnel stages", url: "/" },
      {
        label: "Lifecycle marketing strategy: one question per stage of the funnel",
        url: "/thoughts/lifecycle-marketing-strategy",
      },
      {
        label: "Why CRM fails: when retention is a product problem, not a campaign problem",
        url: "/thoughts/crm-vs-product-problem",
      },
      {
        label: "Customer reactivation: diagnose the gap before a win-back campaign",
        url: "/thoughts/customer-reactivation-before-win-back-campaign",
      },
    ],
  },
  {
    slug: "marketing-glossary",
    takeaways: [
      `A–Z of ${glossaryCount()} marketing terms, each explained in one to three lines.`,
      "Metrics include their formula, such as CAC = spend ÷ new customers and ROAS = ad revenue ÷ ad spend.",
      "Terms with their own software category list the top 2–3 tools, such as SEO: Google Search Console, Semrush, Ahrefs.",
      "Every definition and formula links to the source it was checked against, such as Google Ads Help, Bain or Wikipedia.",
      "Growth, CRM, lifecycle and retention terms are covered in depth, not just SEO and ads.",
    ],
    seoTitle: "Marketing Terms Glossary A–Z: Definitions & Formulas",
    seoDescription:
      "140+ marketing terms A–Z explained in 1–3 lines, with formulas, top tools and a trusted source link for every definition. Free and easy to scan.",
    ogTitle: "Marketing terms glossary A–Z: definitions, formulas and tools",
    ogDescription:
      "140+ marketing terms explained in 1–3 lines, with formulas, top tools and a source link for every definition.",
    title: "Marketing terms glossary A–Z: definitions, formulas and tools",
    date: "2026-11-18",
    displayDate: "Nov 18, 2026",
    tags: ["Growth", "Analytics"],
    summary:
      "Marketing terms glossary from A to Z: 140+ definitions in 1–3 lines, with formulas for CAC, LTV, churn, retention, ROAS, CTR, NPS and NRR, the top tools for terms like SEO and CRM, and a source link for every entry.",
    body: glossaryBody(),
    sources: glossarySources(),
  },
  {
    slug: "retention-rate-formula",
    takeaways: [
      "Customer retention rate = ((E − N) ÷ S) × 100: end customers minus new customers, divided by start customers.",
      "A single blended rate hides new customers leaving, because loyal customers hold the total up.",
      "In repeat-purchase businesses, count someone as retained only if they repeat a value action, such as an order.",
      "Set the window from customers' real repeat gap (median and 80th percentile), not a fixed 30, 60 or 90 days.",
      "Read retention by cohort, and prove campaign effects with a holdout group.",
    ],
    seoTitle: "Retention Rate Formula: How to Calculate It Properly",
    seoDescription:
      "Learn the customer retention rate formula, how to calculate retention rate by cohort, and why the blended number misleads. Worked example inside.",
    ogTitle: "Retention rate formula: how to calculate it properly",
    ogDescription:
      "The textbook retention formula, why the blended number misleads, and how to measure it by cohort and buying rhythm.",
    title: "Retention rate formula: how to calculate customer retention properly",
    date: "2026-11-16",
    displayDate: "Nov 16, 2026",
    tags: ["Retention", "Analytics"],
    summary:
      "The customer retention rate formula, a worked example, and why the blended number misleads. How to define retained for subscription vs repeat-purchase businesses, set the window from buying rhythm, and read an illustrative cohort table, with a worksheet.",
    body: `> **Quick answer:** customer retention rate = ((E − N) ÷ S) × 100, where S is customers at the start of a period, E is customers at the end, and N is new customers gained during it. The formula is right, but the number only means something when "customer" is defined by a real repeat action, the period matches how often customers normally buy, and you read it by cohort.

## How do you calculate customer retention rate?

Take the customers you had at the start of the period, see how many of them are still active at the end, and divide. The textbook version, used by guides such as Zendesk's, gets there by subtracting new customers from the end count: ((E − N) ÷ S) × 100.

A quick worked example. You start the month with 1,000 customers (S). You gain 250 new customers (N) and end with 1,100 (E). Retention rate = ((1,100 − 250) ÷ 1,000) × 100 = 85%.

That is the full calculation. The rest of this guide is about why 85% can be true and still misleading.

## Why does the standard retention rate formula mislead?

It produces one blended number for the whole base, and a blended number hides where customers are actually leaving. Three things go wrong most often.

- **Loyal customers cover for new ones.** Long-standing customers rarely leave, so they hold the total up even when most of last month's new customers never came back.
- **The period ignores how often people buy.** If customers normally reorder every 45 days, a 30-day period marks many healthy customers as lost every month.
- **"Customer" means "has an account".** In businesses without contracts, nobody cancels. People just go quiet, and an account that logged in once without buying still counts as retained.

## Subscription vs repeat-purchase: what counts as "retained"?

In a subscription business, a customer is retained until they cancel, do not renew or fail to pay. The status is explicit, so the textbook formula works fairly well.

In repeat-purchase businesses, such as ecommerce, B2B ordering, marketplaces and lending, there is no cancel button. A customer should count as retained only if they complete the action that creates value (an order, a booking, a drawdown) within their normal buying cycle. Decide this action before you calculate anything; it changes the answer more than the formula does.

## How long should the retention window be?

Set it from how often your customers actually come back, not from a round number like 30, 60 or 90 days. Amplitude's retention documentation describes this as the usage interval: the typical time between a user's repeat actions.

- Measure the days between each customer's first and second purchase across your history.
- Find the median (the typical gap) and the 80th percentile (the gap that covers most customers).
- Use the 80th percentile as your window. A customer who goes longer than that without buying has genuinely lapsed.

If different segments buy at very different speeds, give each its own window. The same idea drives the "lapsed" definition in my [customer reactivation framework](/thoughts/customer-reactivation-before-win-back-campaign).

## How do you calculate cohort retention, step by step?

Group customers by the month they first bought, then track what share of each group buys again in each later month. This is a cohort table, and it shows what the blended number hides.

- Pick the cohort: month of first purchase.
- Pick the action: a repeat purchase, not a login or email open.
- For each cohort, count customers who repeated in month 1, month 2 and so on.
- Divide by the cohort's starting size and read each column top to bottom.

**Illustrative example cohort table (made-up numbers, not real company data).** Share of each cohort placing a repeat order:

| Cohort | New customers | Month 1 | Month 2 | Month 3 | Month 4 |
|---|---|---|---|---|---|
| Jan | 1,200 | 34% | 27% | 24% | 23% |
| Feb | 1,450 | 31% | 25% | 22% | — |
| Mar | 1,600 | 28% | 21% | — | — |
| Apr | 2,100 | 22% | — | — | — |

Read the Month 1 column: 34%, 31%, 28%, 22%. Each newer group of customers comes back less, while the number of new customers keeps rising. A single blended rate could look stable or even improve because of that growth. The cohort table shows the problem is in the early experience, which is often a product or onboarding issue rather than a campaign one, as I describe in [why CRM fails](/thoughts/crm-vs-product-problem).

## What is the difference between churn rate and retention rate?

Churn rate is the share of customers lost in a period, so churn = 100% − retention, but only when both use the same customers, the same action and the same window. Comparing a 30-day churn figure with a 90-day retention figure gives a meaningless answer.

## Is customer retention the same as revenue retention?

No. Customer retention counts people. Revenue retention measures money kept from existing customers, including people who spend more or less. A business can lose customers and still grow revenue retention if the remaining customers spend more, so report both.

## Common mistakes when measuring retention

- Counting logins, visits or email opens as retention instead of a value action.
- Using one fixed window for every segment.
- Reporting only the blended rate and never the cohort table.
- Giving a win-back campaign credit for returns that would have happened anyway. Compare against a holdout group that received nothing, as Braze recommends with control groups.

## Retention measurement worksheet

Answer these before you report a retention number:

- **Retained action:** what exact action makes someone retained?
- **Business type:** subscription (cancel or renew) or repeat-purchase (action within a window)?
- **Window:** what are your median and 80th-percentile repeat gaps, and which do you use?
- **Segments:** which groups buy at a different speed and need their own window?
- **Cohorts:** do you read retention by month of first purchase?
- **Pairing:** do you report churn and revenue retention with the same definitions?
- **Proof:** is there a holdout group behind any campaign result?

For how retention fits with the other funnel stages, see my [lifecycle marketing strategy](/thoughts/lifecycle-marketing-strategy). For quick definitions of churn, cohort, LTV and other terms, see the [marketing terms glossary](/thoughts/marketing-glossary). To check every stage of your own funnel, use the [growth marketing audit checklist](/thoughts/growth-marketing-audit-checklist).`,
    sources: [
      {
        label: "Zendesk: how to calculate customer retention rate (standard formula)",
        url: "https://www.zendesk.com/blog/customer-experience/retention/calculate-customer-retention-rate/",
      },
      {
        label: "Amplitude: interpreting usage interval in retention analysis",
        url: "https://amplitude.com/docs/analytics/charts/retention-analysis/retention-analysis-interpret-usage",
      },
      {
        label: "Braze: using control groups to measure customer engagement impact",
        url: "https://www.braze.com/resources/articles/using-global-control-groups-to-measure-the-impact-of-customer-engagement",
      },
      {
        label: "Customer reactivation framework",
        url: "/thoughts/customer-reactivation-before-win-back-campaign",
      },
    ],
  },
  {
    slug: "lifecycle-marketing-strategy",
    takeaways: [
      "Lifecycle marketing gives each funnel stage — acquire, activate, engage, retain, monetize — one question, one owner and one success event.",
      "Activation is usually an operations problem as much as a messaging problem.",
      "Fix event data before adding more messages or channels.",
      "Judge retention against each customer's own buying rhythm, not a fixed number of days.",
      "Use holdout groups so you know whether a campaign caused the change.",
    ],
    seoTitle: "Lifecycle Marketing Strategy: One Question per Stage",
    seoDescription:
      "A lifecycle marketing strategy built on one question, owner and success event per funnel stage — acquire to monetize — with examples from five roles.",
    ogTitle: "Lifecycle marketing: one question per funnel stage",
    ogDescription:
      "Acquire, activate, engage, retain, monetize — the single question each stage must answer, with real examples from five growth roles.",
    title: "Lifecycle marketing strategy: one question per stage of the funnel",
    date: "2026-11-09",
    displayDate: "Nov 9, 2026",
    tags: ["Lifecycle", "CRM", "Retention"],
    summary:
      "A practical lifecycle marketing strategy built around five stages — acquire, activate, engage, retain, monetize — with the one question each stage must answer and the work that answered it across sports analytics, lending, auto and B2B commerce.",
    body: `A lifecycle marketing strategy is a plan for what a customer needs from you at each stage of their relationship with the product — and what the business needs from them in return. It is not a calendar of campaigns.

Most lifecycle plans fail in the same way: one team owns "CRM", the funnel is treated as a single list, and every stage gets the same tactic — more messages. The better approach is to give each stage one question, one owner and one success event.

I use five stages: Acquire, Activate, Engage, Retain and Monetize. Below is the question each one has to answer, followed by the work from my own roles that answered it. The outcomes are the ones reported in my portfolio; they describe what moved in those roles, not controlled experiments.

1. Acquire: are we reaching people who could actually need this?
Acquisition in a lifecycle strategy is not about volume. It is about bringing in people whose later stages can succeed. The success event is a qualified visitor or lead, not a click.

At Stupa Sports Analytics, a niche sports-analytics brand with no existing presence, I built social channels from zero, ran Google and Facebook campaigns across India, the USA and Germany, and used off-page SEO and market research to find where demand actually existed. The portfolio reports 13K+ followers within a year and presence in three international markets. The lesson: research where demand already is before scaling spend.

2. Activate: does the new user reach first value?
Activation is the most fragile stage, because the user has shown intent but has not yet received anything. Define first value precisely — a completed order, a disbursed loan, a finished setup — and measure the drop-off between each step leading to it.

At Freo, first-time users were dropping off between loan approval and disbursal. I documented customer journeys, agency processes, SOPs and call scripts into one activation framework, led onboarding execution across two agency and three internal team members, and partnered with product, engineering and data science to launch an AI-driven outreach program. The lesson: activation is an operations problem as much as a messaging problem.

3. Engage: is the user building a habit, and is it worth what we spend?
Engagement is where channel sprawl and cost creep happen. Every channel — WhatsApp, SMS, push, RCS, in-app — should earn its place against a clear event, and the event data must be clean enough to target accurately.

At Cars24, seller-side CRM spend was high and event data was fragmented. I consolidated the event schema into one unified journey funnel, ran continuous A/B tests on creatives and segmentation, and shipped an NLP-based WhatsApp chatbot into the CDP. The portfolio reports about ₹8L a month saved (roughly a 20% cost reduction) and 10% higher click-through from the chatbot. The lesson: fix the data before adding messages.

4. Retain: do customers keep coming back on their own rhythm?
Retention should be judged against each customer's normal behaviour, not a fixed number of days. Segment by past behaviour, language and preferred products, and give people a real reason to return rather than a generic reminder.

At ApnaKlub, 200K+ B2B users were disengaging before repeat orders. I built behaviour-based onboarding and upsell segments and launched personalised multilingual WhatsApp campaigns featuring each user's top SKUs, with product, design and growth. The portfolio reports about 5% revenue growth and a 5–7% increase in order rate. I go deeper on this stage in my customer reactivation framework.

5. Monetize: can a retained base fund new revenue without hurting the experience?
Monetization only works on top of the earlier stages. A retained, engaged audience creates options — brand partnerships, upsells, new revenue lines — that a leaky funnel never can.

At KiranaBazaar, 150K+ kirana users needed both retention and a new revenue line with no playbook in place. I built the company's first internal monetization charter with brands such as ITC, HUL, P&G and Godrej, ran personalised push, WhatsApp and SMS journeys, and shipped an in-app brand page. The portfolio reports ₹50L+ revenue in six months, click-through doubling from 0.9% to 1.9%, and a Play Store rank improvement from 130 to 90.

6. How to turn the stages into a working plan
Write one line per stage: the question, the success event, the owner, and the channels allowed to act on it. Then check three things before launching any campaign.

First, which stage is the metric actually failing in? A retention dip is often an activation problem that surfaced late. Second, is this a communication problem at all? CRM accelerates people who already have a reason to act; if the reason is missing, it is a product or positioning problem (I unpack that distinction in [CRM is often asked to solve a product problem](/thoughts/crm-vs-product-problem)). Third, how will you know the campaign caused the change? Agree the measurement window, and use a holdout group where you can.

A lifecycle marketing strategy is useful when it tells you what not to send as clearly as what to send. If every stage has one question and one success event, the campaigns tend to follow.

For the Retain stage in practice, see [how to diagnose the gap before a win-back campaign](/thoughts/customer-reactivation-before-win-back-campaign); for choosing the tools each stage runs on, see [Sales CRM vs Customer Engagement Platform](/thoughts/best-crm-for-2027). Definitions of the terms used here are in the [marketing terms glossary](/thoughts/marketing-glossary). If you are hiring help for one of these stages, read [how to choose a freelance growth marketer](/thoughts/how-to-choose-freelance-growth-marketer); for B2B buyers before sales, see [what a product marketer does](/thoughts/what-does-a-product-marketer-do).`,
    sources: [
      { label: "Ritik's documented experience across all five stages", url: "/#journey" },
      {
        label:
          "Dave McClure: Startup Metrics for Pirates (the AARRR funnel this five-stage model adapts)",
        url: "https://www.slideshare.net/dmc500hats/startup-metrics-for-pirates-long-version",
      },
      {
        label: "Braze: using control groups to measure customer engagement impact",
        url: "https://www.braze.com/resources/articles/using-global-control-groups-to-measure-the-impact-of-customer-engagement",
      },
    ],
  },
  {
    slug: "best-crm-for-2027",
    takeaways: [
      "To pick the best CRM for 2027, ask who closes the deal: a salesperson (Sales CRM) or the product itself (Customer Engagement Platform).",
      "Sales CRMs like HubSpot, Pipedrive and Salesforce manage deals and pipelines.",
      "Customer engagement platforms like Braze, MoEngage and CleverTap trigger messages from in-app behaviour.",
      "Product-led companies with a sales team often need both, connected by shared events.",
      "Confirm current pricing and WhatsApp costs directly with each vendor.",
    ],
    seoTitle: "Best CRM for 2027: Sales CRM vs Engagement Platform",
    seoDescription:
      "Best CRM for 2027? Compare Sales CRM and Customer Engagement Platforms by sales motion, channels and data, with a free downloadable checklist.",
    ogTitle: "Best CRM for 2027: Sales CRM or Customer Engagement Platform?",
    ogDescription:
      "Choosing the best CRM for 2027? Compare Sales CRM and Customer Engagement Platforms by sales motion, channels, data and team capacity, with a downloadable checklist.",
    title: "Best CRM for 2027: Sales CRM vs Customer Engagement Platform",
    date: "2026-11-09",
    displayDate: "Nov 9, 2026",
    tags: ["CRM", "Lifecycle", "Retention", "MarTech"],
    summary:
      "Choose the best CRM for 2027: compare Sales CRM vs Customer Engagement Platform by sales motion, channels, data and team capacity. Includes a free checklist.",
    body: `**The best CRM for 2027 depends on how your customers buy.** Start with a Sales CRM when salespeople manage contacts and close deals. Start with a Customer Engagement Platform (CEP) when product events trigger onboarding, purchase and retention journeys. If you have both motions, you may need both systems with clear ownership.

This guide is for founders, sales leaders and CRM or lifecycle marketers choosing between those two categories. Compare **sales motion, communication channels, data readiness and team capacity**, then use the table and downloadable checklist to build a shortlist.

The recommendations below are practical starting points, not a tested ranking or a promise of future vendor capabilities. The linked vendor sources support the category and pricing distinctions; confirm current features, integrations and total costs before buying.

Buying a tool before defining the job can leave a sales team without the pipeline workflow it needs, or a lifecycle team without reliable event-driven journeys. Start with the customer action you need to support, not the software label.

## First: What Kind of CRM Do You Actually Need?

Before listing tools, here is the question that matters most: who or what is closing the deal?

If a human sales rep is following up, negotiating, and closing — you need a Sales CRM.

If the product itself and automated journeys are nudging users toward activation, purchase, or retention — you need a Customer Engagement Platform (CEP).

These are not the same category. They are built for different problems, different data models, and different teams.

A Sales CRM (Salesforce, HubSpot, Pipedrive) is built around deals and contacts. It tracks where a prospect is in a pipeline, logs calls and emails, manages rep activity, and forecasts revenue.

A Customer Engagement Platform (Braze, MoEngage, CleverTap) is built around events and journeys. It watches what a user does inside your product, segments them by behavior, and fires the right message — push notification, WhatsApp, email, in-app banner — at the right moment.

For a fintech app, test whether the proposed setup can receive KYC events, identify drop-off and send a permitted WhatsApp follow-up. A Sales CRM may support this through integrations; do not assume that buying it alone supplies an app-event journey. For enterprise sales, demonstrate deal stages, rep activity and forecasting rather than assuming a CEP replaces a sales pipeline.

Get this choice wrong and no amount of onboarding will fix it.

## Sales CRM vs Customer Engagement Platform at a glance

| | Sales CRM | Customer Engagement Platform |
|---|---|---|
| Built around | Deals, contacts and accounts | Product events and user behaviour |
| Who closes | A sales rep, through calls, meetings and one-to-one email | The product and automated journeys |
| What triggers action | A deal moving to a new pipeline stage | A user doing (or not doing) something in the app |
| Main channels | Email, phone and meetings | Push, WhatsApp, SMS, in-app and email at scale |
| Measured by | Pipeline value, win rate, forecast accuracy | Activation, retention, repeat purchase |
| Primary owner | Sales or RevOps | Lifecycle or growth, with product/data support |
| Validate before buying | Contact/account imports, deal stages and rep workflows | Event quality, channel permission and journey exit rules |
| Typical tools | HubSpot, Pipedrive, Close, Salesforce, Zoho | Braze, MoEngage, CleverTap, Customer.io, WebEngage |
| Common mistake | Using it to run app retention journeys | Using it to manage a sales team |

> **Quick test:** if your best customers talked to a person before paying, start with a Sales CRM. If they paid without talking to anyone, start with a CEP.

> **Free checklist:** score your team across five criteria and get a shortlist. [Download the Sales CRM vs CEP checklist (PDF)](/downloads/crm-vs-cep-checklist.pdf)

## Best Sales CRMs for 2027

For businesses where a human closes the deal.

## [HubSpot](https://www.hubspot.com/)

Best for: B2B startups and hybrid models with inbound marketing.

HubSpot remains the most complete all-in-one entry point for B2B teams. The free tier is genuinely usable, the UI is clean, and the marketing and sales integration is hard to beat at the SMB level. The catch: pricing scales with contact volume and feature tiers in ways that feel designed to trap you. If your list crosses 10,000 contacts and you need marketing automation, the invoice climbs fast.

Best fit: Seed to Series A B2B teams where marketing and sales share the same system.

## [Pipedrive](https://www.pipedrive.com/) and [Close](https://www.close.com/)

Best for: Founder-led sales and lean teams that just need to close.

Both tools exist to do one thing well: give a small sales team a clean visual pipeline and get out of the way. No bloat, no six-month implementation, no dedicated admin. Pipedrive is the more polished option; Close is built for high-velocity outbound with calling and email sequences baked in. If you are a founder still running sales yourself or managing a team of two to five reps, either of these beats HubSpot on simplicity.

## [Salesforce](https://www.salesforce.com/)

Best for: Post-Series B enterprises with dedicated RevOps.

Salesforce is the enterprise standard for a reason. The customization ceiling is effectively unlimited and the ecosystem — AppExchange, integrations, consulting partners — is unmatched. But it requires real infrastructure to run well: dedicated admins, engineering support for custom objects and flows, and significant onboarding time. Recommending Salesforce to a team under 50 people without RevOps bandwidth is setting them up to fail.

## [Zoho CRM](https://www.zoho.com/crm/)

Best for: Budget-conscious teams that need the basics covered.

Zoho does not get enough credit. It has a solid feature set — pipeline management, email integration, automation workflows, and reporting — at a price point that makes the enterprise players look absurd. It will not wow you on UX and the interface feels dated, but for a bootstrapped team that needs functional CRM coverage without burning budget, it is the most sensible choice on this list.

## Best Customer Engagement Platforms for 2027

For businesses where the product and automated journeys do the heavy lifting.

## [Braze](https://www.braze.com/)

Best for: Global consumer apps at enterprise scale.

Braze is the benchmark. The canvas builder is the most sophisticated journey-building interface in the market — multi-step, multi-channel, real-time event-triggered, with tight content personalization. It handles scale that would break most competitors. The price reflects all of this: Braze is not a growth-stage tool. If you are not running tens of millions of MAUs or do not have a dedicated lifecycle team to run it, you are paying for capabilities you cannot fully use.

## [MoEngage](https://www.moengage.com/)

Best for: High-scale consumer tech in India and SEA.

MoEngage has earned its reputation in the Indian and Southeast Asian consumer internet ecosystem. Strong mobile push deliverability, deep WhatsApp integration — critical for markets where WhatsApp is the primary channel — solid RFM segmentation, and a campaign builder that lifecycle teams can actually use without engineering on call. It has become the default choice for fintech, OTT, and marketplace apps in this region. The analytics layer has matured significantly and the gap with CleverTap on that front is narrowing fast.

## [CleverTap](https://clevertap.com/)

Best for: Retention-first teams that want analytics and engagement in one place.

CleverTap's core differentiator is that the analytics and engagement live in the same platform. You can go from a cohort analysis to a campaign targeting that exact cohort without exporting a single CSV. The behavioral analytics and funnel visualization are genuinely strong. Where it sometimes loses to MoEngage is in campaign execution speed and the richness of the journey builder, but for teams that want to understand their retention data and act on it in the same tool, CleverTap is a natural fit.

## [Customer.io](https://customer.io/)

Best for: Growth engineers and SaaS teams with event-driven data.

Customer.io is built for teams that care about data model quality. The event-based architecture is clean, the webhook support is excellent, and the pricing is transparent and usage-based — a refreshing contrast to the "call us for enterprise pricing" black box most CEPs hide behind. If you have a solid data layer and a growth engineer who wants full control over trigger logic, Customer.io gives more flexibility per dollar than almost anything else on this list.

## [WebEngage](https://webengage.com/)

Best for: D2C and consumer brands needing unified omnichannel workflows.

WebEngage is the quiet workhorse of this category. It does not have Braze's brand cachet or CleverTap's analytics depth, but it is a well-rounded omnichannel suite that consistently performs across email, push, in-app, SMS, and WhatsApp. The journey builder is practical, team support is strong, and the pricing makes it accessible to scaling brands that are not yet at MoEngage or Braze scale. Good choice for D2C and consumer internet businesses that need the full channel stack without enterprise pricing.

## When do you need both?

Many product-led companies end up running both — but not on day one.

- **Self-serve users** sign up, activate and buy inside the product. A CEP handles their onboarding, nudges and retention journeys.
- **High-value accounts** show buying signals — team invites, heavy usage, pricing-page visits — and get handed to a sales rep in the Sales CRM.
- **The connection** is shared data: product events flow to the CRM as account signals, and deal status flows back so automated messages don't contradict a live sales conversation.

Before buying the second tool, agree who owns each customer at each stage. Two tools messaging the same person without rules is worse than one tool used well. This is the same stage-ownership question behind a good [lifecycle marketing strategy](/thoughts/lifecycle-marketing-strategy).

And remember: switching tools will not fix weak retention if customers have no strong reason to come back. That is often [a product problem, not a CRM problem](/thoughts/crm-vs-product-problem).

## The 2027 Decision Framework: 4 Questions Before You Buy

Do not start with the tool. Start with these.

## 1. Who is closing the deal — a human or the product?

Human means Sales CRM. Product and automation means CEP. If the answer is both — enterprise SaaS with product-led growth, for example — you likely need both, and you need to be clear about which team owns which tool before you buy either.

## 2. What are your primary communication channels?

Email and phone calls means any Sales CRM handles this. WhatsApp, mobile push, and in-app means you need a CEP with strong mobile and WhatsApp support. Most Sales CRMs do not come close.

## 3. What does your data architecture look like?

SDK event streaming from the product means CEP-native setup. Warehouse-first with Snowflake or BigQuery and Reverse ETL means look at tools like Customer.io or Braze that have strong warehouse sync support.

## 4. What is your engineering bandwidth?

Dedicated growth engineer or marketing tech team means you can use more powerful, complex tools. Marketing team running independently means prioritize tools with strong no-code journey builders: MoEngage, WebEngage, HubSpot.

## The Short Version

If you sell to businesses with a sales team: start with HubSpot or Pipedrive. Add Salesforce when you have RevOps.

If you run a consumer app, fintech, or marketplace: MoEngage or CleverTap if you are India or SEA-focused. Customer.io if your team is data-heavy. Braze when you are at scale.

## A 2-minute picker by company stage

- **Pre-seed / founder-led sales:** Pipedrive or Close, or HubSpot's free tier. Skip the CEP until you have enough users to segment.
- **Seed to Series A, B2B:** HubSpot as the shared marketing and sales system.
- **Seed to Series A, consumer app:** a CEP with no-code journeys — WebEngage, MoEngage or CleverTap in India and SEA; Customer.io if engineers own the data.
- **Product-led SaaS with a sales team:** a CEP for self-serve users plus a Sales CRM for larger accounts, with clear ownership rules.
- **Post-Series B with RevOps or a lifecycle team:** Salesforce for sales; Braze or MoEngage for high-scale engagement.

These are starting points based on how each category works, not rankings from a controlled test. Check current pricing, data residency and WhatsApp support with each vendor before you buy.

If you are still confused: go back to the one question that settles it — who or what is closing the deal?

The best CRM for 2027 is the one that matches the actual motion of your business. Everything else is noise.

## Frequently asked questions

### Can I use HubSpot or Salesforce to send WhatsApp messages when users drop off in my app?

Only partly. Both can send WhatsApp through add-ons, but they are not built to react in real time to what a user does inside your product. If app behaviour should trigger the message, a Customer Engagement Platform is the better fit.

### When should a business move from a Sales CRM to a Customer Engagement Platform?

You usually do not move — you add one. Add a CEP when a meaningful share of revenue comes from users who sign up and pay without talking to anyone, and you need automated journeys to activate and retain them.

### Is a Customer Engagement Platform the same as marketing automation?

Not quite. Classic marketing automation is mostly email nurture for leads. A CEP works from live product events and reaches users across push, in-app, WhatsApp, SMS and email.

### Do product-led companies need both?

Often, yes. Self-serve users are guided by the CEP, while larger accounts that show buying signals are passed to sales reps in the CRM.

### What is the best CRM for 2027?

There is no single best CRM for 2027 — start from who closes the deal. Founder-led sales teams do well with Pipedrive or Close; inbound B2B teams with HubSpot; larger sales organisations with Salesforce; consumer apps with a CEP such as MoEngage, CleverTap or Customer.io.

If your retention numbers are the reason you are shopping for software, read [customer reactivation: diagnose the gap before a win-back campaign](/thoughts/customer-reactivation-before-win-back-campaign) first — the tool rarely fixes a missing segmentation rule.`,
    sources: [
      {
        label: "Braze: what a customer engagement platform is",
        url: "https://www.braze.com/resources/articles/what-is-a-customer-engagement-platform",
      },
      {
        label: "HubSpot: CRM pricing by seat and tier",
        url: "https://www.hubspot.com/pricing/crm",
      },
      {
        label: "Meta: WhatsApp Business Platform message pricing",
        url: "https://developers.facebook.com/docs/whatsapp/pricing",
      },
    ],
  },
  {
    slug: "customer-reactivation-before-win-back-campaign",
    takeaways: [
      "Diagnose why customers stopped before sending a win-back campaign.",
      "Define 'lapsed' against each customer's normal buying interval, not a fixed 30/60/90 days.",
      "Exclude customers with open service issues or no channel permission.",
      "Measure reactivation against a holdout group; the worked example is illustrative, not real results.",
      "A fill-in worksheet covers segment, reason, message, exit rules and measurement.",
    ],
    seoTitle: "Win-Back Campaign: Diagnose Why Customers Left First",
    seoDescription:
      "Before your next win-back campaign, find why customers stopped buying. A practical customer reactivation framework for B2B repeat-purchase brands.",
    ogTitle: "Diagnose the gap before your next win-back campaign",
    ogDescription:
      "Most reactivation campaigns fail because nobody asked why customers left. A practical framework for finding the gap first.",
    title: "Customer reactivation: diagnose the gap before a win-back campaign",
    date: "2026-11-01",
    displayDate: "Nov 1, 2026",
    tags: ["CRM", "Retention", "Lifecycle"],
    summary:
      "A B2B customer reactivation framework with an illustrative repeat-order example and a reusable segmentation worksheet: diagnose inactivity, match the message to the barrier, and measure meaningful returns.",
    body: `> **Quick answer:** a win-back campaign is a message or offer sent to customers who stopped buying, to bring them back. Before you send one, check why they went quiet: a lost habit, a lost reason to buy, or a barrier like stock, price or service. Send a win-back campaign only when a message can fix that reason, and measure it against a holdout group.

Customer reactivation means helping a previously active customer return to a meaningful product action after a period of inactivity. In a repeat-purchase business, that action is usually another completed order—not opening a message.

For CRM and lifecycle marketers, the first question is not which win-back message to send. It is whether the customer has lost the habit, lost the reason to buy, or hit a barrier the campaign cannot remove.

> **Evidence note:** This framework builds on the behaviour-based segmentation and multilingual WhatsApp work documented in my ApnaKlub experience. It is a proposed approach, not a claim that a specific win-back experiment was run there.

## Reactivation vs win-back: what is the difference?

A win-back campaign is one tactic inside customer reactivation. Reactivation is the wider job: working out why someone stopped, then deciding whether a message, a service fix or a product change is what brings them back.

| | Customer reactivation | Win-back campaign |
|---|---|---|
| Starts with | Diagnosing why the customer went quiet | A message or offer to a lapsed list |
| Scope | Messaging, service recovery and product barriers | Usually messaging and incentives |
| Success measure | A meaningful return action, such as a completed order | Often opens, clicks or redemptions |
| Best used when | You don't yet know the reason for inactivity | The reason is known and a message can address it |

## 1. Define inactivity around the customer's buying pattern

An inactivity window should reflect how customers normally use the product. One fixed cutoff can incorrectly label an occasional buyer as lost while missing a frequent buyer who has already stopped returning.

Start with completed-order history. Compare the time since the last order with the usual interval for a relevant customer segment. Separate customers who have purchased before from people who never completed a first order: reactivation and activation are different problems.

Write down the eligibility rule, the qualifying return event and the measurement window before launching. Use a window supported by your own data rather than treating a generic number of days as a universal benchmark.

## 2. Segment by the reason a return could make sense

Past behaviour offers a better starting point than one list of everyone who has gone quiet. Look at previous purchase frequency, preferred categories or SKUs, language preference and whether there is an unresolved service issue.

A previously frequent buyer who missed an expected order needs a different conversation from an occasional buyer who only shops when a particular item is available. A customer with a delivery or payment problem may need service recovery before any promotion.

These are diagnostic segments to test, not reasons to infer intent with certainty. Check product availability and customer feedback alongside event data. Exclude customers who have opted out, and use only channels where contact is permitted.

## 3. Restore relevance before adding an incentive

The message should offer a credible reason to return. For a repeat-order journey, that might be the availability of a previously purchased SKU, a useful replenishment reminder or a resolved ordering barrier. Only make claims that the current product experience can fulfil.

At ApnaKlub, my documented work covered a 200K+ B2B user base. It included behaviour-based onboarding and upsell segments, plus personalised multilingual WhatsApp campaigns featuring each user's top SKUs, delivered jointly with product, design and growth.

> **Reported outcomes, not proven campaign lift:** The portfolio reports approximately 5% revenue growth and a 5–7% increase in order rate. The public record does not specify the baseline, measurement window or a control group.

The useful lesson is the operating approach: connect the communication to observed buying behaviour and language, rather than assuming a generic reminder is enough. A discount is one possible test, not the default explanation for why someone stopped buying.

## 4. Build a journey that stops when the customer returns

Choose one primary return action and make the destination match it. A SKU-led message should lead to a relevant, available product or ordering destination—not an unrelated screen.

Check completed-order events before each follow-up. Remove customers from the reactivation journey when they return, unsubscribe or become ineligible. Coordinate channels so the same person does not receive conflicting reminders from separate campaigns.

Test the event mapping and exclusions with a small eligible cohort before expanding. If the product cannot recognise a completed order reliably, fix that gap before adding more messages.

## 5. Measure returned customers, then ask what was incremental

Clicks help diagnose communication, but they are not the reactivation outcome. Track the share of eligible customers who complete the defined return action within the agreed window. Also monitor net revenue, incentive costs, opt-outs and whether returning buyers order again.

Where feasible, randomly reserve a comparable holdout group that does not receive the reactivation campaign. Compare return rates over the same window. The difference helps estimate the effect of the campaign beyond returns that would have happened anyway; an observed conversion count alone cannot establish that.

Treat small samples and short windows cautiously. A quick purchase followed by another long absence is different from renewed repeat behaviour. Do not change the success definition after seeing the result.

## 6. Illustrative B2B example: a missed replenishment order

This example follows one fictional retailer from a missed order to a proposed reminder and a measurement plan.

> **Illustration only:** This is not an ApnaKlub case study or a campaign I claim to have run. Every timing and count below is hypothetical—not a benchmark or a reported result.

**The situation**

- **Past behaviour:** six completed orders, usually about 14 days apart.
- **Current gap:** no completed order for 28 days.
- **First question:** is this a missed buying habit, a seasonal pause or an ordering problem?

A missed cycle is a reason to investigate, not proof of why the retailer stopped. Compare similar buyers and check seasonality first.

**Check before sending**

- **Stock:** the retailer's usual SKU is available.
- **Permission:** WhatsApp contact is allowed, and the preferred language is known.
- **Service:** there is no unresolved delivery or payment issue.

If stock is unavailable, a reminder cannot fix it. If a service issue is open, resolve that before promoting another order. Only then test the hypothesis that the retailer missed a replenishment habit.

**Who enters this example journey?**

- At least three completed orders.
- A usual buying interval of roughly 14 days.
- At least 28 days since the last completed order.
- Valid channel permission and no open service issue.

These are hypothetical cutoffs. Choose real thresholds from your own purchase history. Customers who never completed a first order belong in activation, not reactivation.

**The proposed message**

> “Hi [retailer name], [previously purchased SKU] is available to order again. View the current stock and price here: [SKU ordering link].”

This is a draft to test, not proven conversion copy. Confirm stock, price and the destination before sending. Do not promise unsupported delivery terms or savings.

**What counts as a return?**

- **Success event:** a completed order within 14 days of assignment.
- **Before each follow-up:** check whether the account has already returned.
- **Stop messages on:** return, opt-out, lost eligibility or a new unresolved issue.
- **Track separately:** cancellations and refunds, then later repeat orders.

**How to read the result**

Imagine 1,000 eligible accounts randomly split into two equal groups. A holdout is the group that does not receive the campaign.

- **Contacted group:** 60 returns out of 500 accounts = 12%.
- **Holdout group:** 45 returns out of 500 accounts = 9%.
- **Observed difference:** 12% − 9% = 3 percentage points.
- **Difference in returning accounts:** 60 − 45 = 15—not 60 campaign-caused returns.

> **Do not treat these invented counts as evidence of real lift or statistical significance.** Check uncertainty, group comparability, net revenue and subsequent repeat orders before scaling.

## 7. Practical segmentation worksheet

Complete one sheet per segment. Keep observed facts separate from your explanation of why customers stopped buying. The examples below refer only to the fictional retailer above.

**A. Segment and buying pattern**

- **Segment name:** ______
- **Prior completed-order count:** ______
- **Typical buying interval and calculation:** ______
- **Inactivity threshold and evidence:** ______
- **Seasonal exceptions:** ______

> **Example:** frequent replenishment buyers who have missed two assumed 14-day buying cycles.

**B. Observed signal and reason to return**

- **Last order, preferred SKUs/categories and language:** ______
- **Open delivery, payment or service issues:** ______
- **Hypothesis about the lapse:** ______
- **Evidence that supports or challenges it:** ______
- **Verified reason to return now:** ______

> **Example:** the usual SKU is in stock. “Missed habit” is still a hypothesis until checked against feedback and behaviour.

**C. Eligibility and exclusions**

- **Required purchase history and inactivity rule:** ______
- **Channel permission check and suppression source:** ______
- **Exclusions:** never-activated customers, opt-outs, unavailable products and unresolved barriers, as appropriate.
- **Service-recovery owner:** ______

> **Example:** move an account with an open delivery complaint out of promotion and into service recovery.

**D. Message and destination**

- **Proposed message, channel and language:** ______
- **Relevant ordering destination:** ______
- **Owner checking stock, price and promises:** ______
- **Follow-up timing and maximum contacts:** ______
- **Cross-channel coordination:** ______

> **Example:** a verified SKU-led reminder, not a blanket discount to every inactive account.

**E. Return event and exit rules**

- **Qualifying completed action:** ______
- **Measurement window and start point:** ______
- **Event checked before every send:** ______
- **Exit on:** return, opt-out, lost eligibility or a new unresolved issue.
- **Cancellation/refund handling:** ______

> **Example:** a completed order within the assumed 14-day window; follow-ups stop as soon as it occurs.

**F. Measurement and decision**

- **Eligible accounts assigned — contacted / holdout:** ______ / ______
- **Returning accounts — contacted / holdout:** ______ / ______
- **Net revenue, incentive cost and opt-outs:** ______
- **Subsequent repeat-order window:** ______
- **Uncertainty checks:** ______
- **Scale / revise / stop criteria agreed before launch:** ______

**Return rate** = returning accounts ÷ assigned eligible accounts.

**Observed difference** = contacted return rate − holdout return rate, in percentage points.

> **Without a comparable holdout, report observed returns—not proven incremental campaign impact.**

Review the completed sheet with product, service and growth before launch. If the reason-to-return or event-verification fields are blank, more persuasive copy is not the next fix.

## 8. Decide whether CRM is actually the right fix

Before approving the campaign, answer four questions: Who is inactive relative to their usual behaviour? What credible reason do they have to return now? Can the product deliver that promise? What evidence will distinguish campaign-driven returns from natural ones?

If the reason to return is missing, revisit product value or positioning first. CRM can make an existing reason timely and relevant. It cannot manufacture a need the customer does not have.

Reactivation is one stage of a wider plan; see [lifecycle marketing strategy: one question per stage](/thoughts/lifecycle-marketing-strategy). Definitions of the terms used here are in the [marketing terms glossary](/thoughts/marketing-glossary).`,
    sources: [
      {
        label: "How to calculate retention rate by cohort and buying rhythm",
        url: "/thoughts/retention-rate-formula",
      },
      {
        label: "Ritik's documented ApnaKlub retention experience and reported outcomes",
        url: "/#retain",
      },
      {
        label: "Bloomreach: judging inactivity against purchase rhythm",
        url: "https://www.bloomreach.com/en/blog/win-back-emails-guide",
      },
      {
        label: "Braze: using control groups to measure customer engagement impact",
        url: "https://www.braze.com/resources/articles/using-global-control-groups-to-measure-the-impact-of-customer-engagement",
      },
    ],
  },
  {
    slug: "crm-vs-product-problem",
    takeaways: [
      "CRM can accelerate users who already have a reason to act; it cannot create that reason.",
      "Before briefing a campaign, check whether drop-off comes from friction, unclear value or no real need.",
      "Unclear value and missing need are product or positioning problems, not messaging problems.",
    ],
    seoTitle: "Why CRM Fails: When Retention Is a Product Problem",
    seoDescription:
      "When retention drops, CRM gets blamed. Learn to tell drop-off, unclear value and no real need apart before you brief your next CRM campaign.",
    ogTitle: "CRM can’t fix a product problem",
    ogDescription:
      "When retention dips, CRM gets the blame. Three signs the real problem is the product — and what to do instead.",
    title: "Why CRM fails: when retention is a product problem, not a campaign problem",
    date: "2026-10-07",
    displayDate: "Oct 7, 2026",
    tags: ["CRM", "Product Marketing", "Lifecycle"],
    summary:
      "When a metric drops, the instinct is to fix the communication. But CRM only moves people who already have a reason to act — it can't manufacture one. Three different problems, three different fixes.",
    body: `CRM is often asked to solve a product problem.

I’ve worked across onboarding, reactivation and conversion journeys, and I’ve noticed the same pattern: when a metric drops, the first instinct is usually to fix the communication.

Sometimes that works.

But there are three very different problems:

1. People want the product, but are dropping off
CRM can help. Better timing, segmentation and journeys can move the metric.

2. People may want it, but the value isn't clear
This is where product marketing matters. The positioning, message and value proposition need work.

3. People simply don't have a strong reason to buy or come back
No amount of CRM optimisation can manufacture that.

This is the distinction I find useful:

CRM helps move someone who already has a reason to act.

Product marketing helps make that reason clear in the first place.

So before asking, “What campaign should we run?”

Maybe the better question is:
“Why should this customer care?”

## Why CRM fails when the problem is upstream

The sections above are the original LinkedIn post. What follows expands it into a diagnostic you can run before briefing a campaign. It is a proposed framework drawn from my work, not the result of a controlled study.

CRM gets the blame because it is the fastest lever to pull. A new journey can ship in a week; a positioning change or a product fix takes longer and needs other teams. So the metric drop lands on whoever can send a message tomorrow.

Marc Andreessen made a related point years ago: when the market and product do not fit, no amount of execution elsewhere saves the outcome. Messaging is part of execution. It amplifies demand that exists; it rarely creates it.

## How to tell which problem you have

Look at behaviour before you look at messages.

- **Drop-off problem:** people start the key action and stop part way — an incomplete KYC, an abandoned cart, a half-finished setup. Intent is visible in the data.
- **Clarity problem:** people visit, browse and leave without starting. They ask questions support could answer in one line. Different segments describe the product differently.
- **Need problem:** even people who completed the first value moment do not return, and reminders produce opens but not repeat actions.

> **Quick test:** if your best-fit users, who already got value once, are not coming back, the issue is unlikely to be the reminder.

## Who should own each fix

| Problem | Signal | Primary owner | What CRM can do |
|---|---|---|---|
| Drop-off | Started but did not finish | CRM / lifecycle | Timing, segmentation, nudges, removing friction in the journey |
| Unclear value | Visited but did not start | Product marketing | Test the new message once positioning is agreed |
| No strong need | Got value once, did not return | Product and leadership | Measure, and avoid spending budget trying to force it |

## A five-question check before any new campaign

- Which stage of the funnel is the metric actually failing in?
- Is there evidence of intent — a started action — among the people you want to message?
- Can a customer explain, in one sentence, why they should care?
- Did people who reached first value come back without being reminded?
- How will you know the campaign caused the change — is there a holdout group?

If the answers point to drop-off, CRM is the right fix. If they point to clarity, brief product marketing first. If they point to need, the honest move is to raise it as a product question rather than launch another journey.

For how this fits into each funnel stage, see [lifecycle marketing strategy: one question per stage](/thoughts/lifecycle-marketing-strategy). For a worked retention example, see [customer reactivation: diagnose the gap before a win-back campaign](/thoughts/customer-reactivation-before-win-back-campaign).`,
    sources: [
      {
        label: "Marc Andreessen: the only thing that matters (product–market fit)",
        url: "https://pmarchive.com/guide_to_startups_part4.html",
      },
      {
        label: "Lenny Rachitsky: how to know if you’ve got product–market fit",
        url: "https://www.lennysnewsletter.com/p/how-to-know-if-youve-got-productmarket",
      },
      {
        label: "Ritik's documented onboarding, reactivation and conversion work",
        url: "/#journey",
      },
    ],
    linkedinUrl: "https://lnkd.in/p/dpcZXJ-N",
  },
];

export const getThought = (slug: string) => thoughts.find((t) => t.slug === slug);

/** Other posts ranked by shared tags, then newest first. */
const linksTo = (a: Thought, slug: string) =>
  a.body.includes(`/thoughts/${slug}`) ||
  (a.sources ?? []).some((s) => s.url === `/thoughts/${slug}`);

export const getRelatedThoughts = (slug: string, limit = 3) => {
  const current = getThought(slug);
  if (!current) return [];
  return thoughts
    .filter((t) => t.slug !== slug)
    .map((t) => ({
      t,
      score:
        t.tags.filter((tag) => current.tags.includes(tag)).length +
        (linksTo(current, t.slug) ? 1 : 0),
      inbound: thoughts.filter((o) => linksTo(o, t.slug)).length,
    }))
    .sort((a, b) => b.score - a.score || b.inbound - a.inbound || b.t.date.localeCompare(a.t.date))
    .slice(0, limit)
    .map(({ t }) => t);
};
