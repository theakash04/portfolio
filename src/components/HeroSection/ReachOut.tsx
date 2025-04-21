import React from "react";

export default function ReachOut() {
  return (
    <div
      className="flex flex-col items-start w-full gap-3"
      style={{ opacity: 1, transform: "none" }}
    >
      <h1 className="text-[#EEEEEE] font-medium">Reach out to me</h1>
      <div className="flex flex-col items-start">
        <p className="text-[#B4B4B4] font-light">
          You can find me most active on{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
            href="https://x.com/theakash04"
          >
            Twitter
          </a>{" "}
          and I’m best reached via{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400"
            href="mailto:aakashkkr04@gmail.com"
          >
            Email
          </a>
          .
        </p>
      </div>
    </div>
  );
}
