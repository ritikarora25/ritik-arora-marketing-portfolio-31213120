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
