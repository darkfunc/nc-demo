import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";

import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "Co-Curricular Life — Nalanda College Colombo",
  description: "Official co-curricular overview for Nalanda College Colombo using verified school-level information.",
};


const societies = [
  {
    name: "Buddhist Society",
    mark: "BS",
    category: "Faith & values",
    body: "A space for reflection, observance and the values that shape Nalanda's identity.",
  },
  {
    name: "Literary Association",
    mark: "LA",
    category: "Language & ideas",
    body: "Celebrating reading, writing, public expression and the confidence to share ideas.",
  },
  {
    name: "Debating Society",
    mark: "DS",
    category: "Voice & leadership",
    body: "A forum for respectful argument, current affairs and clear, considered thinking.",
  },
  {
    name: "Science & Technology",
    mark: "ST",
    category: "Discovery",
    body: "Curiosity-led activity connecting classroom learning with making, testing and discovery.",
  },
  {
    name: "Arts & Culture",
    mark: "AC",
    category: "Expression",
    body: "Music, drama and cultural work that keeps the creative life of the college moving.",
  },
  {
    name: "Service Community",
    mark: "SC",
    category: "Community",
    body: "Student activity grounded in service, responsibility and care for the wider community.",
  },
];

const sports = [
  { name: "Cricket", mark: "CR", category: "Team sport", body: "A long-standing part of the college's competitive sporting tradition." },
  { name: "Rugby", mark: "RU", category: "Team sport", body: "Building discipline, strength and trust through team competition." },
  { name: "Athletics", mark: "AT", category: "Track & field", body: "Individual and team events that celebrate speed, stamina and focus." },
  { name: "Basketball", mark: "BK", category: "Team sport", body: "Fast-paced court activity built around movement, skill and teamwork." },
  { name: "Football", mark: "FB", category: "Team sport", body: "A shared field for coordination, fitness and competitive spirit." },
  { name: "Swimming", mark: "SW", category: "Aquatics", body: "Training that develops technique, endurance and confidence in the water." },
  { name: "Boxing", mark: "BX", category: "Combat sport", body: "A disciplined practice centered on technique, conditioning and respect." },
  { name: "Badminton", mark: "BM", category: "Racket sport", body: "Quick-footed singles and doubles play with a strong technical edge." },
];

type DirectoryItem = {
  name: string;
  mark: string;
  category: string;
  body: string;
  website?: string;
};

function DirectoryCard({ item, index }: { item: DirectoryItem; index: number }) {
  const card = (
    <>
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full border border-maroon/10 transition-transform duration-700 group-hover:scale-150" />
      <div className="relative flex items-start justify-between gap-4">
        <div className="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded-2xl border border-maroon/20 bg-maroon/5 text-maroon shadow-sm">
          <img src="/nc-crest.png" alt="" className="absolute h-12 w-12 object-contain opacity-20 grayscale transition-all duration-500 group-hover:scale-110 group-hover:opacity-35" />
          <span className="relative font-display text-lg font-extrabold tracking-tight">{item.mark}</span>
        </div>
        <span className="font-mono text-[10px] font-bold tracking-widest text-muted-foreground">0{index + 1}</span>
      </div>
      <div className="relative mt-10">
        <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-maroon">{item.category}</span>
        <h3 className="mt-2 font-display text-2xl font-bold leading-tight transition-colors duration-300 group-hover:text-maroon">{item.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
      </div>
      {item.website ? (
        <span className="absolute bottom-5 right-5 inline-flex items-center gap-1 font-mono text-[9px] font-bold uppercase tracking-widest text-maroon">
          Visit <ArrowUpRight className="h-3 w-3" />
        </span>
      ) : (
        <span className="absolute bottom-6 right-6 h-2 w-2 rounded-full bg-maroon opacity-30 transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />
      )}
    </>
  );

  const className = "group relative min-h-64 overflow-hidden rounded-3xl border border-border bg-background p-6 transition-all duration-500 hover:-translate-y-1 hover:border-maroon/40 hover:shadow-xl hover:shadow-maroon/10";

  return item.website ? (
    <a href={item.website} target="_blank" rel="noreferrer" className={className}>
      {card}
    </a>
  ) : (
    <article className={className}>{card}</article>
  );
}

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

        <section className="border-b border-border bg-secondary/25" aria-labelledby="societies-heading">
          <div className="max-w-7xl mx-auto px-6 py-20 md:py-24">
            <div className="mb-12 flex flex-col gap-5 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="font-mono text-[11px] uppercase tracking-widest text-maroon font-bold">
                  The society register
                </span>
                <h2 id="societies-heading" className="mt-3 max-w-2xl font-display text-4xl font-extrabold tracking-tight md:text-6xl">
                  Find your <span className="text-maroon">circle.</span>
                </h2>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                The groups below map the broad society and activity life associated with Nalanda College Colombo.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {societies.map((society, index) => <DirectoryCard key={society.name} item={society} index={index} />)}
            </div>
          </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20 md:py-24" aria-labelledby="sports-heading">
          <div className="mb-12 flex flex-col gap-5 border-b border-border pb-8 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-maroon font-bold">The sports programme</span>
              <h2 id="sports-heading" className="mt-3 max-w-2xl font-display text-4xl font-extrabold tracking-tight md:text-6xl">
                Play with <span className="text-maroon">purpose.</span>
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              From team fields to individual disciplines, sport is one of the ways Nalandians build character together.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {sports.map((sport, index) => <DirectoryCard key={sport.name} item={sport} index={index} />)}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}