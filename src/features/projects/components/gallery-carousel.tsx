"use client";

import * as React from "react";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

type GalleryCarouselProps = {
  gallery: { image: string; caption?: string }[];
};

export function GalleryCarousel({ gallery }: GalleryCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full">
      <Carousel
        setApi={setApi}
        className="w-full"
        opts={{ align: "start", slidesToScroll: 1 }}
      >
        <CarouselContent>
          {gallery.map((item, index) => (
            <CarouselItem
              key={index}
              className="basis-full sm:basis-1/2 lg:basis-1/4"
            >
              <figure className="space-y-4">
                {item.image && (
                  <button
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className="flex items-center justify-center bg-slate-50 rounded-xl overflow-hidden w-full"
                    aria-label={`Open image ${index + 1}`}
                  >
                    <Image
                      src={item.image}
                      alt={item.caption || `Gallery image ${index + 1}`}
                      width={1280}
                      height={720}
                      className="w-full h-auto object-contain md:max-h-[500px]"
                    />
                  </button>
                )}
                {item.caption && (
                  <figcaption className="text-sm text-slate-600 text-center">
                    {item.caption}
                  </figcaption>
                )}
              </figure>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      {count > 1 && (
        <div className="mt-4 flex items-center justify-center gap-2 sm:hidden">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => api?.scrollTo(index)}
              className={`h-2 w-2 rounded-full transition-colors ${
                index === current - 1 ? "bg-slate-900" : "bg-slate-300"
              }`}
            />
          ))}
        </div>
      )}

      {activeIndex !== null && gallery[activeIndex]?.image && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              className="absolute -top-12 right-0 text-white text-sm"
            >
              Close
            </button>
            <Image
              src={gallery[activeIndex].image}
              alt={gallery[activeIndex].caption || "Gallery image"}
              width={1600}
              height={900}
              className="w-full h-auto object-contain max-h-[85vh]"
            />
            {gallery[activeIndex].caption && (
              <p className="mt-4 text-center text-sm text-slate-200">
                {gallery[activeIndex].caption}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
