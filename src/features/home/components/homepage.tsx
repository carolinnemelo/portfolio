import { FoldableCard } from "./foldable-card";
import { Hero } from "./hero";
import { SkillsIcons } from "./skills-icons";

export function Homepage() {
  return (
    <main className="flex flex-col gap-6 pb-32">
      <Hero />
      <SkillsIcons />
      <article className="flex flex-col gap-6 py-24">
      <h2 className="text-2xl font-bold text-center">This was born from a quick Figma study while I was imagining a game.</h2>
      <FoldableCard />
      </article>
    </main>
  );
}
