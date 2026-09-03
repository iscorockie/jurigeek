import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import {
  GraduationIcon,
  ScaleIcon,
  SparklesIcon,
  UsersIcon,
  ArrowIcon,
  CheckIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import { siteConfig, waLink } from "@/components/SiteConfig";
import { Orbs, GridOverlay, CircuitLines, AiBadge } from "@/components/Effects";

export const metadata: Metadata = {
  title: "Tech Law Education",
  description:
    "Courses, workshops and training where law and technology meet — building the next generation of legal minds for the digital economy.",
  alternates: { canonical: "https://jurigeek.org/tech-law-education" },
  openGraph: {
    title: "Tech Law Education · Jurigeek",
    description:
      "Learn where the law meets the machine — training, workshops and accessible learning built for the real world.",
    url: "https://jurigeek.org/tech-law-education",
  },
};

const outcomes = [
  "Understand the rules governing data and digital platforms",
  "Spot automation opportunities in legal and business workflows",
  "Make compliance a practical part of your projects",
  "Build a modern legal mindset for the digital age",
];

const programs = [
  {
    icon: GraduationIcon,
    title: "Courses & workshops",
    desc: "Structured, hands-on programs that take you from fundamentals to practical application in tech law.",
  },
  {
    icon: ScaleIcon,
    title: "Legal-tech training",
    desc: "Training for lawyers and teams on the tools and workflows that are reshaping legal practice.",
  },
  {
    icon: UsersIcon,
    title: "Public legal education",
    desc: "Accessible learning for the public — so more people understand their rights in a digital world.",
  },
];

const steps = [
  { n: "01", title: "Learn", desc: "Master the fundamentals of the law-technology intersection in small, practical sessions." },
  { n: "02", title: "Apply", desc: "Work through real scenarios and build the confidence to apply what you've learned." },
  { n: "03", title: "Build", desc: "Turn knowledge into capability — apply tech law thinking to your work or practice." },
  { n: "04", title: "Grow", desc: "Keep learning as the digital legal landscape evolves with ongoing sessions." },
];

export default function TechLawEducationPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-brand-100 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <GridOverlay />
          <CircuitLines />
          <Orbs />
          <div className="pointer-events-none absolute -top-24 right-0 -z-10 h-96 w-96 rounded-full bg-purple-400/25 blur-[120px]" />
          <div className="pointer-events-none absolute -left-16 bottom-0 -z-10 h-80 w-80 rounded-full bg-orange-400/20 blur-[100px]" />

          <div className="container-x relative">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div>
                <span className="eyebrow glass !rounded-full !px-4 !py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-purple-600" />
                  Tech Law Education
                </span>
                <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                  Learn where the law meets <span className="gradient-text">the machine</span>.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                  Courses, workshops and training built for working professionals,
                  students and future leaders — practical, current and grounded in
                  the realities of the Ugandan and African legal markets.
                </p>

                <div className="mt-6">
                  <AiBadge label="AI-era legal learning" />
                </div>

                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a href="#contact" className="btn-lime">
                    Start a conversation
                    <ArrowIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={waLink(siteConfig.phones[0].wa, "Hello Jurigeek, I'd like to learn more about Tech Law Education programs.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-dark"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp us
                  </a>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-purple-500/30 via-transparent to-orange-400/30 blur-2xl" />
                <div className="glass absolute inset-0 -z-0 !rounded-3xl" />
                <img
                  src="/tech-law-education.jpg"
                  alt="Virtual classroom with scales of justice and graduation cap hologram"
                  className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-card"
                />
                <div className="glass-card absolute -bottom-5 -left-4 flex items-center gap-3 !rounded-2xl !border-white/[0.12] !bg-white/[0.05] !p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-purple-900 text-white">
                    <GraduationIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-ink">Tech law education</p>
                    <p className="text-xs text-ink-soft">Built for the real world</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 py-14 text-white sm:py-16">
          <GridOverlay dark />
          <CircuitLines dark />
          <Orbs variant="dark" />
          <div className="container-x relative">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                  What you&rsquo;ll gain
                </span>
                <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                  Learning that keeps you <span className="gradient-text-orange">ahead of the curve</span>.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-white/70">
                  The digital economy is reshaping the law. Our programs help you
                  build the skills to understand it, work with it and lead in it.
                </p>
              </div>
              <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {outcomes.map((o) => (
                  <li key={o} className="glass-dark flex items-start gap-3 !rounded-2xl !p-5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-orange-400 text-white">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span className="text-white/90">{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Programs */}
        <section className="relative overflow-hidden bg-brand-100 py-16 sm:py-20">
          <GridOverlay />
          <Orbs />
          <div className="container-x relative">
            <SectionHeading
              eyebrow="What we teach"
              title={
                <>
                  Programs built for <span className="gradient-text">the real world</span>
                </>
              }
              sub="From lawyers and students to teams and the public — practical learning that translates directly into capability."
            />

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {programs.map((p) => (
                <article key={p.title} className="glass-card group flex flex-col !rounded-3xl transition hover:-translate-y-1.5 hover:shadow-glow">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-purple-900 text-white shadow-lg">
                    <p.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-2xl font-extrabold text-ink">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{p.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="relative overflow-hidden bg-brand-50 py-16 sm:py-20">
          <GridOverlay />
          <Orbs />
          <div className="container-x relative">
            <SectionHeading
              eyebrow="How it works"
              title={
                <>
                  From learning to <span className="gradient-text">leading</span>
                </>
              }
              sub="A supportive learning journey that takes you from the fundamentals to real confidence in tech law."
            />
            <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <li key={s.n} className="glass-card relative !rounded-2xl !p-7 transition hover:-translate-y-1 hover:shadow-glow">
                  <span className="font-nexa gradient-text-orange text-3xl font-extrabold tabular-nums">{s.n}</span>
                  <h3 className="mt-4 text-xl font-extrabold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 py-14 text-white sm:py-16">
          <GridOverlay dark />
          <CircuitLines dark />
          <Orbs variant="dark" />
          <div className="container-x relative text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-purple-900 text-white shadow-glow">
              <SparklesIcon className="h-8 w-8" />
            </div>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Ready to build your tech-law edge?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Enquire about a course, a workshop or tailored training for your team.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href={waLink(siteConfig.phones[0].wa, "Hello Jurigeek, I'd like to start a Tech Law Education conversation.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lime"
              >
                Start a conversation
                <ArrowIcon className="h-4 w-4" />
              </a>
              <a href={`tel:${siteConfig.phones[0].tel}`} className="btn-light">
                <PhoneIcon className="h-4 w-4" />
                {siteConfig.phones[0].label}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
