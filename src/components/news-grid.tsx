"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";
import { formatDate } from "@/sanity/lib/format";

type NewsItem = {
  _id: string;
  title: string;
  slug: string;
  tag?: string;
  description?: string;
  thumbnailImage: any;
  publishedAt: string;
};

export function NewsGrid({ news }: { news: NewsItem[] }) {
  const categories = useMemo(() => {
    const tags = Array.from(new Set(news.map((n) => n.tag).filter(Boolean))) as string[];
    return ["All", ...tags];
  }, [news]);

  const [active, setActive] = useState("All");

  const filtered = active === "All" ? news : news.filter((n) => n.tag === active);
  const [featured, ...rest] = filtered;

  if (news.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center text-muted-foreground">
        No news posted yet. Check back soon.
      </div>
    );
  }

  return (
    <>
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-wrap gap-3 items-center">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mr-3">
            Filter
          </span>
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
                active === c
                  ? "bg-maroon text-maroon-foreground"
                  : "bg-secondary text-muted-foreground hover:bg-secondary/70 hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {featured && (
        <section className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-12 gap-12 items-center border-b border-border">
          <div className="lg:col-span-7 relative rounded-3xl border border-border bg-secondary/30 p-4 md:p-5 shadow-sm shadow-black/5">
            <div className="absolute -top-3 -left-3 w-16 h-16 border-l border-t border-maroon z-10" />
            <img
              src={urlFor(featured.thumbnailImage).width(1200).height(800).url()}
              alt={featured.title}
              width={1200}
              height={800}
              className="w-full aspect-3/2 rounded-2xl object-cover ring-1 ring-black/5"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="lg:col-span-5 rounded-3xl border border-border bg-secondary/40 p-8 md:p-10 shadow-sm shadow-black/5">
            <span className="font-mono text-[10px] uppercase tracking-widest text-maroon font-bold">
              Featured{featured.tag ? ` · ${featured.tag}` : ""} · {formatDate(featured.publishedAt)}
            </span>
            <h2 className="mt-4 font-display font-extrabold text-4xl md:text-5xl leading-tight tracking-tight">
              {featured.title}
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed">{featured.description}</p>
            <a
              href={`/news/${featured.slug}`}
              className="mt-8 inline-flex items-center gap-3 font-bold text-sm tracking-tight border-b-2 border-maroon pb-1"
            >
              Read the full dispatch →
            </a>
          </div>
        </section>
      )}

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {rest.map((a) => (
            <article
              key={a._id}
              className="news-card group cursor-pointer rounded-3xl border border-border bg-secondary/40 p-4 shadow-sm shadow-black/5 transition-[transform,box-shadow,border-color] duration-500 ease-out hover:-translate-y-2 hover:border-maroon/30 hover:shadow-xl hover:shadow-maroon/10"
            >
              <a href={`/news/${a.slug}`}>
                <div className="news-card__media relative overflow-hidden rounded-2xl ring-1 ring-black/5 mb-5">
                  <img
                    src={urlFor(a.thumbnailImage).width(800).height(600).url()}
                    alt={a.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full aspect-4/3 object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <span className="news-card__veil absolute inset-0 bg-linear-to-t from-ink/65 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-paper text-ink opacity-0 shadow-lg transition-[opacity,transform] duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
                {a.tag && (
                  <span className="font-mono text-[10px] uppercase tracking-widest text-maroon font-bold">
                    {a.tag} · {formatDate(a.publishedAt)}
                  </span>
                )}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display font-bold text-xl mt-2 mb-3 leading-tight transition-colors duration-300 group-hover:text-maroon">
                    {a.title}
                  </h3>
                  <span className="news-card__dot mt-3 h-2 w-2 shrink-0 rounded-full bg-maroon opacity-30 transition-transform duration-500 group-hover:scale-150 group-hover:opacity-100" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.description}</p>
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}