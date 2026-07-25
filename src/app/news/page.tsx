import type { Metadata } from "next";

import { PageHero } from "@/components/page-hero";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { NewsGrid } from "@/components/news-grid";
import { client } from "@/sanity/lib/client";
import { ALL_NEWS_QUERY } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "News & Announcements — Nalanda College Colombo",
  description:
    "Latest news, announcements and dispatches from Nalanda College Colombo — academics, sports, cultural affairs and the Old Boys' community.",
};

export const revalidate = 60;

type NewsItem = {
  _id: string;
  title: string;
  slug: string;
  tag?: string;
  description?: string;
  thumbnailImage: any;
  publishedAt: string;
};

export default async function NewsPage() {
  const news = await client.fetch<NewsItem[]>(ALL_NEWS_QUERY);

  return (
    <div className="min-h-screen bg-background text-foreground font-body">
      <SiteHeader />
      <main>
        <PageHero
          eyebrow="The Nalanda Journal"
          title={
            <>
              Dispatches
              <br />
              from <span className="text-maroon">Campus.</span>
            </>
          }
          intro="A running record of academic milestones, sporting victories, cultural performances and the everyday life of the college."
        />

        <NewsGrid news={news} />
      </main>
      <SiteFooter />
    </div>
  );
}