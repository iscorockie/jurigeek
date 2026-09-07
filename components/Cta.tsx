import { ArrowIcon, PhoneIcon } from "./Icons";
import { Orbs, GridOverlay, CircuitLines } from "./Effects";
import { siteConfig, waLink } from "./SiteConfig";

export function Cta() {
  return (
    <section className="relative overflow-hidden py-16 text-white sm:py-20">
      {/* Full gradient background — ember rising into black */}
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(180deg, #0a0a0a 0%, #180a02 45%, #2a0f00 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[560px]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(1000px 520px at 50% 118%, rgba(255,106,0,0.40), rgba(61,20,0,0.22) 45%, transparent 72%)",
        }}
      />
      <GridOverlay dark />
      <CircuitLines dark />
      <Orbs variant="dark" />

      <div className="container-x relative text-center">
        <div className="reveal">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-300">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
            Get started
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Justice, made accessible <span className="gradient-text">for everyone</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-ink-soft">
            Connect with Jurigeek, power your practice with automation, get
            technology law advisory and learn where law meets the machine.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={waLink(siteConfig.phones[0].wa, "Hello Jurigeek, I'd like to get started.")}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-lime"
            >
              Get started, it&apos;s free
              <ArrowIcon className="h-4 w-4" />
            </a>
            <a href={`tel:${siteConfig.phones[0].tel}`} className="btn-light">
              <PhoneIcon className="h-4 w-4" />
              {siteConfig.phones[0].label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
