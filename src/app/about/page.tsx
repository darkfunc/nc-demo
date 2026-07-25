import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Our Legacy — Nalanda College Colombo",
  description:
    "The official profile of Nalanda College Colombo — vision, mission and verified background from the college website.",
};

const profile = [
  {
    heading: "Vision",
    body: "To gift the world great humans who are endowed with virtues and wisdom.",
  },
  {
    heading: "Mission",
    body: "To reward mother Lanka with noble sons with balanced personality, dedicated to serve the country, nation and religion.",
  },
  {
    heading: "Foundation",
    body: "Nalanda College Colombo was founded in 1925 and remains a Buddhist boys' school in Colombo.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Our Legacy · Est. 1925"
          title={
            <>
              Official school
              <br />
              profile and <span className="text-maroon">mission.</span>
            </>
          }
          intro="Verified facts from the college website, including the official vision, mission and public admissions notice."
        />

        <section className="max-w-7xl mx-auto px-6 py-24 border-b border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {profile.map((item) => (
              <div
                key={item.heading}
                className="rounded-3xl border border-border bg-secondary/40 p-8 md:p-10 shadow-sm shadow-black/5"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="h-px w-8 bg-maroon" />
                  <span className="font-mono text-[11px] uppercase tracking-widest text-maroon">
                    {item.heading}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed text-pretty">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24">
          <div className="rounded-3xl border border-maroon/20 bg-linear-to-br from-maroon/10 via-secondary/40 to-background p-10 md:p-12 text-center">
            <h3 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-6">
              Refer to official notices for current school updates.
            </h3>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/admissions"
                className="bg-maroon text-maroon-foreground px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-ink transition-colors shadow-sm"
              >
                Admissions Notice →
              </Link>
              <Link
                href="/contact"
                className="border border-border bg-background/70 px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:border-maroon hover:text-maroon transition-colors"
              >
                Contact Office
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}