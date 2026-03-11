"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function ProjectFooter() {
  return (
    <footer className="pt-8 border-t">
      <Link
        href="/projects"
        className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Back to projects
      </Link>
    </footer>
  );
}
