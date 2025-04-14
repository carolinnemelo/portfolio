import Image from "next/image";

export function Hero() {
  return (
    <section className="flex flex-col items-center justify-center gap-16 md:flex-row-reverse bg-secondary py-16 md:py-32 px-2 md:px-16">
      <Image
        src={"/carolinne.avif"}
        alt="Carolinne Melo"
        width={300}
        height={300}
        priority
        className="outline-2 outline-offset-16 rounded-full outline-background"
      />

      <div className="flex flex-col justify-center px-2 md:pt-16 gap-6 ">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold font-accent ">
            {"Hi, I'm Carolinne"}
          </h1>
          <h2 className="font-[400] text-2xl">
              I work with JavaScript, TypeScript, React, Next.js, Figma & more.
          </h2>
        </div>
        <p className="text-xl text-neutral-800 font-[300]">
          My background is in architecture. Now I also design in code. I care
          about how things look and how they work. I build clean, useful
          interfaces using modern tools.
          <br />
          This site is my playground and my portfolio.
        </p>
        {/* <Button
          size="lg"
          className="text-lg w-fit disabled:bg-muted disabled:text-muted-foreground"
          disabled
        >
          Explore My Work
        </Button> */}
      </div>
    </section>
  );
}
