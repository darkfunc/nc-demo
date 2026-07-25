import { defineType, defineField } from "sanity";

export default defineType({
  name: "news",
  title: "News",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "tag",
      title: "Tag",
      type: "string",
      description: "e.g. Update, Press, Event",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      description: "Short summary shown in listings",
      validation: (Rule) => Rule.max(300),
    }),
    defineField({
      name: "thumbnailImage",
      title: "Thumbnail Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "images",
      title: "Gallery Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
      validation: (Rule) => Rule.max(3).error("Only up to 3 images allowed"),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }, { type: "image", options: { hotspot: true } }],
    }),
    defineField({
      name: "publishedAt",
      title: "Published Date",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
  ],
  preview: {
    select: { title: "title", media: "thumbnailImage", subtitle: "tag" },
  },
});