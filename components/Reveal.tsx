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
 *
 * `reveal-in` is added imperatively, but React owns each element's `class`
 * attribute: whenever a tracked element re-renders with a changed className
 * (e.g. the FAQ accordion toggling its open-state classes), React rewrites
 * the whole attribute and silently strips `reveal-in`, sending the tile back
 * to its hidden state. A MutationObserver guards every tracked element and
 * restores the class once it has been earned, so re-renders can never blank
 * out revealed content.
 */
export function Reveal() {
  useEffect(() => {
    const root = document.documentElement;
    const els = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    root.classList.add("reveal-ready");

    const revealed = new WeakSet<Element>();
    const markRevealed = (el: HTMLElement) => {
      revealed.add(el);
      el.classList.add("reveal-in");
    };

    // Restore `reveal-in` if a React re-render rewrites the class attribute.
    // Mutations made by the guard itself re-enter the callback but no-op
    // (the class is already present), so this cannot loop.
    const guard = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        const el = mutation.target as HTMLElement;
        if (revealed.has(el) && !el.classList.contains("reveal-in")) {
          el.classList.add("reveal-in");
        }
      }
    });
    els.forEach((el) =>
      guard.observe(el, { attributes: true, attributeFilter: ["class"] })
    );

    if (!("IntersectionObserver" in window)) {
      els.forEach(markRevealed);
      return () => guard.disconnect();
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            markRevealed(entry.target as HTMLElement);
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" }
    );

    els.forEach((el) => io.observe(el));

    // Fail-safe: never leave content hidden, even if observation misbehaves.
    const failSafe = window.setTimeout(() => els.forEach(markRevealed), 2500);

    return () => {
      io.disconnect();
      guard.disconnect();
      window.clearTimeout(failSafe);
    };
  }, []);

  return null;
}
