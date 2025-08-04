"use client";
import About from "./HeroSection/About";
import Profile from "./HeroSection/ProfileCard";
import QuoteCard from "./Quote";
import { SkillsContent } from "./skills/skillContent";
import SkillCard from "./skills/Skills";
import MainProjectSection from "./project/MainProjectSection";
import Experience from "./Experience/page";

const MainSection: React.FC = () => {
  return (
    <div className="flex flex-col w-full gap-10">
      <Profile />
      <About />
      <Experience />
      <MainProjectSection />
      <SkillCard skills={SkillsContent.skills} />
      <QuoteCard />
    </div>
  );
};

export default MainSection;
