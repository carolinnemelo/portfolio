import { ProjectCard, ProjectCardProps } from "./project-card";

type ProjectsGridProps = {
  items: ProjectCardProps[];
  className?: string;
};

export function ProjectsGrid({ items, className = "" }: ProjectsGridProps) {
  if (!items?.length) {
    return (
      <div className="text-center text-slate-500 mt-16">
        <p>No projects found.</p>
      </div>
    );
  }

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}
    >
      {items.map((p, index) => (
        <ProjectCard key={`${p.slug ?? p.title}-${index}`} {...p} />
      ))}
    </div>
  );
}
