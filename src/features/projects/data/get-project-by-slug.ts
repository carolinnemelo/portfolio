import { client } from "@/sanity/client";
import { draftMode } from "next/headers";
import { defineQuery } from "next-sanity";
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
  overviewItems?: { label: string; content: string }[];
  contentImage?: string;
  numberOfBlocksWithImage?: number;
  gallery: { image: string; caption?: string }[];
  sections: { title: string; body?: string }[];
  contentBlocks: ContentBlock[];
};

export async function getProjectBySlug(
  slug: string,
): Promise<ProjectDetail | null> {
  // Verifica se está em modo preview
  const { isEnabled } = await draftMode();

  // Define a query (importante pra live updates!)
  const query = defineQuery(/* groq */ `
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
      overviewItems[] {
        label,
        content
      },
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
        _key,
        _type == "cardSection" => {
          title,
          items
        },
        _type == "gallery" => {
          gallery[] {
            _key,
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
  `);

  // Busca com configurações especiais quando em preview
  const doc = await client.fetch<ProjectDetail | null>(
    query,
    { slug },
    isEnabled
      ? {
          perspective: "previewDrafts", // Busca rascunhos
          useCdn: false, // Dados sempre frescos
          stega: true, // Marca invisível pro clique funcionar
          next: { revalidate: 0 }, // Sempre busca de novo
        }
      : { next: { revalidate: 60 } }, // Cache de 1 minuto no modo normal
  );

  if (!doc) {
    return null;
  }

  return doc;
}



