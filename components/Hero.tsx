import { ArrowIcon, ScaleIcon, BotIcon, GraduationIcon, ShieldIcon } from "./Icons";
import { Orbs, GridOverlay, CircuitLines, AiBadge } from "./Effects";

const chips = [
  { icon: BotIcon, label: "Build Smart", className: "top-[18%] left-[8%] text-purple-700", delay: "0s" },
  { icon: ScaleIcon, label: "Grow Faster", className: "top-[40%] left-[4%] text-purple-700", delay: "0.8s" },
  { icon: ShieldIcon, label: "Technology Law", className: "top-[24%] right-[6%] text-purple-700", delay: "1.6s" },
  { icon: GraduationIcon, label: "Legal Automation", className: "top-[52%] right-[5%] text-purple-700", delay: "0.4s" },
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
      {/* gradient overlays for readability + blend to page */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-100 via-brand-100/70 to-transparent" />
      <GridOverlay />
      <CircuitLines />

      {/* floating glass chips */}
      {chips.map((c) => (
        <div
          key={c.label}
          className={`absolute hidden animate-floaty md:block ${c.className}`}
          style={{ animationDelay: c.delay }}
        >
          <span className="glass inline-flex items-center gap-1.5 !rounded-full !px-3.5 !py-1.5 text-xs font-semibold !text-purple-800">
            <c.icon className="h-3.5 w-3.5" />
            {c.label}
          </span>
        </div>
      ))}

      <div className="container-x relative flex min-h-[70vh] flex-col items-center justify-center text-center">
        <span className="glass eyebrow mb-5 !rounded-full !border-white/60 !bg-white/60 !px-4 !py-2">
          <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
          Legal automation · Tech law · AI
        </span>

        <h1 className="max-w-4xl text-4xl font-extrabold leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl">
          Bridging access to justice,{" "}
          <span className="gradient-text">automated</span>.
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
          We unite legal expertise with technology so justice is no longer gated
          by cost, distance or complexity — through automation, consultancy and
          education.
        </p>

        <div className="mt-7">
          <AiBadge />
        </div>

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
