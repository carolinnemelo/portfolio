import { client } from "@/sanity/client";
import { draftMode } from "next/headers";
import { defineQuery } from "next-sanity";
import type { ProjectCardProps } from "@/features/projects/components/project-card";

type SanityProject = {
  title: string;
  description?: string;
  tags?: string[];
  slug?: string;
  href?: string;
  githubUrl?: string;
  className?: string;
  order?: number;
  image?: string;
};

// Versão simples pro build (sem draftMode)
export async function getProjectsStatic(): Promise<ProjectCardProps[]> {
  const query = defineQuery(/* groq */ `
    *[_type == "project"]
      | order(order asc, _createdAt desc) {
        title,
        description,
        tags,
        "slug": slug.current,
        href,
        githubUrl,
        className,
        order,
        "image": image.asset->url
      }
  `);

  const items = await client.fetch<SanityProject[]>(query);

  return items.map((p) => ({
    title: p.title,
    description: p.description?.trim(),
    image: p.image ?? "",
    tags: p.tags ?? [],
    slug: p.slug,
    href: p.href,
    githubUrl: p.githubUrl,
    className: p.className,
  }));
}

// Versão com Visual Editing (usa draftMode)
export async function getProjects(): Promise<ProjectCardProps[]> {
  // Verifica se está em modo preview
  const { isEnabled } = await draftMode();

  // Define a query (importante pra live updates!)
  const query = defineQuery(/* groq */ `
    *[_type == "project"]
      | order(order asc, _createdAt desc) {
        title,
        description,
        tags,
        "slug": slug.current,
        href,
        githubUrl,
        className,
        order,
        "image": image.asset->url
      }
  `);

  // Busca com configurações especiais quando em preview
  const items = await client.fetch<SanityProject[]>(
    query,
    {},
    isEnabled
      ? {
          perspective: "previewDrafts", // Busca rascunhos
          useCdn: false, // Dados sempre frescos
          stega: true, // Marca invisível pro clique funcionar
          next: { revalidate: 0 }, // Sempre busca de novo
        }
      : { next: { revalidate: 60 } }, // Cache de 1 minuto no modo normal
  );

  return items.map((p) => ({
    title: p.title,
    description: p.description?.trim(),
    image: p.image ?? "",
    tags: p.tags ?? [],
    slug: p.slug,
    href: p.href,
    githubUrl: p.githubUrl,
    className: p.className,
  }));
}

