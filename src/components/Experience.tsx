"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { experience } from '@/data/portfolio';

export function Experience() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ['start 75%', 'end 60%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 200, damping: 30, mass: 0.4 });

  return (
    <section id="experience" aria-labelledby="experience-title" className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <SectionHeading id="experience-title" number="04" title="experience" dark />
        <ol ref={listRef} className="relative mt-16 pl-8 md:pl-12">
          <span aria-hidden="true" className="absolute bottom-0 left-0 top-2 w-0.5 bg-white/15" />
          <motion.span
            aria-hidden="true"
            style={{ scaleY }}
            className="absolute bottom-0 left-0 top-2 w-0.5 origin-top bg-lime"
          />

          {experience.map((job) => (
            <li key={job.period} className="relative pb-16 last:pb-0">
              <span
                aria-hidden="true"
                className={`absolute -left-[calc(2rem+7px)] top-2 h-4 w-4 rounded-full border-2 border-lime md:-left-[calc(3rem+7px)] ${
                  job.current ? 'status-pulse bg-ink' : 'bg-lime'
                }`}
              />

              <Reveal className="grid gap-4 md:grid-cols-12">
                <div className="md:col-span-8">
                  <h3 className="flex flex-wrap items-center gap-3 text-2xl font-extrabold tracking-tight md:text-4xl">
                    {job.role}
                    {job.current && (
                      <span className="bg-lime px-2 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-ink">
                        Current
                      </span>
                    )}
                  </h3>
                  <p className="mt-2 text-base text-white/70">
                    {job.company} · {job.type} · {job.mode}
                  </p>
                </div>
                <p className="font-mono text-sm text-white/60 md:col-span-4 md:pt-3 md:text-right">{job.period}</p>
              </Reveal>
              {job.bullets.length > 0 && (
                <ul className="mt-8 grid gap-x-12 gap-y-4 md:grid-cols-2">
                  {job.bullets.map((bullet, i) => (
                    <Reveal
                      as="li"
                      key={bullet}
                      delay={i * 0.04}
                      className="flex gap-3 text-[15px] leading-relaxed text-white/80"
                    >
                      <span aria-hidden="true" className="font-bold text-lime">▹</span>
                      {bullet}
                    </Reveal>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
