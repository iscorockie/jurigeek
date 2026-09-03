import { ArrowIcon, ScaleIcon, BotIcon, GraduationIcon, ShieldIcon } from "./Icons";
import { siteConfig } from "./SiteConfig";

const chips = [
  { icon: BotIcon, label: "Build Smart", className: "top-[18%] left-[8%] text-leaf-700", delay: "0s" },
  { icon: ScaleIcon, label: "Grow Faster", className: "top-[40%] left-[4%] text-leaf-700", delay: "0.8s" },
  { icon: ShieldIcon, label: "Technology Law", className: "top-[24%] right-[6%] text-leaf-700", delay: "1.6s" },
  { icon: GraduationIcon, label: "Legal Automation", className: "top-[52%] right-[5%] text-leaf-700", delay: "0.4s" },
];

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[92vh] overflow-hidden pt-28 pb-16">
      {/* background portrait */}
      <img
        src="/hero.jpg"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-[50%_22%]"
      />
      {/* warm gradient overlays to keep text readable and blend to page bg */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-cream-100 via-cream-100/75 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(247,241,230,0.55),transparent_70%)]" />

      {/* floating chips */}
      {chips.map((c) => (
        <div
          key={c.label}
          className={`absolute hidden animate-floaty md:block ${c.className}`}
          style={{ animationDelay: c.delay }}
        >
          <span className="chip">
            <c.icon className="h-3.5 w-3.5" />
            {c.label}
          </span>
        </div>
      ))}

      <div className="container-x relative flex min-h-[70vh] flex-col items-center justify-center text-center">
        <span className="eyebrow mb-5 rounded-full border border-ink/10 bg-white/60 px-4 py-2 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-lime-500" />
          Legal automation · Tech law · Education
        </span>

        <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
          Bridging access to justice,{" "}
          <span className="text-leaf-700">automated</span>.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
          We unite legal expertise with technology so justice is no longer gated
          by cost, distance or complexity — through automation, consultancy and
          education.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a href="#services" className="btn-dark">
            View demo
            <ArrowIcon className="h-4 w-4" />
          </a>
          <a href="#contact" className="btn-lime">
            Book a call
          </a>
        </div>
      </div>
    </section>
  );
}
