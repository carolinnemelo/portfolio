import { client } from "@/sanity/client";

export type ProjectDetail = {
  title: string;
  description?: string;
  image: string;
  tags: string[];
  slug: string;
  href?: string;
  githubUrl?: string;
  videoUrl?: string;
  prototypeUrl?: string;
  overview?: string;
  gallery: { image: string; caption?: string }[];
  sections: { title: string; body?: string }[];
};

export async function getProjectBySlug(slug: string): Promise<ProjectDetail | null> {
  const query = /* groq */ `
    *[_type == "project" && slug.current == $slug][0] {
      title,
      description,
      "image": image.asset->url,
      tags,
      "slug": slug.current,
      href,
      githubUrl,
      videoUrl,
      prototypeUrl,
      overview,
      gallery[] {
        "image": image.asset->url,
        caption
      },
      sections[] {
        title,
        body
      }
    }
  `;

  const doc = await client.fetch<ProjectDetail | null>(query, { slug });

  if (!doc) {
    return null;
  }

  console.log({
    ...doc,
    description: doc.description?.trim(),
    sections: (doc.sections ?? []).map((section) => ({
      title: (section?.title ?? "").trim(),
      body: (section?.body ?? "").trim(),
    })),});

  return doc;
}



