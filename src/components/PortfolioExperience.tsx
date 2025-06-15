
import ApnaKlubCard from "./experience/ApnaKlubCard";
import Cars24Card from "./experience/Cars24Card";
import KiranaBazaarCard from "./experience/KiranaBazaarCard";
import StupaSportCard from "./experience/StupaSportCard";

const PortfolioExperience = () => (
  <section id="experience" className="container mx-auto my-12">
    <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">Experience</h2>
    <div className="grid gap-8 md:grid-cols-2">
      <ApnaKlubCard />
      <Cars24Card />
      <KiranaBazaarCard />
      <StupaSportCard />
    </div>
  </section>
);

export default PortfolioExperience;
