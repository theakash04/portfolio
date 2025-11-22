"use client";
import EnterAnim from "@/components/EnterAnim";
import { QRCodeSVG } from "qrcode.react";
import { useState } from "react";

const SupportPage = () => {
  const [AddressCopied, setAddressCopied] = useState(false);
  const [npubCopied, setNpubCopied] = useState(false);

  const LIGHTNING_ADDRESS = "sky04@coinos.io";
  const NPUB_ADDR =
    "npub1zeyh0qu93xtz9u0u5uv643g9lj3a3296rl0d7x2ux5ksejy9x04qsc9x5h";

  const copyAddress = (text: string, type: "address" | "npub") => {
    navigator.clipboard.writeText(text);
    if (type === "address") {
      setAddressCopied(true);
      setTimeout(() => setAddressCopied(false), 2000);
    } else if (type === "npub") {
      setNpubCopied(true);
      setTimeout(() => setNpubCopied(false), 2000);
    }
  };

  return (
    <EnterAnim>
      <div className="min-h-screen flex items-center justify-center p-6">
        <div className="max-w-md w-full space-y-8">
          {/* Header */}
          <div className="text-center space-y-4">
            <p className="text-zinc-400 text-sm leading-relaxed">
              Your support motivates me to keep building cool things that solves
              some problems.
            </p>
          </div>

          {/* Main Card */}
          <div className="bg-[#141415] border border-zinc-800 rounded-2xl p-6 space-y-6">
            {/* Bitcoin Icon */}
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-yellow-400 flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  className="w-10 h-10 text-black"
                  fill="currentColor"
                >
                  <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z" />
                </svg>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-xl font-semibold text-zinc-100">
                Bitcoin Only
              </h2>
              <p className="text-sm text-zinc-400 mt-1">
                No Stripe, No PayPal. Just peer-to-peer electronic cash.
              </p>
            </div>

            {/* Payment Options Tabs */}
            <div className="grid grid-cols-2 gap-2 p-1 bg-[#0a0a0a] rounded-lg">
              <button className="px-4 py-2 rounded-md bg-yellow-400 text-black font-medium text-sm transition-colors flex items-center justify-center gap-2">
                <span>⚡</span>
                Lightning
              </button>
              <button className="px-4 py-2 rounded-md text-zinc-400 font-medium text-sm hover:bg-zinc-800/50 transition-colors flex items-center justify-center gap-2">
                <span className="w-2 h-2 rounded-full bg-zinc-600"></span>
                On-Chain
              </button>
            </div>

            {/* Lightning Address Section */}
            <div className="space-y-3">
              <div className="text-center">
                <p className="text-xs text-zinc-500 uppercase tracking-wider mb-2">
                  Lightning Address
                </p>
                <p className="text-yellow-400 font-mono text-sm">
                  {LIGHTNING_ADDRESS}
                </p>
              </div>

              <button
                onClick={() => copyAddress(LIGHTNING_ADDRESS, "address")}
                className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-black font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                </svg>
                {AddressCopied ? "COPIED!" : "COPY ADDRESS"}
              </button>

              {/* QR Code Placeholder */}
              <div className="flex justify-center pt-4">
                <div className="bg-white p-4">
                  <QRCodeSVG
                    value={LIGHTNING_ADDRESS}
                    size={180}
                    level="M"
                    bgColor="#ffffff"
                    fgColor="#000000"
                  />
                </div>
              </div>
            </div>

            {/* Nostr Section */}
            <div className="pt-4 border-t border-zinc-800">
              <p className="text-xs text-zinc-500 uppercase tracking-wider text-center mb-2">
                Find me on Nostr
              </p>
              <div
                className="bg-[#0a0a0a] rounded-lg p-3"
                onClick={() => copyAddress(NPUB_ADDR, "npub")}
              >
                <p className="text-xs font-mono text-zinc-400 break-all text-center  hover:text-yellow-300 cursor-pointer">
                  {npubCopied ? "copied" : NPUB_ADDR}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </EnterAnim>
  );
};

export default SupportPage;
