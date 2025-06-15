
import { LineChart, BarChart, BarChart4, Database, Figma, PieChart, UserCheck2 } from "lucide-react";

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
  <section id="skills" className="container mx-auto my-12">
    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Core Skills & Expertise</h2>
    <div className="grid md:grid-cols-2 gap-8">
      {skills.map((skill, idx) => (
        <div
          key={skill.group}
          className="bg-white rounded-lg shadow-md p-5 md:p-7 group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-l-4 border-accent animate-fade-in"
        >
          <div className="flex items-center gap-3 mb-2">
            <skill.icon size={26} className="text-accent group-hover:text-primary transition-colors" />
            <span className="font-semibold text-lg md:text-xl text-primary">{skill.group}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-1">
            {skill.items.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full bg-secondary text-primary group-hover:bg-accent/10 group-hover:text-accent text-sm font-medium transition-colors"
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
