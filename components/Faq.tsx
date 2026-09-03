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
    a: "Yes. We map your current process, then build automation around it — from contract assembly and drafting to client intake and matter pipelines. The tools are tailored to how you actually work, not a generic template.",
  },
  {
    q: "Who is technology law consultancy for?",
    a: "Founders, start-ups and organisations operating in the digital economy. We help you navigate data protection, regulatory compliance, digital contracts and technology risk — in plain, practical terms.",
  },
  {
    q: "Is technology law education available online?",
    a: "Yes. Our programs are built for working professionals and students across Africa — practical, current and grounded in the realities of the Ugandan and African legal markets.",
  },
  {
    q: "How do we get started?",
    a: "Reach out on WhatsApp or give us a call. We'll talk through your challenge and point you in the right direction — whether that's automation, advisory or education.",
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
              <div key={f.q} className="glass overflow-hidden !rounded-2xl">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-extrabold text-ink">{f.q}</span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-orange-400 text-white transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  >
                    <ChevronDownIcon className="h-4 w-4" />
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-ink-soft">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
