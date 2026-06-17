import { defineField, defineType } from "sanity";

export default defineType({
  name: "cv",
  title: "CV",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({
      name: "experience",
      title: "Experience",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({ name: "company", title: "Company", type: "string" }),
            defineField({ name: "title", title: "Job Title", type: "string" }),
            defineField({ name: "startDate", title: "Start Date", type: "string" }),
            defineField({ name: "endDate", title: "End Date", type: "string" }),
            defineField({
              name: "bullets",
              title: "Bullet Points",
              type: "array",
              of: [{ type: "string" }],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: "education",
      title: "Education",
      type: "object",
      fields: [
        defineField({ name: "institution", title: "Institution", type: "string" }),
        defineField({ name: "degree", title: "Degree", type: "string" }),
        defineField({ name: "date", title: "Date", type: "string" }),
      ],
    }),
    defineField({ name: "skills", title: "Skills", type: "string" }),
    defineField({ name: "github", title: "GitHub URL", type: "url" }),
    defineField({ name: "linkedin", title: "LinkedIn URL", type: "url" }),
  ],
});
