import {
  ArrowIcon,
  PhoneIcon,
  StarIcon,
} from "./Icons";
import Image from "next/image";
import { GridOverlay } from "./Effects";

const heroStats = [
  { value: "2500+", label: "Workflows automated" },
  { value: "12k+", label: "Documents drafted" },
  { value: "36", label: "Jurisdictions reached" },
  { value: "<24h", label: "Avg. response" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden pt-36 pb-0 sm:pt-44">
      {/* layered gradient backdrop — ember glow bleeding up from the bottom edge */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(140%_90%_at_85%_-10%,rgba(255,106,0,0.16),transparent_55%),radial-gradient(100%_80%_at_-10%_20%,rgba(255,61,0,0.10),transparent_50%)]" />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-20 h-[620px]"
        style={{
          background:
            "radial-gradient(1200px 620px at 50% 118%, rgba(255,106,0,0.32), rgba(61,20,0,0.18) 45%, transparent 72%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-brand-50 via-transparent to-brand-100" />
      <GridOverlay />

      <div className="container-x relative">
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <span className="glass eyebrow !inline-flex !rounded-full !border-white/15 !bg-white/[0.1] !px-4 !py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
            Legal automation · Tech law · AI
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.03] tracking-tight text-ink sm:text-5xl xl:text-[3.7rem] xl:leading-[1.04]">
            <span className="hero-line" style={{ animationDelay: "0.1s" }}>Justice,</span>
            <span className="hero-line" style={{ animationDelay: "0.2s" }}>
              <span className="gradient-text">Automated</span> for Everyone.
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
        </div>
      </div>

      {/* ---- Trust metrics band with floating social-proof pill ---- */}
      <div className="container-x relative mt-12 pb-16 sm:pb-20">
        {/* Floating glass pill: avatars + rating, straddling the stats band */}
        <div className="relative z-10 -mb-7 flex justify-center">
          <div className="animate-floaty inline-flex flex-wrap items-center justify-center gap-x-4 gap-y-2 rounded-full border border-white/[0.14] bg-[#141414]/85 px-5 py-3 shadow-[0_16px_48px_-16px_rgba(0,0,0,0.9),0_0_40px_-18px_rgba(255,106,0,0.45)] backdrop-blur-xl sm:px-6">
            <div className="flex -space-x-2.5">
              {["/testimonial-1.jpg", "/testimonial-2.jpg", "/testimonial-3.jpg", "/testimonial-4.jpg"].map((a) => (
                <Image
                  key={a}
                  src={a}
                  alt="Jurigeek customer"
                  width={36}
                  height={36}
                  className="h-9 w-9 rounded-full border-2 border-[#141414] object-cover"
                />
              ))}
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5 text-orange-400">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="h-4 w-4" />
                ))}
              </div>
              <span className="font-nexa text-sm font-extrabold tabular-nums text-ink">4.9/5</span>
            </div>
            <span className="hidden h-4 w-px bg-white/15 sm:block" />
            <p className="text-xs font-semibold text-ink-soft sm:text-[13px]">
              Trusted by legal teams across Africa
            </p>
          </div>
        </div>

        {/* Stats strip — cool blue glass reads as "data" */}
        <div className="reveal glass-data grid grid-cols-2 gap-px overflow-hidden !rounded-3xl md:grid-cols-4">
          {heroStats.map((s) => (
            <div key={s.label} className="px-6 py-7 text-center">
              <p className="font-nexa text-3xl font-extrabold tabular-nums text-[#8fc1ff] sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-1.5 text-xs font-semibold text-white/60">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
