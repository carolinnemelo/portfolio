"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { ImageLightbox } from "./image-lightbox";

type ProjectHeaderProps = {
  title: string;
  description?: string;
  image?: string;
  tags?: string[];
};

export function ProjectHeader({
  title,
  description,
  image,
  tags,
}: ProjectHeaderProps) {
  return (
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

      <section className="space-y-6">
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
            loading="eager"
            className="w-full h-auto object-cover"
          />
        )}
      </section>
    </header>
  );
}
