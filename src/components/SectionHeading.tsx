"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { easeOut } from '@/utils/motion';

type SectionHeadingProps = {
  title: string;
  path?: string;
  dark?: boolean;
  id: string;
};

export function SectionHeading({ title, path, dark = false, id }: SectionHeadingProps) {
  return (
    <motion.header
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.6 }}
      className="relative flex items-end justify-between gap-6 pb-4"
    >
      <div>
        <motion.div
          variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.25, ease: easeOut }}
          className={`mb-3 flex items-center gap-4 font-mono text-xs tracking-wide ${dark ? 'text-white/60' : 'text-ink/60'}`}
        >
          <span className="flex items-center gap-2">
            <span aria-hidden="true" className="h-2 w-2 bg-lime" />
            {title}
          </span>
          {path && <span>{path}</span>}
        </motion.div>
        <h2
          id={id}
          className={`overflow-hidden pb-[0.1em] text-5xl font-extrabold lowercase leading-[0.85] tracking-[-0.04em] sm:text-7xl lg:text-[8.5rem] ${dark ? 'text-white' : 'text-ink'}`}
        >
          <motion.span
            className="block"
            variants={{ hidden: { y: '105%' }, visible: { y: '0%' } }}
            transition={{ duration: 0.3, ease: easeOut, delay: 0.05 }}
          >
            {title}
          </motion.span>
        </h2>
      </div>
      <motion.span
        aria-hidden="true"
        variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
        transition={{ duration: 0.3, ease: easeOut, delay: 0.1 }}
        className={`absolute inset-x-0 bottom-0 h-px origin-left ${dark ? 'bg-white/15' : 'bg-ink/15'}`}
      />
    </motion.header>
  );
}
