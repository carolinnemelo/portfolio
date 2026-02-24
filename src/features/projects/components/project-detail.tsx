import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import type { ProjectDetail } from "@/features/projects/data/get-project-by-slug";
import { GystDashboard } from "./prototype-gyst/dashboard";
import { Separator } from "@/components/ui/separator";
import { GalleryCarousel } from "./gallery-carousel";


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

  return (
    <article className="py-16">
      <div className="max-w-4xl mx-auto space-y-16">
        <header className="space-y-10 px-4">
          <nav aria-label="Breadcrumb">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="size-4" aria-hidden />
              Back to projects
            </Link>
          </nav>

          <section className=" space-y-6  ">
            <div className="space-y-5">
              <h1 className="text-4xl md:text-5xl font-semibold text-slate-900">
                {title}
              </h1>
              <div className="h-px bg-slate-200" />
              {(tags?.[0] || tags?.[1]) && (
                <div className="flex items-center justify-between text-sm text-slate-500">
                  {tags?.[0] && <span>{tags[0]}</span>}
                  {tags?.[1] && <span>{tags[1]}</span>}
                </div>
              )}
              {description && (
                <p className="text-base md:text-lg text-slate-700 leading-relaxed max-w-2xl">
                  {description}
                </p>
              )}
            </div>

            {image && (
              <Image
                src={image}
                alt={`${title} hero`}
                width={1280}
                height={720}
                className="w-full h-auto object-cover md:max-w-2xl md:mx-auto"
              />
            )}
          </section>
        </header>

        <Separator className="my-8 bg-slate-200 drop-shadow-lg" />
        <div className="px-4">
          {(githubUrl || href) && (
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
          )}

          {videoUrl && (
            <section aria-labelledby="video-heading">
              <h2
                id="video-heading"
                className="text-2xl font-semibold text-slate-900 mb-4"
              >
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
              <h2
                id="overview-heading"
                className="text-2xl font-semibold text-slate-900 mb-4"
              >
                Overview
              </h2>
              <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                {overview}
              </p>
            </section>
          )}

          {gallery && gallery.length > 0 && (
            <section aria-labelledby="gallery-heading">
              <h2
                id="gallery-heading"
                className="text-2xl font-semibold text-slate-900 my-8"
              >
                Gallery
              </h2>
              <GalleryCarousel gallery={gallery} />
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
                    <h3
                      id={`section-${i}`}
                      className="text-lg font-semibold text-slate-900 mb-3"
                    >
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
        </div>

        {prototypeUrl && (
          <section
            aria-labelledby="prototype-heading"
            className="rounded-xl border bg-slate-50 p-8 text-center"
          >
            <h2
              id="prototype-heading"
              className="text-xl font-semibold text-slate-900 mb-2"
            >
              Try the prototype
            </h2>
            <p className="text-slate-600 mb-6">
              Click below to test the interactive prototype.
            </p>
            <Button asChild size="lg">
              <a href={prototypeUrl} target="_blank" rel="noopener noreferrer">
                Open prototype
              </a>
            </Button>
          </section>
        )}
        {slug === "gyst" && (
          <section aria-labelledby="gyst-dashboard-heading">
            <h2
              id="gyst-dashboard-heading"
              className="text-xl font-semibold text-slate-900 mb-2"
            >
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
