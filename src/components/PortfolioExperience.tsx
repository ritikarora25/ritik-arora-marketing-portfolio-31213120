
import CaseStudyCard from "./CaseStudyCard";

const experiences = [
  {
    company: "ApnaKlub",
    logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=80&h=80&fit=facearea&facepad=2",
    role: "Product Marketing Specialist",
    period: "Feb 2024 - Dec 2024",
    challenge: "Drive engagement and monetization for 200K+ B2B users in fragmented FMCG market.",
    action: "Led CRM initiatives, built behavioral segments & multilingual journeys, launched WhatsApp engagement.",
    impact: "Enabled 5% revenue lift, improved order rates by 5-7%, deepened cross-team collaboration.",
    metrics: [
      {
        label: "Users Impacted",
        value: "200K+",
        highlight: true
      },
      {
        label: "Revenue Lift",
        value: "5%"
      },
      {
        label: "Order Rate ↑",
        value: "5-7%"
      }
    ]
  },
  {
    company: "CARS24",
    logo: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=80&h=80&fit=facearea&facepad=2",
    role: "Marketing Team Lead / CRM Lead",
    period: "Mar 2023 - Jan 2024",
    challenge: "Scale CRM efficiency and reduce spend for high-volume car seller operations.",
    action: "Consolidated CRM systems, ran A/B tests, unified event schema, managed cross-channel execution.",
    impact: "Cut CXM spend by ₹8L/mo (~20%), boosted process speed, improved funnel reporting.",
    metrics: [
      {
        label: "Monthly Savings",
        value: "₹8L",
        highlight: true
      },
      {
        label: "Cost Reduction",
        value: "20%"
      },
      {
        label: "Channels Managed",
        value: "5+"
      }
    ]
  },
  {
    company: "1K Kirana Bazaar",
    logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=80&h=80&fit=facearea&facepad=2",
    role: "Marketing Associate",
    period: "Nov 2021 - Jan 2023",
    challenge: "Increase retention & monetize 150K+ users in offline-to-online retail transition.",
    action: "Launched personalization strategies, merchandising campaigns, and brand monetization initiatives.",
    impact: "Generated ₹50L+ revenue, doubled click rates, improved app ranking & engagement significantly.",
    metrics: [
      {
        label: "Revenue Generated",
        value: "₹50L+",
        highlight: true
      },
      {
        label: "Click Rate ↑",
        value: "100%"
      },
      {
        label: "Engagement ↑",
        value: "30%"
      }
    ]
  },
  {
    company: "Stupa Sport Analytics",
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=80&h=80&fit=facearea&facepad=2",
    role: "Marketing Analyst",
    period: "Mar 2021 - Nov 2021",
    challenge: "Build brand presence and drive social growth in competitive sports analytics niche.",
    action: "Grew social media presence, conducted global market research, and managed targeted digital campaigns.",
    impact: "Achieved 13K+ followers, expanded to 3 international markets, delivered real-time dashboards.",
    metrics: [
      {
        label: "Social Growth",
        value: "13K+",
        highlight: true
      },
      {
        label: "Markets Entered",
        value: "3"
      },
      {
        label: "Campaigns Run",
        value: "25+"
      }
    ]
  }
];

const PortfolioExperience = () => (
  <section id="experience" className="container mx-auto my-12">
    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Experience</h2>
    <div className="grid gap-8 md:grid-cols-2">
      {experiences.map(exp => (
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
