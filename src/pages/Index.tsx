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
        <meta property="og:title" content="Ritik Arora | Growth Marketer & CRM Specialist" />
        <meta property="og:description" content="Portfolio showcasing CRM, product marketing, and customer lifecycle strategy work driving measurable growth." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://ritik-arora-marketing-portfolio.lovable.app/" />
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
