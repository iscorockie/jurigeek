import { GradientDivider } from "./Divider";

const pillars = [
  {
    title: "Access",
    desc: "Justice should not depend on who you know or what you can afford. We lower the barriers that keep people from the law.",
  },
  {
    title: "Clarity",
    desc: "We turn dense legal and technical complexity into language and systems people can actually use.",
  },
  {
    title: "Integrity",
    desc: "Technology is a means, not the message. Human judgment and ethics stay at the centre of everything we build.",
  },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="container-x">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="eyebrow">Why Jurigeek</span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              The justice gap is a problem of <span className="text-gradient">design</span> — not of will.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-400">
              Millions of people never access the legal help they are entitled to,
              and the institutions meant to serve them are stretched thin. Jurigeek
              exists to change that: by automating the mechanics of legal work,
              advising on the tech laws shaping our digital lives, and teaching the
              people who will carry it forward.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
              {pillars.map((p) => (
                <div key={p.title} className="card rounded-xl p-5">
                  <div className="h-1 w-8 rounded-full bg-gradient-to-r from-mint-400 to-brand-400" />
                  <h3 className="mt-4 text-lg font-bold text-white">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <GradientDivider />
            <div className="relative rounded-3xl border border-white/10 bg-gradient-to-br from-ink-800/80 to-ink-900/80 p-8 shadow-card backdrop-blur sm:p-10">
              <p className="text-2xl font-bold leading-snug text-white sm:text-3xl">
                &ldquo;We believe technology should make the law{" "}
                <span className="text-gradient">work for people</span> — not the
                other way around.&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-500 to-mint-500 text-lg font-bold text-white">
                  J
                </div>
                <div>
                  <p className="font-semibold text-white">The Jurigeek Team</p>
                  <p className="text-sm text-slate-400">Jurigeek · Kampala, Uganda</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
