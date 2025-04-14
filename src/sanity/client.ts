import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "a2y539v7",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
