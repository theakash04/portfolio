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
      className="max-w-[720px] w-full grid mb-10 overflow-hidden sm:mt-0 mt-20 card"
      onMouseMove={handlemousemove}
    >
      <div className="grid place-items-center gap-5 py-5">
        <div className="flex items-center justify-center gap-2">
          <User color="rgb(96,165,250)" />
          {/* small about in blue color */}
          <p className="font-semibold text-3xl text-gray-200">About me</p>
        </div>
        {/* about me */}
        <p className="flex flex-wrap font-semibold font-roboto sm:w-[90%] w-full text-center text-pretty text-gray-300 pb-3 px-5">
          Hey there, I'm Akash Kumar, currently pursuing my BCA degree from BIT.
          I'm deeply passionate about emerging technologies and fascinated by
          the inner workings of new tech. I've already delved into React and
          solidified my fundamentals by working on various projects. Recently,
          I've embarked on learning backend development. Let's connect and
          explore the endless possibilities in the world of tech together!
        </p>
      </div>
    </div>
  );
}

export default About;
