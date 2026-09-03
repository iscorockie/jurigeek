/**
 * Decorative "tech / AI / law" background effects used across sections.
 * Purely visual, pointer-events none, aria-hidden.
 */

/** Large soft gradient orbs that drift slowly. */
export function Orbs({ variant = "light" }: { variant?: "light" | "dark" }) {
  const purple = variant === "light" ? "rgba(124,58,237,0.35)" : "rgba(167,139,250,0.30)";
  const orange = variant === "light" ? "rgba(249,115,22,0.30)" : "rgba(249,115,22,0.22)";
  const white = variant === "light" ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.10)";
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div
        className="absolute -top-24 right-[-10%] h-[28rem] w-[28rem] rounded-full blur-[120px] animate-floatSlow"
        style={{ background: `radial-gradient(circle at center, ${purple}, transparent 70%)` }}
      />
      <div
        className="absolute bottom-[-6rem] left-[-8%] h-[24rem] w-[24rem] rounded-full blur-[120px]"
        style={{ background: `radial-gradient(circle at center, ${orange}, transparent 70%)` }}
      />
      <div
        className="absolute top-1/3 left-1/2 h-[20rem] w-[20rem] -translate-x-1/2 rounded-full blur-[100px]"
        style={{ background: `radial-gradient(circle at center, ${white}, transparent 70%)` }}
      />
    </div>
  );
}

/** Subtle grid pattern overlay for tech feel. */
export function GridOverlay({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)] ${
        dark ? "tech-grid" : "mesh-grid"
      }`}
      aria-hidden="true"
    />
  );
}

/** Faint circuit / network lines evoking automation + connectivity. */
export function CircuitLines({ dark = false }: { dark?: boolean }) {
  const stroke = dark ? "rgba(255,255,255,0.10)" : "rgba(124,58,237,0.12)";
  return (
    <svg
      className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
      aria-hidden="true"
      preserveAspectRatio="none"
      viewBox="0 0 1200 600"
    >
      <g fill="none" stroke={stroke} strokeWidth="1.2">
        <path d="M0 120 H520 L580 80 H720 L780 40 H1200" />
        <path d="M0 320 H300 L360 360 H560 L620 300 H920 L980 340 H1200" />
        <path d="M0 520 H440 L500 470 H680 L740 520 H1200" />
        <circle cx="580" cy="80" r="3" fill={stroke} />
        <circle cx="360" cy="360" r="3" fill={stroke} />
        <circle cx="740" cy="520" r="3" fill={stroke} />
        <circle cx="780" cy="40" r="3" fill={stroke} />
        <circle cx="620" cy="300" r="3" fill={stroke} />
        <circle cx="500" cy="470" r="3" fill={stroke} />
      </g>
    </svg>
  );
}

/** Small labelled "AI / automated" status pill for a subtle AI vibe. */
export function AiBadge({ label = "AI-assisted" }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-semibold text-white/90 backdrop-blur-md">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-400" />
      </span>
      {label}
    </span>
  );
}
