"use client";

import React from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { HandCircle } from '@/components/HandCircle';
import { Reveal } from '@/components/Reveal';
import { about } from '@/data/portfolio';

export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="grid-light">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <SectionHeading id="about-title" number="01" title="about" path={about.path} />
        <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-10">
          <Reveal className="md:col-span-7">
            <p className="text-4xl font-extrabold lowercase leading-[1.1] tracking-[-0.02em] text-ink md:text-6xl">
              {about.headingLead} <HandCircle>{about.headingMark}</HandCircle>
            </p>
          </Reveal>
          <Reveal delay={0.1} className="self-end md:col-span-4 md:col-start-9">
            <p className="text-lg leading-relaxed text-ink/80">{about.body}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
