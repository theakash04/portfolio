import React from "react";
import SkillCard from "./SkillCard";

function Skills() {
  const SkillSet = [
    {
      category: "Frontend",
      Tech: [
        "html",
        "css",
        "Material-UI",
        "react",
        "appwrite",
        "Redux",
        "Tailwind-Css",
      ],
    },
    {
      category: "Backend",
      Tech: ["Node-Js", "mongo-db", "mongoose"],
    },
    {
      category: "Languages",
      Tech: ["C", "javascript"],
    },
    {
      category: "Tools",
      Tech: ["Git", "Linux"],
    },
  ];

  return (
    <div className="w-full grid place-items-center">
      <div className="text-3xl font-bold flex w-full items-center justify-center">
        <div className="relative group">
          <p className="text-3xl font-bold">SKILLS</p>
          <span className="w-0 h-1 bg-white transition-all ease-in-out absolute bottom-0 group-hover:w-[95px] rounded" />
        </div>
      </div>
      <div className="max-w-[1000px] h-full z-auto p-5 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {SkillSet.map((item, i) => (
          <div key={i}>
            <SkillCard catogary={item.category} skills={item.Tech} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;