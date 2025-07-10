import { Button } from "@/components";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

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
          <h1 className="leading-loose text-4xl md:text-6xl font-bold font-accent bg-gradient-to-r from-blue-500 from-[10%] via-pink-500 via-[30%] to-yellow-500 to-[60%] bg-clip-text text-transparent">
            {"Hi, I'm Carolinne"}
          </h1>
          <h2 className="text-2xl">
            Frontend Developer | React + Next.js | UI/UX | Clean Code | CI/CD
          </h2>
        </div>
        <p>
          My background is in architecture. Now I also design in code. I care
          about how things look and how they work. I build clean, useful
          interfaces using modern tools.
          <br />
          This site is my playground and my portfolio.
        </p>
        <Button
          size="lg"
          variant={"accent"}
          className="text-lg w-fit disabled:bg-muted disabled:text-muted-foreground"
        >
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/carolinnemelo"
            className="flex items-center gap-2"
          >
            <FaGithub/>
            Github
          </a>
        </Button>
      </div>
    </section>
  );
}
