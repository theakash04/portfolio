import { User } from "lucide-react";
import React from "react";
import '../SkillSection/Skills.css'

function About() {
  
  return (
    <div
      className="max-w-[720px] w-full mb-10 overflow-hidden sm:mt-0 mt-20 card h-full"
    >
      <div className="content flex items-center justify-center flex-col gap-7">
        <div className="flex items-center gap-3">
          <User color="rgb(96,165,250)" />
          {/* small about in blue color */}
          <p className="font-semibold text-3xl text-gray-200">About me</p>
        </div>
        {/* about me */}
        <p className="flex flex-wrap font-semibold font-roboto w-full h-full text-center text-pretty text-gray-300 pb-3 px-5 text-lg">
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
