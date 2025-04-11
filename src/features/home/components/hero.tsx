import { Button } from "@/components";
import Image from "next/image";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-16 md:flex-row-reverse bg-secondary/50 py-16 md:py-32">
      <Image
        src={"/carolinne.avif"}
        alt="Carolinne Melo"
        width={300}
        height={300}
        priority
        className="outline-2 outline-offset-16 rounded-full outline-background"
      />

      <div className="flex flex-col justify-center px-4 gap-6 w-[60%]">
        <h1 className="text-4xl md:text-6xl font-bold font-accent ">
          {"Hi, I'm Carolinne"}
        </h1>
        <h2 className="font-[300] text-xl">
          JavaScript, TypeScript, React, Next.js & more.
        </h2>
        <p className="text-lg text-neutral-800">
          I see code as the means to an end, the way I bring ideas to life.
          My style is constantly changing.
          <br />
          <br />
          This site is my playground and my portfolio.
        </p>
        <Button
          size="lg"
          className="text-lg w-fit disabled:bg-muted disabled:text-muted-foreground"
          disabled
        >
          Explore My Work
        </Button>
      </div>
    </section>
  );
}
