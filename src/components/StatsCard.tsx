import { stats } from "@/data/stats";

function CalendarIcon() {
  return (
    <svg
      className="w-[18px] h-[18px]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" />
      <path d="M16 2v4M8 2v4M3 10h18" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg
      className="w-[18px] h-[18px]"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 7a2 2 0 012-2h4l2 2h8a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V7z" />
    </svg>
  );
}

const iconMap = { calendar: CalendarIcon, folder: FolderIcon };

export default function StatsCard() {
  return (
    <div className="card rounded-2xl p-6 sm:p-7">
      <div className="flex items-center gap-2 mb-5">
        <span className="eyebrow">02 · Stats</span>
      </div>

      <div className="space-y-2.5">
        {stats.map((stat) => {
          const Icon = iconMap[stat.icon];
          return (
            <div key={stat.label} className="stat-card">
              <div className="stat-icon">
                <Icon />
              </div>
              <div className="min-w-0">
                <div className="text-2xl font-bold text-zinc-100 leading-none">
                  {stat.value}
                  <span className="text-accent-500">{stat.suffix}</span>
                </div>
                <div className="text-[10px] text-zinc-500 uppercase tracking-wider font-medium mt-1.5">
                  {stat.label}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-5 pt-4 border-t border-zinc-800/50 text-[10.5px] text-zinc-500 leading-relaxed">
        <span className="text-accent-500">*</span> Personal projects are built
        in my own time — not professional work.
      </p>
    </div>
  );
}
