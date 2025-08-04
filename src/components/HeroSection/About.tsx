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
            I’m Akash, a Developer
            <br />
            crafting clean UIs and exploring <span className="font-semibold">world</span>{" "}
            with <span className="text-[#FE6A34] font-semibold">code.</span>
          </p>
        </div>
      </div>
    </EnterAnim>
  );
}
