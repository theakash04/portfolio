import React from "react";
import { Link } from "react-router-dom";
import GsapBtn from "./GsapBtn";

function HeroMain() {
  return (
    <div
      className="w-screen px-5 pt-5 flex flex-col pb-5 relative"
      id="hero-main-section"
    >
      <div className="w-full flex flex-col items-center py-5">
        <div className="flex flex-col items-center gap-5">
          {/* intro */}

          <p className="text-5xl font-bold text-center w-full">
            <span className="font-extrabold hover:text-green-500 transition-all">Hello!</span> I am Akash
          </p>
          {/* profession */}
          <div className="flex justify-center items-center gap-4">
            <span className="tooltip-container">
              <span className="tooltip">Available for Work</span>
              <span className="text"></span>
            </span>
            <p className="font-semibold text-lg text-[#c6c6c6]">
              WEB DEVELOPER
            </p>
          </div>
        </div>
        <div className="text-center pt-10 text-2xl font-bold text-[#b6b6b6] relative">
          Until you do something on your own in programming, nothing will happen
          <div className="run" />
        </div>

        <div className="flex gap-5 mt-10 items-center justify-center">
          {/* buttons */}
          <GsapBtn />
          <Link to="https://x.com/theakash04" target="blank">
            <button className=" text-white cursor-pointer font-semibold px-4 rounded-lg hover:bg-[#DAE2ED]/30 transition-all ease-in-out py-3">
              Contact Me
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroMain;
