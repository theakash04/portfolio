import React from "react";
import {
  About,
  Container,
  Copyright,
  HeroSection,
  Projects,
  Skills,
} from "@/components/Components";

function Home() {
  return (
    <Container>
      <HeroSection />
      <div className="w-full flex items-center justify-center py-10 px-3">
        <About />
      </div>
      <Skills />
      <div className="w-full grid place-items-center">
        <Projects />
      </div>
      <Copyright />
    </Container>
  );
}

export default Home;
