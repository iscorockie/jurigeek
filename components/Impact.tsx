import { BotIcon, ScaleIcon, GraduationIcon, ShieldIcon, CodeIcon } from "./Icons";

const stats = [
  { value: "95%", label: "Client satisfaction" },
  { value: "3", label: "Service pillars" },
  { value: "$0", label: "Barrier to a first consult" },
];

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
    <section className="relative bg-leaf-900 py-24 text-cream-100 sm:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-lime-400">
            <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
            Advocacy &amp; Impact
          </span>
          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-5xl">
            Making justice work for more people.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-cream-100/70">
            From bridging legal access to advising on the laws shaping our digital
            lives, we help people and organisations move faster and with clarity
            in a fast-changing legal landscape.
          </p>
        </div>

        <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.value} className="text-center">
              <dt className="font-nexa text-4xl font-extrabold tabular-nums text-orange-400 sm:text-5xl">
                {s.value}
              </dt>
              <dd className="mt-2 text-sm text-cream-100/70">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* marquee strip */}
      <div className="relative mt-16 border-y border-white/10 bg-leaf-800/60 py-5">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex w-max animate-marquee gap-4">
            {loop.map((item, i) => (
              <span
                key={`${item.label}-${i}`}
                className="inline-flex shrink-0 items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-cream-100/90"
              >
                <item.icon className="h-4 w-4 text-lime-400" />
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
