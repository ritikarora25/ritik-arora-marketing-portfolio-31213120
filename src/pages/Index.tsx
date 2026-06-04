import { Helmet } from "react-helmet-async";
import PortfolioLayout from "@/components/PortfolioLayout";
import PortfolioHero from "@/components/PortfolioHero";
import PortfolioAbout from "@/components/PortfolioAbout";
import PortfolioSkills from "@/components/PortfolioSkills";
import PortfolioExperience from "@/components/PortfolioExperience";
import PortfolioAchievements from "@/components/PortfolioAchievements";
import PortfolioEducation from "@/components/PortfolioEducation";
import PortfolioContact from "@/components/PortfolioContact";

const Index = () => {
  return (
    <>
      <Helmet>
        <link rel="canonical" href="https://ritik-arora-marketing-portfolio.lovable.app/" />
      </Helmet>
      <PortfolioLayout>
        <PortfolioHero />
        <PortfolioAbout />
        <PortfolioExperience />
        <PortfolioSkills />
        <PortfolioAchievements />
        <PortfolioEducation />
        <PortfolioContact />
      </PortfolioLayout>
    </>
  );
};
export default Index;
