export interface Thought {
  slug: string;
  title: string;
  date: string; // ISO
  displayDate: string;
  tags: string[];
  summary: string;
  body: string; // blank lines separate paragraphs; numbered topic titles become H2s
  linkedinUrl?: string;
  sources?: { label: string; url: string }[];
}

export const thoughts: Thought[] = [
  {
    slug: "best-crm-for-2027",
    title: "Best CRM for 2027: Sales CRM vs Customer Engagement Platform",
    date: "2026-11-09",
    displayDate: "Nov 9, 2026",
    tags: ["CRM", "Lifecycle", "Retention", "MarTech"],
    summary:
      "Two very different kinds of software get called CRM. A guide for founders and growth marketers to choosing between Sales CRMs (HubSpot, Pipedrive, Salesforce, Zoho) and Customer Engagement Platforms (Braze, MoEngage, CleverTap, Customer.io, WebEngage).",
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

## Best Sales CRMs for 2027

For businesses where a human closes the deal.

### [HubSpot](https://www.hubspot.com/)

Best for: B2B startups and hybrid models with inbound marketing.

HubSpot remains the most complete all-in-one entry point for B2B teams. The free tier is genuinely usable, the UI is clean, and the marketing and sales integration is hard to beat at the SMB level. The catch: pricing scales with contact volume and feature tiers in ways that feel designed to trap you. If your list crosses 10,000 contacts and you need marketing automation, the invoice climbs fast.

Best fit: Seed to Series A B2B teams where marketing and sales share the same system.

### [Pipedrive](https://www.pipedrive.com/) and [Close](https://www.close.com/)

Best for: Founder-led sales and lean teams that just need to close.

Both tools exist to do one thing well: give a small sales team a clean visual pipeline and get out of the way. No bloat, no six-month implementation, no dedicated admin. Pipedrive is the more polished option; Close is built for high-velocity outbound with calling and email sequences baked in. If you are a founder still running sales yourself or managing a team of two to five reps, either of these beats HubSpot on simplicity.

### [Salesforce](https://www.salesforce.com/)

Best for: Post-Series B enterprises with dedicated RevOps.

Salesforce is the enterprise standard for a reason. The customization ceiling is effectively unlimited and the ecosystem — AppExchange, integrations, consulting partners — is unmatched. But it requires real infrastructure to run well: dedicated admins, engineering support for custom objects and flows, and significant onboarding time. Recommending Salesforce to a team under 50 people without RevOps bandwidth is setting them up to fail.

### [Zoho CRM](https://www.zoho.com/crm/)

Best for: Budget-conscious teams that need the basics covered.

Zoho does not get enough credit. It has a solid feature set — pipeline management, email integration, automation workflows, and reporting — at a price point that makes the enterprise players look absurd. It will not wow you on UX and the interface feels dated, but for a bootstrapped team that needs functional CRM coverage without burning budget, it is the most sensible choice on this list.

## Best Customer Engagement Platforms for 2027

For businesses where the product and automated journeys do the heavy lifting.

### [Braze](https://www.braze.com/)

Best for: Global consumer apps at enterprise scale.

Braze is the benchmark. The canvas builder is the most sophisticated journey-building interface in the market — multi-step, multi-channel, real-time event-triggered, with tight content personalization. It handles scale that would break most competitors. The price reflects all of this: Braze is not a growth-stage tool. If you are not running tens of millions of MAUs or do not have a dedicated lifecycle team to run it, you are paying for capabilities you cannot fully use.

### [MoEngage](https://www.moengage.com/)

Best for: High-scale consumer tech in India and SEA.

MoEngage has earned its reputation in the Indian and Southeast Asian consumer internet ecosystem. Strong mobile push deliverability, deep WhatsApp integration — critical for markets where WhatsApp is the primary channel — solid RFM segmentation, and a campaign builder that lifecycle teams can actually use without engineering on call. It has become the default choice for fintech, OTT, and marketplace apps in this region. The analytics layer has matured significantly and the gap with CleverTap on that front is narrowing fast.

### [CleverTap](https://clevertap.com/)

Best for: Retention-first teams that want analytics and engagement in one place.

CleverTap's core differentiator is that the analytics and engagement live in the same platform. You can go from a cohort analysis to a campaign targeting that exact cohort without exporting a single CSV. The behavioral analytics and funnel visualization are genuinely strong. Where it sometimes loses to MoEngage is in campaign execution speed and the richness of the journey builder, but for teams that want to understand their retention data and act on it in the same tool, CleverTap is a natural fit.

### [Customer.io](https://customer.io/)

Best for: Growth engineers and SaaS teams with event-driven data.

Customer.io is built for teams that care about data model quality. The event-based architecture is clean, the webhook support is excellent, and the pricing is transparent and usage-based — a refreshing contrast to the "call us for enterprise pricing" black box most CEPs hide behind. If you have a solid data layer and a growth engineer who wants full control over trigger logic, Customer.io gives more flexibility per dollar than almost anything else on this list.

### [WebEngage](https://webengage.com/)

Best for: D2C and consumer brands needing unified omnichannel workflows.

WebEngage is the quiet workhorse of this category. It does not have Braze's brand cachet or CleverTap's analytics depth, but it is a well-rounded omnichannel suite that consistently performs across email, push, in-app, SMS, and WhatsApp. The journey builder is practical, team support is strong, and the pricing makes it accessible to scaling brands that are not yet at MoEngage or Braze scale. Good choice for D2C and consumer internet businesses that need the full channel stack without enterprise pricing.

## The 2027 Decision Framework: 4 Questions Before You Buy

Do not start with the tool. Start with these.

### 1. Who is closing the deal — a human or the product?

Human means Sales CRM. Product and automation means CEP. If the answer is both — enterprise SaaS with product-led growth, for example — you likely need both, and you need to be clear about which team owns which tool before you buy either.

### 2. What are your primary communication channels?

Email and phone calls means any Sales CRM handles this. WhatsApp, mobile push, and in-app means you need a CEP with strong mobile and WhatsApp support. Most Sales CRMs do not come close.

### 3. What does your data architecture look like?

SDK event streaming from the product means CEP-native setup. Warehouse-first with Snowflake or BigQuery and Reverse ETL means look at tools like Customer.io or Braze that have strong warehouse sync support.

### 4. What is your engineering bandwidth?

Dedicated growth engineer or marketing tech team means you can use more powerful, complex tools. Marketing team running independently means prioritize tools with strong no-code journey builders: MoEngage, WebEngage, HubSpot.

## The Short Version

If you sell to businesses with a sales team: start with HubSpot or Pipedrive. Add Salesforce when you have RevOps.

If you run a consumer app, fintech, or marketplace: MoEngage or CleverTap if you are India or SEA-focused. Customer.io if your team is data-heavy. Braze when you are at scale.

If you are still confused: go back to the one question that settles it — who or what is closing the deal?

The best CRM for 2027 is the one that matches the actual motion of your business. Everything else is noise.`,
  },
  {
    slug: "customer-reactivation-before-win-back-campaign",
    title: "Customer reactivation: diagnose the gap before a win-back campaign",
    date: "2026-11-01",
    displayDate: "Nov 1, 2026",
    tags: ["CRM", "Retention", "Lifecycle"],
    summary:
      "A practical customer reactivation framework for B2B repeat-purchase journeys: define inactivity, segment by past behaviour, restore a reason to order, and measure more than clicks.",
    body: `Customer reactivation means helping a previously active customer return to a meaningful product action after a period of inactivity. In a repeat-purchase business, that action is usually another completed order—not opening a message.

For CRM and lifecycle marketers, the first question is not which win-back message to send. It is whether the customer has lost the habit, lost the reason to buy, or hit a barrier the campaign cannot remove.

This framework builds on the behaviour-based segmentation and multilingual WhatsApp work documented in my ApnaKlub experience. It is a proposed approach to reactivation, not a claim that a specific win-back experiment was run there.

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

The portfolio reports approximately 5% revenue growth and a 5–7% increase in order rate. These are reported outcomes from that work. The public record does not specify the baseline, measurement window or a control group, so they should not be read as proven incremental reactivation lift.

The useful lesson is the operating approach: connect the communication to observed buying behaviour and language, rather than assuming a generic reminder is enough. A discount is one possible test, not the default explanation for why someone stopped buying.

4. Build a journey that stops when the customer returns
Choose one primary return action and make the destination match it. A SKU-led message should lead to a relevant, available product or ordering destination—not an unrelated screen.

Check completed-order events before each follow-up. Remove customers from the reactivation journey when they return, unsubscribe or become ineligible. Coordinate channels so the same person does not receive conflicting reminders from separate campaigns.

Test the event mapping and exclusions with a small eligible cohort before expanding. If the product cannot recognise a completed order reliably, fix that gap before adding more messages.

5. Measure returned customers, then ask what was incremental
Clicks help diagnose communication, but they are not the reactivation outcome. Track the share of eligible customers who complete the defined return action within the agreed window. Also monitor net revenue, incentive costs, opt-outs and whether returning buyers order again.

Where feasible, randomly reserve a comparable holdout group that does not receive the reactivation campaign. Compare return rates over the same window. The difference helps estimate the effect of the campaign beyond returns that would have happened anyway; an observed conversion count alone cannot establish that.

Treat small samples and short windows cautiously. A quick purchase followed by another long absence is different from renewed repeat behaviour. Do not change the success definition after seeing the result.

6. Decide whether CRM is actually the right fix
Before approving the campaign, answer four questions: Who is inactive relative to their usual behaviour? What credible reason do they have to return now? Can the product deliver that promise? What evidence will distinguish campaign-driven returns from natural ones?

If the reason to return is missing, revisit product value or positioning first. CRM can make an existing reason timely and relevant. It cannot manufacture a need the customer does not have.`,
    sources: [
      { label: "Ritik's documented ApnaKlub retention experience and reported outcomes", url: "/#retain" },
      { label: "Bloomreach: judging inactivity against purchase rhythm", url: "https://www.bloomreach.com/en/blog/win-back-emails-guide" },
      { label: "Braze: using control groups to measure customer engagement impact", url: "https://www.braze.com/resources/articles/using-global-control-groups-to-measure-the-impact-of-customer-engagement" },
    ],
  },
  {
    slug: "crm-vs-product-problem",
    title: "CRM is often asked to solve a product problem",
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
“Why should this customer care?”`,
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
