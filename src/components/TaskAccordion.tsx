"use client";

import { useState } from "react";
import { ChevronRight } from "./Icons";

interface Task {
  tag: string;
  title: string;
  paragraphs: string[];
}

export default function TaskAccordion({ tasks }: { tasks: Task[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col border-t border-line mt-2">
      {tasks.map((task, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i} className="border-t border-line py-2.5">
            <button
              className="flex items-center gap-3 w-full py-4 cursor-pointer text-left transition-colors duration-150 hover:text-accent"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : i)}
            >
              <ChevronRight
                className={`w-3.5 h-3.5 text-accent-2 shrink-0 transition-transform duration-300 ease-[cubic-bezier(.2,.7,.2,1)] ${
                  isOpen ? "rotate-90 !text-accent" : ""
                }`}
              />
              <span className="font-mono text-[11.5px] text-accent tracking-[0.02em] shrink-0">
                [{task.tag}]
              </span>
              <span className="font-display font-medium text-[14.5px] tracking-[-0.005em] text-ink">
                {task.title}
              </span>
            </button>
            {isOpen && (
              <div className="pt-2 pb-[22px] pl-[26px] flex flex-col gap-3 animate-[taskBodyIn_.3s_cubic-bezier(.2,.7,.2,1)]">
                {task.paragraphs.map((p, j) => (
                  <p
                    key={j}
                    className="m-0 text-[13.5px] text-ink-2 leading-[1.7] max-w-[70ch] pl-3.5 border-l-2 border-line-2"
                  >
                    {p}
                  </p>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
