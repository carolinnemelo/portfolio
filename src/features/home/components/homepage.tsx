import { client } from "@/sanity/client";
import { PortableText } from "next-sanity";
import { Hero } from "./hero";
import { SkillsIcons } from "./skills-icons";
import { GameCard } from "@/components";
import { env } from "process";

export async function Homepage() {
  const about = await client.fetch(`
    *[_type == "about"][0]{
    title,
    highlight,  
    body
    }`);

  return (
    <main className="flex flex-col gap-8">
      <Hero />
      <SkillsIcons />
      <article className="text-center flex flex-col gap-12 px-2 md:px-16 py-6 md:py-12">
        <h2 className="text-3xl font-bold">{about.highlight}</h2>
        <div className="text-xl flex flex-col gap-4 ">
          <PortableText value={about.body} />
        </div>
      </article>
      <article
        className={`text-center flex flex-col gap-12 items-center justify-center px-4 pt-16 md:py-24`}
      >
        <h2 className="text-3xl font-bold">
          How It Feels, Not Just How It Looks
        </h2>
        <div className="flex flex-col items-center justify-center md: md:px-16 md:gap-12">
          {env.FF_HOMEPAGE_SECTION === "ON" && (
            <>
              <GameCard variant="carousel" classname="md:hidden"/>
              <GameCard classname="hidden md:flex"/>
            </>
          )}

          {/* <FoldableCard /> */}
          <p className="text-xl">
            Just playing around with different moods through design. The first
            one feels like chaos with loud colors, gritty textures, and a super
            cramped layout that kinda throws you right into the action. Then I
            tried something slower and quieter, more space, more structure, like
            everything just paused for a second. The last one is the chill
            version with soft light, cozy colors, something that feels safe and
            a little magical. Just playing with vibes and seeing how much the
            mood shifts when you tweak the visuals.
          </p>
        </div>
      </article>
    </main>
  );
}
