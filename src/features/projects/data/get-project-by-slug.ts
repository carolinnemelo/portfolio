import { client } from "@/sanity/client";
import { draftMode } from "next/headers";
import { defineQuery } from "next-sanity";
import type { ContentBlock } from "../types/content-blocks";
import type { ProjectCardItem } from "../types/content-blocks";

type PortableTextBlock = {
  _type: "block";
  children?: Array<{
    _type: "span";
    text?: string;
  }>;
};

function toPlainText(value?: string | PortableTextBlock[]): string | undefined {
  if (typeof value === "string") {
    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : undefined;
  }

  if (!Array.isArray(value)) {
    return undefined;
  }

  const text = value
    .filter((block) => block?._type === "block")
    .map((block) =>
      (block.children ?? [])
        .filter((child) => child?._type === "span")
        .map((child) => child.text ?? "")
        .join(""),
    )
    .join("\n")
    .trim();

  return text.length > 0 ? text : undefined;
}

type RawProjectDetail = Omit<
  ProjectDetail,
  "description" | "overview" | "overviewItems" | "sections" | "contentBlocks"
> & {
  description?: string | PortableTextBlock[];
  overview?: string | PortableTextBlock[];
  overviewItems?: { label: string; content?: string | PortableTextBlock[] }[];
  sections: { title: string; body?: string | PortableTextBlock[] }[];
  contentBlocks: Array<
    | {
        _type: "cardSection";
        title: string;
        items: Array<
          | string
          | {
              content?: string;
              title?: string;
              footer?: string;
              icon?: string;
              number?: string;
            }
        >;
      }
    | {
        _type: "gallery";
        gallery: { image: string; caption?: string }[];
      }
    | {
        _type: "textBlock";
        title: string;
        body: string | PortableTextBlock[];
      }
    | {
        _type: "video";
        title: string;
        videoUrl: string;
      }
  >;
};

function normalizeCardItem(
  item:
    | string
    | {
        content?: string;
        title?: string;
        footer?: string;
        icon?: string;
        number?: string;
      },
): ProjectCardItem {
  if (typeof item === "string") {
    return { content: item };
  }

  return {
    content: item.content ?? "",
    title: item.title,
    footer: item.footer,
    icon: item.icon,
    number: item.number,
  };
}

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
  const doc = await client.fetch<RawProjectDetail | null>(
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

  return {
    ...doc,
    description: toPlainText(doc.description),
    overview: toPlainText(doc.overview),
    overviewItems: doc.overviewItems?.map((item) => ({
      label: item.label,
      content: toPlainText(item.content) ?? "",
    })),
    sections: doc.sections?.map((section) => ({
      title: section.title,
      body: toPlainText(section.body),
    })),
    contentBlocks: doc.contentBlocks?.map((block) => {
      if (block._type === "cardSection") {
        return {
          ...block,
          items: (block.items ?? []).map(normalizeCardItem),
        };
      }

      if (block._type === "textBlock") {
        return {
          ...block,
          body: block.body ?? "",
        };
      }
      return block;
    }) as ContentBlock[],
  };
}



