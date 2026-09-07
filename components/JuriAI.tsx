import { SparklesIcon, SearchIcon, CodeIcon, ShieldIcon, BoltIcon, ArrowIcon } from "./Icons";
import { Orbs, GridOverlay, CircuitLines, AiBadge } from "./Effects";
import { waLink, siteConfig } from "./SiteConfig";

const features = [
  { icon: SearchIcon, title: "Instant Research", desc: "Fast summaries, key citations and precedent pulls in seconds." },
  { icon: CodeIcon, title: "Draft & Edit", desc: "Smart drafting, templates and instant edits for contracts and briefs." },
  { icon: ShieldIcon, title: "Compliance Checker", desc: "Automated checks, redlines and audit-ready notes." },
  { icon: BoltIcon, title: "Scheduler & Billing", desc: "Calendar sync, invoicing and payment tracking built in." },
];

export function JuriAI() {
  return (
    <section id="juri-ai" className="relative scroll-mt-20 overflow-hidden bg-gradient-to-b from-brand-100 via-[#150b03] to-brand-100 py-16 text-white sm:py-20">
      <GridOverlay dark />
      <CircuitLines dark />
      <Orbs variant="dark" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(900px_480px_at_bottom_right,rgba(255,106,0,0.16),transparent_55%),radial-gradient(700px_420px_at_top_left,rgba(111,177,255,0.06),transparent_55%)]" />

      <div className="container-x relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Copy */}
          <div className="reveal">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-300">
              <SparklesIcon className="h-4 w-4" />
              Juri AI
            </span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Your legal research &amp; drafting{" "}
              <span className="gradient-text">assistant</span>.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
              AI-powered research, smart drafting, compliance checks and case
              coordination in seconds. Built to automate the mechanics of legal
              work, so people get to justice faster.
            </p>

            <div className="mt-6">
              <AiBadge label="Powered by automation" />
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={waLink(siteConfig.phones[0].wa, "Hello Jurigeek, I'd like to try Juri AI for my legal work.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lime"
              >
                Try Juri AI
                <ArrowIcon className="h-4 w-4" />
              </a>
              <a href="/legalautomation" className="btn-light">
                See legal automation
              </a>
            </div>
          </div>

          {/* Feature cards */}
          <div className="reveal-group grid grid-cols-1 gap-4 sm:grid-cols-2">
            {features.map((f) => (
              <div key={f.title} className="reveal glass !rounded-2xl !p-6 transition duration-300 hover:-translate-y-1 hover:shadow-glow-orange">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 text-white shadow-lg shadow-orange-500/25">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-white">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
