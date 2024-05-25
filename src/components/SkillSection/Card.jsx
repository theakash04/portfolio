import React from "react";
import "./Skills.css";

function Card({ skills, category }) {
  function handlemousemove(e) {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <div className="card" onMouseMove={handlemousemove}>
      <div className="card-content">
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
                className={`bg-gray-300 text-gray-800 grid place-items-center font-semibold px-4 py-2 rounded-md border-none`}
              >
                {skill.toUpperCase()}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Card;
