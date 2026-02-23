import { client } from "@/sanity/client";
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

export async function getProjects(): Promise<ProjectCardProps[]> {
  const query = /* groq */ `
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
  `;

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

