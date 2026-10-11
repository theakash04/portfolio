"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon } from 'lucide-react';
import { Reveal } from '@/components/Reveal';
import { profile } from '@/data/portfolio';
import { easeOut } from '@/utils/motion';

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t-4 border-lime bg-paper">
      <div className="mx-auto max-w-7xl px-6 pt-20 md:px-10">
        <Reveal className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-4xl font-extrabold lowercase tracking-tight md:text-5xl">got something in mind?</p>
            <motion.a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.12, ease: easeOut }}
              className="group mt-6 inline-flex items-center gap-2 bg-ink px-4 py-2.5 font-mono text-sm text-lime transition-colors duration-150 ease-out hover:bg-lime hover:text-ink"
            >
              {profile.handle}
              <ArrowUpRightIcon
                className="h-4 w-4 transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:rotate-45"
                aria-hidden="true"
              />
            </motion.a>
          </div>
          <div className="flex items-center gap-6 font-mono text-xs text-ink/60">
            <span>© 2026 Sky</span>
            <span className="flex items-center gap-2 text-ink">
              <span className="status-pulse h-1.5 w-1.5 rounded-full bg-lime ring-1 ring-ink/30" />
              Available for work
            </span>
          </div>
        </Reveal>
        <div aria-hidden="true" className="mt-12 overflow-hidden">
          <motion.p
            initial={{ y: '40%', opacity: 0 }}
            whileInView={{ y: '0%', opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, ease: easeOut }}
            className="select-none text-[38vw] font-extrabold lowercase leading-[0.72] tracking-[-0.07em] text-ink md:text-[26rem]"
          >
            sky<span className="text-lime">.</span>
          </motion.p>
        </div>
      </div>
    </footer>
  );
}

