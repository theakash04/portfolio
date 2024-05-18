import React from "react";
import NavBar from "./NavBar";
import MouseTrack from "./MouseTrack";
import HeroMain from "./HeroMain";
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

function HeroSection() {
  return (
    <main className={`flex relative w-screen h-screen`}>
      <MouseTrack/>
      <div className="z-40 w-full h-full absolute flex flex-col">
        <NavBar />
        <div className="h-full">
          <HeroMain />
          <div className="w-full items-center flex justify-center flex-col absolute bottom-0">
            <p className="py-8 text-lg font-semibold">Scroll Down</p>
            <ArrowDownwardIcon sx={{fontSize: "60px"}} className="animate-bounce"/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
