"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { easeInOut, easeOut } from '@/utils/motion';

type HandCircleProps = {
  children: React.ReactNode;
};

export function HandCircle({ children }: HandCircleProps) {
  return (
    <motion.span
      className="relative inline-block whitespace-nowrap"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
    >
      <span className="relative z-10 px-2 text-ink">
        <motion.span
          aria-hidden="true"
          className="absolute inset-0 -z-10 origin-left bg-lime"
          variants={{ hidden: { scaleX: 0 }, visible: { scaleX: 1 } }}
          transition={{ duration: 0.3, ease: easeOut, delay: 0.15 }}
        />
        {children}
      </span>
      <svg
        aria-hidden="true"
        viewBox="0 0 160 60"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -left-4 -top-4 z-20 h-[calc(100%+2rem)] w-[calc(100%+2rem)] overflow-visible"
      >
        <motion.path
          d="M6,30 C4,12 40,2 80,3 C125,4 156,14 154,30 C152,48 112,57 78,57 C38,57 8,48 6,32"
          fill="none"
          stroke="#0a0a0a"
          strokeWidth={2}
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1 } }}
          transition={{
            pathLength: { duration: 0.3, ease: easeInOut, delay: 0.45 },
            opacity: { duration: 0.05, delay: 0.45 },
          }}
        />
      </svg>
    </motion.span>
  );
}
