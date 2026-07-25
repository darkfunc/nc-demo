import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Contact — Nalanda College Colombo",
  description: "Official contact information for Nalanda College Colombo based on the public website.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="Get in Touch"
          title={
            <>
              Reach the
              <br />
              official <span className="text-maroon">office.</span>
            </>
          }
          intro="The official public channel currently exposed by the school website is the school email address."
        />

        <section className="max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-5 rounded-3xl border border-border bg-secondary/40 p-8 md:p-10 shadow-sm shadow-black/5">
            <span className="font-mono text-[11px] uppercase tracking-widest text-maroon block mb-6">
              Official Channel
            </span>
            <div className="rounded-2xl border border-maroon/15 bg-linear-to-br from-maroon/10 via-background to-background p-6 md:p-8">
              <h3 className="font-display font-bold text-2xl mb-4">info@nalandacollege.lk</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                This email appears on the official school website. No additional phone or
                office-hour details are listed here unless they are published officially.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-background/60 p-6">
              <span className="font-mono text-[11px] uppercase tracking-widest text-maroon block mb-4">
                Official Links
              </span>
              <div className="space-y-3 text-sm">
                <a href="https://web.facebook.com/NalandaCollegeColombo/" className="block hover:text-maroon">
                  Facebook
                </a>
                <a href="https://www.youtube.com/channel/UCCOaxljN65_1vKFuJpmHCsw" className="block hover:text-maroon">
                  YouTube
                </a>
                <a href="https://drive.google.com/file/d/1_ihO6YaPWpLJ61hZu3lWUJ03h-OY-W4O/view?usp=sharing" className="block hover:text-maroon">
                  E-Newspaper
                </a>
              </div>
            </div>
          </div>

          <form className="lg:col-span-7 rounded-3xl border border-border bg-secondary/40 p-8 md:p-12 shadow-sm shadow-black/5">
            <span className="font-mono text-[11px] uppercase tracking-widest text-maroon block mb-2">
              Contact Form
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-8">
              Use the form for general enquiries.
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Full Name
                </span>
                <input type="text" required className="mt-2 w-full bg-transparent border-b border-border py-3 text-base focus:outline-none focus:border-maroon transition-colors" />
              </label>
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Email
                </span>
                <input type="email" required className="mt-2 w-full bg-transparent border-b border-border py-3 text-base focus:outline-none focus:border-maroon transition-colors" />
              </label>
              <label className="block md:col-span-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Subject
                </span>
                <select className="mt-2 w-full bg-transparent border-b border-border py-3 text-base focus:outline-none focus:border-maroon transition-colors">
                  <option>General enquiry</option>
                  <option>Admissions</option>
                  <option>Old Boys' Association</option>
                  <option>Sports & Activities</option>
                  <option>Media & Press</option>
                </select>
              </label>
              <label className="block md:col-span-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  Message
                </span>
                <textarea rows={5} required className="mt-2 w-full bg-transparent border-b border-border py-3 text-base focus:outline-none focus:border-maroon transition-colors resize-none" />
              </label>
            </div>

            <button type="submit" className="mt-10 bg-maroon text-maroon-foreground px-8 py-4 rounded-full text-xs font-bold tracking-widest uppercase hover:bg-ink transition-colors shadow-sm">
              Submit Enquiry →
            </button>
          </form>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}