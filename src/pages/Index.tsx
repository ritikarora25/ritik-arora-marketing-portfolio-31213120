import { useEffect, useState } from "react";
import PortfolioLayout from "@/components/PortfolioLayout";
import IntroAnimation from "@/components/IntroAnimation";
import PortfolioHero from "@/components/PortfolioHero";
import PortfolioAbout from "@/components/PortfolioAbout";
import PortfolioExperience from "@/components/PortfolioExperience";
import PortfolioAchievements from "@/components/PortfolioAchievements";
import PortfolioSkills from "@/components/PortfolioSkills";
import PortfolioEducation from "@/components/PortfolioEducation";
import PortfolioContact from "@/components/PortfolioContact";
import type { Persona } from "@/data/journey";

const Index = () => {
  const [persona, setPersona] = useState<Persona>("default");
  const [introPlaying, setIntroPlaying] = useState(true);

  useEffect(() => {
    document.body.dataset.persona = persona;
    return () => { delete document.body.dataset.persona; };
  }, [persona]);

  useEffect(() => {
    if (introPlaying) {
      document.body.dataset.introPlaying = "true";
    } else {
      delete document.body.dataset.introPlaying;
    }
    return () => { delete document.body.dataset.introPlaying; };
  }, [introPlaying]);

  return (
    <>
      <IntroAnimation onComplete={() => setIntroPlaying(false)} />
      <PortfolioLayout>
        <PortfolioHero persona={persona} setPersona={setPersona} />
        <hr className="divider" />
        <PortfolioAbout />
        <hr className="divider" />
        <PortfolioExperience persona={persona} />
        <PortfolioAchievements />
        <PortfolioSkills />
        <PortfolioEducation />
        <PortfolioContact />
      </PortfolioLayout>
    </>
  );
};

export default Index;
