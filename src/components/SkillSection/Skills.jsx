import React from "react";
import Card from "./Card";
import "./Skills.css";

function Skills() {
  const colorMapping = {
    html: "rgba(227, 76, 38, 0.7)",       // Lighter HTML orange
    css: "rgba(21, 114, 182, 0.7)",       // Lighter CSS blue
    "Material-UI": "rgba(0, 129, 203, 0.7)", // Lighter Material-UI blue
    react: "rgba(97, 218, 251, 0.7)",     // Lighter React blue
    appwrite: "rgba(240, 46, 101, 0.7)",  // Lighter Appwrite pink
    Redux: "rgba(118, 74, 188, 0.7)",     // Lighter Redux purple
    "Tailwind-Css": "rgba(56, 178, 172, 0.7)", // Lighter Tailwind CSS teal
    Vite: "rgba(100, 108, 255, 0.7)",     // Lighter Vite purple
    "Node-Js": "rgba(51, 153, 51, 0.7)",  // Lighter Node.js green
    "mongo-db": "rgba(71, 162, 72, 0.7)", // Lighter MongoDB green
    mongoose: "rgba(136, 0, 0, 0.7)",     // Lighter Mongoose red
    "Express-Js": "rgba(0, 0, 0, 0.7)",   // Lighter Express.js black
    javascript: "rgba(247, 223, 30, 0.7)", // Lighter JavaScript yellow
    Python: "rgba(55, 118, 171, 0.7)",    // Lighter Python blue
    C: "rgba(168, 185, 204, 0.7)",        // Lighter C light blue
    Git: "rgba(240, 80, 50, 0.7)",        // Lighter Git orange
    Linux: "rgba(252, 198, 36, 0.7)",     // Lighter Linux yellow
    latex: "rgba(0, 128, 128, 0.7)"       // Lighter LaTeX teal
  };
  

  const SkillSet = [
    {
      category: "Frontend 💻",
      Tech: [
        "html",
        "css",
        "Material-UI",
        "react",
        "appwrite",
        "Redux",
        "Tailwind-Css",
        "Vite"
      ]
    },
    {
      category: "Backend ⚙️",
      Tech: ["Node-Js", "mongo-db", "mongoose", "Express-Js", "Mongoose"]
    },
    {
      category: "Languages 📌",
      Tech: ["C", "javascript", "Node-Js", "Python"]
    },
    {
      category: "Tools 🛠️",
      Tech: ["Git", "Linux", "latex"]
    }
  ];

  return (
    <div className="w-full grid place-items-center">
      <div className="text-3xl font-bold flex w-full items-center justify-center sm:pb-3 sm:pt-0">
        <div className="relative group">
          <p className="text-3xl font-bold">SKILLS</p>
          <span className="w-0 h-1 bg-white transition-all ease-in-out absolute bottom-0 group-hover:w-[95px] rounded" />
        </div>
      </div>
      <div className="max-w-[1100px] h-full z-auto p-5 grid gap-2 sm:grid-cols-2 md:grid-cols-3">
        {SkillSet.map((item, i) => (
          <div key={i}>
            <Card category={item.category} skills={item.Tech} colorMapping={colorMapping} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
