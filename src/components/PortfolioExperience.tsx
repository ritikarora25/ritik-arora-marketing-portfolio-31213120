
import CaseStudyCard from "./CaseStudyCard";

const experiences = [
  {
    company: "ApnaKlub",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/92/ApnaKlub_Logo.png",
    role: "Product Marketing Specialist",
    period: "Feb 2024 - Dec 2024",
    challenge: "Drive engagement and monetization for 200K+ B2B users in fragmented FMCG market.",
    action: "Led CRM initiatives, built behavioral segments & multilingual journeys, launched WhatsApp engagement.",
    impact: "Enabled 5% revenue lift, improved order rates by 5-7%, deepened cross-team collaboration.",
    metrics: [
      { label: "Users Impacted", value: "200K+", highlight: true },
      { label: "Revenue Lift", value: "5%", highlight: true },
      { label: "Order Rate", value: "5-7%" }
    ]
  },
  {
    company: "CARS24",
    logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/CARS24_logo.png",
    role: "Marketing Team Lead / CRM Lead",
    period: "Mar 2023 - Jan 2024",
    challenge: "Scale CRM efficiency and reduce spend for high-volume car seller operations.",
    action: "Consolidated CRM systems, ran A/B tests, unified event schema, managed cross-channel execution.",
    impact: "Cut CXM spend by ₹8L/mo (~20%), boosted process speed, improved funnel reporting.",
    metrics: [
      { label: "Monthly Savings", value: "₹8L", highlight: true },
      { label: "Cost Reduction", value: "20%" },
      { label: "Channels", value: "5+" }
    ]
  },
  {
    company: "1K Kirana Bazaar",
    logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/1K_Kirana_Bazaar_Logo.png",
    role: "Marketing Associate",
    period: "Nov 2021 - Jan 2023",
    challenge: "Increase retention & monetize 150K+ users in offline-to-online retail.",
    action: "Launched personalisation strategies, merchandising campaigns, and brand monetization initiatives.",
    impact: "Generated ₹50L+, doubled click rates, improved app ranking & engagement.",
    metrics: [
      { label: "Monetization", value: "₹50L", highlight: true },
      { label: "Click Rate ↑", value: "1.9%" },
      { label: "Engagement ↑", value: "30%" }
    ]
  },
  {
    company: "Stupa Sport Analytics",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Stupa_Sport_Analytics_Logo.png",
    role: "Marketing Analyst",
    period: "Mar 2021 - Nov 2021",
    challenge: "Build brand presence and drive social growth in sports analytics niche.",
    action: "Grew social, ran global market research, and managed digital campaigns.",
    impact: "Achieved 13K+ followers, ran ads in 3 countries, delivered real-time dashboards.",
    metrics: [
      { label: "Followers", value: "13K+", highlight: true },
      { label: "Markets", value: "3+" }
    ]
  }
];

const PortfolioExperience = () => (
  <section id="experience" className="container mx-auto my-12">
    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Case Studies</h2>
    <div className="grid gap-8 md:grid-cols-2">
      {experiences.map((exp) => (
        <CaseStudyCard
          key={exp.company}
          company={exp.company}
          logo={exp.logo}
          role={exp.role}
          period={exp.period}
          challenge={exp.challenge}
          action={exp.action}
          impact={exp.impact}
          metrics={exp.metrics}
        />
      ))}
    </div>
  </section>
);

export default PortfolioExperience;
