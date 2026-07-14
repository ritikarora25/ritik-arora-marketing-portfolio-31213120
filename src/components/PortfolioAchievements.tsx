import CountUp from "./CountUp";

const PortfolioAchievements = () => (
  <section id="achievements" className="container mx-auto py-8">
    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 text-center">Key Achievements</h2>
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-2 border-l-4 border-primary animate-fade-in">
      <div className="text-lg font-semibold mb-2 text-primary">At a glance:</div>
      <ul className="space-y-1 text-base text-gray-700">
        <li>Saved <CountUp value="₹8L" className="font-bold text-primary" />/mo via CRM efficiency</li>
        <li>Increased revenue by <CountUp value="5%" className="font-bold text-primary" /> via smarter engagement</li>
        <li>Order rates up <CountUp value="5-7%" className="font-bold text-primary" /> with WhatsApp campaigns</li>
        <li><CountUp value="30%" className="font-bold text-primary" /> more customer engagement driven</li>
        <li>Launched monetization: <CountUp value="₹50L" className="font-bold text-primary" /> in 6 months</li>
      </ul>
    </div>
  </section>
);

export default PortfolioAchievements;
