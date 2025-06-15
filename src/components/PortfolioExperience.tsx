
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
        highlight: true // primary highlight: largest impact
      },
      {
        label: "Revenue Lift",
        value: "5%"
        // no highlight
      },
      {
        label: "Order Rate",
        value: "5-7%"
        // no highlight
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
        highlight: true // primary highlight: biggest achievement
      },
      {
        label: "Cost Reduction",
        value: "20%"
        // no highlight
      },
      {
        label: "Channels",
        value: "5+"
        // no highlight
      }
    ]
  },
  {
    company: "1K Kirana Bazaar",
    logo: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=80&h=80&fit=facearea&facepad=2",
    role: "Marketing Associate",
    period: "Nov 2021 - Jan 2023",
    challenge: "Increase retention & monetize 150K+ users in offline-to-online retail.",
    action: "Launched personalisation strategies, merchandising campaigns, and brand monetization initiatives.",
    impact: "Generated ₹50L+, doubled click rates, improved app ranking & engagement.",
    metrics: [
      {
        label: "Monetization",
        value: "₹50L",
        highlight: true // primary highlight: quantifiable result
      },
      {
        label: "Click Rate ↑",
        value: "1.9%"
        // no highlight
      },
      {
        label: "Engagement ↑",
        value: "30%"
        // no highlight
      }
    ]
  },
  {
    company: "Stupa Sport Analytics",
    logo: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=80&h=80&fit=facearea&facepad=2",
    role: "Marketing Analyst",
    period: "Mar 2021 - Nov 2021",
    challenge: "Build brand presence and drive social growth in sports analytics niche.",
    action: "Grew social, ran global market research, and managed digital campaigns.",
    impact: "Achieved 13K+ followers, ran ads in 3 countries, delivered real-time dashboards.",
    metrics: [
      {
        label: "Followers",
        value: "13K+",
        highlight: true // strongest single highlight
      },
      {
        label: "Markets",
        value: "3+"
        // no highlight
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
