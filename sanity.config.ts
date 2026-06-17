import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import project from "./sanity/schemaTypes/project";
import cv from "./sanity/schemaTypes/cv";

export default defineConfig({
    projectId: "cwixueiz",
    dataset: "production",
    plugins: [structureTool({ defaultDocumentNode: undefined })],
    basePath: "/studio",
    schema: {
        types: [project, cv],
    },
});