import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import type { ProjectDetail } from "@/features/projects/data/get-project-by-slug";
import { GystDashboard } from "./prototype-gyst/dashboard";


function getEmbedUrl(url: string): string {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com") && u.searchParams.has("v")) {
      return `https://www.youtube.com/embed/${u.searchParams.get("v")}`;
    }
    if (u.hostname.includes("youtu.be")) {
      return `https://www.youtube.com/embed/${u.pathname.slice(1)}`;
    }
    return url;
  } catch {
    return url;
  }
}

type ProjectDetailProps = {
  project: ProjectDetail;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  const {
    title,
    description,
    image,
    tags,
    href,
    githubUrl,
    videoUrl,
    prototypeUrl,
    overview,
    gallery,
    sections,
    slug,
  } = project;

  const showEmbeddedDashboard =
    slug === "focusflow-async-collaboration-dashboard" || slug ==="gyst";

  return (
    <article className="py-16 px-4">
      <div className="max-w-4xl mx-auto space-y-16">
        <header className="space-y-6">
          <nav aria-label="Breadcrumb">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="size-4" aria-hidden />
              Back to projects
            </Link>
          </nav>

          <div className="flex flex-wrap gap-2">
            {tags?.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
            {title}
          </h1>

          {description && (
            <p className="text-lg text-slate-600">{description}</p>
          )}

          <div className="flex flex-wrap gap-3">
            {githubUrl && (
              <Button asChild variant="outline" size="sm">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </Button>
            )}
            {href && (
              <Button asChild size="sm">
                <a href={href} target="_blank" rel="noopener noreferrer">
                  Live demo
                </a>
              </Button>
            )}
          </div>

          {image && (
            <figure className="mt-8 overflow-hidden rounded-xl border bg-slate-100">
              <Image
                src={image}
                alt={`${title} hero`}
                width={1280}
                height={720}
                className="w-full h-auto object-cover"
              />
            </figure>
          )}
        </header>

        {videoUrl && (
          <section aria-labelledby="video-heading">
            <h2 id="video-heading" className="text-xl font-semibold text-slate-900 mb-4">
              Project walkthrough
            </h2>
            <div className="aspect-video w-full overflow-hidden rounded-xl border bg-slate-950">
              <iframe
                src={getEmbedUrl(videoUrl)}
                title={`${title} video`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </section>
        )}

        {overview && (
          <section aria-labelledby="overview-heading">
            <h2 id="overview-heading" className="text-xl font-semibold text-slate-900 mb-4">
              Overview
            </h2>
            <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
              {overview}
            </p>
          </section>
        )}

        {gallery && gallery.length > 0 && (
          <section aria-labelledby="gallery-heading">
            <h2 id="gallery-heading" className="text-xl font-semibold text-slate-900 mb-6">
              Gallery
            </h2>
            <ul className="space-y-8">
              {gallery.map((item, i) => (
                <li key={i}>
                  <figure className="overflow-hidden rounded-xl border bg-slate-100">
                    {item.image && (
                      <Image
                        src={item.image}
                        alt={item.caption || `Gallery image ${i + 1}`}
                        width={1280}
                        height={720}
                        className="w-full h-auto object-cover"
                      />
                    )}
                    {item.caption && (
                      <figcaption className="p-4 text-sm text-slate-600 bg-slate-50">
                        {item.caption}
                      </figcaption>
                    )}
                  </figure>
                </li>
              ))}
            </ul>
          </section>
        )}

        {sections && sections.length > 0 && (
          <section aria-labelledby="sections-heading">
            <h2 id="sections-heading" className="sr-only">
              Content sections
            </h2>
            <div className="space-y-12">
              {sections.map((s, i) => (
                <section key={i} aria-labelledby={`section-${i}`}>
                  <h3 id={`section-${i}`} className="text-lg font-semibold text-slate-900 mb-3">
                    {s.title}
                  </h3>
                  {s.body && (
                    <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                      {s.body}
                    </p>
                  )}
                </section>
              ))}
            </div>
          </section>
        )}

        {(showEmbeddedDashboard || prototypeUrl) && (
          <section
            aria-labelledby="prototype-heading"
            className="rounded-xl border bg-slate-50 p-8 text-center"
          >
            <h2 id="prototype-heading" className="text-xl font-semibold text-slate-900 mb-2">
              Try the prototype
            </h2>
            <p className="text-slate-600 mb-6">
              Click below to test the interactive prototype.
            </p>
            {showEmbeddedDashboard && (
              <Button asChild size="lg">
                <a
                  href={prototypeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open prototype
                </a>
              </Button>
            )}
          </section>
        )}
        {slug === "gyst" && (
          <section aria-labelledby="gyst-dashboard-heading">
            <h2 id="gyst-dashboard-heading" className="text-xl font-semibold text-slate-900 mb-2">
              Gyst Dashboard
            </h2>
            <GystDashboard />
          </section>
        )}

        <footer className="pt-8 border-t">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Back to projects
          </Link>
        </footer>
      </div>
    </article>
  );
}
