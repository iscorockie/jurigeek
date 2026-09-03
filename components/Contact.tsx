import { PhoneIcon, WhatsAppIcon, TikTokIcon, XIcon, InstagramIcon, ArrowIcon } from "./Icons";
import { siteConfig, waLink } from "./SiteConfig";
import { Orbs, GridOverlay } from "./Effects";

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 overflow-hidden bg-brand-100 py-16 sm:py-20">
      <GridOverlay />
      <Orbs />
      <div className="container-x relative">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-orange-400" />Contact</span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
            Let&rsquo;s build the future of justice, <span className="gradient-text">together</span>.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Reach out to plan an engagement, ask a question or simply start a
            conversation. We respond quickly.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Phones */}
          <div className="glass-card p-8 lg:col-span-2">
            <h3 className="text-xl font-extrabold text-ink">Call or WhatsApp</h3>
            <p className="mt-1 text-sm text-ink-soft">Monday to Friday · Kampala, Uganda (EAT)</p>
            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {siteConfig.phones.map((p) => (
                <div key={p.tel} className="glass !rounded-2xl !p-6">
                  <span className="font-nexa text-sm font-extrabold tabular-nums uppercase tracking-wide text-purple-300">
                    {p.label}
                  </span>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={`tel:${p.tel}`}
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-900 to-purple-950 px-4 py-2.5 text-sm font-bold text-white transition hover:from-purple-800 hover:to-purple-900"
                    >
                      <PhoneIcon className="h-4 w-4" />
                      Call
                    </a>
                    <a
                      href={waLink(p.wa, "Hello Jurigeek, I'd like to talk with you.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 px-4 py-2.5 text-sm font-bold text-white transition hover:from-orange-300 hover:to-orange-400"
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
          <div className="glass-card flex flex-col p-8">
            <h3 className="text-xl font-extrabold text-ink">Follow along</h3>
            <p className="mt-1 text-sm text-ink-soft">Updates, explainers and behind-the-scenes.</p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={siteConfig.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass flex items-center gap-3 !rounded-2xl !p-4 transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-purple-900 text-white">
                  <TikTokIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">TikTok</p>
                  <p className="text-xs text-ink-soft">{siteConfig.tiktok.handle}</p>
                </div>
                <ArrowIcon className="ml-auto h-4 w-4 text-ink-soft transition group-hover:translate-x-0.5 group-hover:text-purple-300" />
              </a>
              <a
                href={siteConfig.twitter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass flex items-center gap-3 !rounded-2xl !p-4 transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-purple-900 text-white">
                  <XIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">X (Twitter)</p>
                  <p className="text-xs text-ink-soft">{siteConfig.twitter.handle}</p>
                </div>
                <ArrowIcon className="ml-auto h-4 w-4 text-ink-soft transition group-hover:translate-x-0.5 group-hover:text-purple-300" />
              </a>
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass flex items-center gap-3 !rounded-2xl !p-4 transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-purple-600 to-purple-900 text-white">
                  <InstagramIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">Instagram</p>
                  <p className="text-xs text-ink-soft">{siteConfig.instagram.handle}</p>
                </div>
                <ArrowIcon className="ml-auto h-4 w-4 text-ink-soft transition group-hover:translate-x-0.5 group-hover:text-purple-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
