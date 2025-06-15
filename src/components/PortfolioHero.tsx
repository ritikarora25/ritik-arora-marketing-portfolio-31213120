import { Linkedin } from "lucide-react";
import ResumeButton from "./ResumeButton";
const PortfolioHero = () => <section className="w-full min-h-[68vh] container mx-auto flex flex-col md:flex-row md:items-center gap-12 py-16 relative animate-fade-in animated-gradient" id="hero">
    <div className="flex-shrink-0 w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden bg-muted border-2 border-gray-200 shadow-sm mx-auto md:mx-0 relative z-10">
      <img alt="Ritik Arora Headshot" className="w-full h-full object-cover" src="/lovable-uploads/b900e373-588f-4459-b950-6d8f999f7d94.jpg" />
    </div>
    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4">
      <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide mb-2 leading-tight drop-shadow-sm">
        Ritik Arora
      </h1>
      <h2 className="text-xl md:text-2xl font-medium text-white leading-snug mb-4 drop-shadow-sm">
        Growth Marketer<span className="font-normal text-white/90"> | CRM, Product Marketing &amp; CLM Specialist</span>
      </h2>
      <div className="rounded-lg px-6 py-3 bg-white/95 backdrop-blur-sm text-foreground font-medium text-base md:text-lg mb-6 max-w-lg border border-white/20 shadow-lg">
        Strategy, Data, and Growth Impact – helping brands go farther, faster.
      </div>
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6 text-sm">
        <div className="flex items-center gap-2 text-white drop-shadow-sm">
          <span>Gurugram, Haryana, India</span>
        </div>
        <a href="mailto:ritikchuchra1@gmail.com" className="text-white hover:text-white/80 hover:underline font-medium drop-shadow-sm">
          ritikchuchra1@gmail.com
        </a>
        <a href="https://www.linkedin.com/in/ritikarora25" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-white hover:text-white/80 hover:underline transition drop-shadow-sm">
          <Linkedin size={18} />
          LinkedIn
        </a>
      </div>
      <div className="flex gap-4 justify-center md:justify-start mt-4">
        <ResumeButton />
        <a href="#contact" className="px-6 py-3 bg-white text-primary font-medium rounded-lg shadow-lg hover:bg-white/90 transition backdrop-blur-sm">
          Contact Me
        </a>
      </div>
    </div>
  </section>;
export default PortfolioHero;