"use client";

import { useState } from "react";
import { ChevronDownIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";
import { Orbs, GridOverlay } from "./Effects";

const faqs = [
  {
    q: "What does Jurigeek actually do?",
    a: "We bridge access to justice through three things: legal automation (building tools that remove repetitive legal work), technology law consultancy (practical advisory on data protection, compliance and tech risk), and tech law education (training the next generation of legal minds).",
  },
  {
    q: "Can you automate our existing documents and workflows?",
    a: "Yes. We map your current process, then build automation around it, from contract assembly and drafting to client intake and matter pipelines. The tools are tailored to how you actually work, not a generic template.",
  },
  {
    q: "Who is technology law consultancy for?",
    a: "Founders, start-ups and organisations operating in the digital economy. We help you navigate data protection, regulatory compliance, digital contracts and technology risk, in plain, practical terms.",
  },
  {
    q: "Is technology law education available online?",
    a: "Yes. Our programs are built for working professionals and students across Africa: practical, current and grounded in the realities of the Ugandan and African legal markets.",
  },
  {
    q: "How do we get started?",
    a: "Reach out on WhatsApp or give us a call. We'll talk through your challenge and point you in the right direction, whether that's automation, advisory or education.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-brand-50 py-16 sm:py-20">
      <GridOverlay />
      <Orbs />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Frequently asked <span className="gradient-text">questions</span>
            </>
          }
          sub="Bridging access to justice through legal automation, technology law consultancy and tech law education."
        />

        <div className="mx-auto mt-10 max-w-3xl space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`reveal glass overflow-hidden !rounded-2xl transition duration-300 hover:-translate-y-0.5 ${
                  isOpen ? "!border-orange-400/25 shadow-glow-soft" : ""
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-display text-base font-bold text-ink">{f.q}</span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#FF6A00] to-[#FF3D00] text-white transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDownIcon className="h-4 w-4" />
                  </span>
                </button>
                {/* Robust collapse: explicit max-height + opacity transition.
                    Content always stays in the DOM; closing only collapses it,
                    so the question row and answers can never vanish. */}
                <div
                  id={`faq-panel-${i}`}
                  aria-hidden={!isOpen}
                  className={`overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
                    isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="px-6 pb-5 text-sm leading-relaxed text-ink-soft">{f.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
