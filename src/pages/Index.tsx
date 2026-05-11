import HeroSlider from "@/components/HeroSlider";
import FeatureCards from "@/components/FeatureCards";
import WelcomeSection from "@/components/WelcomeSection";
import MissionMotto from "@/components/MissionMotto";
import StatsSection from "@/components/StatsSection";
import VirtualTour from "@/components/VirtualTour";
import LatestPosts from "@/components/LatestPosts";
import LifeAtBCS from "@/components/LifeAtBCS";
import JoinCTA from "@/components/JoinCTA";
import InstructorsSection from "@/components/InstructorsSection";
import AlumniSection from "@/components/AlumniSection";
import BottomStats from "@/components/BottomStats";
import PartnersBar from "@/components/PartnersBar";

const Index = () => {
  return (
    <div>
      <div className="relative">
        <HeroSlider />
        <FeatureCards />
      </div>
      <WelcomeSection />
      <StatsSection />
      <VirtualTour />
      <LatestPosts />
      <MissionMotto />
      <LifeAtBCS />
      <JoinCTA />
      <InstructorsSection />
      <AlumniSection />
      <BottomStats />
      <PartnersBar />
    </div>
  );
};

export default Index;
