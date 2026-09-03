import { ArrowIcon } from "./Icons";
import { Orbs, GridOverlay, CircuitLines } from "./Effects";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden bg-brand-50 py-24 sm:py-28">
      <GridOverlay />
      <Orbs />
      <CircuitLines />
      <div className="container-x relative">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="eyebrow">About Us</span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
              We build the systems that make legal work <span className="text-leaf-700">simpler and fairer</span>.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-ink-soft">
              Thousands of people never access the legal help they are entitled to,
              and the institutions meant to serve them are stretched thin. Jurigeek
              exists to change that — automating the mechanics of legal work,
              advising on the tech laws shaping our lives, and teaching the people
              who will carry it forward.
            </p>
            <a href="#services" className="mt-8 inline-flex items-center gap-2 text-base font-bold text-ink transition hover:text-leaf-700">
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
                <span className="chip !text-purple-700">
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
              <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-white/60">
                <div className="h-full w-[49%] rounded-full bg-gradient-to-r from-purple-600 to-orange-400" />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { icon: "⚖", label: "Automate" },
                  { icon: "🗂", label: "Advise" },
                  { icon: "🧠", label: "Educate" },
                  { icon: "🛡", label: "Compliance" },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl border border-white/70 bg-white/60 px-4 py-3 text-center backdrop-blur">
                    <div className="text-lg">{m.icon}</div>
                    <div className="mt-1 text-xs font-bold text-ink">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
