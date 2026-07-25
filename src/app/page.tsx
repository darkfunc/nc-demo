import type { Metadata } from "next";
import Link from "next/link";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { LATEST_NEWS_QUERY, LATEST_ANNOUNCEMENTS_QUERY } from "@/sanity/lib/queries";
import { formatDate, excerptFromBlocks } from "@/sanity/lib/format";

export const metadata: Metadata = {
  title: "Nalanda College Colombo — Home",
  description: "Official website of Nalanda College Colombo.",
};

export const revalidate = 60; // re-fetch from Sanity at most once a minute

const stats = [
  { value: "1925", suffix: "", label: "Founded" },
  { value: "Virtues", suffix: "", label: "Vision" },
  { value: "Service", suffix: "", label: "Mission" },
  { value: "50000+", suffix: "", label: "Alumini" },
];

type NewsItem = {
  _id: string;
  title: string;
  slug: string;
  tag?: string;
  description?: string;
  thumbnailImage: any;
  publishedAt: string;
};

type Announcement = {
  _id: string;
  title: string;
  slug?: string;
  content: any[];
  publishedAt: string;
};

export default async function HomePage() {
  const [news, announcements] = await Promise.all([
    client.fetch<NewsItem[]>(LATEST_NEWS_QUERY),
    client.fetch<Announcement[]>(LATEST_ANNOUNCEMENTS_QUERY),
  ]);

  const [featuredNews, ...secondaryNews] = news;

  return (
    <div className="min-h-screen bg-background text-foreground font-body antialiased">
      <SiteHeader />

      <main>
        <section className="relative pt-16 pb-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1 z-10 animate-reveal relative text-center lg:text-left">
              <h2 className="text-maroon font-display text-3xl md:text-4xl mb-3 font-bold leading-tight">
                අපදාන සෝභිනී පඤ්ඤා
              </h2>
              <h1 className="text-5xl md:text-6xl font-display font-extrabold tracking-tighter leading-[0.9] mb-8">
                Character <br />
                Illumines <br />
                <span className="text-maroon">Wisdom.</span>
              </h1>
              <p className="max-w-md mx-auto lg:mx-0 text-muted-foreground leading-relaxed mb-10 text-pretty">
                Since 1925, Nalanda has stood as the premier seat of Buddhist education,
                forging young men of impeccable character through the synthesis of ancient
                values and contemporary excellence.
              </p>
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8">
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-3 bg-maroon text-maroon-foreground px-6 py-3 rounded-sm text-xs font-bold tracking-widest uppercase hover:bg-ink transition-colors shadow-sm"
                >
                  Discover Our Legacy
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="/admissions"
                  className="group inline-flex items-center gap-3 font-medium text-sm text-muted-foreground hover:text-maroon transition-colors"
                >
                  <span className="w-8 h-8 rounded-full border border-border group-hover:border-maroon group-hover:text-maroon grid place-items-center text-[10px] transition-colors">
                    ▶
                  </span>
                  Virtual Tour
                </Link>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 relative group animate-clip">
              <div className="absolute -top-4 -left-4 w-20 h-20 border-l border-t border-maroon z-10" />
              <div className="absolute -bottom-4 -right-4 w-20 h-20 border-r border-b border-maroon z-10" />
              <img
                src="/hero-building.jpg"
                alt="The Nalanda College main administration block"
                width={1600}
                height={1200}
                className="w-full aspect-4/3 object-cover bg-neutral-100 outline-1 -outline-offset-1 outline-black/5"
              />
              <div className="absolute bottom-4 left-4 bg-background/90 backdrop-blur-sm px-3 py-2">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
                  The Main Administration Block
                </span>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-ink text-paper py-16">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className="animate-reveal"
                style={{ animationDelay: `${(i + 1) * 100}ms` }}
              >
                <div className="font-display text-3xl md:text-4xl font-bold mb-2 tracking-tight text-paper">
                  {s.value}
                  <span className="text-maroon">{s.suffix}</span>
                </div>
                <div className="font-mono text-[10px] uppercase tracking-widest text-paper/50">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-24 max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-between items-end mb-12 border-b border-border pb-6">
            <div>
              <span className="font-mono text-[11px] uppercase tracking-widest text-maroon block mb-2">
                Institutional Update
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight">
                Announcements
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            {announcements.map((a, i) => (
              <article
                key={a._id}
                className={`group cursor-pointer ${i < 2 ? "md:border-r md:border-border md:pr-8" : ""}`}
              >
                <span className="font-mono text-[10px] text-muted-foreground mb-4 block tracking-widest">
                  {formatDate(a.publishedAt)}
                </span>
                <h3 className="text-xl font-display font-bold leading-tight mb-4 group-hover:text-maroon transition-colors">
                  {a.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {excerptFromBlocks(a.content)}
                </p>
                <div className="w-8 h-px bg-maroon group-hover:w-16 transition-all duration-300" />
              </article>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 justify-between items-end mb-12 border-b border-border pb-6">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold tracking-tight">
              College News
            </h2>
            <Link href="/news" className="text-xs font-bold uppercase tracking-widest hover:text-maroon">
              Journal Archive →
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {featuredNews && (
              <Link
                href={`/news/${featuredNews.slug}`}
                className="flex flex-col gap-6 group cursor-pointer"
              >
                <div className="overflow-hidden ring-1 ring-black/5">
                  <img
                    src={urlFor(featuredNews.thumbnailImage).width(1200).height(675).url()}
                    alt={featuredNews.title}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div>
                  {featuredNews.tag && (
                    <span className="text-[10px] font-mono uppercase text-maroon font-bold tracking-widest">
                      {featuredNews.tag}
                    </span>
                  )}
                  <h3 className="text-2xl font-display font-bold mt-2 mb-3 leading-tight group-hover:text-maroon transition-colors">
                    {featuredNews.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {featuredNews.description}
                  </p>
                </div>
              </Link>
            )}

            <div className="grid grid-cols-1 gap-8">
              {secondaryNews.map((n) => (
                <Link
                  key={n._id}
                  href={`/news/${n.slug}`}
                  className="flex gap-6 items-start pb-8 border-b border-border group cursor-pointer"
                >
                  <div className="w-28 h-28 md:w-32 md:h-32 shrink-0 overflow-hidden ring-1 ring-black/5">
                    <img
                      src={urlFor(n.thumbnailImage).width(300).height(300).url()}
                      alt={n.title}
                      width={400}
                      height={400}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                    />
                  </div>
                  <div>
                    {n.tag && (
                      <span className="text-[10px] font-mono uppercase text-maroon font-bold tracking-widest">
                        {n.tag}
                      </span>
                    )}
                    <h4 className="text-lg font-display font-bold mt-1 leading-tight group-hover:text-maroon transition-colors">
                      {n.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      {n.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}