"use client";

import { useMemo, useState } from "react";
import { ExternalLink, FileStack, Search } from "lucide-react";

export type UnitPaperGrade = {
  label: string;
  number: string;
  href?: string;
};

export function UnitPapersDirectory({ grades }: { grades: UnitPaperGrade[] }) {
  const [query, setQuery] = useState("");
  const filteredGrades = useMemo(
    () => grades.filter((grade) => grade.label.toLowerCase().includes(query.toLowerCase().trim())),
    [grades, query],
  );
  const availableCount = grades.filter((grade) => grade.href).length;

  return (
    <section className="max-w-7xl mx-auto px-6 py-20 md:py-24" aria-labelledby="paper-directory-heading">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div className="lg:sticky lg:top-32">
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-maroon" />
            <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-maroon">
              Browse by grade
            </span>
          </div>
          <h2 id="paper-directory-heading" className="max-w-lg font-display text-4xl font-extrabold tracking-tight md:text-6xl">
            Your next <span className="text-maroon">practice set.</span>
          </h2>
          <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
            Choose a grade to open its official paper folder. The links below point directly to the folders published by Nalanda College.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <span className="rounded-full border border-maroon/20 bg-maroon/10 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest text-maroon">
              {availableCount} folders available
            </span>
            <span className="rounded-full border border-border bg-secondary px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              Official links
            </span>
          </div>
        </div>

        <div>
          <label className="relative block">
            <span className="sr-only">Search grades</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by grade..."
              type="search"
              className="w-full rounded-2xl border border-border bg-background py-4 pl-11 pr-5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-maroon focus:ring-2 focus:ring-maroon/10"
            />
          </label>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {filteredGrades.map((grade) => {
              const content = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-maroon/10 font-display text-lg font-extrabold text-maroon transition-colors group-hover:bg-maroon group-hover:text-maroon-foreground">
                    {grade.number}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-xl font-bold text-foreground">{grade.label}</span>
                    <span className="mt-1 block font-mono text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                      {grade.href ? "Open official folder" : "Folder link not published"}
                    </span>
                  </span>
                  {grade.href ? <ExternalLink className="h-4 w-4 shrink-0 text-maroon transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /> : <FileStack className="h-4 w-4 shrink-0 text-muted-foreground" />}
                </>
              );
              const className = "group flex min-h-28 items-center gap-4 rounded-2xl border border-border bg-secondary/45 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-maroon/35 hover:bg-background hover:shadow-lg hover:shadow-maroon/10";

              return grade.href ? (
                <a key={grade.label} href={grade.href} target="_blank" rel="noreferrer" className={className}>
                  {content}
                </a>
              ) : (
                <div key={grade.label} className={`${className} cursor-not-allowed opacity-70`} aria-label={`${grade.label}: folder link not published`}>
                  {content}
                </div>
              );
            })}
          </div>

          {filteredGrades.length === 0 && (
            <p className="mt-6 rounded-2xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
              No grade matches “{query}”. Try another search.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}