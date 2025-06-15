
const PortfolioRecognition = () => (
  <section id="recognition" className="container mx-auto my-12">
    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">Recognition & Languages</h2>
    <div className="bg-card rounded-lg shadow-md p-6 flex flex-col md:flex-row gap-8 items-center border-l-4 border-secondary">
      <div className="flex-1">
        <div className="font-bold text-secondary mb-1">🏆 Top Gun Award @1K Kirana Bazaar</div>
        <div className="mb-4 text-card-foreground text-base">
          Launched first monetization charter driving <span className="font-bold text-primary">₹50L+ revenue</span>
        </div>
      </div>
      <div>
        <div className="text-md font-semibold mb-1 text-primary">Languages</div>
        <ul className="space-y-1 text-card-foreground">
          <li>English <span className="ml-2 text-secondary">(Professional Working)</span></li>
          <li>Hindi <span className="ml-2 text-secondary">(Professional Working)</span></li>
          <li>Punjabi <span className="ml-2 text-secondary">(Limited Working)</span></li>
        </ul>
      </div>
    </div>
  </section>
);

export default PortfolioRecognition;
