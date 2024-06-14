import React from "react";
import './SkillSection/Skills.css'
function HoverCard() {
  function handleMouseMove(e) {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }
  return (
    <div className="card" onMouseMove={handleMouseMove}>
      <div className="card-content">
        <div className="grid place-items-center font-bold text-xl pb-3 relative">
          <p className="p-2 text-center">{category}</p>
        </div>
        <div className="flex flex-wrap gap-4 items-center justify-center py-3">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="skill-badge grid place-items-center font-semibold rounded-md"
            >
              {skill.toUpperCase()}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HoverCard;
