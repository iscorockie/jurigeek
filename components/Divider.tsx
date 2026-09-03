export function GradientDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-mint-500/20 via-brand-500/20 to-gold-400/20 blur-2xl ${className}`} />
  );
}
