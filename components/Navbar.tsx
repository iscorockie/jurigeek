"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { siteConfig } from "./SiteConfig";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "border-b border-white/10 bg-white/[0.06] shadow-[0_8px_30px_-18px_rgba(0,0,0,0.7)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav className="container-x flex h-[4.5rem] items-center justify-between">
        <a href="/" aria-label="Jurigeek home" className="shrink-0">
          <Logo className="h-8" color="#2e1065" />
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-ink-soft transition hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden rounded-full bg-gradient-to-r from-purple-900 to-purple-950 px-6 py-3 text-sm font-bold text-white shadow-[0_10px_30px_-12px_rgba(88,28,135,0.8)] transition hover:from-purple-800 hover:to-purple-900 sm:inline-flex">
            Get in touch
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.06] p-2.5 text-ink backdrop-blur lg:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              {open ? (
                <path d="M18 6 6 18M6 6l12 12" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-leaf-900/10 bg-cream-50/95 backdrop-blur-xl lg:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-semibold text-ink transition hover:bg-white/10"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-gradient-to-r from-purple-900 to-purple-950 px-6 py-3 text-center text-sm font-bold text-white"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
