import { PhoneIcon, WhatsAppIcon, TikTokIcon, XIcon, ArrowIcon } from "./Icons";
import { siteConfig, waLink } from "./SiteConfig";

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 py-24 sm:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">Contact</span>
          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Let&rsquo;s build the future of justice, <span className="text-gradient">together</span>.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-400">
            Reach out to plan an engagement, ask a question or simply start a
            conversation. We respond quickly.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Phones */}
          <div className="card p-7 lg:col-span-2">
            <h3 className="text-lg font-bold text-white">Call or WhatsApp</h3>
            <p className="mt-1 text-sm text-slate-400">
              Mon–Fri · Kampala, Uganda (EAT)
            </p>
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {siteConfig.phones.map((p) => (
                <div
                  key={p.tel}
                  className="rounded-xl border border-white/10 bg-ink-900/60 p-5"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold uppercase tracking-wide text-slate-400">
                      {p.label}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={`tel:${p.tel}`}
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-sm font-medium text-white transition hover:bg-white/10"
                    >
                      <PhoneIcon className="h-4 w-4 text-brand-300" />
                      Call
                    </a>
                    <a
                      href={waLink(p.wa, "Hello Jurigeek, I'd like to talk with you.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-2 text-sm font-medium text-white transition hover:bg-mint-500/20 hover:text-mint-300"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div className="card flex flex-col p-7">
            <h3 className="text-lg font-bold text-white">Follow along</h3>
            <p className="mt-1 text-sm text-slate-400">
              Updates, explainers and behind-the-scenes.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={siteConfig.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-ink-900/60 p-4 transition hover:border-brand-400/40 hover:bg-brand-500/5"
              >
                <TikTokIcon className="h-5 w-5 text-white" />
                <div>
                  <p className="text-sm font-semibold text-white">TikTok</p>
                  <p className="text-xs text-slate-400">{siteConfig.tiktok.handle}</p>
                </div>
                <ArrowIcon className="ml-auto h-4 w-4 text-slate-500 transition group-hover:translate-x-0.5 group-hover:text-brand-300" />
              </a>
              <a
                href={siteConfig.twitter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-white/10 bg-ink-900/60 p-4 transition hover:border-brand-400/40 hover:bg-brand-500/5"
              >
                <XIcon className="h-5 w-5 text-white" />
                <div>
                  <p className="text-sm font-semibold text-white">X (Twitter)</p>
                  <p className="text-xs text-slate-400">{siteConfig.twitter.handle}</p>
                </div>
                <ArrowIcon className="ml-auto h-4 w-4 text-slate-500 transition group-hover:translate-x-0.5 group-hover:text-brand-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
