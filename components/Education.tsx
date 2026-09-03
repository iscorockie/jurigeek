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
    <section id="education" className="relative scroll-mt-20 bg-cream-50 py-24 sm:py-28">
      <div className="container-x">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          {/* image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-lime-200/50 to-cream-200/60 blur-2xl" />
            <img
              src="/about.jpg"
              alt="Jurigeek team collaborating on legal technology"
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-card"
              loading="lazy"
            />
            <div className="absolute -bottom-5 left-6 flex items-center gap-3 rounded-2xl border border-white bg-white/90 px-5 py-3.5 shadow-card backdrop-blur">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-lime-400 text-ink">
                <GraduationIcon className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-ink">Tech law education</p>
                <p className="text-xs text-ink-soft">Built for the real world</p>
              </div>
            </div>
          </div>

          {/* copy */}
          <div className="order-1 lg:order-2">
            <span className="eyebrow">Tech law education</span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
              Learn where the law meets <span className="text-leaf-700">the machine</span>.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Our programs are built for working professionals and future leaders —
              practical, current and grounded in the realities of the Ugandan and
              African legal markets.
            </p>

            <ul className="mt-7 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {outcomes.map((o) => (
                <li key={o} className="flex items-start gap-3 rounded-xl border border-cream-200 bg-white/80 p-4">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime-400 text-leaf-800">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-medium text-ink-soft">{o}</span>
                </li>
              ))}
            </ul>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={waLink(siteConfig.phones[0].wa, "Hello Jurigeek, I'd like to learn more about your Tech Law Education programs.")}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-lime"
              >
                Enquire about training
                <ArrowIcon className="h-4 w-4" />
              </a>
              <a href="#contact" className="btn-dark">
                Message us
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
