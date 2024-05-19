import React from "react";
import NavBar from "./NavBar";
import MouseTrack from "./MouseTrack";
import HeroMain from "./HeroMain";
import TextLogo from "./TextLogo";

function HeroSection() {
  return (
    <main className={`flex relative w-screen min-h-[720px] z-40`}>
      <MouseTrack />
      <div className="z-40 w-full absolute flex flex-col h-max-content">
        <NavBar />
        <div className="h-full relative">
          <HeroMain />
          <TextLogo text={`Student - Developer -`} />
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
