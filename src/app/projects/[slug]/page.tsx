import { notFound } from "next/navigation";
import { getProjects } from "@/features/projects/data/get-projects";
import { getProjectBySlug } from "@/features/projects/data/get-project-by-slug";
import { ProjectDetail } from "@/features/projects/components/project-detail";

type PageParams = {
  slug: string;
};

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects
    .filter((p) => p.slug)
    .map((p) => ({ slug: p.slug as string }));
}

export default async function ProjectPage(props: {
  params: Promise<PageParams>;
}) {
  const { slug } = await props.params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}

