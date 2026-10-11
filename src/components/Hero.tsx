"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { navLinks, profile } from '@/data/portfolio';
import { easeOut } from '@/utils/motion';

const pixels = [1, 0.4, 1, 0, 1, 0.4, 0.6, 1, 0, 1, 0, 1];
const letters = [...profile.name.split(''), '.'];

export function Hero() {
  return (
    <section aria-label="Introduction" className="grid-dark relative overflow-hidden text-white">
      <div className="mx-auto flex min-h-[86vh] max-w-7xl flex-col px-6 py-6 md:px-10">
        <motion.nav
          aria-label="Primary"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, ease: easeOut }}
          className="flex items-center justify-between gap-6"
        >
          <a href="#top" className="font-mono text-sm font-bold tracking-widest">
            SKY<span className="text-lime">.</span>
          </a>
          <ul className="hidden items-center gap-8 font-mono text-xs md:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="group relative inline-block py-1 text-white/70 transition-colors duration-150 ease-out hover:text-white focus-visible:text-white focus-visible:outline-none"
                >
                  {link.label}
                  <span className="absolute inset-x-0 bottom-0 h-px origin-right scale-x-0 bg-lime transition-transform duration-200 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:origin-left group-hover:scale-x-100 group-focus-visible:origin-left group-focus-visible:scale-x-100" />
                </a>
              </li>
            ))}
          </ul>
          {profile.available && (
            <span className="flex items-center gap-2 border border-white/30 px-3 py-1 font-mono text-[11px] tracking-wide text-white/90">
              <span className="status-pulse h-1.5 w-1.5 rounded-full bg-lime" />
              Available
            </span>
          )}
        </motion.nav>

        <div aria-hidden="true" className="absolute right-[18%] top-28 hidden grid-cols-4 gap-1 md:grid">
          {pixels.map((o, i) => (
            <motion.span
              key={i}
              className="h-4 w-4 bg-lime"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: o, scale: 1 }}
              transition={{ duration: 0.2, ease: easeOut, delay: 0.4 + i * 0.03 }}
            />
          ))}
        </div>

        <div className="mt-auto grid items-end gap-10 pt-24 md:grid-cols-12">
          <div className="md:col-span-8">
            <h1
              aria-label={profile.name}
              className="flex overflow-hidden pb-[0.06em] text-[34vw] font-extrabold lowercase leading-[0.8] tracking-[-0.06em] md:text-[17rem] lg:text-[21rem]"
            >
              {letters.map((char, i) => (
                <motion.span
                  key={i}
                  aria-hidden="true"
                  className={`inline-block ${char === '.' ? 'text-lime' : ''}`}
                  initial={{ y: '105%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.3, ease: easeOut, delay: 0.1 + i * 0.06 }}
                >
                  {char}
                </motion.span>
              ))}
            </h1>
            <motion.a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: easeOut, delay: 0.4 }}
              className="group mt-6 inline-flex items-center gap-2 font-mono text-sm text-lime"
            >
              {profile.handle}
              <span className="inline-block transition-transform duration-200 ease-out group-hover:translate-x-1">→</span>
            </motion.a>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: easeOut, delay: 0.45 }}
            className="max-w-sm text-lg leading-relaxed text-white/80 md:col-span-4 md:justify-self-end md:pb-8 md:text-right"
          >
            {profile.tagline}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
