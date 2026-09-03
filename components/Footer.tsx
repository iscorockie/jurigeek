import { Logo } from "./Logo";
import { TikTokIcon, XIcon } from "./Icons";
import { siteConfig } from "./SiteConfig";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-leaf-950 text-cream-100/70">
      <div className="container-x py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-cream-100">
              <Logo className="text-cream-100" />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
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
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream-100/80 transition hover:bg-lime-400 hover:text-ink"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.twitter.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jurigeek on X"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream-100/80 transition hover:bg-lime-400 hover:text-ink"
              >
                <XIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-cream-100">Explore</h4>
            <ul className="mt-4 space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm transition hover:text-cream-100">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-cream-100">Contact</h4>
            <ul className="mt-4 space-y-3 text-sm">
              {siteConfig.phones.map((p) => (
                <li key={p.tel}>
                  <a href={`tel:${p.tel}`} className="transition hover:text-cream-100">
                    {p.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={siteConfig.tiktok.url} target="_blank" rel="noopener noreferrer" className="transition hover:text-cream-100">
                  {siteConfig.tiktok.handle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm">© {year} {siteConfig.name} · {siteConfig.domain}</p>
          <p className="text-sm">Bridging access to justice through legal automation.</p>
        </div>
      </div>
    </footer>
  );
}
