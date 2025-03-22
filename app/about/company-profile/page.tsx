import AboutHero from "./_components/about-hero";
import AboutIntro from "./_components/about-intro";
import ClientSatisfaction from "./_components/ClientSatisfaction";
import VisionMission from "./_components/vision-mission";
import WhyChooseUs from "./_components/why-choose-us";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white overflow-hidden mt-10 pt-14 ">
      <AboutHero />
      <AboutIntro />
      <WhyChooseUs />
      <VisionMission />
      <ClientSatisfaction />
    </main>
  );
}
