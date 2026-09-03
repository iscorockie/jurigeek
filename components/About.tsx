import {
  ArrowIcon,
  ScaleIcon,
  SparklesIcon,
  ShieldIcon,
  BoltIcon,
  SearchIcon,
  GraduationIcon,
} from "./Icons";
import { Orbs, GridOverlay, CircuitLines } from "./Effects";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden bg-brand-50 py-16 sm:py-20">
      <GridOverlay />
      <Orbs />
      <CircuitLines />
      <div className="container-x relative">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <span className="eyebrow">About Us</span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              We build the systems that make legal work{" "}
              <span className="gradient-text">simpler and fairer</span>.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">
              Thousands of people never access the legal help they are entitled to,
              and the institutions meant to serve them are stretched thin. Jurigeek
              exists to change that — automating the mechanics of legal work,
              advising on the tech laws shaping our lives, and teaching the people
              who will carry it forward.
            </p>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {[
                { icon: ScaleIcon, label: "Access", tint: "text-purple-300" },
                { icon: SparklesIcon, label: "Clarity", tint: "text-orange-400" },
                { icon: ShieldIcon, label: "Integrity", tint: "text-purple-300" },
              ].map((m) => (
                <div key={m.label} className="glass !rounded-xl !p-4 text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/25 to-purple-900/25">
                    <m.icon className={`h-5 w-5 ${m.tint}`} />
                  </div>
                  <div className="mt-2 text-sm font-bold text-ink">{m.label}</div>
                </div>
              ))}
            </div>

            <a href="#services" className="mt-6 inline-flex items-center gap-2 text-base font-bold text-ink transition hover:text-purple-300">
              Learn more
              <ArrowIcon className="h-4 w-4" />
            </a>
          </div>

          {/* stats widget card — glass */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-5 -z-10 rounded-[2.5rem] bg-gradient-to-br from-purple-500/30 via-transparent to-orange-400/30 blur-2xl" />
            <div className="glass-card overflow-hidden !rounded-3xl !p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-ink">Access to justice</span>
                <span className="chip !text-purple-200">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-400" />
                  </span>
                  Live
                </span>
              </div>
              <div className="mt-6 flex items-end gap-2">
                <span className="font-nexa gradient-text text-5xl font-extrabold tabular-nums">49%</span>
                <span className="mb-2 text-xs font-semibold text-ink-soft">of people miss legal help</span>
              </div>
              <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-white/[0.05]">
                <div className="h-full w-[49%] rounded-full bg-gradient-to-r from-purple-600 to-orange-400" />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { icon: BoltIcon, label: "Automate", tint: "text-orange-400" },
                  { icon: SearchIcon, label: "Advise", tint: "text-purple-300" },
                  { icon: GraduationIcon, label: "Educate", tint: "text-purple-300" },
                  { icon: ShieldIcon, label: "Compliance", tint: "text-orange-400" },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl border border-white/[0.12] bg-white/[0.05] px-4 py-3 text-center backdrop-blur">
                    <m.icon className={`mx-auto h-5 w-5 ${m.tint}`} />
                    <div className="mt-1.5 text-xs font-bold text-ink">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* team photo — stock */}
            <img
              src="/about-team.jpg"
              alt="A legal professional working at a desk with scales of justice"
              loading="lazy"
              className="mt-4 w-full rounded-2xl border border-white/[0.12] object-cover shadow-card"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
