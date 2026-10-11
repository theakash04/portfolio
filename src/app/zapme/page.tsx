"use client";

import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";

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
    <div className="min-h-screen grid-dark text-white relative overflow-x-hidden flex items-center justify-center p-4 sm:p-6">
      <main className="relative max-w-lg w-full z-10 py-10">
        {/* Back Link */}
        <Reveal delay={0}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-mono tracking-wider text-white/60 hover:text-lime transition-colors mb-6 group"
          >
            <span className="transform group-hover:-translate-x-1 transition-transform">←</span>
            <span>cd ..</span>
          </Link>
        </Reveal>

        {/* Support Card */}
        <Reveal delay={0.1}>
          <div className="border border-white/15 bg-ink p-6 md:p-8">
            <div className="flex items-center justify-between border-b border-white/15 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 bg-lime" />
                <span className="font-mono text-xs text-white/60">~/zapme.sh</span>
              </div>
              <span className="font-mono text-[11px] text-lime">0.00000001 BTC</span>
            </div>

            <div className="space-y-6">
              <div className="text-center">
                <h2 className="text-2xl font-extrabold tracking-tight text-white md:text-3xl">Bitcoin Only</h2>
                <p className="text-xs text-white/70 mt-2 leading-relaxed">
                  Support independent development. No Stripe, no card processors — peer-to-peer electronic cash.
                </p>
              </div>

              {/* Lightning Address Details */}
              <div className="space-y-4">
                <div className="text-center border border-white/10 p-3 bg-white/5">
                  <p className="text-[10px] font-mono text-white/50 uppercase tracking-widest mb-1">
                    Lightning Address
                  </p>
                  <p className="text-lime font-mono text-sm font-bold selection:bg-lime selection:text-ink">
                    {LIGHTNING_ADDRESS}
                  </p>
                </div>

                <button
                  onClick={() => copyText(LIGHTNING_ADDRESS, "address")}
                  className="w-full py-2.5 bg-lime hover:bg-[#d8ff55] active:scale-[0.99] text-ink font-bold font-mono text-xs tracking-wider uppercase transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  {addressCopied ? "COPIED!" : "COPY ADDRESS"}
                </button>

                {/* QR Code */}
                <div className="flex justify-center pt-2">
                  <div className="bg-white p-3.5 border-2 border-lime">
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
              <div className="pt-5 border-t border-white/15">
                <p className="text-[10px] font-mono text-white/50 uppercase tracking-widest text-center mb-2">
                  Find me on Nostr
                </p>
                <button
                  className="w-full border border-white/10 hover:border-lime bg-white/5 p-3 cursor-pointer group/nostr transition-all"
                  onClick={() => {
                    copyText(NPUB_ADDR, "npub");
                    window.open("https://nostria.app/p/" + NPUB_ADDR);
                  }}
                >
                  <p className="text-xs font-mono text-white/70 break-all text-center group-hover/nostr:text-lime transition-colors">
                    {npubCopied ? "copied npub!" : NPUB_ADDR}
                  </p>
                </button>
              </div>
            </div>
          </div>
        </Reveal>
      </main>
    </div>
  );
}

