"use client";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  text?: string;
  repeat?: number;
};

export function PoliceLine({
  className,
  text = "EXPERIMENTAL ZONE • PROCEED  WITH COFFEE • ",
  repeat = 5,
}: Props) {
  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-yellow-300 dark:bg-yellow-300 justify-self-center py-1",
        className
      )}
    >
      <div className="flex overflow-hidden font-bold dark:text-black">
        <div className="whitespace-nowrap animate-marquee pr-0.5">
          {Array.from({ length: repeat }, (_, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
        <div className="whitespace-nowrap animate-marquee">
          {Array.from({ length: repeat }, (_, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
