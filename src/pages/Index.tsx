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
        <meta property="og:title" content="Ritik Arora | Growth Marketing, CRM & Customer Lifecycle Management" />
        <meta property="og:description" content="Growth & Retention Marketer with 4+ years of experience in CRM, customer lifecycle management, customer engagement, retention marketing, and data driven growth across fintech, e-commerce, and retail." />
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
