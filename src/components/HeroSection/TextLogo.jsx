import React from "react";
import "./Hero.css";

function TextLogo({ text }) {
  const textAr = text.split("");

  return (
    <div className="flex sm:flex-row flex-col px-4 items-center justify-center gap-5 ">
      <div className="center relative w-[150px] h-[150px] rounded-full flex justify-center items-center">
        <div className="logo" />
        <div className="text">
          <p>
            {textAr.map((chr, i) => (
              <span key={i} style={{ transform: `rotate(${i * 16}deg)` }}>
                {chr}
              </span>
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export default TextLogo;
