import { UsersIcon, BoltIcon, GraduationIcon, BuildingIcon, ArrowIcon } from "./Icons";
import { SectionHeading } from "./SectionHeading";
import { Orbs, GridOverlay } from "./Effects";

const audiences = [
  {
    n: "01",
    icon: UsersIcon,
    title: "For Law Firms",
    tag: "Automate your practice",
    desc: "Turn repetitive drafting, intake and workflows into fast, reliable systems, so your team focuses on judgment, not busy work.",
    href: "/legalautomation",
    tint: "from-orange-400 to-orange-600",
  },
  {
    n: "02",
    icon: BoltIcon,
    title: "For Founders & Startups",
    tag: "Navigate tech law",
    desc: "Get practical advisory on data protection, compliance and digital contracts: clear guidance for builders and innovators.",
    href: "/techlaw-consultancy",
    tint: "from-orange-500 to-orange-600",
  },
  {
    n: "03",
    icon: GraduationIcon,
    title: "For Students & Future Lawyers",
    tag: "Learn tech law",
    desc: "Access tech law education, mentorship and real-world learning that prepares you for the digital legal economy.",
    href: "/tech-law-education",
    tint: "from-orange-600 to-orange-700",
  },
  {
    n: "04",
    icon: BuildingIcon,
    title: "For Organizations",
    tag: "Build legal capacity",
    desc: "Hire and manage legal talent, automate operations and stay compliant: one platform for your legal function.",
    href: "/#contact",
    tint: "from-orange-400 to-orange-700",
  },
];

export function Audience() {
  return (
    <section className="relative overflow-hidden bg-brand-50 py-16 sm:py-20">
      <GridOverlay />
      <Orbs />
      <div className="container-x relative">
        <SectionHeading
          eyebrow="Who we serve"
          title={
            <>
              A platform for <span className="gradient-text">every legal need</span>
            </>
          }
          sub="Seamless access to the legal help you need, whether you practice, build, learn or hire."
        />

        <div className="reveal-group mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a) => (
            <a
              key={a.n}
              href={a.href}
              className="reveal glass-card group flex flex-col !rounded-3xl transition duration-300 hover:shadow-glow-orange"
            >
              <div className="flex items-center justify-between">
                <span className="font-nexa text-4xl font-extrabold tabular-nums text-orange-300/20 transition group-hover:text-orange-300/50">
                  {a.n}
                </span>
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${a.tint} text-white shadow-lg shadow-orange-500/20`}>
                  <a.icon className="h-6 w-6" />
                </div>
              </div>
              <span className="mt-5 text-xs font-bold uppercase tracking-[0.15em] text-orange-400">{a.tag}</span>
              <h3 className="mt-1 text-xl font-extrabold text-ink">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{a.desc}</p>
              <span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-orange-300 transition group-hover:text-orange-200">
                Explore
                <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
