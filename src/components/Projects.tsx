"use client";

import React, { useRef, useState, useMemo } from 'react';
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRightIcon, ChevronDownIcon, LayersIcon } from 'lucide-react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { ProjectModal } from '@/components/ProjectModal';
import { ProjectImage } from '@/components/ProjectImage';
import { projects, projectCategories, ProjectItem } from '@/data/portfolio';
import { easeOut } from '@/utils/motion';

const INITIAL_DISPLAY_COUNT = 5;

export function Projects() {
  const listRef = useRef<HTMLUListElement>(null);
  const [active, setActive] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 320, damping: 32, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 320, damping: 32, mass: 0.5 });

  const handleMove = (e: React.MouseEvent<HTMLUListElement>) => {
    const rect = listRef.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);
  };

  const filteredProjects = useMemo(() => {
    if (selectedCategory === 'all') return projects;
    return projects.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const displayedProjects = useMemo(() => {
    if (isExpanded || filteredProjects.length <= INITIAL_DISPLAY_COUNT) {
      return filteredProjects;
    }
    return filteredProjects.slice(0, INITIAL_DISPLAY_COUNT);
  }, [filteredProjects, isExpanded]);

  return (
    <section id="projects" aria-labelledby="projects-title" className="grid-dark text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <SectionHeading id="projects-title" title="projects" path="~/projects/" dark />

        {/* Filter bar & Control Row */}
        <Reveal delay={0.1} className="mt-8 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
          <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter projects">
            {projectCategories.map((category) => {
              const isSelected = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => {
                    setSelectedCategory(category.id);
                    setIsExpanded(false);
                  }}
                  className={`relative border px-3 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime active:scale-[0.98] ${
                    isSelected
                      ? 'border-lime bg-lime text-ink font-bold'
                      : 'border-white/20 text-white/70 hover:border-white/50 hover:text-white'
                  }`}
                >
                  {category.label}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-2 font-mono text-xs text-white/50">
            <LayersIcon className="h-3.5 w-3.5 text-lime" aria-hidden="true" />
            <span>
              showing {displayedProjects.length} of {filteredProjects.length} items · click for details
            </span>
          </div>
        </Reveal>

        {/* Projects List */}
        <ul
          ref={listRef}
          onMouseMove={handleMove}
          onMouseLeave={() => setActive(null)}
          className="relative mt-4"
        >
          {displayedProjects.map((project, i) => (
            <Reveal as="li" key={project.id} delay={i * 0.04} className="border-b border-white/15">
              <button
                type="button"
                onClick={() => setSelectedProject(project)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onBlur={() => setActive(null)}
                className="group grid w-full text-left gap-4 py-8 focus-visible:outline-none md:grid-cols-12 md:items-center md:gap-6 md:py-9"
              >
                <div className="md:hidden">
                  <ProjectImage project={project} aspect="card" />
                </div>

                <span className="font-mono text-xs text-white/40 md:col-span-1">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="md:col-span-5">
                  <div className="flex items-center gap-3">
                    <h3 className="text-3xl font-extrabold lowercase tracking-[-0.03em] transition-[color,transform] duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-2 group-hover:text-lime group-focus-visible:translate-x-2 group-focus-visible:text-lime md:text-5xl">
                      {project.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-base text-white/60">{project.summary}</p>
                </div>

                <ul className="flex flex-wrap gap-2 md:col-span-4" aria-label="Built with">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border border-white/20 px-2 py-1 font-mono text-[11px] text-white/70 group-hover:border-lime/40 group-hover:text-[#e9ffb0] transition-colors"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between gap-4 md:col-span-2 md:justify-end">
                  <span className="font-mono text-xs text-white/50">{project.year}</span>
                  <span className="flex h-10 w-10 items-center justify-center border border-white/20 transition-[background-color,border-color,color] duration-200 ease-out group-hover:border-lime group-hover:bg-lime group-hover:text-ink group-focus-visible:border-lime group-focus-visible:bg-lime group-focus-visible:text-ink">
                    <ArrowUpRightIcon
                      aria-hidden="true"
                      className="h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:rotate-45"
                    />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}

          {/* Cursor Hover Image Follower (Desktop) */}
          <AnimatePresence>
            {active !== null && displayedProjects[active] && (
              <motion.div
                aria-hidden="true"
                style={{ x: springX, y: springY }}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2, ease: easeOut }}
                className="pointer-events-none absolute left-0 top-0 z-20 hidden md:block"
              >
                <div className="relative -ml-40 -mt-60 aspect-[4/3] w-80 overflow-hidden border border-lime bg-ink shadow-2xl">
                  <ProjectImage project={displayedProjects[active]} aspect="card" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </ul>

        {/* Expand / Collapse Toggle if more items exist */}
        {filteredProjects.length > INITIAL_DISPLAY_COUNT && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setIsExpanded(!isExpanded)}
              className="group inline-flex items-center gap-3 border border-lime bg-ink px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-lime transition-all duration-150 ease-out hover:bg-lime hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime active:scale-[0.98]"
            >
              <span>
                {isExpanded
                  ? 'Show Less'
                  : `View All ${filteredProjects.length} Projects`}
              </span>
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                  isExpanded ? 'rotate-180' : ''
                }`}
                aria-hidden="true"
              />
            </button>
          </div>
        )}

        {/* Project Detail Modal / Sheet */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
