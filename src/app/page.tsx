import MainHeroPage from "@/components/HeroPage/heroPage";
import { ProjectSection } from "@/components/project";

export default function Home() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden scroll-smooth">
      <div className="md:py-0 py-10 h-max">
        <MainHeroPage />
      </div>
      <div className="w-full h-max">
        <ProjectSection />
      </div>
    </div>
  );
}
