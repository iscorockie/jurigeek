/**
 * Scales-of-justice emblem that matches the Jurigeek brand logo.
 * Uses `currentColor` so it adapts to light (navbar) and dark (footer) contexts.
 */
export function LogoMark({
  className = "h-9 w-9",
  strokeWidth = 2.6,
}: {
  className?: string;
  strokeWidth?: number;
}) {
  const p = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      aria-hidden="true"
      {...p}
    >
      {/* cushioned top arc */}
      <path d="M18 14 C 26 8, 38 8, 46 14" />
      {/* central pillar */}
      <path d="M32 14 V 52" />
      {/* top of pillar knob */}
      <path d="M32 14 h 0.01" strokeWidth={strokeWidth + 2.4} />
      {/* horizontal beam */}
      <path d="M22 17 H 42" />
      {/* left chain + pan */}
      <path d="M22 17 C 18 24, 18 24, 17 30" />
      <path d="M22 17 C 26 24, 26 24, 27 30" />
      <path d="M14 30 H 30 C 27 37, 17 37, 14 30" />
      {/* right chain + pan */}
      <path d="M42 17 C 38 24, 38 24, 37 30" />
      <path d="M42 17 C 46 24, 46 24, 47 30" />
      <path d="M34 30 H 50 C 47 37, 37 37, 34 30" />
      {/* base */}
      <path d="M26 52 H 38" />
      <path d="M22 56 H 42" />
    </svg>
  );
}

export function Logo({
  className = "text-ink",
  markClassName = "h-9 w-9",
  wordClassName = "text-[1.05rem] font-extrabold uppercase tracking-[0.14em]",
}: {
  className?: string;
  markClassName?: string;
  wordClassName?: string;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className={markClassName} />
      <span className={wordClassName}>Jurigeek</span>
    </span>
  );
}
