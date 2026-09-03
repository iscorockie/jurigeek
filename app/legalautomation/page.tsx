import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SectionHeading } from "@/components/SectionHeading";
import {
  BotIcon,
  ScaleIcon,
  CodeIcon,
  ArrowIcon,
  CheckIcon,
  PhoneIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import { siteConfig, waLink } from "@/components/SiteConfig";

export const metadata: Metadata = {
  title: "Legal Automation",
  description:
    "Jurigeek designs and builds tools that turn repetitive legal work into fast, reliable systems — from document drafting and contract assembly to client intake and workflows.",
  alternates: { canonical: "https://jurigeek.org/legalautomation" },
  openGraph: {
    title: "Legal Automation · Jurigeek",
    description:
      "Turn repetitive legal work into fast, reliable systems — document drafting, contract assembly, client intake and workflows.",
    url: "https://jurigeek.org/legalautomation",
  },
};

const painPoints = [
  "Hours lost to copy-pasting the same clauses over and over",
  "Contracts assembled by hand, slow and error-prone",
  "Client intake scattered across email, forms and chats",
  "No single, reliable view of matters and deadlines",
];

const features = [
  {
    icon: CodeIcon,
    title: "Document & contract automation",
    desc: "Intelligent templates that draft, assemble and populate contracts in seconds — not hours.",
  },
  {
    icon: BotIcon,
    title: "Workflow & intake systems",
    desc: "Structured client intake and matter pipelines that capture the right information the first time.",
  },
  {
    icon: ScaleIcon,
    title: "Process design for law firms",
    desc: "We map your real workflow and build the tooling around it, so automation fits how you actually work.",
  },
];

const steps = [
  { n: "01", title: "Discover", desc: "We map your current process, pain points and the repetitive work that eats your time." },
  { n: "02", title: "Design", desc: "We design the workflow and the tooling that automates it, keeping lawyers in control." },
  { n: "03", title: "Build", desc: "We ship a fast, reliable system tailored to your firm, organisation or use case." },
  { n: "04", title: "Support", desc: "We train your team and keep the system current, accurate and secure." },
];

export default function LegalAutomationPage() {
  return (
    <>
      <Navbar />
      <main id="main">
        {/* Hero */}
        <section className="relative isolate overflow-hidden bg-cream-100 pt-32 pb-20 sm:pt-40 sm:pb-28">
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              backgroundImage: "radial-gradient(rgba(46,16,101,0.06) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="pointer-events-none absolute -top-24 right-0 -z-10 h-96 w-96 rounded-full bg-lime-300/30 blur-[120px]" />
          <div className="pointer-events-none absolute -left-16 bottom-0 -z-10 h-80 w-80 rounded-full bg-cream-200/60 blur-[100px]" />

          <div className="container-x">
            <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
              <div>
                <span className="eyebrow">
                  <span className="h-1.5 w-1.5 rounded-full bg-leaf-700" />
                  Legal Automation
                </span>
                <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
                  Turn repetitive legal work into{" "}
                  <span className="text-leaf-700">fast, reliable systems</span>.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                  From drafting and contract assembly to client intake and
                  workflows — we design and build tools that do the busy work, so
                  your team can focus on the judgment that matters.
                </p>

                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <a href="#contact" className="btn-lime">
                    Start a conversation
                    <ArrowIcon className="h-4 w-4" />
                  </a>
                  <a
                    href={waLink(siteConfig.phones[0].wa, "Hello Jurigeek, I'd like to learn more about Legal Automation.")}
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
                <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-lime-200/60 via-transparent to-cream-200/70 blur-2xl" />
                <img
                  src="/legalautomation.jpg"
                  alt="Automated legal document drafting on a laptop with scales of justice"
                  className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card"
                />
                <div className="absolute -bottom-5 -left-4 flex items-center gap-3 rounded-2xl border border-white bg-white/90 px-5 py-3.5 shadow-card backdrop-blur">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-400 text-ink">
                    <BotIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-ink">Repetitive work</p>
                    <p className="text-xs text-ink-soft">Reduced to a system</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pain points */}
        <section className="bg-leaf-900 py-20 text-cream-100 sm:py-24">
          <div className="container-x">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-lime-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                  The problem
                </span>
                <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                  Legal work is full of repetition. It shouldn&rsquo;t be.
                </h2>
                <p className="mt-5 text-lg leading-relaxed text-cream-100/70">
                  Manual, repetitive legal tasks slow firms down, introduce errors
                  and keep people from the help they need. Automation reclaims that
                  time — and makes the output more reliable.
                </p>
              </div>
              <ul className="grid grid-cols-1 gap-4">
                {painPoints.map((p) => (
                  <li
                    key={p}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-lime-400 text-leaf-800">
                      <CheckIcon className="h-4 w-4" />
                    </span>
                    <span className="text-cream-100/90">{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="bg-cream-100 py-24 sm:py-28">
          <div className="container-x">
            <SectionHeading
              eyebrow="What we build"
              title={
                <>
                  Automation that fits <span className="text-leaf-700">how you work</span>
                </>
              }
              sub="We combine real legal process knowledge with reliable engineering — so the tools you get are practical, not theoretical."
            />

            <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
              {features.map((f) => (
                <article
                  key={f.title}
                  className="card-light flex flex-col p-8 transition hover:-translate-y-1 hover:shadow-pill"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-lime-200/70 text-leaf-800">
                    <f.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 text-2xl font-extrabold text-ink">{f.title}</h3>
                  <p className="mt-3 leading-relaxed text-ink-soft">{f.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="bg-cream-50 py-24 sm:py-28">
          <div className="container-x">
            <SectionHeading
              eyebrow="How it works"
              title={
                <>
                  From idea to <span className="text-leaf-700">running system</span>
                </>
              }
              sub="A clear, collaborative process that turns a pain point into a tool your team actually uses."
            />
            <ol className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <li key={s.n} className="card-light relative rounded-2xl p-7">
                  <span className="font-nexa text-3xl font-extrabold tabular-nums text-orange-500">{s.n}</span>
                  <h3 className="mt-4 text-xl font-extrabold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="bg-leaf-900 py-20 text-cream-100 sm:py-24">
          <div className="container-x text-center">
            <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              Ready to put your repetitive legal work on autopilot?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-cream-100/70">
              Tell us about the process you want to streamline — we&rsquo;ll show
              you what&rsquo;s possible.
            </p>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
              <a
                href={waLink(siteConfig.phones[0].wa, "Hello Jurigeek, I'd like to start a Legal Automation conversation.")}
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
