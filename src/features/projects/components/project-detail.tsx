"use client";

import type { ProjectDetail } from "@/features/projects/data/get-project-by-slug";
import { Separator } from "@/components/ui/separator";
import { RenderContentBlock } from "./render-content-block";
import { ProjectHeader } from "./project-header";
import { ProjectOverview } from "./project-overview";
import { ProjectImageSidebar } from "./project-image-sidebar";
import { ProjectVideoSection } from "./project-video-section";
import { ProjectFooter } from "./project-footer";

type ProjectDetailProps = {
  project: ProjectDetail;
};

export function ProjectDetail({ project }: ProjectDetailProps) {
  const {
    title,
    description,
    image,
    tags,
    overview,
    overviewItems,
    contentImage,
    numberOfBlocksWithImage,
    contentBlocks,
    videoUrl,
  } = project;

  const hasOverview = overview || (overviewItems && overviewItems.length > 0);
  const hasImageSidebar = contentImage && (numberOfBlocksWithImage ?? 0) > 0;
  const hasInitialBlocks = contentBlocks && contentBlocks.length > 0;
  const hasRemainingBlocks =
    hasInitialBlocks && contentBlocks.length > (numberOfBlocksWithImage ?? 0);

  return (
    <article className="py-16">
      <div className="max-w-6xl mx-auto space-y-16">
        <ProjectHeader
          title={title}
          description={description}
          image={image}
          tags={tags}
        />

        <Separator className="my-8 bg-slate-200 drop-shadow-lg" />

        <div className="px-4 space-y-12">
          {/* Overview with optional sidebar image */}
          {hasOverview && hasImageSidebar ? (
            <div className="grid gap-8 lg:grid-cols-[1fr_3fr] items-stretch">
              <ProjectImageSidebar
                src={contentImage}
                alt={`${title} content`}
              />
              <div className=" ">
                <ProjectOverview
                  overview={overview}
                  overviewItems={overviewItems}
                />
                {hasInitialBlocks && (
                  <div className=" space-y-8 py-4">
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
            hasOverview && (
              <ProjectOverview
                overview={overview}
                overviewItems={overviewItems}
              />
            )
          )}

          {/* Content blocks not accompanied by image */}
          {hasRemainingBlocks && (
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

          {/* Video Section */}
          {videoUrl && (
            <ProjectVideoSection videoUrl={videoUrl} title={title} />
          )}
        </div>

        <ProjectFooter />
      </div>
    </article>
  );
}
