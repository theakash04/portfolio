"use client";

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRightIcon, PlayIcon, DownloadIcon, XIcon, GlobeIcon, Code2Icon, CopyIcon, CheckIcon } from 'lucide-react';
import { ProjectItem } from '@/data/portfolio';
import { ProjectImage } from '@/components/ProjectImage';
import { easeOut } from '@/utils/motion';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  const handleCopyLink = () => {
    if (!project) return;
    const link = project.links.live || project.links.github;
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {project && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-project-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10"
        >
          {/* Backdrop */}
          <motion.div
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: easeOut }}
            onClick={onClose}
            className="fixed inset-0 bg-ink/80 backdrop-blur-sm"
          />

          {/* Modal Card / Sheet */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 16 }}
            transition={{ duration: 0.25, ease: easeOut }}
            className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden border border-white/20 bg-ink text-white shadow-2xl"
          >
            {/* Terminal Window Header */}
            <div className="flex items-center justify-between border-b border-white/15 bg-ink px-5 py-3.5">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5" aria-hidden="true">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-lime shadow-[0_0_8px_rgba(200,245,60,0.6)]" />
                </div>
                <span className="font-mono text-xs text-white/60">
                  ~/projects/<span className="text-lime">{project.id}</span>.md
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopyLink}
                  aria-label="Copy project URL"
                  className="flex items-center gap-1.5 rounded border border-white/10 px-2.5 py-1 font-mono text-[11px] text-white/60 transition-colors duration-150 ease-out hover:border-lime hover:text-lime focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                >
                  {copied ? (
                    <>
                      <CheckIcon className="h-3 w-3 text-lime" />
                      <span className="text-lime">COPIED</span>
                    </>
                  ) : (
                    <>
                      <CopyIcon className="h-3 w-3" />
                      <span>COPY LINK</span>
                    </>
                  )}
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close project modal"
                  className="group flex items-center gap-1.5 rounded border border-white/10 px-2 py-1 font-mono text-[11px] text-white/60 transition-colors duration-150 ease-out hover:border-lime hover:bg-lime hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                >
                  <span>ESC</span>
                  <XIcon className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>

            {/* Scrollable Modal Content */}
            <div className="overflow-y-auto p-6 md:p-8">
              {/* Media Preview */}
              <div className="relative w-full overflow-hidden border border-white/15 bg-white/5">
                <ProjectImage project={project} aspect="video" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between border border-ink/40 bg-ink/85 px-3 py-1.5 font-mono text-xs text-white/80 backdrop-blur-sm">
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-lime" />
                    {project.categoryLabel}
                  </span>
                  <span>{project.year}</span>
                </div>
              </div>

              {/* Title & Metadata */}
              <div className="mt-6 flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <h3
                  id="modal-project-title"
                  className="text-3xl font-extrabold lowercase tracking-[-0.03em] text-white md:text-4xl"
                >
                  {project.title}
                </h3>
                <span className="font-mono text-xs text-lime">
                  status: shipped / active
                </span>
              </div>

              {/* Descriptions */}
              <div className="mt-4 space-y-3 text-base leading-relaxed text-white/80">
                <p>{project.description}</p>
                <p className="text-sm text-white/60">{project.summary}</p>
              </div>

              {/* Tags / Stack */}
              <div className="mt-6">
                <p className="mb-2 font-mono text-xs uppercase tracking-wider text-white/50">
                  Built with
                </p>
                <ul className="flex flex-wrap gap-2" aria-label="Project technologies">
                  {project.tags.map((tag) => (
                    <li
                      key={tag}
                      className="border border-lime/40 bg-lime/5 px-2.5 py-1 font-mono text-xs text-[#e9ffb0]"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-3 border-t border-white/15 pt-6">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-lime bg-lime px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-ink transition-colors duration-150 ease-out hover:bg-white hover:border-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                  >
                    <Code2Icon className="h-4 w-4" aria-hidden="true" />
                    <span>View Repository</span>
                    <ArrowUpRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}

                {project.links.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-white/30 bg-white/5 px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-white transition-colors duration-150 ease-out hover:border-lime hover:bg-lime hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                  >
                    <GlobeIcon className="h-4 w-4" aria-hidden="true" />
                    <span>Live Demo</span>
                    <ArrowUpRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}

                {project.links.youtube && (
                  <a
                    href={project.links.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-white/30 bg-white/5 px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-white transition-colors duration-150 ease-out hover:border-lime hover:bg-lime hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                  >
                    <PlayIcon className="h-4 w-4" aria-hidden="true" />
                    <span>Watch Demo</span>
                    <ArrowUpRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}

                {project.links.apk && (
                  <a
                    href={project.links.apk}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-white/30 bg-white/5 px-4 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-white transition-colors duration-150 ease-out hover:border-lime hover:bg-lime hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                  >
                    <DownloadIcon className="h-4 w-4" aria-hidden="true" />
                    <span>Download APK</span>
                    <ArrowUpRightIcon className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

