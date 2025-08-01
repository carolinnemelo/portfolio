"use client";

import { ProfileIntro } from "./components/profile-intro";
import { WhatIDoSection } from "./components/what-i-do-section";

export function About() {
  return (
    <section className="bg-white min-h-screen">
      <ProfileIntro 
        name="Carolinne Melo"
        title="Frontend Developer"
        description="I'm a software engineer specialized in frontend and backend development for modern web applications. I combine my background in architecture with technical skills to create thoughtful digital experiences that balance form and function. Want to know how I may help your project? Check out my projects and resume."
        imageSrc="/tablet.jpeg"
        portfolioUrl="/projects"
        resumeUrl="/resume"
      />
      
      <WhatIDoSection />
      
    </section>
  );
}