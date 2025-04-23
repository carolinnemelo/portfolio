import { cn } from "@/lib/utils";
import { Card, CardContent } from "./ui";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const carouselImages = [
  {
    src: "/game/red.avif",
    title: "Feels like survival",
    text: `
          Strong contrast and aggressive texture create immediate visual tension.
          The layout uses density and low visual breathing space to communicate risk.
          It’s designed to feel reactive — like you’ve landed in the middle of action.
        `,
    alt: "red",
    bgColor: "bg-red-800",
  },
  {
    src: "/game/city.avif",
    title: "The world isn’t loud anymore",
    text: `
          The noise is gone. What’s left is structure, shadow, and silence.
          The layout slows everything down, centered, steady, deliberate.
          It’s not calm. It’s caution.
        `,
    alt: "city",
    bgColor: "bg-slate-800",
  },
  {
    src: "/game/blue.avif",
    title: "A gentle world, full of color",
    text: `
          Earlier concepts felt intense and overwhelming. This version was created to feel welcoming. 
          Saturated blues and greens bring the forest to life.
          The scene was designed to feel magical and safe.
        `,
    alt: "blue",
    bgColor: "bg-sky-950",
  },
];

type Props = {
  items?: {
    src: string;
    title: string;
    text: string;
    alt: string;
    bgColor: string;
  }[];
};

export function GameCard({ items = carouselImages }: Props) {
  return (
    <Card
      className={cn(
        "border-0 shadow-none rounded-none max-w-xs bg-transparent text-center prose p-0"
      )}
    >
      <CardContent>
        <Carousel>
          <CarouselContent>
            {items.map((item) => (
              <CarouselItem
                key={item.src}
                className="flex items-center justify-center"
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={250}
                  height={500}
                  className="rounded-2xl md:max-w-3xs"
                  loading="lazy"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselNext />
          <CarouselPrevious />
        </Carousel>
   
      </CardContent>
    </Card>
  );
}
