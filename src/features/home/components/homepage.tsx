import { client } from "@/sanity/client";
import { PortableText } from "next-sanity";
import { FoldableCard } from "./foldable-card";
import { Hero } from "./hero";
import { SkillsIcons } from "./skills-icons";

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
        <FoldableCard />
      </article>

    </main>
  );
}
