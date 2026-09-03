import { ArrowIcon } from "./Icons";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 bg-cream-50 py-24 sm:py-28">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-[0.35]" style={{ backgroundImage: "radial-gradient(rgba(46,16,101,0.07) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
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

          {/* stats widget card */}
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-lime-200/60 via-transparent to-cream-200/60 blur-2xl" />
            <div className="card-light overflow-hidden rounded-3xl p-6">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-ink">Access to justice</span>
                <span className="chip !text-leaf-700">Live</span>
              </div>
              <div className="mt-6 flex items-end gap-2">
                <span className="font-nexa text-5xl font-extrabold tabular-nums text-ink">49%</span>
                <span className="mb-2 text-xs font-semibold text-ink-soft">of people miss legal help</span>
              </div>
              <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-cream-200">
                <div className="h-full w-[49%] rounded-full bg-gradient-to-r from-lime-400 to-leaf-700" />
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                {[
                  { icon: "⚖", label: "Automate" },
                  { icon: "🗂", label: "Advise" },
                  { icon: "🧠", label: "Educate" },
                  { icon: "🛡", label: "Compliance" },
                ].map((m) => (
                  <div key={m.label} className="rounded-xl border border-cream-200 bg-cream-50 px-4 py-3 text-center">
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
