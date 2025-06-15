
const PortfolioAchievements = () => (
  <section id="achievements" className="container mx-auto py-16">
    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">Key Achievements</h2>
    <div className="flex justify-center">
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col gap-2 border-l-4 border-primary animate-fade-in mx-0 px-6 max-w-2xl w-full">
        <div className="text-lg font-semibold mb-2 text-primary">At a glance:</div>
        <ul className="space-y-2 text-base text-gray-700">
          <li>Saved <span className="font-bold text-primary">₹8L/mo</span> via CRM efficiency</li>
          <li>Increased revenue by <span className="font-bold text-primary">5%</span> via smarter engagement</li>
          <li>Order rates up <span className="font-bold text-primary">5-7%</span> with WhatsApp campaigns</li>
          <li><span className="font-bold text-primary">30%</span> more customer engagement driven</li>
          <li>Launched monetization: <span className="font-bold text-primary">₹50L in 6 months</span></li>
        </ul>
      </div>
    </div>
  </section>
);

export default PortfolioAchievements;
