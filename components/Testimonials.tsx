import { QuoteIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";
import { Orbs, GridOverlay } from "./Effects";

const testimonials = [
  {
    quote: "Within a day, Jurigeek mapped our entire contract workflow and automated it. Clear pricing, zero hassle.",
    name: "Chidera O.",
    role: "Small Business Owner, Kampala",
    initials: "CO",
    tint: "from-purple-500 to-purple-700",
  },
  {
    quote: "Our intake and drafting used to take days. Now contracts assemble in minutes — and they're more reliable.",
    name: "Emeka A.",
    role: "Property Owner, Entebbe",
    initials: "EA",
    tint: "from-orange-400 to-orange-600",
  },
  {
    quote: "Technology law advisory that actually makes sense. We navigated data protection and compliance with confidence.",
    name: "Verified Founder",
    role: "Technology Start-up, Nairobi",
    initials: "VF",
    tint: "from-purple-700 to-purple-950",
  },
  {
    quote: "The tech law education is practical and current. It's the exposure I couldn't get anywhere else.",
    name: "Final Year LLB Student",
    role: "Makerere University",
    initials: "FS",
    tint: "from-purple-800 to-purple-950",
  },
];

export function Testimonials() {
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
          sub="From law firms to founders, students to organisations — hear from the people we work with."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t) => (
            <figure key={t.name} className="glass-card relative flex flex-col !rounded-3xl !p-6">
              <QuoteIcon className="h-8 w-8 text-purple-300/70" />
              <blockquote className="mt-4 text-sm leading-relaxed text-ink-soft">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 pt-5">
                <span className={`flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br ${t.tint} text-sm font-bold text-white`}>
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-extrabold text-ink">{t.name}</p>
                  <p className="text-xs text-ink-soft">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
