import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Co-Curricular Life — Nalanda College Colombo",
  description: "Official co-curricular overview for Nalanda College Colombo using verified school-level information.",
};

const groups = [
  {
    title: "Sports",
    body: "The school website regularly highlights cricket, rugby and other sporting activity through official news items and announcements.",
  },
  {
    title: "Societies",
    body: "Buddhist, literary, debate and service-oriented student activity is part of the broader school culture.",
  },
  {
    title: "Sciences & Technology",
    body: "The school promotes science, ICT and innovation through student activity and verified school events.",
  },
  {
    title: "Arts",
    body: "Music, drama and cultural activity are part of the public co-curricular life shown on the official site.",
  },
];

export default function CoCurricularPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Life Beyond the Classroom"
          title={
            <>
              Co-curricular
              <br />
              <span className="text-maroon">life.</span>
            </>
          }
          intro="This page now reflects only broad, verifiable activity areas that are consistent with the school's official public presence."
        />

        <section className="max-w-7xl mx-auto px-6 py-24 space-y-16 md:space-y-20">
          {groups.map((group) => (
            <div key={group.title} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 border-t border-border pt-16">
              <div className="lg:col-span-4 lg:sticky lg:top-32 self-start rounded-3xl border border-border bg-secondary/40 p-8 md:p-10 shadow-sm shadow-black/5">
                <span className="font-mono text-[11px] uppercase tracking-widest text-maroon block mb-4">
                  Verified Overview
                </span>
                <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tighter leading-none">
                  {group.title}
                </h2>
              </div>
              <div className="lg:col-span-8 rounded-3xl border border-border bg-secondary/40 p-8 md:p-10 shadow-sm shadow-black/5">
                <p className="text-muted-foreground leading-relaxed">{group.body}</p>
              </div>
            </div>
          ))}
        </section>

        <section className="bg-ink text-paper py-20">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="max-w-2xl rounded-3xl border border-paper/10 bg-paper/5 p-8 md:p-10 shadow-sm shadow-black/20">
              <h3 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-4">
                Refer to the official news and notices for current activity updates.
              </h3>
              <p className="text-paper/70 leading-relaxed">
                This page intentionally avoids listing unverified club counts or dated registration windows.
              </p>
            </div>
            <a
              href="https://nalandacollege.lk/news/"
              className="bg-maroon text-maroon-foreground px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-paper hover:text-ink transition-colors shadow-sm"
            >
              View News
            </a>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}