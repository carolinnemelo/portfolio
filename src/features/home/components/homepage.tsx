import { client } from "@/sanity/client";
import { PortableText } from "next-sanity";
import { Hero } from "./hero";
import { SkillsIcons } from "./skills-icons";
import { GameCard } from "@/components";

export async function Homepage() {
  const about = await client.fetch(`
    *[_type == "about"][0]{
    title,
    highlight,  
    body
    }`);

  return (
    <main className="bg-teal-200 h-7 ">
      <Hero />
      <SkillsIcons />
      <article className="text-center flex flex-col gap-12 px-2 md:px-16 py-6 md:py-12">
        <h2 className="text-3xl font-bold">{about.highlight}</h2>
        <div className="text-xl flex flex-col gap-4 ">
          <PortableText value={about.body} />
        </div>
      </article>
      <article
        className={`text-center flex flex-col gap-12 items-center justify-center px-4 pt-16 md:py-24 md:px-16 bg-secondary`}
      >
        <h2 className="text-3xl font-bold">
          How It Feels, Not Just How It Looks
        </h2>
        <div className="flex flex-col items-center justify-center md:gap-12">
              <GameCard variant="carousel" classname="md:hidden" />
              <GameCard classname="hidden md:flex" />

          <p className="text-xl">
            I designed three versions of the same screen to explore how layout,
            color, and texture shift the emotional tone without changing a
            single word of content.
          </p>

          <p className="text-xl">
            The first one feels like chaos with loud colors, gritty textures,
            and a super cramped layout that kinda throws you right into the
            action. Then I tried something slower and quieter, more space, more
            structure, like everything just paused for a second. The last one is
            the chill version with soft light, cozy colors, something that feels
            safe and a little magical.
          </p>
          <p className="text-xl font-bold">
            This experiment is about how visuals tell a story, even when the
            words don’t change.
          </p>
        </div>
      </article>
    </main>
  );
}
