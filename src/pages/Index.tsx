import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import PortfolioLayout from "@/components/PortfolioLayout";
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

  useEffect(() => {
    document.body.dataset.persona = persona;
    return () => { delete document.body.dataset.persona; };
  }, [persona]);

  return (
    <>
      <Helmet>
        <title>Ritik Arora — Growth & Marketing</title>
        <meta name="description" content="Growth marketer, 5+ years across brand, CRM, retention and product — currently at Freo, Bengaluru." />
        <meta property="og:title" content="Ritik Arora — Growth & Marketing" />
        <meta property="og:description" content="Growth marketer, 5+ years across brand, CRM, retention and product — currently at Freo, Bengaluru." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://ritik-arora-marketing-portfolio.lovable.app/" />
      </Helmet>
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
