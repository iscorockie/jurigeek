export function SectionHeading({
  eyebrow,
  title,
  sub,
  light = false,
}: {
  eyebrow: string;
  title: React.ReactNode;
  sub?: string;
  light?: boolean;
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <span className={`eyebrow ${light ? "text-orange-300" : ""}`}>
        <span className={`h-1.5 w-1.5 rounded-full ${light ? "bg-orange-400" : "bg-purple-600"}`} />
        {eyebrow}
      </span>
      <h2 className={`mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl ${light ? "text-cream-100" : "text-ink"}`}>
        {title}
      </h2>
      {sub && <p className={`mt-4 text-lg leading-relaxed ${light ? "text-cream-100/70" : "text-ink-soft"}`}>{sub}</p>}
    </div>
  );
}
