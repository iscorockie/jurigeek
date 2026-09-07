import { BotIcon, ScaleIcon, GraduationIcon, ShieldIcon, CodeIcon } from "./Icons";
import { Orbs, GridOverlay, CircuitLines } from "./Effects";

const marqueeItems = [
  { icon: BotIcon, label: "Legal Automation" },
  { icon: ScaleIcon, label: "Technology Law" },
  { icon: GraduationIcon, label: "Tech Law Education" },
  { icon: ShieldIcon, label: "Data Protection" },
  { icon: CodeIcon, label: "Digital Contracts" },
  { icon: ScaleIcon, label: "Compliance" },
];

export function Impact() {
  const loop = [...marqueeItems, ...marqueeItems];
  return (
    <section className="relative overflow-hidden bg-brand-50 py-16 text-white sm:py-20">
      <GridOverlay />
      <CircuitLines />
      <Orbs />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(111,177,255,0.08),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(255,106,0,0.14),transparent_45%)]" />

      <div className="container-x relative">
        <div className="reveal mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-orange-300">
            <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
            Advocacy &amp; Impact
          </span>
          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Making justice work for <span className="gradient-text">more people</span>.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            From bridging legal access to advising on the laws shaping our digital
            lives, we help people and organisations move faster and with clarity
            in a fast-changing legal landscape.
          </p>
        </div>
      </div>

      {/* marquee strip */}
      <div className="relative mt-12 border-y border-white/10 bg-white/[0.03] py-4 backdrop-blur-xl">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee gap-4">
            {loop.map((item, i) => (
              <span
                key={`${item.label}-${i}`}
                className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-white/[0.12] bg-white/[0.06] px-5 py-2.5 text-sm font-semibold text-white/90 backdrop-blur-md"
              >
                <item.icon className="h-4 w-4 text-orange-300" />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
