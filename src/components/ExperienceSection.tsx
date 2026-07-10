import { experiences } from "@/data/experience";
import RevealSection from "./RevealSection";

export default function ExperienceSection() {
  return (
    <RevealSection delay={3}>
      <div className="flex items-baseline gap-3 mb-5">
        <span className="eyebrow">04</span>
        <h2 className="text-xl font-semibold text-zinc-100 tracking-tight">
          Experience
        </h2>
      </div>

      {experiences.map((exp) => (
        <div key={`${exp.company}-${exp.startDate}`} className="card rounded-2xl p-6 sm:p-8">
          <div className="relative pl-8 sm:pl-10">
            <div className="absolute left-2 sm:left-3 top-2 bottom-2 w-px timeline-line" />
            <div className="absolute left-0 sm:left-1 top-2 w-4 h-4 rounded-full timeline-dot ring-4 ring-ink-900" />

            <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h3 className="text-lg sm:text-xl font-semibold text-zinc-100">
                    {exp.role}
                  </h3>
                  {exp.isCurrent && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-wider text-accent-500 bg-accent-500/10 border border-accent-500/20 rounded-full px-2 py-0.5">
                      <span className="w-1 h-1 rounded-full bg-accent-500" />
                      Current
                    </span>
                  )}
                </div>
                <p className="text-sm text-zinc-400 mt-1">
                  <span className="text-zinc-200 font-medium">
                    {exp.company}
                  </span>
                  <span className="text-zinc-600 mx-1.5">·</span>
                  {exp.type}
                  <span className="text-zinc-600 mx-1.5">·</span>
                  {exp.location}
                </p>
              </div>
              <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-white/[0.03] border border-white/[0.07] rounded-full px-3 py-1 shrink-0">
                {exp.startDate} — {exp.endDate || "Present"}
              </span>
            </div>

            <ul className="mt-6 grid sm:grid-cols-2 gap-x-7 gap-y-3">
              {exp.points.map((point, i) => (
                <li
                  key={i}
                  className="flex gap-2.5 text-sm text-zinc-300 leading-relaxed"
                >
                  <span className="text-accent-500 mt-0.5 shrink-0 font-mono">
                    ▹
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </RevealSection>
  );
}
