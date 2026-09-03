import { ArrowIcon, PhoneIcon } from "./Icons";
import { siteConfig } from "./SiteConfig";

const stats = [
  { value: "Justice", label: "made more accessible" },
  { value: "Legal", label: "workflows automated" },
  { value: "Tech", label: "law advisory" },
  { value: "Learning", label: "for the next generation" },
];

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-brand-500/20 blur-[120px]" />
      <div className="pointer-events-none absolute top-40 -left-20 h-80 w-80 rounded-full bg-mint-500/20 blur-[110px]" />

      <div className="container-x relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-mint-400" />
            Legal automation · Tech law · Education
          </span>

          <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Bridging access to justice,{" "}
            <span className="text-gradient">automated</span>.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            Jurigeek unites legal expertise with technology so that justice is no
            longer gated by cost, distance or complexity — through legal
            automation, technology law consultancy and tech law education.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a href="#services" className="btn-primary">
              Explore what we do
              <ArrowIcon className="h-4 w-4" />
            </a>
            <a
              href={`tel:${siteConfig.phones[0].tel}`}
              className="btn-ghost"
            >
              <PhoneIcon className="h-4 w-4" />
              {siteConfig.phones[0].label}
            </a>
          </div>
        </div>

        <dl className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 sm:mt-20 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.value}
              className="card rounded-xl px-5 py-5 text-center"
            >
              <dt className="text-xl font-bold text-white sm:text-2xl">
                {s.value}
              </dt>
              <dd className="mt-1 text-sm text-slate-400">{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
