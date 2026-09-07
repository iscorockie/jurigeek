import { Logo } from "./Logo";
import { TikTokIcon, XIcon, InstagramIcon } from "./Icons";
import { siteConfig } from "./SiteConfig";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative overflow-hidden text-ink-soft">
      {/* Near-black glass base */}
      <div className="pointer-events-none absolute inset-0 bg-[#0a0a0a]/95 backdrop-blur-xl" aria-hidden="true" />
      {/* Orange-glow top border */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        aria-hidden="true"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255,106,0,0.65) 30%, rgba(255,140,26,0.9) 50%, rgba(255,106,0,0.65) 70%, transparent 100%)",
          boxShadow: "0 -8px 40px -4px rgba(255,106,0,0.35)",
        }}
      />
      {/* Fiery glow rising from the bottom edge */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[420px]"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(900px 420px at 50% 122%, rgba(255,106,0,0.28), rgba(61,20,0,0.14) 45%, transparent 70%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 tech-grid opacity-50" aria-hidden="true" />

      <div className="container-x relative py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-cream-100">
              <Logo className="h-9" color="#ffffff" />
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed">
              Bridging access to justice through legal automation, technology law
              consultancy and tech law education: for people, organisations and
              the next generation of legal minds.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={siteConfig.tiktok.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jurigeek on TikTok"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream-100/80 transition hover:border-orange-400/50 hover:bg-orange-500/10 hover:text-orange-300"
              >
                <TikTokIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.twitter.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jurigeek on X"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream-100/80 transition hover:border-orange-400/50 hover:bg-orange-500/10 hover:text-orange-300"
              >
                <XIcon className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Jurigeek on Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream-100/80 transition hover:border-orange-400/50 hover:bg-orange-500/10 hover:text-orange-300"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-cream-100">Explore</h4>
            <ul className="mt-4 space-y-3">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm transition hover:text-orange-300">
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
                  <a href={`tel:${p.tel}`} className="font-nexa tabular-nums transition hover:text-orange-300">
                    {p.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={siteConfig.tiktok.url} target="_blank" rel="noopener noreferrer" className="transition hover:text-orange-300">
                  {siteConfig.tiktok.handle}
                </a>
              </li>
              <li>
                <a href={siteConfig.instagram.url} target="_blank" rel="noopener noreferrer" className="transition hover:text-orange-300">
                  {siteConfig.instagram.handle}
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
