export interface Thought {
  slug: string;
  title: string;
  date: string; // ISO
  displayDate: string;
  tags: string[];
  summary: string;
  body: string; // blank lines separate paragraphs; numbered topic titles become H2s
  linkedinUrl?: string;
  ogTitle?: string; // social share headline
  ogDescription?: string; // short social share blurb
  sources?: { label: string; url: string }[];
  takeaways?: string[]; // answer-first summary shown under the title
}

export const thoughts: Thought[] = [
  {
    slug: "lifecycle-marketing-strategy",
    takeaways: [
      "Lifecycle marketing gives each funnel stage — acquire, activate, engage, retain, monetize — one question, one owner and one success event.",
      "Activation is usually an operations problem as much as a messaging problem.",
      "Fix event data before adding more messages or channels.",
      "Judge retention against each customer's own buying rhythm, not a fixed number of days.",
      "Use holdout groups so you know whether a campaign caused the change.",
    ],
    ogTitle: "Lifecycle marketing: one question per funnel stage",
    ogDescription: "Acquire, activate, engage, retain, monetize — the single question each stage must answer, with real examples from five growth roles.",
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

For the Retain stage in practice, see [how to diagnose the gap before a win-back campaign](/thoughts/customer-reactivation-before-win-back-campaign); for choosing the tools each stage runs on, see [Sales CRM vs Customer Engagement Platform](/thoughts/best-crm-for-2027).`,
    sources: [
      { label: "Ritik's documented experience across all five stages", url: "/#journey" },
      { label: "Dave McClure: Startup Metrics for Pirates (the AARRR funnel this five-stage model adapts)", url: "https://www.slideshare.net/dmc500hats/startup-metrics-for-pirates-long-version" },
      { label: "Braze: using control groups to measure customer engagement impact", url: "https://www.braze.com/resources/articles/using-global-control-groups-to-measure-the-impact-of-customer-engagement" },
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
    ogTitle: "Best CRM for 2027: Sales CRM or Customer Engagement Platform?",
    ogDescription: "The best CRM for 2027 depends on who closes the deal — a person or the product. A no-fluff guide to picking between HubSpot, Salesforce, Braze, MoEngage, CleverTap and more.",
    title: "Best CRM for 2027: Sales CRM vs Customer Engagement Platform",
    date: "2026-11-09",
    displayDate: "Nov 9, 2026",
    tags: ["CRM", "Lifecycle", "Retention", "MarTech"],
    summary:
      "The best CRM for 2027 depends on who closes the deal. Two very different kinds of software get called CRM — a guide to choosing between Sales CRMs (HubSpot, Pipedrive, Salesforce, Zoho) and Customer Engagement Platforms (Braze, MoEngage, CleverTap, Customer.io, WebEngage).",
    body: `Most teams are solving the wrong problem.

They type best CRM into Google, pick whatever ranks highest or whatever their Series A friend is using, spend three months on onboarding, and then wonder why the tool is not delivering. The campaigns are not going out. The sales team is not adopting it. The retention numbers have not moved.

The problem usually is not the tool. It is that they bought a hammer when they needed a screwdriver.

There are two fundamentally different categories of software that get called CRM — and they solve completely different problems. Picking the wrong one is one of the most expensive and time-consuming mistakes a growth or sales team can make in 2027.

This guide breaks it down without the fluff.

## First: What Kind of CRM Do You Actually Need?

Before listing tools, here is the question that matters most: who or what is closing the deal?

If a human sales rep is following up, negotiating, and closing — you need a Sales CRM.

If the product itself and automated journeys are nudging users toward activation, purchase, or retention — you need a Customer Engagement Platform (CEP).

These are not the same category. They are built for different problems, different data models, and different teams.

A Sales CRM (Salesforce, HubSpot, Pipedrive) is built around deals and contacts. It tracks where a prospect is in a pipeline, logs calls and emails, manages rep activity, and forecasts revenue.

A Customer Engagement Platform (Braze, MoEngage, CleverTap) is built around events and journeys. It watches what a user does inside your product, segments them by behavior, and fires the right message — push notification, WhatsApp, email, in-app banner — at the right moment.

The costly mistake: a fintech app buying HubSpot to run retention campaigns, only to discover it cannot trigger a WhatsApp message when a user drops off mid-KYC. Or a B2B SaaS buying MoEngage for their enterprise sales team, only to find there is no deal stage or rep activity tracking.

Get this choice wrong and no amount of onboarding will fix it.

## Sales CRM vs Customer Engagement Platform at a glance

| | Sales CRM | Customer Engagement Platform |
|---|---|---|
| Built around | Deals, contacts and accounts | Product events and user behaviour |
| Who closes | A sales rep, through calls, meetings and one-to-one email | The product and automated journeys |
| What triggers action | A deal moving to a new pipeline stage | A user doing (or not doing) something in the app |
| Main channels | Email, phone and meetings | Push, WhatsApp, SMS, in-app and email at scale |
| Measured by | Pipeline value, win rate, forecast accuracy | Activation, retention, repeat purchase |
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
      { label: "Braze: what a customer engagement platform is", url: "https://www.braze.com/resources/articles/what-is-a-customer-engagement-platform" },
      { label: "HubSpot: CRM pricing by seat and tier", url: "https://www.hubspot.com/pricing/crm" },
      { label: "Meta: WhatsApp Business Platform message pricing", url: "https://developers.facebook.com/docs/whatsapp/pricing" },
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
    ogTitle: "Diagnose the gap before your next win-back campaign",
    ogDescription: "Most reactivation campaigns fail because nobody asked why customers left. A practical framework for finding the gap first.",
    title: "Customer reactivation: diagnose the gap before a win-back campaign",
    date: "2026-11-01",
    displayDate: "Nov 1, 2026",
    tags: ["CRM", "Retention", "Lifecycle"],
    summary:
      "A B2B customer reactivation framework with an illustrative repeat-order example and a reusable segmentation worksheet: diagnose inactivity, match the message to the barrier, and measure meaningful returns.",
    body: `Customer reactivation means helping a previously active customer return to a meaningful product action after a period of inactivity. In a repeat-purchase business, that action is usually another completed order—not opening a message.

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

1. Define inactivity around the customer's buying pattern
An inactivity window should reflect how customers normally use the product. One fixed cutoff can incorrectly label an occasional buyer as lost while missing a frequent buyer who has already stopped returning.

Start with completed-order history. Compare the time since the last order with the usual interval for a relevant customer segment. Separate customers who have purchased before from people who never completed a first order: reactivation and activation are different problems.

Write down the eligibility rule, the qualifying return event and the measurement window before launching. Use a window supported by your own data rather than treating a generic number of days as a universal benchmark.

2. Segment by the reason a return could make sense
Past behaviour offers a better starting point than one list of everyone who has gone quiet. Look at previous purchase frequency, preferred categories or SKUs, language preference and whether there is an unresolved service issue.

A previously frequent buyer who missed an expected order needs a different conversation from an occasional buyer who only shops when a particular item is available. A customer with a delivery or payment problem may need service recovery before any promotion.

These are diagnostic segments to test, not reasons to infer intent with certainty. Check product availability and customer feedback alongside event data. Exclude customers who have opted out, and use only channels where contact is permitted.

3. Restore relevance before adding an incentive
The message should offer a credible reason to return. For a repeat-order journey, that might be the availability of a previously purchased SKU, a useful replenishment reminder or a resolved ordering barrier. Only make claims that the current product experience can fulfil.

At ApnaKlub, my documented work covered a 200K+ B2B user base. It included behaviour-based onboarding and upsell segments, plus personalised multilingual WhatsApp campaigns featuring each user's top SKUs, delivered jointly with product, design and growth.

> **Reported outcomes, not proven campaign lift:** The portfolio reports approximately 5% revenue growth and a 5–7% increase in order rate. The public record does not specify the baseline, measurement window or a control group.

The useful lesson is the operating approach: connect the communication to observed buying behaviour and language, rather than assuming a generic reminder is enough. A discount is one possible test, not the default explanation for why someone stopped buying.

4. Build a journey that stops when the customer returns
Choose one primary return action and make the destination match it. A SKU-led message should lead to a relevant, available product or ordering destination—not an unrelated screen.

Check completed-order events before each follow-up. Remove customers from the reactivation journey when they return, unsubscribe or become ineligible. Coordinate channels so the same person does not receive conflicting reminders from separate campaigns.

Test the event mapping and exclusions with a small eligible cohort before expanding. If the product cannot recognise a completed order reliably, fix that gap before adding more messages.

5. Measure returned customers, then ask what was incremental
Clicks help diagnose communication, but they are not the reactivation outcome. Track the share of eligible customers who complete the defined return action within the agreed window. Also monitor net revenue, incentive costs, opt-outs and whether returning buyers order again.

Where feasible, randomly reserve a comparable holdout group that does not receive the reactivation campaign. Compare return rates over the same window. The difference helps estimate the effect of the campaign beyond returns that would have happened anyway; an observed conversion count alone cannot establish that.

Treat small samples and short windows cautiously. A quick purchase followed by another long absence is different from renewed repeat behaviour. Do not change the success definition after seeing the result.

6. Illustrative B2B example: a missed replenishment order
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

7. Practical segmentation worksheet
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

8. Decide whether CRM is actually the right fix
Before approving the campaign, answer four questions: Who is inactive relative to their usual behaviour? What credible reason do they have to return now? Can the product deliver that promise? What evidence will distinguish campaign-driven returns from natural ones?

If the reason to return is missing, revisit product value or positioning first. CRM can make an existing reason timely and relevant. It cannot manufacture a need the customer does not have.

Reactivation is one stage of a wider plan; see [lifecycle marketing strategy: one question per stage](/thoughts/lifecycle-marketing-strategy).`,
    sources: [
      { label: "Ritik's documented ApnaKlub retention experience and reported outcomes", url: "/#retain" },
      { label: "Bloomreach: judging inactivity against purchase rhythm", url: "https://www.bloomreach.com/en/blog/win-back-emails-guide" },
      { label: "Braze: using control groups to measure customer engagement impact", url: "https://www.braze.com/resources/articles/using-global-control-groups-to-measure-the-impact-of-customer-engagement" },
    ],
  },
  {
    slug: "crm-vs-product-problem",
    takeaways: [
      "CRM can accelerate users who already have a reason to act; it cannot create that reason.",
      "Before briefing a campaign, check whether drop-off comes from friction, unclear value or no real need.",
      "Unclear value and missing need are product or positioning problems, not messaging problems.",
    ],
    ogTitle: "CRM can’t fix a product problem",
    ogDescription: "When retention dips, CRM gets the blame. Three signs the real problem is the product — and what to do instead.",
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
      { label: "Marc Andreessen: the only thing that matters (product–market fit)", url: "https://pmarchive.com/guide_to_startups_part4.html" },
      { label: "Lenny Rachitsky: how to know if you’ve got product–market fit", url: "https://www.lennysnewsletter.com/p/how-to-know-if-youve-got-productmarket" },
      { label: "Ritik's documented onboarding, reactivation and conversion work", url: "/#journey" },
    ],
    linkedinUrl: "https://lnkd.in/p/dpcZXJ-N",
  },
];

export const getThought = (slug: string) => thoughts.find((t) => t.slug === slug);

/** Other posts ranked by shared tags, then newest first. */
export const getRelatedThoughts = (slug: string, limit = 3) => {
  const current = getThought(slug);
  if (!current) return [];
  return thoughts
    .filter((t) => t.slug !== slug)
    .map((t) => ({ t, score: t.tags.filter((tag) => current.tags.includes(tag)).length }))
    .sort((a, b) => b.score - a.score || b.t.date.localeCompare(a.t.date))
    .slice(0, limit)
    .map(({ t }) => t);
};
