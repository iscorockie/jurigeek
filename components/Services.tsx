import { BotIcon, ShieldIcon, GraduationIcon, ScaleIcon, ArrowIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";

export const services = [
  {
    href: "/legalautomation",
    icon: BotIcon,
    tag: "Legal Automation",
    title: "Legal automation",
    desc: "We design and build tools that turn repetitive legal work into fast, reliable systems — from drafting and contract assembly to client intake and workflows.",
    points: ["Document & contract automation", "Workflow & intake systems", "Process design for law firms"],
    tint: "bg-lime-200/70 text-leaf-800",
  },
  {
    href: "#contact",
    icon: ShieldIcon,
    tag: "Technology Law Consultancy",
    title: "Technology law consultancy",
    desc: "Practical, current legal advisory for a digital economy — helping innovators, founders and organisations navigate data protection and technology risk.",
    points: ["Data protection & privacy", "Regulatory & compliance advisory", "Digital contracts & policy"],
    tint: "bg-cream-200 text-leaf-800",
  },
  {
    href: "#contact",
    icon: GraduationIcon,
    tag: "Tech Law Education",
    title: "Tech law education",
    desc: "We teach lawyers, students and professionals where law and technology meet — through training, workshops and accessible learning for the real world.",
    points: ["Courses & workshops", "Legal-tech training", "Public legal education"],
    tint: "bg-leaf-700 text-lime-300",
  },
];

export function Services() {
  return (
    <section id="services" className="relative scroll-mt-20 bg-cream-100 py-24 sm:py-28">
      <div className="container-x">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Three ways we move justice <span className="text-leaf-700">forward</span>
            </>
          }
          sub="From building the tools to advising on the law and teaching the next generation — everything sits at the intersection of law and technology."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className="card-light group flex flex-col p-8 transition hover:-translate-y-1 hover:shadow-pill"
            >
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${s.tint}`}>
                <s.icon className="h-7 w-7" />
              </div>
              <span className="mt-6 text-xs font-bold uppercase tracking-[0.15em] text-ink-soft">
                {s.tag}
              </span>
              <h3 className="mt-2 text-2xl font-extrabold text-ink">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{s.desc}</p>
              <ul className="mt-6 space-y-2.5">
                {s.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-ink-soft">
                    <ScaleIcon className="mt-0.5 h-4 w-4 shrink-0 text-leaf-700" />
                    {p}
                  </li>
                ))}
              </ul>
              <a
                href={s.href}
                className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-leaf-700 transition group-hover:text-ink"
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
