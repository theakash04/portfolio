"use client";

import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import Link from "next/link";
import BackgroundCanvas from "@/components/BackgroundCanvas";
import RevealSection from "@/components/RevealSection";

const LIGHTNING_ADDRESS = "sky@rizful.com";
const NPUB_ADDR =
  "npub1zeyh0qu93xtz9u0u5uv643g9lj3a3296rl0d7x2ux5ksejy9x04qsc9x5h";

export default function SupportPage() {
  const [addressCopied, setAddressCopied] = useState(false);
  const [npubCopied, setNpubCopied] = useState(false);

  function copyText(text: string, type: "address" | "npub") {
    navigator.clipboard.writeText(text);
    if (type === "address") {
      setAddressCopied(true);
      setTimeout(() => setAddressCopied(false), 2000);
    } else {
      setNpubCopied(true);
      setTimeout(() => setNpubCopied(false), 2000);
    }
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden flex items-center justify-center p-4 sm:p-6">
      <BackgroundCanvas />

      <main className="relative max-w-lg w-full z-10 py-10">
        {/* Back Link */}
        <RevealSection delay={0}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-zinc-400 hover:text-accent-500 transition-colors mb-6 group"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transform group-hover:-translate-x-1 transition-transform"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            cd ..
          </Link>
        </RevealSection>

        {/* Support Card */}
        <RevealSection delay={1}>
          <div className="card rounded-2xl overflow-hidden shadow-2xl">
            {/* Terminal Chrome Header */}
            <div className="window-chrome">
              <div className="flex items-center gap-1.5">
                <div className="window-dot" />
                <div className="window-dot" />
                <div className="window-dot r" />
              </div>
              <span className="text-[10px] font-mono text-zinc-500">~/zapme.sh</span>
            </div>

            {/* Card Contents */}
            <div className="p-6 space-y-6">
              {/* Bitcoin Icon / Badge */}
              <div className="flex justify-center">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-500/20 to-accent-600/5 border border-accent-500/30 flex items-center justify-center text-accent-400">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-10 h-10 shadow-[0_0_15px_rgba(255,107,53,0.2)]"
                    fill="currentColor"
                  >
                    <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z" />
                  </svg>
                </div>
              </div>

              <div className="text-center">
                <span className="eyebrow block mb-2">Support</span>
                <h2 className="text-xl font-bold text-zinc-100">Bitcoin Only</h2>
                <p className="text-xs text-zinc-400 mt-2 leading-relaxed">
                  Your support motivates me to keep building cool things that solve real problems.
                  No Stripe, no card processors — just peer-to-peer electronic cash.
                </p>
              </div>

              {/* Payment Type Selection (Mock Tabs styled perfectly) */}
              <div className="grid grid-cols-2 gap-1.5 p-1 bg-ink-950/60 border border-zinc-800/80 rounded-lg">
                <button className="px-4 py-2 rounded-md bg-accent-500 text-ink-950 font-semibold text-xs tracking-wider uppercase transition-colors flex items-center justify-center gap-2">
                  Lightning
                </button>
                <button className="px-4 py-2 rounded-md text-zinc-500 font-semibold text-xs tracking-wider uppercase hover:bg-ink-700/50 transition-colors flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-600" />
                  On-Chain
                </button>
              </div>

              {/* Lightning Address Details */}
              <div className="space-y-4">
                <div className="text-center">
                  <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest mb-1">
                    Lightning Address
                  </p>
                  <p className="text-accent-300 font-mono text-sm font-semibold selection:bg-accent-500/30">
                    {LIGHTNING_ADDRESS}
                  </p>
                </div>

                <button
                  onClick={() => copyText(LIGHTNING_ADDRESS, "address")}
                  className="w-full py-2.5 bg-accent-500 hover:bg-accent-600 active:scale-[0.99] text-ink-950 font-semibold text-xs tracking-wider uppercase rounded-lg transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-accent-500/10"
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="w-3.5 h-3.5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  {addressCopied ? "COPIED!" : "COPY ADDRESS"}
                </button>

                {/* QR Code */}
                <div className="flex justify-center pt-2">
                  <div className="bg-white p-3.5 rounded-xl border border-zinc-200 shadow-xl shadow-black/40">
                    <QRCodeSVG
                      value={LIGHTNING_ADDRESS}
                      size={160}
                      level="M"
                      bgColor="#ffffff"
                      fgColor="#000000"
                    />
                  </div>
                </div>
              </div>

              {/* Nostr Find Section */}
              <div className="pt-5 border-t border-zinc-800/80">
                <p className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest text-center mb-2">
                  Find me on Nostr
                </p>
                <button
                  className="w-full bg-ink-950/40 border border-zinc-850 hover:border-zinc-700/80 rounded-xl p-3 cursor-pointer group/nostr transition-all"
                  onClick={() => {
                    copyText(NPUB_ADDR, "npub");
                    window.open("https://nostria.app/p/" + NPUB_ADDR);
                  }}
                >
                  <p className="text-xs font-mono text-zinc-400 break-all text-center group-hover/nostr:text-accent-300 transition-colors">
                    {npubCopied ? "copied npub!" : NPUB_ADDR}
                  </p>
                </button>
              </div>
            </div>
          </div>
        </RevealSection>
      </main>
    </div>
  );
}
