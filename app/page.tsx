import HeroSection from "@/components/landing-page/HeroSection";
import DecouverteSection from "@/components/landing-page/DecouverteSection";
import TouristSiteSection from "@/components/landing-page/TouristSiteSection";
import ArtisanalShopSection from "@/components/landing-page/ArtisanalShopSection";
import { TestimonialsSection } from "../components/landing-page/TestimonialsSection";
import CTASection from "../components/landing-page/CTASection";
const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <TouristSiteSection />
      <DecouverteSection />
      <ArtisanalShopSection />
      {/* <CulturalEventsSection/> */}
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default LandingPage;
