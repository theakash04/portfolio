"use client";
import About from "./HeroSection/About";
import Profile from "./HeroSection/ProfileCard";
import ReachOut from "./HeroSection/ReachOut";
import QuoteCard from "./Quote";
import { SkillsContent } from "./skills/skillContent";
import SkillCard from "./skills/Skills";
import MainProjectSection from "./project/MainProjectSection";

const MainSection: React.FC = () => {
  return (
    <div className="flex flex-col w-full gap-10">
      <Profile />
      <About />
      <ReachOut />
      <SkillCard skills={SkillsContent.skills} />
      <MainProjectSection />
      <QuoteCard
        quote="To be insanely hopeful even after all that, you call it madness, I call it strength."
        author="Some Wise Dev"
      />
    </div>
  );
};

export default MainSection;
