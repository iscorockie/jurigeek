"use client";

import { useEffect } from "react";

/**
 * Global scroll-reveal driver.
 *
 * Elements marked `.reveal` start visible (see globals.css) and are hidden +
 * animated only once this component marks the document as `reveal-ready`.
 * An IntersectionObserver adds `.reveal-in` as tiles enter the viewport,
 * with a fail-safe that reveals everything after a short delay so content
 * is never left hidden.
 */
export function Reveal() {
  useEffect(() => {
    const root = document.documentElement;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    root.classList.add("reveal-ready");

    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("reveal-in"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal-in");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" }
    );

    els.forEach((el) => io.observe(el));

    // Fail-safe: never leave content hidden, even if observation misbehaves.
    const failSafe = window.setTimeout(
      () => els.forEach((el) => el.classList.add("reveal-in")),
      2500
    );

    return () => {
      io.disconnect();
      window.clearTimeout(failSafe);
    };
  }, []);

  return null;
}
