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
            I’m Sky, a Developer
            {/* <br /> */}
            {/* Developing things that{" "} */}
            {/* <span className="text-[#FE6A34] font-semibold">Matters.</span> */}
          </p>
        </div>
      </div>
    </EnterAnim>
  );
}
