"use client";

import { Hero } from "./components/hero";
import { SkillsIcons } from "./components/skills-icons";
import { GameCard } from "@/components";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import {
  FaReact,
  FaServer,
  FaLaptopCode,
  FaTools,
  FaGraduationCap,
} from "react-icons/fa";
import { FiLayout } from "react-icons/fi";
import { FeatureCard } from "@/components/feature-card";

export function Homepage() {
  const features = [
    {
      icon: <FaReact className="text-3xl" />,
      title: "Frontend Development",
      description:
        "React, Next.js, and TypeScript with a focus on performance and accessibility.",
    },
    {
      icon: <FaServer className="text-3xl" />,
      title: "Backend Development",
      description:
        "Node.js, Express, and PostgreSQL for reliable APIs and database architectures.",
    },
    {
      icon: <FiLayout className="text-3xl" />,
      title: "UI/UX Design",
      description:
        "Creating interfaces that balance visual appeal with intuitive functionality.",
    },
    {
      icon: <FaLaptopCode className="text-3xl" />,
      title: "Responsive Development",
      description:
        "Building applications that work seamlessly on all devices and screen sizes.",
    },
    {
      icon: <FaTools className="text-3xl" />,
      title: "Development Practices",
      description:
        "Agile methodologies, TDD, CI/CD pipelines and clean code architecture.",
    },
    {
      icon: <FaGraduationCap className="text-3xl" />,
      title: "Continuous Learning",
      description:
        "Constantly improving skills and staying current with best practices.",
    },
  ];

  return (
    <main>
      <Hero />
      <SkillsIcons />

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
          What I Do
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </section>

      <section className="bg-secondary lg:bg-white px-2 md:p-0 py-16">
        <div className="lg:bg-secondary gap-10 md:py-0 md:px-16 lg:pl-16 flex flex-col lg:flex-row-reverse justify-center ">
          <Image
            src={"/game/screen.avif"}
            alt={"blue45"}
            width={500}
            height={500}
            className="hidden lg:block object-cover"
            loading="lazy"
          />
          <Image
            src={"/game/mobile.avif"}
            alt={"blue45"}
            width={700}
            height={700}
            className="lg:hidden"
            loading="lazy"
          />

          <div className="flex flex-col gap-10 lg:w-[60%] justify-center">
            <div className="flex flex-col gap-4">
              <p className="leading-snug text-2xl">UI Concept:</p>
              <h2 className="leading-14 text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">
                Nature & Magic Game Master
              </h2>
            </div>
            <ul className="flex flex-col gap-8">
              <li className="text-paragraph text-xl">
                <ArrowRight className="text-green-500 inline mr-2" />
                Built a fantasy game UI in Figma with reusable components and
                structured layout.
              </li>
              <li className="text-paragraph text-xl">
                <ArrowRight className="text-green-500 inline mr-2" />
                Applied visual hierarchy principles using contrast, scale and
                spacing.
              </li>
              <li className="text-paragraph text-xl">
                <ArrowRight className="text-green-500 inline mr-2" />
                Designed flows for onboarding, interaction and narrative events.
              </li>
              <li className="text-paragraph text-xl">
                <ArrowRight className="text-green-500 inline mr-2" />
                Balanced magical aesthetics with functional clarity.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="text-center flex flex-col gap-12 items-center justify-center px-4 pt-16 md:py-24 md:px-16">
        <h2 className="text-3xl font-bold">Same game, different feelings </h2>
        <div className="flex flex-col items-center justify-center md:gap-12">
          <GameCard variant="carousel" classname="md:hidden" />
          <GameCard classname="hidden md:flex" />
        </div>
      </section>
    </main>
  );
}
