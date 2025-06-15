
import { Linkedin } from "lucide-react";
import ResumeButton from "./ResumeButton";
import MetricCounter from "./MetricCounter";

const metrics = [
  { label: "Cost Savings", value: 8, prefix: "₹", suffix: "L/mo" },
  { label: "Revenue Increase", value: 5, suffix: "%" },
  { label: "Users Impacted", value: 200, suffix: "K+" },
];

const PortfolioHero = () => (
  <section
    className="w-full min-h-[68vh] container mx-auto flex flex-col md:flex-row md:items-center gap-12 py-16 relative animate-fade-in"
    id="hero"
  >
    <div className="flex-shrink-0 w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden bg-muted border-2 border-gray-200 shadow-sm mx-auto md:mx-0 relative z-10">
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="Ritik Arora Headshot"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-4">
      <h1 className="text-4xl md:text-5xl font-bold text-primary tracking-wide mb-2 leading-tight">
        Ritik Arora
      </h1>
      <h2 className="text-xl md:text-2xl font-medium text-foreground leading-snug mb-4">
        Growth Marketer<span className="font-normal text-muted-foreground"> | CRM, Product Marketing &amp; CLM Specialist</span>
      </h2>
      <div className="rounded-lg px-6 py-3 bg-accent text-foreground font-medium text-base md:text-lg mb-6 max-w-lg border border-gray-200">
        Strategy, Data, and Growth Impact – helping brands go farther, faster.
      </div>
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-6 text-sm">
        <div className="flex items-center gap-2 text-foreground">
          <span>Gurugram, Haryana, India</span>
        </div>
        <a
          href="mailto:ritikchuchra1@gmail.com"
          className="text-secondary hover:underline font-medium"
        >
          ritikchuchra1@gmail.com
        </a>
        <a
          href="https://www.linkedin.com/in/ritikarora25"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-secondary hover:underline transition"
        >
          <Linkedin size={18} />
          LinkedIn
        </a>
      </div>
      <div className="flex gap-6 justify-center md:justify-start mt-4 mb-8">
        {metrics.map((metric, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white shadow-sm rounded-lg px-4 py-3 border border-gray-200"
          >
            <MetricCounter
              value={metric.value}
              prefix={metric.prefix}
              suffix={metric.suffix}
              duration={1200 + i * 600}
              className="text-primary"
            />
            <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide mt-1">{metric.label}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 justify-center md:justify-start">
        <ResumeButton />
        <a
          href="#contact"
          className="px-6 py-3 bg-secondary text-white font-medium rounded-lg shadow-sm hover:bg-secondary/90 transition"
        >
          Contact Me
        </a>
      </div>
    </div>
  </section>
);

export default PortfolioHero;
