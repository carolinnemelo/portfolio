"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn, ZoomOut, RotateCcw } from "lucide-react";

interface ImageLightboxProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
  loading?: "lazy" | "eager";
  className?: string;
}

export function ImageLightbox({
  src,
  alt,
  width,
  height,
  fill,
  sizes,
  loading,
  className,
}: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleZoomIn = () => setScale((prev) => Math.min(prev + 0.5, 3));
  const handleZoomOut = () => setScale((prev) => Math.max(prev - 0.5, 1));
  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleClose = () => {
    setIsOpen(false);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.stopPropagation();

    if (scale > 1) {
      // Pan when zoomed
      setPosition((prev) => ({
        x: prev.x - e.deltaX,
        y: prev.y - e.deltaY,
      }));
    }
  };

  // Prevent body scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <>
      {/* Clickable Image */}
      <div
        className={`cursor-pointer ${fill ? "relative w-full h-full" : ""}`}
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsOpen(true);
          }
        }}
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes}
            loading={loading}
            className={className}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={width || 1280}
            height={height || 720}
            loading={loading}
            className={className}
          />
        )}
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 overflow-hidden"
          onClick={handleClose}
          onWheel={handleWheel}
        >
          {/* Controls */}
          <div className="absolute top-4 right-4 flex gap-2 z-10">
            <button
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
            onClick={(e) => e.stopPropagation()}
          >
            <div
              style={{
                transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                transition: "transform 0.1s ease-out",
              }}
              className="flex items-center justify-center"
            >
              <Image
                src={src}
                alt={alt}
                width={1600}
                height={900}
                className="max-w-full max-h-[90vh] object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
