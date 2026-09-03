import type { CSSProperties } from "react";

/**
 * The official Jurigeek brand lockup, scales-of-justice emblem + "JURIGEEK" wordmark.
 * The source asset is monochrome SVG-equivalent (PNG) on transparency, so we render
 * it as a CSS mask and paint it with `color` to adapt to light/dark contexts.
 */
export function BrandLogo({
  className = "h-9",
  color = "#2e1065",
  style,
}: {
  className?: string;
  color?: string;
  style?: CSSProperties;
}) {
  return (
    <span
      role="img"
      aria-label="Jurigeek"
      className={`inline-block align-middle ${className}`}
      style={{
        backgroundColor: color,
        WebkitMaskImage: "url(/logo.png)",
        maskImage: "url(/logo.png)",
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskSize: "contain",
        maskSize: "contain",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        aspectRatio: "1360 / 316",
        width: "auto",
        ...style,
      }}
    />
  );
}

/**
 * Legacy emblem (scales) used for contexts that need a compact mark rather than
 * the full horizontal lockup.
 */
export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect x="6" y="6" width="52" height="52" rx="16" fill="currentColor" opacity="0.08" />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth={4}
        strokeLinecap="round"
        d="M22 22v9c0 6 3 10 10 10s10-4 10-10"
      />
      <circle cx="42" cy="22" r="4" fill="currentColor" />
    </svg>
  );
}

export function Logo({
  className = "h-9",
  color = "#2e1065",
}: {
  className?: string;
  color?: string;
}) {
  return <BrandLogo className={className} color={color} />;
}
