
const PortfolioRecognition = () => (
  <section id="recognition" className="container mx-auto py-16">
    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Recognition & Languages</h2>
    <div className="bg-white rounded-lg shadow-sm p-8 flex flex-col md:flex-row gap-8 items-center border border-gray-200">
      <div className="flex-1">
        <div className="font-bold text-primary mb-2 text-lg">🏆 Top Gun Award @1K Kirana Bazaar</div>
        <div className="text-foreground text-base">
          Launched first monetization charter driving <span className="font-bold text-primary">₹50L+ revenue</span>
        </div>
      </div>
      <div>
        <div className="text-lg font-semibold mb-3 text-primary">Languages</div>
        <ul className="space-y-2 text-foreground">
          <li>English <span className="ml-2 text-muted-foreground">(Professional Working)</span></li>
          <li>Hindi <span className="ml-2 text-muted-foreground">(Professional Working)</span></li>
          <li>Punjabi <span className="ml-2 text-muted-foreground">(Limited Working)</span></li>
        </ul>
      </div>
    </div>
  </section>
);

export default PortfolioRecognition;
