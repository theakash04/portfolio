import { profile } from "@/data/profile";

export default function AboutCard() {
  return (
    <div className="card rounded-2xl overflow-hidden">
      <div className="window-chrome">
        <div className="flex items-center gap-1.5">
          <div className="window-dot" />
          <div className="window-dot" />
          <div className="window-dot r" />
        </div>
        <span className="text-[10px] font-mono text-zinc-500">~/about.md</span>
      </div>

      <div className="p-6 sm:p-7">
        <div className="flex items-center gap-2 mb-5">
          <span className="eyebrow">01 · About</span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-semibold text-zinc-100 leading-snug tracking-tight">
          {profile.aboutHeading.prefix}{" "}
          <span className="bg-gradient-to-br from-accent-300 via-accent-500 to-accent-600 bg-clip-text text-transparent">
            {profile.aboutHeading.highlight}
          </span>
        </h2>

        {profile.bio.map((paragraph, i) => (
          <p
            key={i}
            className="mt-4 first:mt-4 text-zinc-400 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: paragraph }}
          />
        ))}
      </div>
    </div>
  );
}
