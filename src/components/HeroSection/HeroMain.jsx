import React from "react";
import { Link } from "react-router-dom";

function HeroMain() {
  return (
    <div className="w-full px-5 pt-5 flex flex-col pb-5" id="hero-main-section">
      <div className="flex justify-center mb-10">
        <span className="bg-[#b2dffe] flex items-center px-3 py-1 rounded-md text-[#106ba7] font-semibold gap-2 justify-center">
          <span className="bg-green-600 w-3 h-3 rounded-full animate-pulse " />
          <p>Available for work</p>
        </span>
      </div>
      <div className="w-full flex flex-col items-center py-5">
        <div className="flex flex-col items-center gap-5">
          {/* intro */}
          <p className="text-5xl font-bold text-center w-full">Hello! I am Akash</p>
          {/* profession */}
          <p className="font-semibold text-lg text-[#c6c6c6]">WEB DEVELOPER</p>
        </div>
        <div className="text-center pt-10 sm:px-16 text-2xl font-bold text-[#b6b6b6]">
          Until you do something on your own in programming, nothing will happen
        </div>

        <div className="flex gap-5 mt-10 items-center justify-center">
          {/* buttons */}
          <Link to={'/projects'} >
            <button className="bg-[#DAE2ED] text-[#434D5B] cursor-pointer font-semibold px-4 rounded-lg hover:bg-[#DAE2ED]/90 transition-all ease-in-out py-3">
              Watch Projects
            </button>
          </Link>
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
