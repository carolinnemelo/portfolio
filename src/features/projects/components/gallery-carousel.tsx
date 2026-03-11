"use client";

import * as React from "react";
import Image from "next/image";
import { X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";
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
  const [scale, setScale] = React.useState(1);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.5, 1));
  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleClose = () => {
    setActiveIndex(null);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.stopPropagation();

    if (scale > 1) {
      setPosition((prev) => ({
        x: prev.x - e.deltaX,
        y: prev.y - e.deltaY,
      }));
    }
  };

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

  // Prevent body scroll when overlay is open
  React.useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [activeIndex]);

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
        <CarouselPrevious className="hidden sm:inline-flex" />
        <CarouselNext className="hidden sm:inline-flex" />
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 overflow-hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onClick={handleClose}
          onWheel={handleWheel}
        >
          {/* Controls */}
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <button
              type="button"
              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handleZoomIn();
              }}
              aria-label="Zoom in"
            >
              <ZoomIn className="size-5" />
            </button>
            <button
              type="button"
              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handleZoomOut();
              }}
              aria-label="Zoom out"
            >
              <ZoomOut className="size-5" />
            </button>
            <button
              type="button"
              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              onClick={(e) => {
                e.stopPropagation();
                handleReset();
              }}
              aria-label="Reset zoom"
            >
              <RotateCcw className="size-5" />
            </button>
            <button
              type="button"
              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              onClick={handleClose}
              aria-label="Close"
            >
              <X className="size-5" />
            </button>
          </div>

          {/* Image Container */}
          <div
            className="relative w-full h-full flex items-center justify-center p-4"
            onClick={(event) => event.stopPropagation()}
          >
            <div
              style={{
                transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                transition: "transform 0.1s ease-out",
              }}
              className="flex items-center justify-center flex-col"
            >
              <Image
                src={gallery[activeIndex].image}
                alt={gallery[activeIndex].caption || "Gallery image"}
                width={1600}
                height={900}
                className="max-w-full max-h-[90vh] object-contain"
              />
              {gallery[activeIndex].caption && (
                <p className="mt-4 text-center text-sm text-slate-200">
                  {gallery[activeIndex].caption}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
