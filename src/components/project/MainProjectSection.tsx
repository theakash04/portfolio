import { useState } from "react";
import { CoreProjects, fullStackProjects } from "./ProjectContent";
import ProjectCard from "./ProjectCard";

export default function MainProjectSection() {
  const [activeTab, setActiveTab] = useState<"fullstack" | "core">("fullstack");
  return (
    <div
      className="flex flex-col items-start w-full gap-3"
      style={{ opacity: "1", transform: "none" }}
    >
      <h1 className="text-[#EEEEEE] font-medium">Projects</h1>
      <p className="text-[#B4B4B4] font-light mb-4">
        I’ve been actively engaged in a few side projects, exploring diverse
        technologies &amp; ideas. Here’s a quick glimpse of my ongoing and
        completed projects.
      </p>
      <div
        className={`grid w-full ${
          fullStackProjects.length !== 0 && CoreProjects.length !== 0
            ? "grid-cols-2"
            : "grid-cols-1"
        } rounded-xl bg-[#141415] border border-zinc-800 h-9 overflow-hidden`}
      >
        {fullStackProjects.length !== 0 && (
          <button
            onClick={() => setActiveTab("fullstack")}
            className={`text-sm font-medium h-full w-full px-3 py-1 transition-all ${
              activeTab === "fullstack"
                ? "bg-zinc-900 text-[#EEEEEE] shadow"
                : "text-[#B4B4B4]"
            }`}
          >
            Full Stack
          </button>
        )}
        {CoreProjects.length !== 0 && (
          <button
            onClick={() => setActiveTab("core")}
            className={`text-sm font-medium h-full w-full px-3 py-1 transition-all ${
              activeTab === "core"
                ? "bg-zinc-900 text-[#EEEEEE] shadow"
                : "text-[#B4B4B4]"
            }`}
          >
            Core
          </button>
        )}
      </div>
      <div className="w-full">
        <ul className="flex flex-col items-center justify-center w-full gap-4">
          {activeTab === "fullstack"
            ? fullStackProjects.map((card, idx) => (
                <ProjectCard
                  title={card.title}
                  progress={card.progress}
                  description={card.description}
                  tags={card.tags}
                  key={idx}
                  link={card.link}
                />
              ))
            : CoreProjects.map((card, idx) => (
                <ProjectCard
                  title={card.title}
                  progress={card.progress}
                  description={card.description}
                  tags={card.tags}
                  key={idx}
                  link={card.link}
                />
              ))}
        </ul>
      </div>
    </div>
  );
}
