"use client";

import React, { useState } from 'react';
import { ProjectItem } from '@/data/portfolio';
import { TerminalIcon } from 'lucide-react';

interface ProjectImageProps {
  project: ProjectItem;
  className?: string;
  aspect?: 'video' | 'card';
}

export function ProjectImage({ project, className = '', aspect = 'video' }: ProjectImageProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  const aspectClass = aspect === 'video' ? 'aspect-[16/9]' : 'aspect-[4/3]';

  return (
    <div
      className={`relative w-full overflow-hidden bg-ink ${aspectClass} ${className}`}
    >
      {!hasError && project.image ? (
        <>
          {/* Skeleton while loading */}
          {!isLoaded && (
            <div className="absolute inset-0 animate-pulse bg-white/5" />
          )}
          <img
            src={project.image}
            alt={`${project.title} preview`}
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
            className={`h-full w-full object-cover transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            loading="lazy"
          />
          {/* Subtle vignette overlay */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-ink/20" />
        </>
      ) : (
        /* Editorial Fallback Visual Card */
        <div className="relative flex h-full w-full flex-col justify-between border border-white/10 bg-ink p-5 font-mono text-white">
          {/* Grid background pattern */}
          <div className="pointer-events-none absolute inset-0 grid-dark opacity-60" />

          {/* Terminal Window Header */}
          <div className="relative z-10 flex items-center justify-between border-b border-white/15 pb-2.5">
            <div className="flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-white/30" />
              <span className="h-2 w-2 rounded-full bg-white/30" />
              <span className="h-2 w-2 rounded-full bg-lime" />
            </div>
            <span className="text-[10px] text-white/50">~/projects/{project.id}</span>
          </div>

          {/* Center Graphic */}
          <div className="relative z-10 my-auto py-2 text-center">
            <div className="inline-flex items-center gap-2 rounded border border-lime/30 bg-lime/10 px-3 py-1 text-xs text-lime">
              <TerminalIcon className="h-3.5 w-3.5" />
              <span>{project.categoryLabel}</span>
            </div>
            <h4 className="mt-2 text-2xl font-extrabold lowercase tracking-tight text-white">
              {project.title}
            </h4>
            <p className="mt-1 line-clamp-1 text-xs text-white/60">
              {project.tags.join(' · ')}
            </p>
          </div>

          {/* Bottom Bar */}
          <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-2 text-[10px] text-white/40">
            <span>sky.dev/{project.id}</span>
            <span className="text-lime">{project.year}</span>
          </div>
        </div>
      )}
    </div>
  );
}
