import AboutHero from "./_components/about-hero";
import AboutIntro from "./_components/about-intro";
import ClientSatisfaction from "./_components/ClientSatisfaction";
import VisionMission from "./_components/vision-mission";
import WhyChooseUs from "./_components/why-choose-us";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden mt-4 sm:mt-6 md:mt-10 pt-4 sm:pt-6 md:pt-10">
      <div className="space-y-8 sm:space-y-12 md:space-y-16">
        <AboutHero />
        <AboutIntro />
        <WhyChooseUs />
        <VisionMission />
        <ClientSatisfaction />
      </div>
    </main>
  );
}

// Aryan2005
// patelap9723
