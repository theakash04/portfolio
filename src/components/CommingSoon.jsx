import React from "react";
import ButtonStyled from "./HeroSection/ButtonStyled";
import { Link } from "react-router-dom";

function CommingSoon() {
  return (
    <div className="w-screen h-screen grid place-items-center place-content-center gap-10">
      <h1 className="text-5xl font-extrabold text-center lg:text-7xl 2xl:text-8xl">
        <span className="text-transparent bg-gradient-to-br bg-clip-text  from-teal-500 via-indigo-600 to-sky-800 mr-4 filter drop-shadow-md">
          Coming
        </span>
        <span className="text-transparent bg-gradient-to-tr bg-clip-text from-sky-600 via-pink-700 to-red-800 filter drop-shadow-md ">
          Soon
        </span>
      </h1>

      <div>
        <Link to={"/"}>
          <ButtonStyled children={"Go to HomePage"}/>
        </Link>
      </div>
    </div>
  );
}

export default CommingSoon;
