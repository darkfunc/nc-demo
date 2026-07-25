import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Achievements — Nalanda College Colombo",
  description:
    "Verified achievement overview for Nalanda College Colombo, with public highlights kept separate from news and announcements.",
};

export default function AchievementsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Records & Honours"
          title={
            <>
              Public
              <br />
              <span className="text-maroon">highlights.</span>
            </>
          }
          intro="This page now avoids fabricated counts and unverified honours. For the latest achievements, use the school's official news feed."
        />

        <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Academics",
              body: "The official website highlights academic activity through news, notices and examination-related updates.",
            },
            {
              title: "Sports",
              body: "Sporting activity is covered through public news items and school announcements.",
            },
            {
              title: "Culture",
              body: "Arts and cultural events are shared as official school news rather than fixed claims here.",
            },
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-border bg-secondary/40 p-8 md:p-10 shadow-sm shadow-black/5">
              <div className="mb-5 flex items-center gap-3">
                <span className="h-px w-8 bg-maroon" />
                <span className="font-mono text-[11px] uppercase tracking-widest text-maroon">
                  {item.title}
                </span>
              </div>
              <p className="text-muted-foreground leading-relaxed text-pretty">{item.body}</p>
            </div>
          ))}
        </section>

        <section className="bg-ink text-paper py-24">
          <div className="max-w-7xl mx-auto px-6 rounded-3xl border border-paper/10 bg-paper/5 p-8 md:p-12 shadow-sm shadow-black/20">
            <div className="border-b border-paper/15 pb-6 mb-12">
              <span className="font-mono text-[11px] uppercase tracking-widest text-maroon block mb-2">
                Verified source
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight">
                Use official news for recent honours.
              </h2>
            </div>
            <p className="text-paper/70 leading-relaxed max-w-2xl">
              This section no longer shows invented counts or unsupported award lists.
              Please use the official news feed for verified recent achievements.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}