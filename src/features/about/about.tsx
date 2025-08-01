"use client";

import { ProfileIntro } from "./components/profile-intro";
import { WhatIDoSection } from "./components/what-i-do-section";

export function About() {
  return (
    <section className="bg-white min-h-screen">
      <ProfileIntro
        name="Carolinne Melo"
        title="Fullstack Web Developer"
        description={
          "I’m a naturally curious problem-solver who loves turning ideas into polished web experiences. I’m detail-oriented, thrive on collaboration, and enjoy crafting interfaces that feel intuitive and human. Always eager to learn and adapt, I bring energy and empathy to every project. Want to see how I work? Check out my projects and resume."
        }
        imageSrc="/tablet.jpeg"
        portfolioUrl="/projects"
        resumeUrl="/resume"
      />

      <WhatIDoSection />
    </section>
  );
}