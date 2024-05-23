import React from "react";
import {
  Container,
  HeroSection,
  Projects,
  Skills,
} from "../../components/Components";
import Crousel from "@/components/Projects_TOP/Crousel";

function Home() {
  return (
    <Container>
      <HeroSection />
      <Skills />
      <div className="w-full grid place-items-center">
        <Projects />
      </div>
    </Container>
  );
}

export default Home;
