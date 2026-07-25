import type { Metadata } from "next";
import Link from "next/link";

import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Admissions — Nalanda College Colombo",
  description:
    "Official admissions notice page for Nalanda College Colombo, based on the public website and current admissions announcements.",
};

export default function AdmissionsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Admissions · Official Notice"
          title={
            <>
              Current admissions
              <br />
              <span className="text-maroon">information.</span>
            </>
          }
          intro="The public website currently lists the 2028 A/L admissions notice as closed. Please refer to the official website for future notices and updates."
        >
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/"
              className="bg-maroon text-maroon-foreground px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-ink transition-colors shadow-sm"
            >
              Official Website →
            </Link>
            <a
              href="mailto:info@nalandacollege.lk"
              className="border border-border bg-background/70 px-6 py-3 rounded-full text-xs font-bold tracking-widest uppercase hover:border-maroon hover:text-maroon transition-colors"
            >
              Email the Office
            </a>
          </div>
        </PageHero>

        <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 rounded-3xl border border-border bg-secondary/40 p-8 md:p-10 shadow-sm shadow-black/5">
            <span className="font-mono text-[11px] uppercase tracking-widest text-maroon block mb-4">
              Official Notes
            </span>
            <h3 className="font-display font-extrabold text-3xl tracking-tight mb-6">
              Verified information only
            </h3>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              The public website currently confirms the 2028 A/L admissions notice is closed.
              For future admissions updates, use the official website or the school email.
            </p>
          </div>
          <div className="lg:col-span-6 rounded-3xl border border-maroon/20 bg-linear-to-br from-maroon/10 via-secondary/50 to-background p-8 md:p-10 shadow-sm shadow-black/5">
            <span className="font-mono text-[11px] uppercase tracking-widest text-maroon block mb-4">
              Contact
            </span>
            <h3 className="font-display font-extrabold text-3xl tracking-tight mb-6">
              Official school email
            </h3>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-2xl border border-border bg-background/60 px-5 py-4">
                <span className="font-display font-semibold">General</span>
                <a href="mailto:info@nalandacollege.lk" className="font-mono text-sm hover:text-maroon">
                  info@nalandacollege.lk
                </a>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 rounded-2xl border border-border bg-background/60 px-5 py-4">
                <span className="font-display font-semibold">Admissions notice</span>
                <span className="font-mono text-sm">Closed</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
              No unpublished application dates or fee tables are shown here.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}