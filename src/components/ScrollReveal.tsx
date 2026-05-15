"use client";

import { useEffect } from "react";

export default function ScrollRevealInit() {
  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;

    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            obs.unobserve(e.target);
          }
        }),
      { threshold: 0.08, rootMargin: "0px 0px -60px 0px" }
    );

    document.querySelectorAll("[data-reveal]").forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, []);

  return null;
}
