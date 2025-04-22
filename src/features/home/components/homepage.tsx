import { client } from "@/sanity/client";
import { PortableText } from "next-sanity";
import { FoldableCard } from "./foldable-card";
import { Hero } from "./hero";
import { SkillsIcons } from "./skills-icons";
import { CarouselDemo } from "@/components";

export async function Homepage() {
  const about = await client.fetch(`
    *[_type == "about"][0]{
    title,
    highlight,  
    body
    }`);

  return (
    <main className="flex flex-col">
      <Hero />
      <article className="flex flex-col gap-6 px-2 md:px-16 py-16 md:py-24">
        <h2 className="text-3xl font-bold">{about.highlight}</h2>
        <div className="text-xl flex flex-col gap-4">
          <PortableText value={about.body} />
        </div>
      </article>
      <SkillsIcons />
      <article className="flex flex-col gap-6 py-16 md:py-24">
        <h2 className="text-2xl font-bold text-center">
          This was born from a quick Figma study while I was imagining a game.
        </h2>
        <h3 className="text-2xl text-center">
          Three different moods shaped by design choices.
        </h3>
        <CarouselDemo />
        <article className="w-full flex flex-col items-center justify-center">
          <p className="">
            One feels urgent and post-apocalyptic, with harsh textures and bold
            contrast. Another feels dreamy, almost magical, with soft lighting
            and surreal colors. The last one is quiet and grounded. More real.
            More raw. I wanted to see how much the mood could shift, just
            through color, texture, and type. No animation. No sound. Just
            feeling.
          </p>
        </article>
        <FoldableCard />
      </article>
    </main>
  );
}
