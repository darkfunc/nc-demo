import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { NEWS_BY_SLUG_QUERY, NEWS_SLUGS_QUERY } from "@/sanity/lib/queries";
import { formatDate } from "@/sanity/lib/format";

export const revalidate = 60;

type NewsDetail = {
  _id: string;
  title: string;
  tag?: string;
  description?: string;
  thumbnailImage: any;
  images?: any[];
  content: any[];
  publishedAt: string;
};

export async function generateStaticParams() {
  const slugs = await client.fetch<string[]>(NEWS_SLUGS_QUERY);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const news = await client.fetch<NewsDetail | null>(NEWS_BY_SLUG_QUERY, { slug });

  if (!news) return {};

  return {
    title: `${news.title} — Nalanda College Colombo`,
    description: news.description,
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const news = await client.fetch<NewsDetail | null>(NEWS_BY_SLUG_QUERY, { slug });

  if (!news) notFound();

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <SiteHeader />
      <main>
        <article className="max-w-4xl mx-auto px-6 py-20">
          <span className="font-mono text-[10px] uppercase tracking-widest text-maroon font-bold">
            {news.tag ? `${news.tag} · ` : ""}
            {formatDate(news.publishedAt)}
          </span>
          <h1 className="mt-4 font-display font-extrabold text-4xl md:text-5xl leading-tight tracking-tight">
            {news.title}
          </h1>
          {news.description && (
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              {news.description}
            </p>
          )}

          <div className="mt-10 overflow-hidden rounded-2xl ring-1 ring-black/5">
            <img
              src={urlFor(news.thumbnailImage).width(1400).height(800).url()}
              alt={news.title}
              width={1400}
              height={800}
              className="w-full aspect-video object-cover"
            />
          </div>

          <div className="mt-10 prose prose-neutral max-w-none">
            <PortableText value={news.content} />
          </div>

          {news.images && news.images.length > 0 && (
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {news.images.map((img, i) => (
                <div key={i} className="overflow-hidden rounded-2xl ring-1 ring-black/5">
                  <img
                    src={urlFor(img).width(600).height(450).url()}
                    alt={`${news.title} image ${i + 1}`}
                    width={600}
                    height={450}
                    className="w-full aspect-4/3 object-cover"
                  />
                </div>
              ))}
            </div>
          )}
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}