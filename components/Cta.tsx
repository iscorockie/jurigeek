import { ArrowIcon, PhoneIcon, WhatsAppIcon } from "./Icons";
import { Orbs, GridOverlay, CircuitLines } from "./Effects";
import { siteConfig, waLink } from "./SiteConfig";

export function Cta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-purple-950 via-purple-900 to-purple-950 py-16 text-white sm:py-20">
      <GridOverlay dark />
      <CircuitLines dark />
      <Orbs variant="dark" />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(249,115,22,0.16),transparent_45%)]" />

      <div className="container-x relative text-center">
        <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-300">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
          Get started
        </span>
        <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
          Justice, made accessible — <span className="gradient-text">for everyone</span>.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">
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
            Get started — it's free
            <ArrowIcon className="h-4 w-4" />
          </a>
          <a href={`tel:${siteConfig.phones[0].tel}`} className="btn-light">
            <PhoneIcon className="h-4 w-4" />
            {siteConfig.phones[0].label}
          </a>
        </div>
      </div>
    </section>
  );
}
