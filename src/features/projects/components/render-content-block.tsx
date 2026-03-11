import type {
  ContentBlock,
  CardSectionBlock,
  GalleryBlock,
  ProjectCardItem,
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
  const renderCardValue = (item: ProjectCardItem) => {
    if (item.icon?.trim()) {
      return <span className="text-3xl leading-none">{item.icon}</span>;
    }

    if (item.number?.trim()) {
      return (
        <span className="text-5xl font-bold text-slate-400">{item.number}</span>
      );
    }

    return null;
  };

  return (
    <section key={`card-section-${index}`} className="space-y-4">
      <h3 className="text-2xl font-semibold text-slate-900">{block.title}</h3>
      <div className="grid gap-4 grid-cols-[repeat(auto-fit,minmax(220px,1fr))] items-stretch">
        {block.items?.map((item, itemIndex) => (
          <div
            key={`${block.title}-${itemIndex}`}
            className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-700 shadow-sm min-h-32 h-full flex flex-col gap-5"
          >
            {renderCardValue(item)}
            {item.title && (
              <h4 className="text-base font-bold text-slate-800 leading-snug">
                {item.title}
              </h4>
            )}
            <p className="text-lg">{item.content}</p>
            {item.footer && (
              <p className="text-sm text-slate-400 mt-auto pt-1">
                {item.footer}
              </p>
            )}
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
  const renderPortableText = () => {
    if (typeof block.body === "string") {
      return <p className="text-slate-700 whitespace-pre-wrap">{block.body}</p>;
    }

    return (
      <div className="space-y-3">
        {block.body.map((portableBlock, itemIndex) => {
          if (portableBlock?._type !== "block") {
            return null;
          }

          const text = (portableBlock.children ?? [])
            .filter((child) => child?._type === "span")
            .map((child) => child.text ?? "")
            .join("")
            .trim();

          if (!text) {
            return null;
          }

          if (portableBlock.style === "blockquote") {
            return (
              <blockquote
                key={itemIndex}
                className="border-l-4 border-slate-400 pl-4 py-4 text-slate-600 italic text-xl bg-slate-200"
              >
                {text}
              </blockquote>
            );
          }

          if (portableBlock.style === "h3") {
            return (
              <h3
                key={itemIndex}
                className="text-xl font-semibold text-slate-900"
              >
                {text}
              </h3>
            );
          }

          if (portableBlock.style === "h4") {
            return (
              <h4
                key={itemIndex}
                className="text-lg font-semibold text-slate-800"
              >
                {text}
              </h4>
            );
          }

          return (
            <p key={itemIndex} className="text-slate-700 whitespace-pre-wrap">
              {text}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <section key={`text-${index}`} className="space-y-3">
      <h2 className="text-2xl font-semibold text-slate-900">{block.title}</h2>
      {renderPortableText()}
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
