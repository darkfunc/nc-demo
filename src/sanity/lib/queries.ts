import { groq } from "next-sanity";

export const LATEST_NEWS_QUERY = groq`
  *[_type == "news"] | order(publishedAt desc)[0...3]{
    _id,
    title,
    "slug": slug.current,
    tag,
    description,
    thumbnailImage,
    publishedAt
  }
`;

export const LATEST_ANNOUNCEMENTS_QUERY = groq`
  *[_type == "announcement"] | order(publishedAt desc)[0...3]{
    _id,
    title,
    "slug": slug.current,
    content,
    publishedAt
  }
`;

export const HOME_PAGE_QUERY = groq`{
  "news": *[_type == "news"] | order(publishedAt desc)[0...3]{
    _id, title, "slug": slug.current, tag, description, thumbnailImage, publishedAt
  },
  "announcements": *[_type == "announcement"] | order(publishedAt desc)[0...3]{
    _id, title, "slug": slug.current, content, publishedAt
  },
  "admission": *[_type == "admissionSection"][0]{
    visible, heading, buttonText, buttonLink
  }
}`;

export const ALL_NEWS_QUERY = groq`
  *[_type == "news"] | order(publishedAt desc){
    _id,
    title,
    "slug": slug.current,
    tag,
    description,
    thumbnailImage,
    publishedAt
  }
`;
export const NEWS_BY_SLUG_QUERY = groq`
  *[_type == "news" && slug.current == $slug][0]{
    _id,
    title,
    tag,
    description,
    thumbnailImage,
    images,
    content,
    publishedAt
  }
`;

export const NEWS_SLUGS_QUERY = groq`
  *[_type == "news" && defined(slug.current)][].slug.current
`;