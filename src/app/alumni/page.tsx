import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Old Boys' Association — Nalanda College Colombo",
  description: "Official alumni and Old Boys' Association page for Nalanda College Colombo.",
};

export default function AlumniPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="The Old Boys' Association"
          title={
            <>
              Old Boys'
              <br />
              <span className="text-maroon">Association.</span>
            </>
          }
          intro="Community information and official links for the Nalanda Old Boys' Association."
        />

        <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-12 gap-8 border-b border-border">
          <div className="lg:col-span-5 rounded-3xl border border-border bg-secondary/40 p-8 md:p-10 shadow-sm shadow-black/5">
            <span className="font-mono text-[11px] uppercase tracking-widest text-maroon block mb-4">
              Official Links
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight mb-6">
              Stay connected through the official channels.
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Use the official website, email and social pages for alumni notices, events and community updates.
            </p>
          </div>
          <div className="lg:col-span-7 grid gap-4">
            <div className="rounded-2xl border border-border bg-secondary/40 px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-sm shadow-black/5">
              <span className="font-display font-semibold">Official email</span>
              <a href="mailto:info@nalandacollege.lk" className="font-mono text-sm hover:text-maroon">
                info@nalandacollege.lk
              </a>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/40 px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-sm shadow-black/5">
              <span className="font-display font-semibold">Facebook</span>
              <a href="https://web.facebook.com/NalandaCollegeColombo/" className="font-mono text-sm hover:text-maroon">
                NalandaCollegeColombo
              </a>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/40 px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 shadow-sm shadow-black/5">
              <span className="font-display font-semibold">YouTube</span>
              <a href="https://www.youtube.com/channel/UCCOaxljN65_1vKFuJpmHCsw" className="font-mono text-sm hover:text-maroon">
                Nalanda College Colombo
              </a>
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="rounded-3xl border border-border bg-secondary/40 p-8 md:p-10 shadow-sm shadow-black/5">
            <span className="font-mono text-[11px] uppercase tracking-widest text-maroon block mb-4">
              Alumni Notice
            </span>
            <h3 className="font-display font-extrabold text-4xl tracking-tight mb-4">
              Check official announcements for events and reunions.
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Publicly verified alumni announcements should be taken from the official school website and the association's official channels.
            </p>
            <a href="https://nalandacollege.lk/news/" className="mt-8 inline-flex items-center gap-3 font-bold text-sm tracking-tight border-b-2 border-maroon pb-1">
              View official news →
            </a>
          </div>
          <div className="rounded-3xl border border-border bg-linear-to-br from-secondary/70 via-background to-background p-8 md:p-10 shadow-sm shadow-black/5">
            <p className="text-muted-foreground leading-relaxed">
              The earlier placeholder chapter and fundraising figures have been removed so the page only shows public, verifiable community links.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}