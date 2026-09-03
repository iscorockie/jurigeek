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

export function Logo({ className = "text-ink" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="text-lg font-extrabold tracking-tight">
        jurigeek<span className="text-leaf-700">.</span>org
      </span>
    </span>
  );
}
