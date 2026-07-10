import type { Project } from "@/data/projects";

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17L17 7M17 7H7M17 7v10" />
    </svg>
  );
}

export default function ProjectCard({ project }: { project: Project }) {
  const primaryLink =
    project.links.live || project.links.github;

  return (
    <a
      href={primaryLink}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card card rounded-2xl overflow-hidden block group"
    >
      <div
        className="project-cover"
        style={{ background: project.coverGradient }}
      >
        <div className="project-cover-label">
          <span>{project.label}</span>
          <ArrowIcon className="w-3.5 h-3.5" />
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="pc-title text-base font-semibold text-zinc-100">
            {project.title}
          </h3>
          <ArrowIcon className="pc-arrow w-4 h-4 text-zinc-500" />
        </div>

        <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}
