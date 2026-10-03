import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at top right, color-mix(in oklab, var(--maroon) 22%, transparent), transparent 40%), radial-gradient(circle at 18% 12%, color-mix(in oklab, var(--brass) 20%, transparent), transparent 22%), linear-gradient(180deg, color-mix(in oklab, var(--maroon) 10%, transparent), transparent 50%)",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="relative">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-8 bg-maroon" />
            <span className="font-mono text-[11px] uppercase tracking-widest text-maroon font-bold">
              {eyebrow}
            </span>
          </div>
          <h1 className="font-display font-extrabold tracking-tighter text-5xl md:text-7xl leading-[0.95] max-w-4xl">
            {title}
          </h1>
          {intro ? (
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              {intro}
            </p>
          ) : null}
          {children}
        </div>
      </div>
    </section>
  );
}
