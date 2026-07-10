import { stackGroups } from "@/data/stack";

export default function StackCard() {
  return (
    <div className="md:col-span-2 card rounded-2xl p-6 sm:p-7">
      <div className="flex items-center justify-between mb-5">
        <span className="eyebrow">03 · Stack</span>
        <span className="text-[10px] font-mono text-zinc-600 hidden sm:inline">
          ~/stack/
        </span>
      </div>

      <div>
        {stackGroups.map((group) => (
          <div key={group.folder} className="stack-row">
            <span className="stack-prefix">
              {group.isLast ? "└──" : "├──"}
            </span>
            <span className="stack-folder sm:w-24">{group.folder}</span>
            <div className="stack-chips">
              {group.items.map((item) => (
                <span key={item} className="tech-chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
