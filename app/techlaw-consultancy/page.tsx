import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import {
  ShieldIcon,
  ScaleIcon,
  SearchIcon,
  LayersIcon,
  ArrowIcon,
  CheckIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import { siteConfig, waLink } from "@/components/SiteConfig";
import { Orbs, GridOverlay, CircuitLines, AiBadge } from "@/components/Effects";

export const metadata: Metadata = {
  title: "Technology Law Consultancy",
  description:
    "Practical, current legal advisory for the digital economy — data protection, regulatory & compliance advisory and digital contracts & policy for innovators, founders and organisations.",
  alternates: { canonical: "https://jurigeek.org/techlaw-consultancy" },
  openGraph: {
    title: "Technology Law Consultancy · Jurigeek",
    description:
      "Navigate data protection, compliance and technology risk with practical advisory built for the digital economy.",
    url: "https://jurigeek.org/techlaw-consultancy",
  },
};

const challenges = [
  "Unclear how data-protection and privacy rules apply to your product",
  "Regulatory exposure growing faster than your team can track it",
  "Digital contracts and policies that don't reflect how you actually operate",
  "Technology risk that is hard to foresee, price or insure",
];

const services = [
  {
    icon: ShieldIcon,
    title: "Data protection & privacy",
    desc: "Advice on data collection, processing, retention and user rights — so you handle personal data lawfully and build trust.",
  },
  {
    icon: ScaleIcon,
    title: "Regulatory & compliance advisory",
    desc: "Practical guidance on the rules that govern digital products, platforms and services across the markets you operate in.",
  },
  {
    icon: LayersIcon,
    title: "Digital contracts & policy",
    desc: "Terms, privacy policies, data-processing agreements and bespoke digital contracts aligned with how your business really works.",
  },
];

const steps = [
  { n: "01", title: "Assess", desc: "We map your product, data flows and current exposure to understand where the real risk sits." },
  { n: "02", title: "Advise", desc: "We give clear, actionable guidance on the rules that matter for your context — not generic templates." },
  { n: "03", title: "Draft", desc: "We prepare the contracts, policies and safeguards your business needs to operate confidently." },
  { n: "04", title: "Support", desc: "We stay on call as your product and the regulatory landscape evolve." },
];

export default function TechLawConsultancyPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-brand-100 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <GridOverlay />
          <CircuitLines />
          <Orbs />
          <div className="pointer-events-none absolute -top-24 right-0 -z-10 h-96 w-96 rounded-full bg-orange-400/20 blur-[120px]" />
          <div className="pointer-events-none absolute -left-16 bottom-0 -z-10 h-80 w-80 rounded-full bg-purple-400/25 blur-[100px]" />

          <div className="container-x relative">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div>
                <span className="eyebrow glass !rounded-full !px-4 !py-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                  Technology Law Consultancy
                </span>
                <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                  Navigate the rules of the <span className="gradient-text">digital economy</span>.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                  Practical, current legal advisory that helps innovators, founders
                  and organisations manage data protection, compliance and
                  technology risk — without slowing you down.
                </p>

                <div className="mt-6">
                  <AiBadge label="Regulatory-grade advisory" />
                </div>

                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a href="#contact" className="btn-lime">
                    Start a conversation
                    <ArrowIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={waLink(siteConfig.phones[0].wa, "Hello Jurigeek, I'd like to talk about Technology Law Consultancy.")}
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
                <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-orange-400/30 via-transparent to-purple-500/30 blur-2xl" />
                <div className="glass absolute inset-0 -z-0 !rounded-3xl" />
                <img
                  src="/techlaw-consultancy.jpg"
                  alt="Data-protection and contracts dashboard with scales of justice"
                  className="relative aspect-[4/3] w-full rounded-3xl object-cover shadow-card"
                />
                <div className="glass-card absolute -bottom-5 -left-4 flex items-center gap-3 !rounded-2xl !border-white/[0.12] !bg-white/[0.05] !p-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 text-white">
                    <ShieldIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-ink">Technology risk</p>
                    <p className="text-xs text-ink-soft">Turned into clarity</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 py-14 text-white sm:py-16">
          <GridOverlay dark />
          <CircuitLines dark />
          <Orbs variant="dark" />
          <div className="container-x relative">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                  The problem
                </span>
                <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                  Technology moves fast. <span className="gradient-text-orange">The law can&rsquo;t always keep up.</span>
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-white/70">
                  Builders and organisations are often the first to hit questions
                  nobody has answered yet. We help you move with confidence by
                  turning ambiguity into clear, actionable guidance.
                </p>
              </div>
              <ul className="grid grid-cols-1 gap-4">
                {challenges.map((p) => (
                  <li key={p} className="glass-dark flex items-start gap-3 !rounded-2xl !p-5">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-orange-400 text-white">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span className="text-white/90">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="relative overflow-hidden bg-brand-100 py-16 sm:py-20">
          <GridOverlay />
          <Orbs />
          <div className="container-x relative">
            <SectionHeading
              eyebrow="What we advise on"
              title={
                <>
                  Clarity for the <span className="gradient-text">digital age</span>
                </>
              }
              sub="Focused, practical advisory that keeps you compliant and confident as you build, launch and scale."
            />

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {services.map((s) => (
                <article key={s.title} className="glass-card group flex flex-col !rounded-3xl transition hover:-translate-y-1.5 hover:shadow-glow-orange">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg">
                    <s.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-2xl font-extrabold text-ink">{s.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{s.desc}</p>
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
                  From ambiguity to <span className="gradient-text">confident action</span>
                </>
              }
              sub="A clear, collaborative process that turns a technology question into a practical legal answer."
            />
            <ol className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <li key={s.n} className="glass-card relative !rounded-2xl !p-7 transition hover:-translate-y-1 hover:shadow-glow-orange">
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
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-glow-orange">
              <SearchIcon className="h-8 w-8" />
            </div>
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Have a technology law question?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
              Tell us about your product, your data or your risk — we&rsquo;ll show
              you what good looks like.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href={waLink(siteConfig.phones[0].wa, "Hello Jurigeek, I'd like to start a Technology Law Consultancy conversation.")}
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
