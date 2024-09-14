"use client";
import GridBg from "@/components/ui/GridBackground";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import Skill from "./skill";
import AboutPage from "./about";
import { IconPhone } from "@tabler/icons-react";

export default function MainHeroPage() {
  return (
    <>
      <GridBg>
        <HeroPage />
      </GridBg>
    </>
  );
}

function HeroPage() {
  return (
    <div className="h-max w-full relative flex flex-col items-center justify-start gap-10">
      <div className="max-w-2xl flex flex-col items-center justify-center">
        <a href="https://x.com/theakash04" target="blank">
          <HoverBorderGradient className="flex gap-4 items-center justify-center">
            <IconPhone />
            <p>Contact Me</p>
          </HoverBorderGradient>
        </a>
        <h1 className="relative z-10 text-5xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500  text-center font-sans font-bold py-8">
          Hello! I'm Akash
        </h1>
        <p className="text-muted-foreground max-w-lg text-lg md:text-xl text-center relative z-10 font-semibold">
          Until you do something on your own in programming, nothing will happen
        </p>
      </div>
      <div className="py-10 px-5 flex items-center justify-center w-full">
        <Skill />
      </div>
      <div className="px-5 flex items-center justify-center w-full">
        <AboutPage />
      </div>
    </div>
  );
}
