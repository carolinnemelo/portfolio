import { BuildingPage } from "./building-page";
import { Hero } from "./hero";
import { SkillsIcons } from "./skills-icons";

export function Homepage() {
  return process.env.FF_HOMEPAGE === "ON" ? (
    <main className="flex flex-col gap-6">
      <Hero />
      <SkillsIcons />
    </main>
  ) : (
    <BuildingPage />
  );
}
