"use client";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  text?: string;
  repeat?: number;
};

export function PoliceLine({
  className,
  text = "EXPERIMENTAL ZONE   •   PROCEED  WITH COFFEE    •    ",
  repeat = 5,
}: Props) {
  text = text.replace(/ {3}/g, "\u00A0\u00A0\u00A0");

  return (
    <div
      className={cn(
        "bg-gradient-to-l from-yellow-300  to-amber-300 relative w-full 0 justify-self-center py-1",
        className
      )}
    >
      <div className="flex overflow-hidden font-bold dark:text-black bg-amber-400">
        <div className="whitespace-nowrap animate-marquee pr-0.5 align-middle">
          {Array.from({ length: repeat }, (_, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
        <div className="whitespace-nowrap animate-marquee align-middle">
          {Array.from({ length: repeat }, (_, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
