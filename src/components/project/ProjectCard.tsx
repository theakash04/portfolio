"use client";
import Image from "next/image";
import type { projectData } from "./ProjectContent";

type ProjectCardProps = projectData;

const ProjectCard = ({
  title,
  description,
  tags,
  link,
  progress,
}: ProjectCardProps) => {
  return (
    <div className="relative h-full rounded-2xl p-6 bg-[#141415] backdrop-blur-sm border border-zinc-800 transition-all duration-300 w-full">
      <div className="flex items-start justify-between mb-3 gap-2">
        <div>
          <h3 className="font-medium text-white">{title}</h3>
          <p className="text-sm text-zinc-400">{description}</p>
        </div>
        {link.live && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-900/30 text-amber-400 text-xs font-medium"
            href={link.live}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5"
            >
              <path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" />
              <path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" />
              <path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" />
              <circle cx="12" cy="12" r="10" />
            </svg>
            <span>Live</span>
          </a>
        )}
        {link.youtube && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-red-900/30 text-red-400 text-xs font-medium"
            href={link.youtube}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5"
            >
              <circle cx="12" cy="12" r="10" />
              <polygon points="10 8 16 12 10 16 10 8" fill="currentColor" />
            </svg>
            <span>Demo</span>
          </a>
        )}
        {link.apk && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-green-900/30 text-green-400 text-xs font-medium"
            href={link.apk}
          >
            {/* Insert SVG here */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-3.5 h-3.5"
            >
              <path d="M9 20V14" />
              <path d="M15 20V14" />
              <rect x="4" y="8" width="16" height="10" rx="2" />
              <path d="M4 10L2 6" />
              <path d="M20 10L22 6" />
              <circle cx="9" cy="12" r="0.5" fill="currentColor" />
              <circle cx="15" cy="12" r="0.5" fill="currentColor" />
            </svg>
            <span>apk</span>
          </a>
        )}
      </div>
      <div className="flex items-center gap-2 mb-3">
        <div className="flex -space-x-2">
          <div className="relative group/member">
            <Image
              alt="Sky"
              loading="lazy"
              width="24"
              height="24"
              decoding="async"
              data-nimg="1"
              className="rounded-full ring-2 ring-zinc-900 transition-transform hover:-translate-y-1 duration-200"
              src="/chamber.jpg"
            />
            <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-2 py-1 rounded-md text-[10px] bg-zinc-100 text-zinc-900 opacity-0 group-hover/member:opacity-100 transition-opacity duration-200">
              sky
            </span>
          </div>
        </div>
      </div>
      {/* need to fix the tag */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        <div className="flex items-center justify-center gap-2 p-1 rounded-xl bg-zinc-800/50 border border-zinc-800/50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3 h-3 text-red-400"
          >
            <path d="m18 16 4-4-4-4" />
            <path d="m6 8-4 4 4 4" />
            <path d="m14.5 4-5 16" />
          </svg>
          <span className="text-sm font-medium text-zinc-300">
            {tags.frontend}
          </span>
        </div>
        <div className="flex items-center justify-center gap-2 p-1 rounded-xl bg-zinc-800/50 border border-zinc-800/50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3 h-3 text-yellow-400"
          >
            <line x1="22" x2="2" y1="6" y2="6" />
            <line x1="22" x2="2" y1="18" y2="18" />
            <line x1="6" x2="6" y1="2" y2="22" />
            <line x1="18" x2="18" y1="2" y2="22" />
          </svg>
          <span className="text-sm text-zinc-300">{tags.backend}</span>
        </div>
        <div className="flex items-center justify-center gap-2 p-1 rounded-xl bg-zinc-800/50 border border-zinc-800/50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3 h-3 text-indigo-400"
          >
            <ellipse cx="12" cy="5" rx="9" ry="3" />
            <path d="M3 5V19A9 3 0 0 0 21 19V5" />
            <path d="M3 12A9 3 0 0 0 21 12" />
          </svg>
          <span className="text-sm font-medium text-zinc-300">
            {tags.database}
          </span>
        </div>
        <div className="flex items-center justify-center gap-2 p-1 rounded-xl bg-zinc-800/50 border border-zinc-800/50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-3 h-3 text-emerald-400"
          >
            <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
          </svg>
          <span className="text-sm font-medium text-zinc-300">
            {tags.devops}
          </span>
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="font-medium text-zinc-300">Progress</span>
          <span className="text-zinc-400">{progress}</span>
        </div>
        <div className="h-2 rounded-full bg-zinc-800">
          <div
            className="h-full rounded-full bg-indigo-400 transition-all duration-1000 ease-out"
            style={{ width: progress }}
          />
        </div>
      </div>
      <div className="mt-6 pt-4 space-y-4 border-t border-zinc-800">
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-white transition-colors duration-200"
          href={link.github}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
          >
            <path
              d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z"
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
            />
          </svg>
          View Project Details
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4 h-4"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
