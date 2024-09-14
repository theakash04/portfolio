"use client";
import { cn } from "@/lib/utils";
import {
  IconBrandCss3,
  IconBrandGit,
  IconBrandHtml5,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandReact,
  IconBrandRedux,
  IconBrandTailwind,
  IconBrandTypescript,
  IconBrandVite,
} from "@tabler/icons-react";

function Skill() {
  const icons = [
    IconBrandTypescript,
    IconBrandReact,
    IconBrandMongodb,
    IconBrandNodejs,
    IconBrandNextjs,
    IconBrandVite,
    IconBrandGit,
    IconBrandTailwind,
    IconBrandRedux,
    IconBrandPython,
    IconBrandHtml5,
    IconBrandCss3,

  ];

  return (
    <div className="bg-transparent p-5 md:w-[70rem] w-screen flex items-center flex-col justify-center gap-8">
      <div className="text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
        <p>Skill Stack</p>
      </div>
      <div className="flex items-center justify-center gap-4 w-full flex-wrap">
        {icons.map((Icon, index) => (
          <Container key={index}>
            <Icon size={32} />
          </Container>
        ))}
      </div>
    </div>
  );
}

const Container = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        `h-16 w-16 rounded-full flex items-center justify-center bg-[rgba(248,248,248,0.01)]
    shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset,0px_32px_24px_-16px_rgba(0,0,0,0.40)]
    `,
        className
      )}
    >
      {children}
    </div>
  );
};

export default Skill;
