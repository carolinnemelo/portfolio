import { FoldableCard } from "./foldable-card";
import { Hero } from "./hero";
import { SkillsIcons } from "./skills-icons";

export function Homepage() {
  return (
    <main className="flex flex-col gap-6 py-32">
      <Hero />
      <SkillsIcons />
      <FoldableCard />
    </main>
  );
}
