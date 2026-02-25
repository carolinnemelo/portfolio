import Image from "next/image";
import type {
  ContentBlock,
  CardSectionBlock,
  GalleryBlock,
  TextBlockElement,
  VideoBlock,
} from "../types/content-blocks";
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

interface RenderBlockProps {
  block: ContentBlock;
  index: number;
}

export function RenderContentBlock({ block, index }: RenderBlockProps) {
  switch (block._type) {
    case "cardSection":
      return <CardSectionBlockComponent block={block} index={index} />;
    case "gallery":
      return <GalleryBlockComponent block={block} index={index} />;
    case "textBlock":
      return <TextBlockComponent block={block} index={index} />;
    case "video":
      return <VideoBlockComponent block={block} index={index} />;
    default:
      return null;
  }
}

function CardSectionBlockComponent({
  block,
  index,
}: {
  block: CardSectionBlock;
  index: number;
}) {
  return (
    <section key={`card-section-${index}`} className="space-y-4 py-8">
      <h3 className="text-2xl font-semibold text-slate-900">{block.title}</h3>
      <div className="grid gap-4 md:grid-cols-3">
        {block.items?.map((item, itemIndex) => (
          <div
            key={`${block.title}-${itemIndex}`}
            className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 shadow-sm"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}

function GalleryBlockComponent({
  block,
  index,
}: {
  block: GalleryBlock;
  index: number;
}) {
  if (!block.gallery || block.gallery.length === 0) return null;

  return (
    <section key={`gallery-${index}`} className="space-y-4 py-8">
      <h2 className="text-2xl font-semibold text-slate-900">Gallery</h2>
      <GalleryCarousel gallery={block.gallery} />
    </section>
  );
}

function TextBlockComponent({
  block,
  index,
}: {
  block: TextBlockElement;
  index: number;
}) {
  return (
    <section key={`text-${index}`} className="space-y-4 py-8">
      <h2 className="text-2xl font-semibold text-slate-900">{block.title}</h2>
      <p className="text-slate-700 leading-relaxed whitespace-pre-wrap">
        {block.body}
      </p>
    </section>
  );
}

function VideoBlockComponent({
  block,
  index,
}: {
  block: VideoBlock;
  index: number;
}) {
  return (
    <section key={`video-${index}`} className="space-y-4 py-8">
      <h2 className="text-2xl font-semibold text-slate-900">{block.title}</h2>
      <div className="aspect-video w-full overflow-hidden rounded-xl border bg-slate-950">
        <iframe
          src={getEmbedUrl(block.videoUrl)}
          title={block.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
