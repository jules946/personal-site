import { defineField, defineType } from "sanity";

export default defineType({
    name: "project",
    title: "Project",
    type: "document",
    fields: [
        defineField({ name: "name", title: "Name", type: "string" }),
        defineField({ name: "description", title: "Description", type: "text" }),
        defineField({ name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] }),
        defineField({ name: "url", title: "URL", type: "url" }),
    ],
});