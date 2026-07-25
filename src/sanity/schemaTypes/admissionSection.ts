import { defineType, defineField } from "sanity";

export default defineType({
  name: "admissionSection",
  title: "Admission Banner",
  type: "document",
  fields: [
    defineField({
      name: "visible",
      title: "Show on homepage",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      initialValue: "Admissions For 2028 A/L Classes",
    }),
    defineField({
      name: "buttonText",
      title: "Button Text",
      type: "string",
      initialValue: "Submit",
    }),
    defineField({
      name: "buttonLink",
      title: "Button Link",
      type: "string",
      initialValue: "/admissions",
    }),
  ],
});