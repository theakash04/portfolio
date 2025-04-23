import { useState } from "react";
import { CoreProjects, fullStackProjects } from "./ProjectContent";
import ProjectCard from "./ProjectCard";
import EnterAnim from "../EnterAnim";
import { motion, AnimatePresence } from "motion/react";

export default function MainProjectSection() {
  const [activeTab, setActiveTab] = useState<"fullstack" | "core">("fullstack");

  const projectList =
    activeTab === "fullstack" ? fullStackProjects : CoreProjects;

  return (
    <EnterAnim>
      <div className="flex flex-col items-start w-full gap-3">
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

        {/* Animated Section */}
        <div className="w-full">
          <AnimatePresence mode="wait">
            <motion.ul
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center justify-center w-full gap-4"
            >
              {projectList.map((card, idx) => (
                <ProjectCard
                  title={card.title}
                  progress={card.progress}
                  description={card.description}
                  tags={card.tags}
                  key={idx}
                  link={card.link}
                />
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </EnterAnim>
  );
}
