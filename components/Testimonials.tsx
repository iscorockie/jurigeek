"use client";

import { useCallback, useEffect, useState } from "react";
import type { KeyboardEvent } from "react";
import { QuoteIcon, ArrowIcon } from "./Icons";
import Image from "next/image";
import { SectionHeading } from "./SectionHeading";
import { Orbs, GridOverlay } from "./Effects";

const testimonials = [
  {
    quote: "Within a day, Jurigeek mapped our entire contract workflow and automated it. Clear pricing, zero hassle.",
    name: "Chidera O.",
    role: "Small Business Owner, Kampala",
    avatar: "/testimonial-1.jpg",
  },
  {
    quote: "Our intake and drafting used to take days. Now contracts assemble in minutes, and they're more reliable.",
    name: "Emeka A.",
    role: "Property Owner, Entebbe",
    avatar: "/testimonial-2.jpg",
  },
  {
    quote: "Technology law advisory that actually makes sense. We navigated data protection and compliance with confidence.",
    name: "Verified Founder",
    role: "Technology Start-up, Nairobi",
    avatar: "/testimonial-3.jpg",
  },
  {
    quote: "The tech law education is practical and current. It's the exposure I couldn't get anywhere else.",
    name: "Final Year LLB Student",
    role: "Makerere University",
    avatar: "/testimonial-4.jpg",
  },
];

const AUTOPLAY_MS = 5000;

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = testimonials.length;

  const go = useCallback(
    (i: number) => setIndex(((i % count) + count) % count),
    [count]
  );
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count]);
  const prev = useCallback(
    () => setIndex((i) => (i - 1 + count) % count),
    [count]
  );

  // Autoplay — pauses on hover and for users who prefer reduced motion.
  useEffect(() => {
    if (paused) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;
    const id = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, next]);

  // Keyboard arrows when the carousel region is focused.
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowLeft") prev();
    if (e.key === "ArrowRight") next();
  };

  return (
    <section className="relative overflow-hidden bg-brand-100 py-16 sm:py-20">
      <GridOverlay />
      <Orbs />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Testimonials"
          title={
            <>
              Trusted by people <span className="gradient-text">across Africa</span>
            </>
          }
          sub="From law firms to founders, students to organisations: hear from the people we work with."
        />

        <div
          className="reveal mx-auto mt-10 max-w-3xl"
          role="region"
          aria-label="Testimonials carousel"
          aria-roledescription="carousel"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="relative">
            {/* Slide track */}
            <div className="overflow-hidden !rounded-3xl">
              <div
                className="flex transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ transform: `translateX(-${index * 100}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div
                    key={t.name}
                    className="w-full shrink-0 px-0.5 py-1"
                    aria-hidden={i !== index}
                  >
                    <figure className="glass-card flex h-full flex-col !rounded-3xl !p-8 sm:!p-10">
                      <QuoteIcon className="h-9 w-9 text-orange-300/70" />
                      <blockquote className="mt-5 text-lg leading-relaxed text-ink">
                        &ldquo;{t.quote}&rdquo;
                      </blockquote>
                      <figcaption className="mt-auto flex items-center gap-3 pt-8">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          width={48}
                          height={48}
                          className="h-12 w-12 rounded-full border-2 border-orange-400/40 object-cover shadow-glow-soft"
                        />
                        <div>
                          <p className="text-sm font-extrabold text-ink">{t.name}</p>
                          <p className="text-xs text-ink-soft">{t.role}</p>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                ))}
              </div>
            </div>

            {/* Prev / next arrows */}
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="absolute left-3 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#141414]/80 p-3 text-ink backdrop-blur-xl transition hover:border-orange-400/50 hover:text-orange-300 sm:flex"
            >
              <ArrowIcon className="h-4 w-4 rotate-180" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="absolute right-3 top-1/2 z-10 hidden -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-[#141414]/80 p-3 text-ink backdrop-blur-xl transition hover:border-orange-400/50 hover:text-orange-300 sm:flex"
            >
              <ArrowIcon className="h-4 w-4" />
            </button>
          </div>

          {/* Dots */}
          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                type="button"
                onClick={() => go(i)}
                aria-label={`Go to testimonial ${i + 1}: ${t.name}`}
                aria-current={i === index}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index
                    ? "w-7 bg-gradient-to-r from-[#FF6A00] to-[#FF3D00]"
                    : "w-2 bg-white/25 hover:bg-white/45"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
