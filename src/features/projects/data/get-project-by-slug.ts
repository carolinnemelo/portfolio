import { client } from "@/sanity/client";
import type { ContentBlock } from "../types/content-blocks";

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
  contentImage?: string;
  numberOfBlocksWithImage?: number;
  gallery: { image: string; caption?: string }[];
  sections: { title: string; body?: string }[];
  contentBlocks: ContentBlock[];
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
      "contentImage": contentImage.asset->url,
      numberOfBlocksWithImage,
      gallery[] {
        "image": image.asset->url,
        caption
      },
      sections[] {
        title,
        body
      },
      contentBlocks[] {
        _type,
        _type == "cardSection" => {
          title,
          items
        },
        _type == "gallery" => {
          "gallery": gallery[] {
            "image": image.asset->url,
            caption
          }
        },
        _type == "textBlock" => {
          title,
          body
        },
        _type == "video" => {
          title,
          videoUrl
        }
      }
    }
  `;

  const doc = await client.fetch<ProjectDetail | null>(query, { slug });

  if (!doc) {
    return null;
  }

  return doc;
}



