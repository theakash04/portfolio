"use client";

import { useState } from "react";
import { projects, projectFilters } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import RevealSection from "./RevealSection";

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered =
    activeFilter === "all"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <RevealSection delay={4}>
      <div className="flex flex-wrap items-baseline justify-between gap-3 mb-2">
        <div className="flex items-baseline gap-3 flex-wrap">
          <span className="eyebrow">05</span>
          <h2 className="text-xl font-semibold text-zinc-100 tracking-tight">
            Projects
          </h2>
          <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-zinc-500 bg-zinc-500/10 border border-zinc-700/50 rounded-full px-2 py-0.5">
            <span className="w-1 h-1 rounded-full bg-zinc-500" />
            personal
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          {projectFilters.map((filter) => (
            <button
              key={filter.value}
              className={`filter-btn${activeFilter === filter.value ? " active" : ""}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <p className="text-sm text-zinc-400 mb-5 max-w-2xl">
        Side projects I&apos;ve built in my own time — exploring ideas and tech
        outside of work.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </RevealSection>
  );
}
