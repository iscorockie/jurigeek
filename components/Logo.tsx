export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="jg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#38d9b0" />
          <stop offset="0.5" stopColor="#17a5e8" />
          <stop offset="1" stopColor="#3fc1ff" />
        </linearGradient>
      </defs>
      <rect x="3" y="3" width="58" height="58" rx="14" fill="#0a0f1f" />
      <rect
        x="3"
        y="3"
        width="58"
        height="58"
        rx="14"
        fill="none"
        stroke="url(#jg)"
        strokeWidth="3"
      />
      <path
        d="M22 22v9c0 6 3 10 10 10s10-4 10-10"
        fill="none"
        stroke="url(#jg)"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <circle cx="42" cy="22" r="4" fill="#ffcf6b" />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9" />
      <span className="text-lg font-bold tracking-tight text-white">
        jurigeek
        <span className="text-brand-400">.</span>org
      </span>
    </span>
  );
}
