"use client";

import { useEffect, useState } from "react";
import RevealSection from "./RevealSection";

interface QuoteData {
  quote: string;
  author?: string;
}

export default function QuoteSection() {
  const [quoteData, setQuoteData] = useState<QuoteData | null>(null);

  useEffect(() => {
    async function fetchQuote() {
      try {
        const res = await fetch("/api/getquote", { cache: "no-store" });
        const data = await res.json();
        setQuoteData(data);
      } catch {
        setQuoteData({
          quote: "The best way to predict the future is to invent it.",
          author: "Alan Kay",
        });
      }
    }
    fetchQuote();
  }, []);

  if (!quoteData) return null;

  return (
    <RevealSection>
      <div className="relative max-w-3xl mx-auto rounded-2xl border border-dashed border-zinc-800 bg-ink-900/40 px-5 sm:px-10 py-10 sm:py-12">
        <div className="absolute left-0 right-0 top-3 h-px bg-zinc-800/80" />
        <div className="absolute left-0 right-0 bottom-3 h-px bg-zinc-800/80" />

        <div className="relative sm:-mx-5">
          <div className="absolute -left-1.5 top-0 corner-dot -translate-y-1/2" />
          <div className="absolute -right-1.5 top-0 corner-dot -translate-y-1/2" />
          <div className="absolute -left-1.5 bottom-0 corner-dot translate-y-1/2" />
          <div className="absolute -right-1.5 bottom-0 corner-dot translate-y-1/2" />

          <div className="text-center py-2 px-4 sm:px-6">
            <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-emerald-500 mb-5">
              Quote of the day
            </p>
            <p className="text-lg sm:text-xl text-zinc-200 leading-relaxed font-light italic">
              &ldquo;{quoteData.quote}&rdquo;
            </p>
            {quoteData.author && (
              <p className="mt-5 text-sm text-zinc-500">
                — {quoteData.author}
              </p>
            )}
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
