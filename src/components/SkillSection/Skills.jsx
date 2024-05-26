import React from "react";
import Card from "./Card";

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
      <div className="text-3xl font-bold flex w-full items-center justify-center sm:pb-3 sm:pt-0 pt-14">
        <div className="relative group">
          <p className="text-3xl font-bold">SKILLS</p>
          <span className="w-0 h-1 bg-white transition-all ease-in-out absolute bottom-0 group-hover:w-[95px] rounded" />
        </div>
      </div>
      <div className="max-w-[1100px] h-full z-auto p-5 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
        {SkillSet.map((item, i) => (
          <div key={i}>
            <Card category={item.category} skills={item.Tech} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
