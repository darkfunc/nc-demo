import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from "@portabletext/react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import {
  ALL_NEWS_QUERY,
  NEWS_BY_SLUG_QUERY,
  NEWS_SLUGS_QUERY,
} from "@/sanity/lib/queries";
import { formatDate } from "@/sanity/lib/format";

export const revalidate = 60;
const SITE_URL = "https://www.nalandacolleges.lk";
const SITE_NAME = "Nalanda College Colombo";

type NewsDetail = {
  _id: string;
  title: string;
  slug: string;
  tag?: string;
  description?: string;
  thumbnailImage: any;
  images?: any[];
  content: any[];
  publishedAt: string;
};

type NewsNavigationItem = {
  title: string;
  slug: string;
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
    title: news.title,
    description: news.description,
    keywords: [news.title, news.tag, "Nalanda College Colombo news"].filter(
      (keyword): keyword is string => Boolean(keyword),
    ),
    alternates: {
      canonical: `/news/${slug}`,
    },
    openGraph: {
      type: "article",
      url: `${SITE_URL}/news/${slug}`,
      title: news.title,
      description: news.description,
      publishedTime: news.publishedAt,
      section: news.tag,
      siteName: SITE_NAME,
      images: [
        {
          url: urlFor(news.thumbnailImage).width(1200).height(630).fit("crop").url(),
          width: 1200,
          height: 630,
          alt: news.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: news.title,
      description: news.description,
      images: [urlFor(news.thumbnailImage).width(1200).height(630).fit("crop").url()],
    },
  };
}

export default async function NewsDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [news, newsList] = await Promise.all([
    client.fetch<NewsDetail | null>(NEWS_BY_SLUG_QUERY, { slug }),
    client.fetch<NewsNavigationItem[]>(ALL_NEWS_QUERY),
  ]);

  if (!news) notFound();

  const currentIndex = newsList.findIndex((item) => item.slug === news.slug);
  const previousNews = currentIndex >= 0 ? newsList[currentIndex + 1] : undefined;
  const nextNews = currentIndex > 0 ? newsList[currentIndex - 1] : undefined;
  const newsUrl = `${SITE_URL}/news/${news.slug}`;
  const thumbnailUrl = urlFor(news.thumbnailImage).width(1200).height(630).fit("crop").url();
  const newsJsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: news.title,
    description: news.description,
    image: [thumbnailUrl],
    datePublished: news.publishedAt,
    mainEntityOfPage: newsUrl,
    url: newsUrl,
    author: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    publisher: {
      "@type": "EducationalOrganization",
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/nc-crest.png`,
      },
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <SiteHeader />
      <main>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(newsJsonLd) }}
        />
        <article className="max-w-4xl mx-auto px-6 py-20">
          <Link
            href="/news"
            className="mb-5 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-maroon hover:text-ink transition-colors"
          >
            <span aria-hidden="true">←</span>
            Back to News
          </Link>
          <br/>
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
              fetchPriority="high"
              decoding="async"
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

          {(previousNews || nextNews) && (
            <nav
              aria-label="More news"
              className="mt-16 grid grid-cols-1 gap-4 border-t border-border pt-8 sm:grid-cols-2"
            >
              {previousNews ? (
                <Link
                  href={`/news/${previousNews.slug}`}
                  rel="prev"
                  className="group rounded-2xl border border-border bg-secondary/40 p-5 transition-colors hover:border-maroon/40 hover:bg-secondary/70"
                >
                  <span className="flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-maroon">
                    <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                    Previous news
                  </span>
                  <span className="mt-3 block font-display text-lg font-bold leading-tight group-hover:text-maroon">
                    {previousNews.title}
                  </span>
                </Link>
              ) : (
                <div />
              )}
              {nextNews && (
                <Link
                  href={`/news/${nextNews.slug}`}
                  rel="next"
                  className="group rounded-2xl border border-border bg-secondary/40 p-5 text-right transition-colors hover:border-maroon/40 hover:bg-secondary/70"
                >
                  <span className="flex items-center justify-end gap-2 font-mono text-[10px] font-bold uppercase tracking-widest text-maroon">
                    Next news
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="mt-3 block font-display text-lg font-bold leading-tight group-hover:text-maroon">
                    {nextNews.title}
                  </span>
                </Link>
              )}
            </nav>
          )}
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}