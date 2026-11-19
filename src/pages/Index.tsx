import { useEffect, useState } from "react";
import PortfolioLayout from "@/components/PortfolioLayout";
import IntroAnimation, { MOTION_KEY, introMotionOff } from "@/components/IntroAnimation";
import PortfolioHero from "@/components/PortfolioHero";
import PortfolioAbout from "@/components/PortfolioAbout";
import PortfolioExperience from "@/components/PortfolioExperience";
import PortfolioAchievements from "@/components/PortfolioAchievements";
import PortfolioSkills from "@/components/PortfolioSkills";
import PortfolioEducation from "@/components/PortfolioEducation";
import PortfolioContact from "@/components/PortfolioContact";
import LatestThoughts from "@/components/LatestThoughts";
import type { Persona } from "@/data/journey";

const Index = () => {
  const [persona, setPersona] = useState<Persona>("default");
  const [introPlaying, setIntroPlaying] = useState(false);
  const [replayKey, setReplayKey] = useState(0);
  const [motionOff, setMotionOff] = useState(false);
  useEffect(() => { setMotionOff(introMotionOff()); }, []);
  const toggleMotion = () => {
    const off = !motionOff;
    setMotionOff(off);
    try { window.localStorage.setItem(MOTION_KEY, off ? "off" : "on"); } catch { /* storage blocked */ }
  };

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
      <IntroAnimation key={replayKey} force={replayKey > 0} onStart={() => setIntroPlaying(true)} onReveal={() => setIntroPlaying(false)} onComplete={() => setIntroPlaying(false)} />
      <PortfolioLayout>
        <PortfolioHero persona={persona} setPersona={setPersona} />
        <hr className="divider" />
        <PortfolioAbout />
        <hr className="divider" />
        <PortfolioExperience persona={persona} />
        <PortfolioAchievements />
        <PortfolioSkills />
        <PortfolioEducation />
        <LatestThoughts />
        <PortfolioContact />
        <div className="wrap intro-controls" role="group" aria-label="Intro animation settings">
          <span>Intro animation</span>
          <button type="button" className="btn btn-ghost" onClick={() => setReplayKey((k) => k + 1)}>Replay intro</button>
          <button type="button" className="btn btn-ghost" aria-pressed={!motionOff} onClick={toggleMotion}>
            {motionOff ? "Autoplay: off" : "Autoplay: on"}
          </button>
        </div>
      </PortfolioLayout>
    </>
  );
};

export default Index;
