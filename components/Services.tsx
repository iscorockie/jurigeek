import { BotIcon, CodeIcon, GraduationIcon, ScaleIcon, ShieldIcon, ArrowIcon } from "./Icons";

export const services = [
  {
    icon: BotIcon,
    tag: "Legal Automation",
    title: "Legal automation",
    desc: "We design and build tools that turn repetitive legal work into fast, reliable systems — from document drafting and contract assembly to client intake and case workflows.",
    points: ["Document & contract automation", "Workflow & intake systems", "Process design for law firms"],
    accent: "from-brand-500/30 to-transparent",
    ring: "text-brand-300",
  },
  {
    icon: ShieldIcon,
    tag: "Technology Law Consultancy",
    title: "Technology law consultancy",
    desc: "Practical, current legal advisory for a digital economy — helping innovators, founders and organisations navigate data protection, compliance and technology risk.",
    points: ["Data protection & privacy", "Regulatory & compliance advisory", "Digital contracts & policy"],
    accent: "from-gold-500/30 to-transparent",
    ring: "text-gold-400",
  },
  {
    icon: GraduationIcon,
    tag: "Tech Law Education",
    title: "Tech law education",
    desc: "We teach lawyers, students and professionals how law and technology meet — through training, workshops and accessible learning designed for the real world.",
    points: ["Courses & workshops", "Legal-tech training", "Public legal education"],
    accent: "from-mint-500/30 to-transparent",
    ring: "text-mint-300",
  },
];

export function SectionHeading({
  eyebrow,
  title,
  sub,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-4 text-lg leading-relaxed text-slate-400">{sub}</p>}
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Three ways we move justice <span className="text-gradient">forward</span>
            </>
          }
          sub="From building the tools to advising on the law and teaching the next generation — everything sits at the intersection of law and technology."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="card group relative overflow-hidden p-8 transition hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-glow"
            >
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-b ${s.accent} opacity-60`}
              />
              <div className="relative">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-ink-900/70">
                  <s.icon className={`h-7 w-7 ${s.ring}`} />
                </div>
                <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-slate-400">
                  {s.tag}
                </span>
                <h3 className="mt-2 text-2xl font-bold text-white">{s.title}</h3>
                <p className="mt-3 text-slate-300/90">{s.desc}</p>
                <ul className="mt-6 space-y-2.5">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <ScaleIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-3 text-center">
          <p className="text-slate-400">
            Not sure where your challenge fits? We will point you in the right direction.
          </p>
          <a href="#contact" className="inline-flex items-center gap-2 font-semibold text-brand-300 transition hover:text-brand-400">
            Talk to a Jurigeek
            <ArrowIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
