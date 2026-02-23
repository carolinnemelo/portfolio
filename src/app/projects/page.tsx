import { ProjectsGrid } from "@/features/projects/components/projects-grid";
import { getProjects } from "@/features/projects/data/get-projects";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
          {/* Projects */}
        </h1>
        <ProjectsGrid items={projects} />
      </div>
    </main>
  );
}
