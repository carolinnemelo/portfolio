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
        "relative w-full bg-muted justify-self-center py-1",
        className
      )}
    >
      <div className="flex overflow-hidden font-bold dark:text-black "> 
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
