"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { siteConfig } from "./SiteConfig";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
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
      <nav
        className={`container-x flex items-center justify-between transition-[height] duration-300 ease-out ${
          scrolled ? "h-[60px]" : "h-20"
        }`}
      >
        <a href="/" aria-label="Jurigeek home" className="shrink-0">
          <Logo className="h-8" color="#ffffff" />
        </a>

        <div className="hidden items-center gap-9 md:flex">
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
          <a
            href="#contact"
            className="btn-light hidden !rounded-xl !px-5 !py-2.5 !text-sm md:inline-flex"
          >
            Sign In
          </a>
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-orange-400 to-orange-500 px-6 py-3 text-sm font-bold text-purple-950 shadow-[0_10px_30px_-12px_rgba(249,115,22,0.8)] transition hover:from-orange-300 hover:to-orange-400 md:inline-flex"
          >
            Get Started
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.06] p-2.5 text-ink backdrop-blur md:hidden"
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
        <div className="border-t border-white/10 bg-brand-100/95 backdrop-blur-xl md:hidden">
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
              className="btn-light mt-2 w-full !rounded-xl"
            >
              Sign In
            </a>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full bg-gradient-to-r from-orange-400 to-orange-500 px-6 py-3 text-center text-sm font-bold text-purple-950"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
