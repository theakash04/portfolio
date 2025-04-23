import React from "react";
import EnterAnim from "../EnterAnim";

export default function About() {
  return (
    <EnterAnim>
      <div
        className="flex flex-col items-start w-full gap-3"
        style={{ opacity: 1, transform: "none" }}
      >
        <h1 className="text-[#EEEEEE] font-medium">About Me</h1>
        <div className="flex flex-col items-start">
          <p className="text-[#B4B4B4] font-light">
            I’m Akash Kumar, a Software Developer.
            <br />
            <br />
            I’m currently at{" "}
            <a
              target="_self"
              rel="noopener noreferrer"
              className="text-[#FE6A34] font-medium"
              href="#"
            >
              BIT, Mesra.
            </a>{" "}
            Completing my degree in Computer Applications.
            <br />
            <br />
            Always liked coding and building things. So here I am, learning and
            building stuff.
          </p>
        </div>
      </div>
    </EnterAnim>
  );
}
