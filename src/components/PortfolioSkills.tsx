
import { LineChart, UserCheck2, PieChart, Figma } from "lucide-react";

const skills = [
  {
    group: "Strategic Ops & Growth",
    icon: LineChart,
    items: [
      "Lifecycle Strategy",
      "Monetization",
      "Funnel Optimization",
      "GTM Planning",
      "Cross-functional Collaboration"
    ]
  },
  {
    group: "CRM & Marketing",
    icon: UserCheck2,
    items: [
      "Product Marketing",
      "Customer Experience",
      "Communication",
      "User Segmentation"
    ]
  },
  {
    group: "Data & Analytics",
    icon: PieChart,
    items: [
      "CleverTap", "WebEngage", "Mixpanel", "Tableau", "SQL (Basic)", "Product Analytics"
    ]
  },
  {
    group: "Tools",
    icon: Figma,
    items: [
      "Figma", "Zoho", "Microsoft Office", "Canva", "Google Ads", "Tally"
    ]
  }
];

const PortfolioSkills = () => (
  <section id="skills" className="container mx-auto py-16">
    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Core Skills & Expertise</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {skills.map((skill, idx) => (
        <div
          key={skill.group}
          className="bg-white rounded-lg shadow-sm p-8 group transition-all duration-300 hover:shadow-md border border-gray-200"
        >
          <div className="flex items-center gap-3 mb-4">
            <skill.icon size={26} className="text-primary" />
            <span className="font-semibold text-xl text-foreground">{skill.group}</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {skill.items.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full text-foreground text-sm font-medium border border-gray-200"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default PortfolioSkills;
