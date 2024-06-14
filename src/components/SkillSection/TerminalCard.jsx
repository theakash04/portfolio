import React from "react";

function TerminalCard({ skills, category }) {

  return (
    <>
      <div className="bg-black text-white p-3 rounded-lg w-full font-mono h-full">
        <div className="flex justify-start items-center w-full pt-3 px-1">
          <div className="flex space-x-2 text-red-500">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
        </div>
        <div className="py-4 w-full px-1">
          <p className="text-green-400 pb-4">$ {category}</p>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="flex gap-2 pt-3 flex-wrap w-full items-center sm:justify-start justify-center">
              {skills.map((skill, i) => (
                <div className="text-white bg-gray-800 px-4 py-2 rounded-md font-semibold" key={i}>{skill.toUpperCase()}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TerminalCard;
