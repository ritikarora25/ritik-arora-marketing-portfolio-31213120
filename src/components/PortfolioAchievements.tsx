
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const metrics = [
  { name: "CRM Cost Savings", value: 8, label: "₹8L/20%", color: "#24A19C" },
  { name: "Revenue Increase", value: 5, label: "5%", color: "#2155CD" },
  { name: "Order Rate", value: 7, label: "5-7%", color: "#50B88C" },
  { name: "Engagement", value: 30, label: "30% lift", color: "#3182CE" },
  { name: "Monetization", value: 50, label: "₹50L", color: "#289672" }
];

const PortfolioAchievements = () => (
  <section id="achievements" className="container mx-auto my-12">
    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Key Achievements</h2>
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-2 border-l-4 border-accent animate-fade-in">
        <div className="text-lg font-semibold mb-2 text-accent">At a glance:</div>
        <ul className="space-y-2 text-base text-gray-700">
          <li>Saved <span className="font-bold text-primary">₹8L/mo</span> via CRM efficiency</li>
          <li>Increased revenue by <span className="font-bold text-primary">5%</span> via smarter engagement</li>
          <li>Order rates up <span className="font-bold text-primary">5-7%</span> with WhatsApp campaigns</li>
          <li><span className="font-bold text-primary">30%</span> more customer engagement driven</li>
          <li>Launched monetization: <span className="font-bold text-primary">₹50L in 6 months</span></li>
        </ul>
      </div>
      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={metrics} margin={{ top: 10, right: 10, left: 0, bottom: 10 }}>
            <XAxis dataKey="name" tickLine={false} axisLine={false} fontSize={12} />
            <YAxis hide />
            <Tooltip />
            <Bar dataKey="value" radius={[8, 8, 0, 0]}>
              {metrics.map((entry, idx) => (
                <Cell key={`cell-${idx}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </section>
);

export default PortfolioAchievements;
