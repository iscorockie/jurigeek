import { Logo } from "./Logo";
import { TikTokIcon, XIcon } from "./Icons";
import { siteConfig } from "./SiteConfig";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/10 bg-ink-900/40">
      <div className="container-x py-14">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              Bridging access to justice through legal automation, technology law
              consultancy and tech law education — for people, organisations and
              the next generation of legal minds.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jurigeek on TikTok"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:border-brand-400/40 hover:text-white"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.twitter.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jurigeek on X"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-300 transition hover:border-brand-400/40 hover:text-white"
              >
                <XIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Explore</h4>
            <ul className="mt-4 space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              {siteConfig.phones.map((p) => (
                <li key={p.tel}>
                  <a
                    href={`tel:${p.tel}`}
                    className="transition hover:text-white"
                  >
                    {p.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={siteConfig.tiktok.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition hover:text-white"
                >
                  {siteConfig.tiktok.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            © {year} {siteConfig.name} · {siteConfig.domain}
          </p>
          <p className="text-sm text-slate-500">
            Bridging access to justice through legal automation.
          </p>
        </div>
      </div>
    </footer>
  );
}
