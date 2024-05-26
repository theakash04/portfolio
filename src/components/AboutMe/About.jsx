import { User } from "lucide-react";
import React from "react";

function About() {
  function handlemousemove(e) {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }
  return (
    <div
      className="max-w-[720px] w-full grid mb-10 py-5 px-3 overflow-hidden sm:mt-0 mt-20 card"
      onMouseMove={handlemousemove}
    >
      <div className="grid place-items-center ">
        <div className="flex items-center justify-center  pb-6 gap-2">
          <User color="rgb(96,165,250)" />
          {/* small about in blue color */}
          <p className="font-semibold text-3xl text-gray-200">About me</p>
        </div>
        {/* about me */}
        <p className="flex flex-wrap font-semibold font-patrick sm:w-[90%] w-full text-center text-gray-300">
          Hey there, I'm Akash Kumar, currently pursuing my BCA degree from BIT.
          I'm deeply passionate about emerging technologies and fascinated by
          the inner workings of new tech. I've already delved into React and
          solidified my fundamentals by working on various projects. Recently,
          I've embarked on learning backend development. Let's connect and
          explore the endless possibilities in the world of tech together!
        </p>
      </div>
      <div className="w-full h-[50px]">
        <p className="font-londrina text-xl absolute bottom-2 opacity-90 text-blue-200 right-2 -z-10 font-bold">
          #Script Slingers
        </p>
      </div>
    </div>
  );
}

export default About;
