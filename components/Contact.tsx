import { PhoneIcon, WhatsAppIcon, TikTokIcon, XIcon, ArrowIcon } from "./Icons";
import { siteConfig, waLink } from "./SiteConfig";

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-20 bg-cream-100 py-24 sm:py-28">
      <div className="container-x">
        <div className="mx-auto max-w-2xl text-center">
          <span className="eyebrow"><span className="h-1.5 w-1.5 rounded-full bg-leaf-700" />Contact</span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
            Let&rsquo;s build the future of justice, <span className="text-leaf-700">together</span>.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Reach out to plan an engagement, ask a question or simply start a
            conversation. We respond quickly.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Phones */}
          <div className="card-light p-8 lg:col-span-2">
            <h3 className="text-xl font-extrabold text-ink">Call or WhatsApp</h3>
            <p className="mt-1 text-sm text-ink-soft">Mon–Fri · Kampala, Uganda (EAT)</p>
            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {siteConfig.phones.map((p) => (
                <div key={p.tel} className="rounded-2xl border border-cream-200 bg-cream-50 p-6">
                  <span className="font-nexa text-sm font-extrabold tabular-nums uppercase tracking-wide text-ink-soft">
                    {p.label}
                  </span>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <a
                      href={`tel:${p.tel}`}
                      className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-bold text-cream-100 transition hover:bg-leaf-800"
                    >
                      <PhoneIcon className="h-4 w-4" />
                      Call
                    </a>
                    <a
                      href={waLink(p.wa, "Hello Jurigeek, I'd like to talk with you.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-leaf-900/15 bg-white px-4 py-2.5 text-sm font-bold text-leaf-700 transition hover:bg-lime-200"
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
          <div className="card-light flex flex-col p-8">
            <h3 className="text-xl font-extrabold text-ink">Follow along</h3>
            <p className="mt-1 text-sm text-ink-soft">Updates, explainers and behind-the-scenes.</p>
            <div className="mt-6 flex flex-col gap-3">
              <a
                href={siteConfig.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-cream-200 bg-cream-50 p-4 transition hover:border-leaf-700/30 hover:bg-lime-200/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-cream-100">
                  <TikTokIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">TikTok</p>
                  <p className="text-xs text-ink-soft">{siteConfig.tiktok.handle}</p>
                </div>
                <ArrowIcon className="ml-auto h-4 w-4 text-ink-soft transition group-hover:translate-x-0.5 group-hover:text-leaf-700" />
              </a>
              <a
                href={siteConfig.twitter.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-2xl border border-cream-200 bg-cream-50 p-4 transition hover:border-leaf-700/30 hover:bg-lime-200/40"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-ink text-cream-100">
                  <XIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-ink">X (Twitter)</p>
                  <p className="text-xs text-ink-soft">{siteConfig.twitter.handle}</p>
                </div>
                <ArrowIcon className="ml-auto h-4 w-4 text-ink-soft transition group-hover:translate-x-0.5 group-hover:text-leaf-700" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
