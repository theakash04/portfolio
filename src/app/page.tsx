import BackgroundCanvas from "@/components/BackgroundCanvas";
import HeroProfile from "@/components/HeroProfile";
import AboutCard from "@/components/AboutCard";
import StatsCard from "@/components/StatsCard";
import StackCard from "@/components/StackCard";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import QuoteSection from "@/components/QuoteSection";
import Footer from "@/components/Footer";
import RevealSection from "@/components/RevealSection";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <BackgroundCanvas />

      <main
        className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16 space-y-5 sm:space-y-6"
        style={{ zIndex: 10 }}
      >
        <HeroProfile />

        <RevealSection delay={1}>
          <AboutCard />
        </RevealSection>

        <RevealSection delay={2} className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <StatsCard />
          <StackCard />
        </RevealSection>

        <ExperienceSection />
        <ProjectsSection />
        <QuoteSection />
        <Footer />
      </main>
    </div>
  );
}
