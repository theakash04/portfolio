import { useState, useMemo, useEffect } from "react";
import { CoreProjects, fullStackProjects } from "./ProjectContent";
import ProjectCard from "./ProjectCard";
import EnterAnim from "../EnterAnim";
import { motion, AnimatePresence } from "motion/react";

const PROJECTS_PER_PAGE = 2;
const AUTO_PLAY_INTERVAL = 5000;

export default function MainProjectSection() {
  const [currentPage, setCurrentPage] = useState(1);
  const [isPaused, setIsPaused] = useState(false);

  const allProjects = useMemo(() => [...fullStackProjects, ...CoreProjects], []);
  const totalPages = Math.ceil(allProjects.length / PROJECTS_PER_PAGE);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev % totalPages) + 1);
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [currentPage, totalPages, isPaused]);

  const paginatedProjects = useMemo(() => {
    const start = (currentPage - 1) * PROJECTS_PER_PAGE;
    return allProjects.slice(start, start + PROJECTS_PER_PAGE);
  }, [currentPage, allProjects]);

  return (
    <EnterAnim>
      <div className="flex flex-col items-start w-full gap-6">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#EEEEEE] font-medium text-xl">Projects</h1>
          <p className="text-[#B4B4B4] font-light">
            I’ve been actively engaged in a few side projects, exploring diverse
            technologies &amp; ideas. Here’s a quick glimpse of my ongoing and
            completed projects.
          </p>
        </div>

        {/* Project List */}
        <div 
          className="w-full min-h-[600px]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="wait">
            <motion.ul
              key={currentPage}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="flex flex-col items-center justify-center w-full gap-6"
            >
              {paginatedProjects.map((card, idx) => (
                <ProjectCard
                  title={card.title}
                  progress={card.progress}
                  description={card.description}
                  tags={card.tags}
                  key={`${card.title}-${idx}`}
                  link={card.link}
                />
              ))}
            </motion.ul>
          </AnimatePresence>
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between w-full pt-4 border-t border-zinc-800/50">
            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-500 font-medium">
                Page {currentPage} of {totalPages}
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Previous page"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              
              <div className="flex gap-1.5">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      currentPage === i + 1 
                        ? "bg-indigo-500 w-6" 
                        : "bg-zinc-700 hover:bg-zinc-500"
                    }`}
                    aria-label={`Go to page ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
                className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                aria-label="Next page"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </EnterAnim>
  );
}
