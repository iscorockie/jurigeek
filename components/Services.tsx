import { BotIcon, ShieldIcon, GraduationIcon, ScaleIcon, ArrowIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";
import { Orbs, GridOverlay } from "./Effects";

export const services = [
  {
    href: "/legalautomation",
    icon: BotIcon,
    tag: "Legal Automation",
    title: "Legal automation",
    desc: "We design and build tools that turn repetitive legal work into fast, reliable systems — from drafting and contract assembly to client intake and workflows.",
    points: ["Document & contract automation", "Workflow & intake systems", "Process design for law firms"],
    tint: "bg-gradient-to-br from-purple-500 to-purple-700 text-white",
    glow: "group-hover:shadow-glow",
  },
  {
    href: "/techlaw-consultancy",
    icon: ShieldIcon,
    tag: "Technology Law Consultancy",
    title: "Technology law consultancy",
    desc: "Practical, current legal advisory for a digital economy — helping innovators, founders and organisations navigate data protection and technology risk.",
    points: ["Data protection & privacy", "Regulatory & compliance advisory", "Digital contracts & policy"],
    tint: "bg-gradient-to-br from-orange-400 to-orange-600 text-white",
    glow: "group-hover:shadow-glow-orange",
  },
  {
    href: "/tech-law-education",
    icon: GraduationIcon,
    tag: "Tech Law Education",
    title: "Tech law education",
    desc: "We teach lawyers, students and professionals where law and technology meet — through training, workshops and accessible learning for the real world.",
    points: ["Courses & workshops", "Legal-tech training", "Public legal education"],
    tint: "bg-gradient-to-br from-purple-800 to-purple-950 text-orange-300",
    glow: "group-hover:shadow-glow",
  },
];

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 overflow-hidden bg-brand-100 py-16 sm:py-20">
      <GridOverlay />
      <Orbs />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Three ways we move justice <span className="gradient-text">forward</span>
            </>
          }
          sub="From building the tools to advising on the law and teaching the next generation — everything sits at the intersection of law and technology."
        />

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className={`glass-card group flex flex-col !rounded-3xl transition duration-300 hover:-translate-y-1.5 ${s.glow}`}
            >
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg ${s.tint}`}>
                <s.icon className="h-7 w-7" />
              </div>
              <span className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-purple-300">
                {s.tag}
              </span>
              <h3 className="mt-2 text-2xl font-extrabold text-ink">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{s.desc}</p>
              <ul className="mt-6 space-y-2.5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <ScaleIcon className="mt-0.5 h-4 w-4 shrink-0 text-purple-300" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href={s.href}
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 px-5 py-2.5 text-sm font-bold text-purple-950 shadow-[0_8px_24px_-10px_rgba(249,115,22,0.6)] transition hover:from-orange-300 hover:to-orange-400 group-hover:shadow-glow-orange"
              >
                Start a conversation
                <ArrowIcon className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
