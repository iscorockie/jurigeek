export const siteConfig = {
  name: "Jurigeek",
  domain: "jurigeek.org",
  tagline: "Justice, automated.",
  phones: [
    { label: "+256 778 929 063", tel: "+256778929063", wa: "256778929063" },
    { label: "+256 758 283 426", tel: "+256758283426", wa: "256758283426" },
  ],
  tiktok: {
    handle: "@jurigeekuganda",
    url: "https://www.tiktok.com/@jurigeekuganda",
  },
  twitter: {
    handle: "@hakeemcounsel",
    url: "https://x.com/hakeemcounsel",
  },
  nav: [
    { label: "Services", href: "/#services" },
    { label: "About", href: "/#about" },
    { label: "Education", href: "/#education" },
    { label: "Contact", href: "/#contact" },
  ],
};

export function waLink(number: string, text?: string) {
  const base = `https://wa.me/${number}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
