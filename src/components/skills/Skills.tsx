import React from "react";
import { SkillCardProps } from "./skillContent";

const SkillCard: React.FC<SkillCardProps> = ({ skills }) => {
  const skillCategories = [
    { title: "Languages", skills: skills.languages },
    { title: "Frontend", skills: skills.frontend },
    { title: "Backend", skills: skills.backend },
    { title: "Databases", skills: skills.databases },
    { title: "DevOps & Cloud", skills: skills.devops },
    { title: "Data Engineering", skills: skills.dataEngineering },
    { title: "Others", skills: skills.others },
  ];

  return (
    <div
      className="flex flex-col items-start w-full gap-3"
      style={{ opacity: 1, transform: "none" }}
    >
      <h1 className="text-[#EEEEEE] font-medium">Skills</h1>
      <p className="text-[#B4B4B4] font-light mb-4">
        Here are the skills I have acquired over the years of learning and
        building things.
      </p>

      <div className="w-full flex flex-col items-start gap-3">
        {skillCategories.map((category, i) => {
          if (category.skills.length === 0) return null;
          return (
            <div
              key={category.title}
              className="w-full flex flex-wrap items-center gap-2 text-sm"
            >
              <h1 className="text-[#EEEEEE] font-medium flex items-center">
                {i + 1 + ". "} {category.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="px-3 py-0.5 border border-zinc-800 bg-[#141415] rounded-md text-[#EEEEEE] font-light"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCard;
