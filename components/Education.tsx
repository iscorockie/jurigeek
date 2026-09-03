import { GraduationIcon, CheckIcon, ArrowIcon } from "./Icons";
import { waLink, siteConfig } from "./SiteConfig";

const outcomes = [
  "Understand the rules governing data and digital platforms",
  "Spot automation opportunities in legal and business workflows",
  "Make compliance a practical part of your projects",
  "Build a modern legal mindset for the digital age",
];

export function Education() {
  return (
    <section id="education" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="container-x">
        <div className="card relative overflow-hidden p-8 sm:p-12">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand-500/15 via-transparent to-mint-500/15" />
          <div className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-brand-500/20 blur-[100px]" />

          <div className="relative grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <span className="eyebrow">Tech Law Education</span>
              <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Learn where the law meets the machine.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-300/90">
                Our education programs are built for working professionals and
                future leaders — practical, current and grounded in the realities
                of the Ugandan and African legal markets.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={waLink(siteConfig.phones[0].wa, "Hello Jurigeek, I'd like to learn more about your Tech Law Education programs.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Enquire about training
                  <ArrowIcon className="h-4 w-4" />
                </a>
                <a href="#contact" className="btn-ghost">
                  <GraduationIcon className="h-4 w-4" />
                  Message us
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {outcomes.map((o) => (
                <div
                  key={o}
                  className="flex items-start gap-3 rounded-xl border border-white/10 bg-ink-900/60 p-4"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-mint-500/20 text-mint-300">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm text-slate-200">{o}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
