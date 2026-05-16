"use client";

import { useState } from "react";
import { ChevronRight } from "./Icons";

interface PeriodAccordionItem {
  period: string;
  title: string;
  desc?: string;
  images?: string[];
}

export default function PeriodAccordion({ items }: { items: PeriodAccordionItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <ul className="list-none p-0 m-0 flex flex-col">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        const hasDetail = item.desc || item.images;
        return (
          <li
            key={i}
            className={`py-3.5 max-[560px]:gap-1 ${i === 0 ? "" : "border-t border-line"} ${i === 0 ? "pt-0" : ""}`}
          >
            {hasDetail ? (
              <>
                <button
                  className="flex items-center gap-3 w-full cursor-pointer text-left transition-colors duration-150 hover:text-accent"
                  aria-expanded={isOpen}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <ChevronRight
                    className={`w-3.5 h-3.5 text-accent-2 shrink-0 transition-transform duration-300 ease-[cubic-bezier(.2,.7,.2,1)] ${
                      isOpen ? "rotate-90 !text-accent" : ""
                    }`}
                  />
                  <span className="font-mono text-[11px] tracking-[0.04em] text-accent-2 font-bold shrink-0">
                    {item.period}
                  </span>
                  <span className="text-[14px] text-ink tracking-[-0.005em] leading-[1.45]">
                    {item.title}
                  </span>
                </button>
                {isOpen && (
                  <div className="pt-3 pb-1 pl-[26px] flex flex-col gap-3 animate-[taskBodyIn_.3s_cubic-bezier(.2,.7,.2,1)]">
                    {item.desc && (
                      <p className="m-0 text-[13.5px] text-ink-2 leading-[1.7] max-w-[70ch] pl-3.5 border-l-2 border-line-2 whitespace-pre-line">
                        {item.desc}
                      </p>
                    )}
                    {item.images && item.images.length > 0 && (
                      <div className="flex gap-2.5 pl-3.5 items-start">
                        {item.images.map((src, j) => (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            key={j}
                            src={src}
                            alt={item.title}
                            className="rounded-lg border border-line-2 h-[180px] object-contain"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </>
            ) : (
              <div className="flex items-center gap-3 pl-[24px]">
                <span className="font-mono text-[11px] tracking-[0.04em] text-accent-2 font-bold shrink-0">
                  {item.period}
                </span>
                <span className="text-[14px] text-ink tracking-[-0.005em] leading-[1.45]">
                  {item.title}
                </span>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
