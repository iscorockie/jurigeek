import {
  ArrowIcon,
  PhoneIcon,
  CheckIcon,
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
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="glass eyebrow !inline-flex !rounded-full !border-white/15 !bg-white/[0.06] !px-4 !py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
            Legal automation · Tech law · AI
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.03] tracking-tight text-ink sm:text-5xl xl:text-[3.7rem] xl:leading-[1.04]">
            <span className="hero-line" style={{ animationDelay: "0.1s" }}>Justice,</span>
            <span className="hero-line" style={{ animationDelay: "0.2s" }}>
              <span className="gradient-text">automated</span> for everyone.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
            Jurigeek turns repetitive legal work into fast, reliable systems,
            so access to justice is no longer gated by cost, distance or
            complexity.
          </p>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
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
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            <div className="flex -space-x-2.5">
              {["/testimonial-1.jpg", "/testimonial-2.jpg", "/testimonial-3.jpg", "/testimonial-4.jpg"].map((a) => (
                <img
                  key={a}
                  src={a}
                  alt="Jurigeek customer"
                  loading="lazy"
                  className="h-9 w-9 rounded-full border-2 border-brand-200 object-cover"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
                <span className="ml-1.5 font-nexa text-sm font-extrabold tabular-nums text-ink">4.9/5</span>
              </div>
              <p className="text-xs text-ink-soft">Trusted by legal teams across Africa</p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-2">
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
