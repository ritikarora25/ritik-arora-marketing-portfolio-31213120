
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
          className="bg-white rounded-lg shadow p-5 md:p-7 group transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-b-4 border-transparent hover:border-accent animate-fade-in"
        >
          <div className="flex items-center gap-3 mb-2">
            <skill.icon size={26} className="text-accent group-hover:text-primary transition" />
            <span className="font-semibold text-lg md:text-xl">{skill.group}</span>
          </div>
          <div className="flex flex-wrap gap-2 mt-1">
            {skill.items.map((item) => (
              <span
                key={item}
                className="px-3 py-1 rounded-full bg-gray-100 group-hover:bg-accent/20 text-gray-700 group-hover:text-accent text-sm font-medium transition"
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
