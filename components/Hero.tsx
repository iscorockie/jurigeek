import { ArrowIcon, ScaleIcon, BotIcon, ShieldIcon, PhoneIcon } from "./Icons";
import { AiBadge } from "./Effects";
import { siteConfig } from "./SiteConfig";

const heroStats = [
  { value: "2500+", label: "Workflows automated" },
  { value: "12k+", label: "Documents drafted" },
  { value: "36", label: "Jurisdictions reached" },
  { value: "<24h", label: "Avg. response" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 pb-0 sm:pt-32">
      {/* layered gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(120%_90%_at_85%_-10%,rgba(124,58,237,0.35),transparent_55%),radial-gradient(100%_80%_at_-10%_20%,rgba(249,115,22,0.18),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-brand-50 via-brand-100 to-brand-100" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-x relative">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-6">
          {/* Left: headline + CTAs */}
          <div className="lg:col-span-6">
            <span className="glass eyebrow mb-5 !inline-flex !rounded-full !border-white/60 !bg-white/60 !px-4 !py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              Legal automation · Tech law · AI
            </span>

            <h1 className="text-4xl font-extrabold leading-[1.04] tracking-tight text-ink sm:text-5xl xl:text-[3.6rem] xl:leading-[1.05]">
              Bridging access to justice{" "}
              <span className="gradient-text">through smart systems</span>.
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              Jurigeek turns repetitive legal work into fast, reliable platforms —
              so justice is no longer gated by cost, distance or complexity.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="#services" className="btn-lime">
                Get started
                <ArrowIcon className="h-4 w-4" />
              </a>
              <a href="#contact" className="btn-light">
                <PhoneIcon className="h-4 w-4" />
                Book a call
              </a>
            </div>

            <div className="mt-6">
              <AiBadge label="AI-assisted legal workflows" />
            </div>
          </div>

          {/* Right: 3D glass visual with overlapping analytics card */}
          <div className="relative lg:col-span-6">
            <div className="absolute -inset-10 -z-10 rounded-full bg-gradient-to-br from-purple-400/25 via-transparent to-orange-300/20 blur-3xl" />
            <img
              src="/hero-glass.jpg"
              alt="Automated legal workflows visual"
              className="relative w-full max-w-xl select-none object-contain drop-shadow-[0_30px_60px_-20px_rgba(88,28,135,0.5)]"
            />

            {/* Dark glass analytics card overlapping bottom-left */}
            <div className="glass-dark absolute -bottom-2 left-0 w-64 rounded-2xl !border-white/15 p-4 sm:left-2 sm:w-72">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-bold uppercase tracking-wider text-white/60">
                  Automation live
                </span>
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-300 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-300" />
                </span>
              </div>
              <div className="mt-3 flex items-end justify-between">
                <div>
                  <p className="font-nexa text-2xl font-extrabold tabular-nums text-white">98.6%</p>
                  <p className="text-[11px] text-white/50">clauses assembled</p>
                </div>
                <div className="flex -space-x-2">
                  {["#8b5cf6", "#fb923c", "#a78bfa"].map((c) => (
                    <span
                      key={c}
                      className="flex h-6 w-6 items-center justify-center rounded-full border border-white/30 text-[10px] font-bold text-white"
                      style={{ background: c }}
                    >
                      J
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[86%] rounded-full bg-gradient-to-r from-purple-400 to-orange-400" />
              </div>
            </div>

            {/* Floating tag */}
            <div className="glass absolute -right-2 top-4 hidden rounded-full !px-3.5 !py-1.5 text-xs font-semibold text-purple-700 sm:block">
              <span className="font-nexa tabular-nums">−62%</span> manual work
            </div>
          </div>
        </div>
      </div>

      {/* Stats counter row */}
      <div className="container-x relative mt-12 pb-16 sm:pb-20">
        <div className="glass grid grid-cols-2 gap-px overflow-hidden rounded-3xl !border-white/70 !bg-white/40 md:grid-cols-4">
          {heroStats.map((s) => (
            <div key={s.label} className="bg-white/60 px-6 py-5 text-center backdrop-blur">
              <p className="font-nexa text-3xl font-extrabold tabular-nums text-purple-800 sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-xs font-semibold text-ink-soft">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
