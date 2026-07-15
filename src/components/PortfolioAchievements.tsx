const PortfolioAchievements = () => (
  <section id="achievements" className="container mx-auto py-8">
    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 text-center">Key Achievements</h2>
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col gap-2 border-l-4 border-primary animate-fade-in">
      <div className="text-lg font-semibold mb-2 text-primary">At a glance:</div>
      <ul className="space-y-1 text-base text-gray-700">
        <li>Saved <span className="font-bold text-primary">₹8L</span>/mo via CRM efficiency</li>
        <li>Increased revenue by <span className="font-bold text-primary">5%</span> via smarter engagement</li>
        <li>Order rates up <span className="font-bold text-primary">5-7%</span> with WhatsApp campaigns</li>
        <li><span className="font-bold text-primary">30%</span> more customer engagement driven</li>
        <li>Launched monetization: <span className="font-bold text-primary">₹50L</span> in 6 months</li>
      </ul>
    </div>
  </section>
);

export default PortfolioAchievements;
