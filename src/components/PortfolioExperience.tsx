import { useEffect, useRef } from "react";
import type { Persona } from "@/data/journey";
import StupaSportCard from "./experience/StupaSportCard";
import FreoCard from "./experience/FreoCard";
import Cars24Card from "./experience/Cars24Card";
import ApnaKlubCard from "./experience/ApnaKlubCard";
import KiranaBazaarCard from "./experience/KiranaBazaarCard";

interface Props { persona: Persona; }

const PortfolioExperience = ({ persona }: Props) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    const fill = fillRef.current;
    if (!track || !fill) return;
    const update = () => {
      const tr = track.getBoundingClientRect();
      const vh = window.innerHeight;
      const progress = Math.min(Math.max((vh - tr.top) / (tr.height + vh), 0), 1);
      fill.style.height = `${progress * 100}%`;
    };
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <section id="journey" className="wrap psection">
      <div className="section-head">
        <h2>The funnel, worked stage by stage</h2>
        <span className="section-tag">Five roles, five stages</span>
      </div>
      <p className="journey-intro">
        Every role I've had has sat at a different point in the funnel. Scroll down and watch the line fill as you move through each stage — widest at the top where the job is getting attention, narrowest at the bottom where the job is turning that attention into revenue.
      </p>
      <p className="journey-note">
        Facts and numbers never change — only the framing does, based on who you told the page you are.
      </p>

      <div className="journey-flow" id="journeyFlow">
        <div className="journey-line-track" ref={trackRef}>
          <div className="journey-line-fill" ref={fillRef} />
        </div>

        <StupaSportCard persona={persona} />
        <FreoCard persona={persona} />
        <Cars24Card persona={persona} />
        <ApnaKlubCard persona={persona} />
        <KiranaBazaarCard persona={persona} />
      </div>
    </section>
  );
};

export default PortfolioExperience;
