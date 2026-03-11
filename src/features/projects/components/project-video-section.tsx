"use client";

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

type ProjectVideoSectionProps = {
  videoUrl: string;
  title: string;
};

export function ProjectVideoSection({
  videoUrl,
  title,
}: ProjectVideoSectionProps) {
  return (
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
  );
}
