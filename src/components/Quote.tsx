"use client";
import React, { useEffect, useState } from "react";
import EnterAnim from "./EnterAnim";

interface QuoteCardProps {
  quote: string;
  author?: string;
}

const QuoteCard = () => {
  const [quoteData, setQuoteData] = useState<QuoteCardProps | null>(null);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await fetch("/api/getquote", {
          cache: "no-store",
        });
        const data = await res.json();
        setQuoteData(data);
      } catch (err) {
        console.error("Error fetching quote:", err);
      }
    };

    fetchQuote();
  }, []);

  if (!quoteData) return null;

  return (
    <EnterAnim>
      <div className="relative mx-auto w-full rounded-2xl border border-dashed border-zinc-300 px-4 dark:border-zinc-800 sm:px-6 md:px-8 bg-[#141415]">
        {/* Top and bottom dashed lines */}
        <div className="absolute left-0 top-4 -z-0 h-px w-full bg-zinc-400 dark:bg-zinc-800 sm:top-6 md:top-8"></div>
        <div className="absolute bottom-4 left-0 z-0 h-px w-full bg-zinc-400 dark:bg-zinc-800 sm:bottom-6 md:bottom-8"></div>

        {/* Decorative dots */}
        <div className="relative w-full border-x border-zinc-400 dark:border-zinc-800">
          <div className="absolute z-0 grid h-full w-full items-center gap-8 lg:grid-cols-2">
            <section className="absolute z-0 grid h-full w-full grid-cols-2 place-content-between">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className={`rounded-full outline outline-8 dark:outline-zinc-950 sm:my-6 md:my-8 my-4 size-1 outline-gray-50 bg-green-400 ${
                    i % 2 === 1 ? "place-self-end -mx-[2px]" : "-mx-[2.5px]"
                  }`}
                />
              ))}
            </section>
          </div>

          {/* Main quote content */}
          <div className="relative z-20 mx-auto py-8">
            <div className="p-3 w-full center">
              <div className="text-left p-4">
                <h3 className="font-medium mb-3 text-gray-900 dark:text-[#EEEEEE]">
                  Quote of the day
                </h3>
                <p className="text-gray-700 dark:text-[#B4B4B4] italic">
                  “{quoteData?.quote}”
                </p>
                {quoteData?.author && (
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    — {quoteData.author}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </EnterAnim>
  );
};

export default QuoteCard;
