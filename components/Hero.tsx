import {
  ArrowIcon,
  ScaleIcon,
  BotIcon,
  ShieldIcon,
  PhoneIcon,
  CheckIcon,
  SparklesIcon,
  StarIcon,
} from "./Icons";
import { AiBadge, GridOverlay } from "./Effects";

const heroStats = [
  { value: "2500+", label: "Workflows automated" },
  { value: "12k+", label: "Documents drafted" },
  { value: "36", label: "Jurisdictions reached" },
  { value: "<24h", label: "Avg. response" },
];

const trustItems = ["Verified outcomes", "Secure & confidential", "Built in Africa"];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-28 pb-0 sm:pt-32">
      {/* layered gradient backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(120%_90%_at_85%_-10%,rgba(124,58,237,0.4),transparent_55%),radial-gradient(100%_80%_at_-10%_20%,rgba(249,115,22,0.2),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-brand-50 via-brand-100 to-brand-100" />
      <GridOverlay />
      <div
        className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.06) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-x relative">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* ---- Left: headline + proof ---- */}
          <div className="lg:col-span-6">
            <span className="glass eyebrow !inline-flex !rounded-full !border-white/15 !bg-white/[0.06] !px-4 !py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
              Legal automation · Tech law · AI
            </span>

            <h1 className="mt-6 text-4xl font-extrabold leading-[1.03] tracking-tight text-ink sm:text-5xl xl:text-[3.7rem] xl:leading-[1.04]">
              Justice,{" "}
              <span className="gradient-text">automated</span> — for everyone.
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
              Jurigeek turns repetitive legal work into fast, reliable systems —
              so access to justice is no longer gated by cost, distance or
              complexity.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a href="#services" className="btn-lime">
                Get started free
                <ArrowIcon className="h-4 w-4" />
              </a>
              <a href="#contact" className="btn-light">
                <PhoneIcon className="h-4 w-4" />
                Book a call
              </a>
            </div>

            {/* social proof */}
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="flex -space-x-2.5">
                {["#8b5cf6", "#fb923c", "#a78bfa", "#4c1d95"].map((c, i) => (
                  <span
                    key={c}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-[11px] font-bold text-white"
                    style={{ background: c }}
                  >
                    {["J", "A", "C", "K"][i]}
                  </span>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1 text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className="h-4 w-4" />
                  ))}
                  <span className="ml-1.5 font-nexa text-sm font-extrabold tabular-nums text-ink">4.9/5</span>
                </div>
                <p className="text-xs text-ink-soft">Trusted by legal teams across Africa</p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {trustItems.map((t) => (
                <span key={t} className="chip !text-purple-200">
                  <CheckIcon className="h-3.5 w-3.5 text-orange-400" />
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6">
              <AiBadge label="AI-assisted legal workflows" />
            </div>
          </div>

          {/* ---- Right: product visual (AI drafting dashboard) ---- */}
          <div className="relative lg:col-span-6">
            <div className="absolute -inset-8 -z-10 rounded-full bg-gradient-to-br from-purple-400/30 via-transparent to-orange-300/20 blur-3xl" />

            {/* main dashboard card */}
            <div className="glass-card relative z-10 !rounded-[1.75rem] !p-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-bold text-purple-300">
                  <BotIcon className="h-4 w-4" />
                  Contract Draft — AI
                </div>
                <span className="chip !px-2.5 !py-1 !text-[10px] !text-purple-300">LIVE</span>
              </div>

              <div className="mt-4 space-y-2.5">
                {[
                  { label: "Party A", value: "Acme Ltd", pct: "w-[86%]" },
                  { label: "Party B", value: "Beacon Co", pct: "w-[72%]" },
                  { label: "Clause 4.2", value: "Liability", pct: "w-[64%]" },
                  { label: "Jurisdiction", value: "Uganda", pct: "w-[58%]" },
                ].map((row) => (
                  <div key={row.label} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5">
                    <span className="text-[11px] font-semibold text-ink-soft">{row.label}</span>
                    <span className="rounded-md bg-purple-500/20 px-2 py-0.5 text-[11px] font-bold text-purple-200">
                      {row.value}
                    </span>
                    <div className="hidden h-1.5 w-16 overflow-hidden rounded-full bg-white/10 sm:block">
                      <div className={`h-full ${row.pct} rounded-full bg-gradient-to-r from-purple-400 to-orange-400`} />
                    </div>
                  </div>
                ))}
              </div>

              {/* AI suggestion */}
              <div className="mt-4 rounded-2xl border border-orange-400/25 bg-orange-400/[0.08] p-4">
                <div className="flex items-center gap-2 text-xs font-bold text-orange-300">
                  <SparklesIcon className="h-4 w-4" />
                  AI drafting
                </div>
                <p className="mt-2 text-xs leading-relaxed text-ink-soft">
                  Clause 4.2 populated with standard liability wording and verified against your clause library.
                </p>
                <div className="mt-3 flex gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-purple-500 to-purple-700 px-3 py-1.5 text-[11px] font-bold text-white">
                    <CheckIcon className="h-3 w-3" />
                    Accept
                  </span>
                  <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[11px] font-bold text-purple-200">
                    Edit
                  </span>
                </div>
              </div>

              {/* progress */}
              <div className="mt-4">
                <div className="flex items-center justify-between text-[11px] font-semibold text-ink-soft">
                  <span>Assembling clauses</span>
                  <span className="font-nexa tabular-nums text-purple-300">42/50</span>
                </div>
                <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-purple-400 to-orange-400" />
                </div>
              </div>
            </div>

            {/* floating accents */}
            <div className="glass absolute -left-4 top-8 z-20 hidden rounded-2xl !px-3 !py-2 text-xs font-semibold text-purple-300 sm:flex sm:items-center sm:gap-2">
              <ScaleIcon className="h-4 w-4 text-orange-500" />
              Compliance{" "}
              <span className="font-nexa tabular-nums text-orange-400">✓</span>
            </div>
            <div className="glass absolute -right-3 bottom-6 z-20 rounded-2xl !px-3 !py-2 text-xs font-semibold text-purple-300">
              <span className="font-nexa tabular-nums">−62%</span> manual work
            </div>
            <div className="glass absolute -bottom-4 right-14 z-20 hidden rounded-2xl !px-3 !py-2 text-xs font-semibold text-purple-300 md:block">
              <ShieldIcon className="mr-1 inline h-4 w-4 text-orange-500" />
              Encrypted &amp; secure
            </div>
          </div>
        </div>
      </div>

      {/* ---- Trust metrics band ---- */}
      <div className="container-x relative mt-14 pb-16 sm:pb-20">
        <div className="glass grid grid-cols-2 gap-px overflow-hidden rounded-3xl !border-white/[0.12] !bg-white/[0.04] md:grid-cols-4">
          {heroStats.map((s) => (
            <div key={s.label} className="bg-white/[0.03] px-6 py-6 text-center">
              <p className="font-nexa text-3xl font-extrabold tabular-nums text-purple-300 sm:text-4xl">
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
