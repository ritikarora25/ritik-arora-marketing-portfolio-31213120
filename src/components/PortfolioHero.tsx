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
    className="w-full min-h-[68vh] container mx-auto flex flex-col md:flex-row md:items-center gap-8 pb-12 border-b border-border relative animate-fade-in"
    id="hero"
    style={{
      background:
        "linear-gradient(135deg, hsl(var(--background)) 60%, hsl(var(--card)) 100%)",
    }}
  >
    <div className="flex-shrink-0 w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden bg-muted border-4 border-primary shadow-lg mx-auto md:mx-0 mt-6 md:mt-0 relative z-10 hover:scale-105 transition-transform">
      <img
        src="https://randomuser.me/api/portraits/men/32.jpg"
        alt="Ritik Arora Headshot"
        className="w-full h-full object-cover"
      />
    </div>
    <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left gap-2">
      <h1 className="text-3xl md:text-5xl font-extrabold text-foreground tracking-wide mb-0 leading-tight">
        Ritik Arora
      </h1>
      <h2 className="text-xl md:text-2xl font-semibold text-muted-foreground leading-snug mb-2">
        Growth Marketer<span className="font-light text-muted-foreground/80"> | CRM, Product Marketing &amp; CLM Specialist</span>
      </h2>
      <div className="rounded-xl px-3 py-2 bg-secondary/20 text-secondary font-bold text-base md:text-lg mb-3">
        Strategy, Data, and Growth Impact – helping brands go farther, faster.
      </div>
      <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-3">
        <div className="flex items-center gap-2 text-muted-foreground">
          <span className="font-medium">Gurugram, Haryana, India</span>
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
          className="flex items-center gap-1 text-primary hover:text-secondary transition"
        >
          <Linkedin size={20} />
          LinkedIn
        </a>
      </div>
      <div className="flex gap-3 justify-center md:justify-start mt-2 pointer-events-none">
        {metrics.map((metric, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-card shadow rounded-lg px-4 py-2 mx-2 border border-accent"
          >
            <MetricCounter
              value={metric.value}
              prefix={metric.prefix}
              suffix={metric.suffix}
              duration={1200 + i * 600}
              className="text-primary"
            />
            <div className="text-xs text-muted-foreground font-semibold uppercase tracking-wide">{metric.label}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-4 justify-center md:justify-start mt-7 mb-0">
        <ResumeButton />
        <a
          href="#contact"
          className="px-5 py-2 bg-secondary text-white font-semibold rounded shadow hover:bg-primary transition"
        >
          Contact Me
        </a>
      </div>
    </div>
  </section>
);

export default PortfolioHero;
