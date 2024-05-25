import React from "react";
import {
  Container,
  Copyright,
  HeroSection,
  Projects,
  Skills,
} from "../../components/Components";
import Crousel from "@/components/Projects_Home/Crousel";

function Home() {
  return (
    <Container>
      <HeroSection />
      <Skills />
      <div className="w-full grid place-items-center">
        <Projects />
      </div>
      <Copyright />
    </Container>
  );
}

export default Home;
