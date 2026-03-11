"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { ImageLightbox } from "./image-lightbox";

type ProjectImageSidebarProps = {
  src: string;
  alt: string;
};

export function ProjectImageSidebar({ src, alt }: ProjectImageSidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      <div className="lg:hidden">
        <div className="relative overflow-hidden border border-slate-200 bg-slate-100">
          {isExpanded ? (
            <ImageLightbox
              src={src}
              alt={alt}
              width={800}
              height={1400}
              className="w-full h-auto object-contain"
            />
          ) : (
            <div className="relative h-130 w-full">
              <ImageLightbox
                src={src}
                alt={alt}
                fill
                sizes="100vw"
                className="object-cover object-top"
              />
            </div>
          )}

          <div
            className="absolute inset-x-0 bottom-0 px-4 py-6 backdrop-blur-md bg-primary/35 [background-blend-mode:multiply]"
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              setIsExpanded((prev) => !prev);
            }}
            role="button"
            tabIndex={0}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                setIsExpanded((prev) => !prev);
              }
            }}
            aria-expanded={isExpanded}
          >
            <div className="flex w-full items-center justify-center gap-2 text-base font-semibold capitalize tracking-wide text-white">
              {isExpanded ? "Show Less" : "View Full Image"}
              <ChevronDown
                className={`size-4 transition-transform ${isExpanded ? "rotate-180" : "rotate-0"}`}
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block">
        <div className="relative w-full h-full">
          <ImageLightbox
            src={src}
            alt={alt}
            fill
            sizes="350px"
            className="object-cover object-top"
          />
        </div>
      </div>
    </>
  );
}
