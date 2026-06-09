import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import project from "./sanity/schemaTypes/project";

export default defineConfig({
    projectId: "cwixueiz",
    dataset: "production",
    plugins: [structureTool()],
    schema: {
        types: [project],
    },
});