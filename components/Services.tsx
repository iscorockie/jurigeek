import { BotIcon, ShieldIcon, GraduationIcon, ArrowIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";
import { Orbs, GridOverlay } from "./Effects";

export const services = [
  {
    href: "/legalautomation",
    icon: BotIcon,
    title: "Legal automation",
    desc: "We design and build tools that turn repetitive legal work into fast, reliable systems, from drafting and contract assembly to client intake and workflows.",
    tint: "bg-gradient-to-br from-orange-400 to-orange-600 text-white",
    glow: "group-hover:shadow-glow-orange",
  },
  {
    href: "/techlaw-consultancy",
    icon: ShieldIcon,
    title: "Technology law consultancy",
    desc: "Practical, current legal advisory for a digital economy: helping innovators, founders and organisations navigate data protection and technology risk.",
    tint: "bg-gradient-to-br from-orange-500 to-orange-700 text-white",
    glow: "group-hover:shadow-glow-orange",
  },
  {
    href: "/tech-law-education",
    icon: GraduationIcon,
    title: "Tech law education",
    desc: "We teach lawyers, students and professionals where law and technology meet, through training, workshops and accessible learning for the real world.",
    tint: "bg-gradient-to-br from-orange-600 to-orange-800 text-white",
    glow: "group-hover:shadow-glow-orange",
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
          sub="From building the tools to advising on the law and teaching the next generation: everything sits at the intersection of law and technology."
        />

        <div className="reveal-group mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((s) => (
            <article
              key={s.title}
              className={`reveal glass-card group flex flex-col !rounded-3xl transition duration-300 ${s.glow}`}
            >
              <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg shadow-orange-500/25 ${s.tint}`}>
                <s.icon className="h-7 w-7" />
              </div>
              <h3 className="mt-6 text-2xl font-extrabold text-ink">{s.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{s.desc}</p>
              <a
                href={s.href}
                className="mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#FF6A00] to-[#FF3D00] px-5 py-2.5 text-sm font-bold text-white shadow-[0_8px_24px_-10px_rgba(255,106,0,0.6)] transition hover:from-[#FF8C1A] hover:to-[#FF6A00] group-hover:shadow-glow-orange"
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
