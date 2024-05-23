import React from "react";
import "./Skills.css";

function SkillCard({ skills, category}) {
  return (
    <div className="card bg-slate-700/30 p-2 rounded-md shadow-md">
      <div className="grid place-items-center font-bold text-xl pb-3 relative">
        {/* Skill catagory */}
        <p className="p-2 text-center">{category}</p>
      </div>
      <div className="flex flex-wrap gap-4 items-center justify-center py-3">
        {/* skills */}
        {skills.map((skill, i) => {
          return (
            <span
              key={i}
              className={`bg-[#ced4da] text-gray-800 grid place-items-center font-semibold px-4 py-1 rounded-md border-none`}
            >
              {skill.toUpperCase()}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default SkillCard;