import type { SVGProps } from "react";

type P = SVGProps<SVGSVGElement>;

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
  "aria-hidden": true,
};

export function BotIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="8" width="16" height="12" rx="3" />
      <path d="M12 8V4M8 4h8" />
      <circle cx="9" cy="13" r="1" fill="currentColor" stroke="none" />
      <circle cx="15" cy="13" r="1" fill="currentColor" stroke="none" />
      <path d="M9 17h6" />
    </svg>
  );
}

export function ShieldIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function GraduationIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M2 9l10-4 10 4-10 4-10-4z" />
      <path d="M6 11.5V16c0 1.5 2.7 2.5 6 2.5s6-1 6-2.5v-4.5" />
      <path d="M22 9v5" />
    </svg>
  );
}

export function ScaleIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 4v16M7 20h10" />
      <path d="M12 4a2 2 0 1 0 .001-.001z" />
      <path d="M6 6h12" />
      <path d="M6 6l-3 6.5a3.2 3.2 0 0 0 6 0L6 6z" />
      <path d="M18 6l-3 6.5a3.2 3.2 0 0 0 6 0L18 6z" />
    </svg>
  );
}

export function CodeIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M8 6l-5 6 5 6M16 6l5 6-5 6M13 4l-2 16" />
    </svg>
  );
}

export function PhoneIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.8a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.2-1.2a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.8.7A2 2 0 0 1 22 16.9z" />
    </svg>
  );
}

export function WhatsAppIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.03h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24a8.2 8.2 0 0 1 8.24 8.24c0 4.55-3.7 8.24-8.24 8.24zm4.52-6.17c-.25-.13-1.47-.72-1.69-.8-.23-.09-.4-.13-.56.12-.17.25-.64.8-.79.97-.14.17-.29.19-.54.06-.25-.12-1.05-.38-2-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.13-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.1-.23-.16-.48-.29z" />
    </svg>
  );
}

export function TikTokIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.9 2.9 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  );
}

export function XIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export function InstagramIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <path d="M17.2 6.8h.01" />
    </svg>
  );
}

export function CheckIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M20 6L9 17l-5-5" />
    </svg>
  );
}

export function ArrowIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export function UsersIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M16 20v-1.5a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4V20" />
      <circle cx="9" cy="7" r="3.5" />
      <path d="M22 20v-1.5a4 4 0 0 0-3-3.87" />
      <path d="M16 3.63a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function BoltIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M13 2 3 14h7l-1 8 11-13h-7l1-7z" />
    </svg>
  );
}

export function SparklesIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3l1.9 4.6L18 9.5l-4.1 1.9L12 16l-1.9-4.6L6 9.5l4.1-1.9L12 3z" />
      <path d="M18 14l.9 2.2L21 17l-2.1.9L18 20l-.9-2.1L15 17l2.1-.9L18 14z" />
      <path d="M6 14l.6 1.5L8 16l-1.4.6L6 18l-.6-1.4L4 16l1.4-.5L6 14z" />
    </svg>
  );
}

export function SearchIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <circle cx="11" cy="11" r="7" />
      <path d="M21 21l-4.3-4.3" />
    </svg>
  );
}

export function BuildingIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M9 7h1.5M13.5 7H15M9 11h1.5M13.5 11H15M9 15h1.5M13.5 15H15" />
      <path d="M10 21v-3h4v3" />
    </svg>
  );
}

export function LayersIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 2 8.5l10 5.5 10-5.5L12 3z" />
      <path d="M2 13.5 12 19l10-5.5" />
      <path d="M2 18.5 12 24l10-5.5" />
    </svg>
  );
}

export function QuoteIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7 7c-2.2 0-4 1.8-4 4v6h6v-6H5.5C5.5 8.7 6.7 7.5 9 7.5V5.5C9 5.5 7 5.5 7 7zm10 0c-2.2 0-4 1.8-4 4v6h6v-6h-3.5c0-2.3 1.2-3.5 3.5-3.5V5.5S17 5.5 17 7z" />
    </svg>
  );
}

export function ChevronDownIcon(props: P) {
  return (
    <svg {...base} {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function StarIcon(props: P) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M12 2l2.9 5.9 6.5.9-4.7 4.6 1.1 6.5L12 17.8 6.2 19.9l1.1-6.5L2.6 8.8l6.5-.9L12 2z" />
    </svg>
  );
}
