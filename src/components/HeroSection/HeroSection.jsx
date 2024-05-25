import React from "react";
import NavBar from "./NavBar";
import HeroMain from "./HeroMain";
import TextLogo from "./TextLogo";

function HeroSection() {
  return (
    <main className={`flex relative w-screen min-h-[720px] `}>
      <div className="w-full absolute flex flex-col h-max-content">
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
