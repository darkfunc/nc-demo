import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Achievements — Nalanda College Colombo",
  description:
    "Verified achievement overview for Nalanda College Colombo, with public highlights kept separate from news and announcements.",
};

const featuredAchievement = {
  title: "Recognised as Sri Lanka's First Carbon Footprint Neutral School",
  date: "2026-06-05",
  badge: "Environment & Sustainability",
  summary:
    "Nalanda College Colombo was officially recognised as Sri Lanka's first Carbon Footprint Neutral School on World Environment Day 2026.",
  details: [
    "The certification was presented to Principal Mr. Iran Champika Silva by the Hon. Minister of Environment, Dr. Dammika Patabendi, at the Ministry of Environment on 5 June 2026, coinciding with World Environment Day 2026.",
    "The ceremony was attended by the Hon. Deputy Minister of Environment, Mr. Anton Jayakody, Ms. Padma Abeykoon of the Ministry of Environment, and Ms. Harshini Aberathna, Chief Executive Officer of the Sri Lanka Climate Fund.",
    "Representing Nalanda College were Deputy Principals Mrs. Anupa Weeraratne and Mr. Charitha Rupasinghe, Assistant Principal Mrs. Deepthi Kulatunga, members of the academic staff, students of the Environment Society, and the Executive President of the Nalanda Old Boys' Association, Mr. Mohan Chandana Gunadasa, together with other office-bearers of the Association.",
    "This recognition, awarded during National Environment Week 2026, reflects the College's commitment to environmental sustainability and aligns with the themes 'Mitigating the Impact of Climate Change and Air Pollution' and 'Fostering Environmental Consciousness from School Days.'",
    "The Nalanda Old Boys' Association also acknowledged the Nalanda 98 Group for sponsoring the certification process, with funds recently handed over to the Principal by the Group's President, Mr. Kasun Narangoda.",
  ],
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
          intro="This page highlights verified milestones only. For the latest achievements, use the school's official news feed and public notices."
        />

        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-8 items-stretch">
            <article className="rounded-3xl border border-border bg-secondary/40 p-8 md:p-12 shadow-sm shadow-black/5">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="rounded-full bg-maroon/10 px-4 py-1 text-[11px] font-bold uppercase tracking-widest text-maroon">
                  {featuredAchievement.badge}
                </span>
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  {featuredAchievement.date}
                </span>
              </div>

              <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight leading-tight mb-4">
                {featuredAchievement.title}
              </h2>

              <p className="text-lg text-muted-foreground leading-relaxed text-pretty mb-8 max-w-3xl">
                {featuredAchievement.summary}
              </p>

              <div className="space-y-4 text-muted-foreground leading-relaxed text-pretty">
                {featuredAchievement.details.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </article>

            <aside className="rounded-3xl border border-maroon/20 bg-maroon text-maroon-foreground p-6 md:p-8 shadow-sm shadow-maroon/20">
              <div className="overflow-hidden rounded-2xl ring-1 ring-paper/10 mb-6 bg-paper/5">
                <img
                  src="/achievement_carbonft.jpg"
                  alt="Nalanda College receiving recognition as Sri Lanka's first Carbon Footprint Neutral School"
                  className="w-full aspect-4/3 object-cover"
                />
              </div>

              <div className="border-b border-maroon-foreground/15 pb-5 mb-5">
                <span className="font-mono text-[11px] uppercase tracking-widest text-maroon-foreground/80 block mb-2">
                  Milestone
                </span>
                <h3 className="text-2xl font-display font-extrabold tracking-tight">
                  Sustainability at the center of the school story.
                </h3>
              </div>

              <div className="space-y-4 text-maroon-foreground/80 leading-relaxed text-sm md:text-base">
                <p>
                  The recognition reflects Nalanda College's commitment to environmental
                  responsibility and sustainable practice.
                </p>
                <p>
                  It also acknowledges the collective effort of the school community, alumni,
                  and partners who supported the certification process.
                </p>
                <p>
                  More achievements can be added here later as smaller entries without changing
                  the overall layout.
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Academics",
              body: "Academic progress is highlighted through news, notices and examination-related updates.",
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
            <div
              key={item.title}
              className="rounded-3xl border border-border bg-secondary/40 p-8 md:p-10 shadow-sm shadow-black/5"
            >
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

      </main>
      <SiteFooter />
    </div>
  );
}