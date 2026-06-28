import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "cwixueiz",
  dataset: "production",
  apiVersion: "2026-06-09",
  useCdn: false,
});
