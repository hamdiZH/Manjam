import Hero from "@/components/Hero";
import WhyManjam from "@/components/WhyManjam";
import OurView from "@/components/OurView";
import SwissFramework from "@/components/SwissFramework";
import DigitalAssetJourney from "@/components/DigitalAssetJourney";
import ManjamAcademy from "@/components/ManjamAcademy";
import Timeline from "@/components/Timeline";
import Newsletter from "@/components/Newsletter";
import Blog from "@/components/Blog";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-[35px]">
        <Hero />
        <WhyManjam />
        <OurView />
        <SwissFramework />
        <DigitalAssetJourney />
        <ManjamAcademy />
        <Timeline />
        <Newsletter />
        <Blog />
      </div>
    </div>
  );
}
