import type { MetadataRoute } from "next";

import { client } from "@/sanity/lib/client";
import { NEWS_SITEMAP_QUERY } from "@/sanity/lib/queries";

const SITE_URL = "https://www.nalandacolleges.lk";

type NewsSitemapItem = {
  slug: string;
  publishedAt: string;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const news = await client.fetch<NewsSitemapItem[]>(NEWS_SITEMAP_QUERY);
  const staticRoutes = [
    "",
    "/about",
    "/achievements",
    "/admissions",
    "/co-curricular",
    "/contact",
    "/news",
    "/unit-test-papers",
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${SITE_URL}${route}`,
      changeFrequency: route === "/news" ? "daily" as const : "monthly" as const,
      priority: route === "" ? 1 : route === "/news" ? 0.9 : 0.7,
    })),
    ...news.map((item) => ({
      url: `${SITE_URL}/news/${item.slug}`,
      lastModified: item.publishedAt,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
