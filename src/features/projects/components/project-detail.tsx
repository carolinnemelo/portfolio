"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import type { ProjectDetail } from "@/features/projects/data/get-project-by-slug";
import { GystDashboard } from "./prototype-gyst/dashboard";
import { Separator } from "@/components/ui/separator";
import { RenderContentBlock } from "./render-content-block";
import { ImageLightbox } from "./image-lightbox";
import { getIconForLabel } from "@/features/projects/utils/overview-icons";



function getEmbedUrl(url: string): string {
  try {
    const u = new URL(url);
    if (u.hostname.includes("youtube.com") && u.searchParams.has("v")) {
      return `https://www.youtube.com/embed/${u.searchParams.get("v")}`;
    }
    if (u.hostname.includes("youtube")) {
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
    videoUrl,
    prototypeUrl,
    overview,
    overviewItems,
    contentImage,
    numberOfBlocksWithImage,
    contentBlocks,
    slug,
  } = project;

  return (
    <article className="py-16">
      <div className="max-w-6xl mx-auto space-y-16">
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
              <ImageLightbox
                src={image}
                alt={`${title} hero`}
                width={1280}
                height={720}
                className="w-full h-auto object-cover "
              />
            )}
          </section>
        </header>

        <Separator className="my-8 bg-slate-200 drop-shadow-lg" />
        <div className="px-4">
          {/* {(githubUrl || href) && (
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
          )} */}

          {/* Overview with optional sidebar image */}
          {(overview || (contentBlocks && contentBlocks.length > 0)) &&
          contentImage &&
          (numberOfBlocksWithImage ?? 0) > 0 ? (
            <div className="grid gap-8 lg:grid-cols-[1fr_3fr] items-stretch">
              {/* Image Sidebar */}
              <div className="hidden lg:block">
                <div className="relative w-full h-full ">
                  <ImageLightbox
                    src={contentImage}
                    alt={`${title} content`}
                    fill
                    sizes="350px"
                    className="object-contain object-top-left "
                  />
                </div>
              </div>

              {/* Content with Image */}
              <div className="space-y-8">
                {(overview || (overviewItems && overviewItems.length > 0)) && (
                  <section aria-labelledby="overview-heading">
                    <h2
                      id="overview-heading"
                      className="text-2xl font-semibold text-slate-900 mb-4"
                    >
                      Overview
                    </h2>
                    {overview && (
                      <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                        {overview}
                      </p>
                    )}
                    {overviewItems && overviewItems.length > 0 && (
                      <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 mt-6">
                        <div className="grid grid-cols-2 gap-4">
                          {overviewItems.map((item, index) => {
                            const IconComponent = getIconForLabel(item.label);
                            return (
                              <div
                                key={`overview-item-${index}`}
                                className="flex items-start gap-3"
                              >
                                {IconComponent && (
                                  <IconComponent className="w-5 h-5 flex-shrink-0 text-slate-700 mt-0.5" />
                                )}
                                <div className="min-w-0">
                                  <h3 className="text-sm font-semibold text-slate-900">
                                    {item.label}
                                  </h3>
                                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                                    {item.content}
                                  </p>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </section>
                )}
                {contentBlocks && contentBlocks.length > 0 && (
                  <div className="space-y-12">
                    {contentBlocks
                      .slice(0, numberOfBlocksWithImage)
                      .map((block, index) => (
                        <RenderContentBlock
                          key={`block-${index}`}
                          block={block}
                          index={index}
                        />
                      ))}
                  </div>
                )}
              </div>
            </div>
          ) : (
            (overview || (overviewItems && overviewItems.length > 0)) && (
              <section aria-labelledby="overview-heading">
                {overview && (
                  <>
                    <h2
                      id="overview-heading"
                      className="text-2xl font-semibold text-slate-900 mb-4"
                    >
                      Overview
                    </h2>
                    <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
                      {overview}
                    </p>
                  </>
                )}
                {overviewItems && overviewItems.length > 0 && (
                  <div className="rounded-lg border border-slate-200 bg-slate-50 p-6 mt-6">
                    <div className="grid grid-cols-2 gap-4">
                      {overviewItems.map((item, index) => {
                        const IconComponent = getIconForLabel(item.label);
                        return (
                          <div
                            key={`overview-item-${index}`}
                            className="flex items-start gap-3"
                          >
                            {IconComponent && (
                              <IconComponent className="w-5 h-5 flex-shrink-0 text-slate-700 mt-0.5" />
                            )}
                            <div className="min-w-0">
                              <h3 className="text-sm font-semibold text-slate-900">
                                {item.label}
                              </h3>
                              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                                {item.content}
                              </p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </section>
            )
          )}

          {/* Content blocks not accompained by image */}
          {contentBlocks && contentBlocks.length > 0 && (
            <div className="space-y-12">
              {contentBlocks
                .slice(numberOfBlocksWithImage ?? 0)
                .map((block, index) => (
                  <RenderContentBlock
                    key={`block-${(numberOfBlocksWithImage ?? 0) + index}`}
                    block={block}
                    index={(numberOfBlocksWithImage ?? 0) + index}
                  />
                ))}
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
