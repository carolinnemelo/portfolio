"use client";

import { ProfileIntro } from "./components/profile-intro";
import { WhatIDoSection } from "./components/what-i-do-section";

export function About() {
  return (
    <section className="bg-white min-h-screen">
      <ProfileIntro
        name="Carolinne Melo"
        title="— Fullstack Developer"
        description={
          "I enjoy creating web apps that feel clear and easy to use. Here you can explore some of my projects and learn more about my journey."
        }
        portfolioUrl="/projects"
        resumeUrl="/resume"
      />

      <WhatIDoSection />
    </section>
  );
}