"use client";

import React from "react";
import { MotionConfig } from "framer-motion";
import { ScrollProgress } from "@/components/ScrollProgress";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Stack } from "@/components/Stack";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <MotionConfig reducedMotion="user">
      <div id="top" className="min-h-screen w-full bg-paper">
        <ScrollProgress />
        <Hero />
        <main>
          <About />
          <Projects />
          <Stack />
          <Experience />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}

