"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-30 backdrop-blur-[14px] backdrop-saturate-[160%] [-webkit-backdrop-filter:saturate(160%)_blur(14px)] border-b transition-[border-color] duration-[250ms] ${
        scrolled
          ? "border-line bg-[color-mix(in_oklch,#0a0a0a,transparent_16%)]"
          : "border-transparent bg-[color-mix(in_oklch,#0a0a0a,transparent_16%)]"
      }`}
    >
      <div className="max-w-[1180px] mx-auto px-[clamp(28px,8vw,120px)] py-[22px] flex items-center justify-between gap-6">
        <a
          href="#top"
          className="font-display text-[14.5px] font-medium tracking-[-0.015em] inline-flex items-center gap-3 text-ink"
        >
          <span className="w-1.5 h-1.5 bg-accent rounded-full" />
          박초희 Portfolio
        </a>
        <div className="flex gap-8 font-mono text-[11.5px] tracking-[0.1em] text-ink-2 max-[720px]:hidden">
          <a href="#profile" className="py-1 transition-colors duration-150 hover:text-ink">Profile</a>
          <a href="#skills" className="py-1 transition-colors duration-150 hover:text-ink">Skills</a>
          <a href="#project" className="py-1 transition-colors duration-150 hover:text-ink">Project</a>
          <a href="#about" className="py-1 transition-colors duration-150 hover:text-ink">About</a>
          <a href="#contact" className="py-1 transition-colors duration-150 hover:text-ink">Contact</a>
        </div>
      </div>
    </nav>
  );
}
