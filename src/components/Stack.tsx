"use client";

import React from 'react';
import { SectionHeading } from '@/components/SectionHeading';
import { Reveal } from '@/components/Reveal';
import { stack } from '@/data/portfolio';

export function Stack() {
  return (
    <section id="stack" aria-labelledby="stack-title" className="grid-light">
      <div className="mx-auto max-w-7xl px-6 py-24 md:px-10 md:py-32">
        <SectionHeading id="stack-title" title="stack" path="~/stack/" />
        <Reveal className="mt-12 bg-ink p-6 text-white md:p-10">
          <p className="mb-8 font-mono text-xs text-white/50">
            <span className="text-lime">$</span> ls -R ~/stack/
            <span aria-hidden="true" className="ml-1 inline-block h-3 w-1.5 translate-y-0.5 animate-pulse bg-lime" />
          </p>
          <ul className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 lg:grid-cols-6">
            {stack.map((group, i) => (
              <Reveal as="li" key={group.folder} delay={0.1 + i * 0.04}>
                <h3 className="mb-4 flex items-center gap-2 font-mono text-sm font-bold text-lime">
                  <span aria-hidden="true" className="h-2 w-2 bg-lime" />
                  {group.folder}
                </h3>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="cursor-default whitespace-nowrap border border-lime/50 px-2 py-1 font-mono text-xs text-[#e9ffb0] transition-colors duration-150 ease-out hover:bg-lime hover:text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
