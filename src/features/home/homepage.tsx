"use client";

import { Hero } from "./components/hero";
import { SkillsIcons } from "./components/skills-icons";

export function Homepage() {
  return (
    <main>
      <div className="md:flex md:flex-col h-screen">
        <div className="md:grow">
          <Hero />
        </div>
        <div>
          <SkillsIcons />
        </div>
      </div>
    </main>
  );
}
