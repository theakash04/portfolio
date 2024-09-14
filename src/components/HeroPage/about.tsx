"use client";

import { LinkPreview } from "../ui/link-preview";

export default function AboutPage() {
  return (
    <div className="bg-transparent p-3 sm:w-[70rem] w-screen flex items-center flex-col justify-center">
      <p className="text-center text-balance font-sans font-semibold text-muted-foreground">
        I am a student with experience in web development, proficient in both
        frontend and backend technologies.
        <br />
        Feel free to follow me on {" "}
        <LinkPreview url="https://github.com/theakash04" className="font-bold text-lg">
          Github
        </LinkPreview>{" "}
        to connect and explore my projects!
      </p>
    </div>
  );
}
