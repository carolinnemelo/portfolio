import Link from "next/link";
import {
  SiJavascript,
  SiReact,
  SiAngular,
  SiVuedotjs,
  SiNodedotjs,
  SiPython,
  SiPhp,
  SiNpm,
  SiGulp,
  SiHtml5,
  SiCss3,
  SiSass,
  SiLess,
  SiDocker,
  SiExpo,
  SiFramer,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { TechSkillCard } from "./tech-skill-card";
import { FiLayout } from "react-icons/fi";

export function WhatIDoSection() {
 const skills = [
  {
    icon: <SiReact className="text-[#61DAFB] text-3xl" />,
    title: "React & Next.js",
    description:
      "Component-based UI with Next.js App Router, Server Components and static generation.",
  },
  {
    icon: <SiTypescript className="text-[#3178C6] text-3xl" />,
    title: "TypeScript",
    description:
      "Strict typing, interfaces, generics and advanced TS features for more robust code.",
  },
  {
    icon: <SiTailwindcss className="text-[#38B2AC] text-3xl" />,
    title: "Tailwind CSS v4",
    description:
      "@apply, @theme config and utility-first styling for clean, consistent layouts.",
  },
  {
    icon: <SiFramer className="text-[#0055FF] text-3xl" />,
    title: "Framer Motion",
    description:
      "Fluid animations and interactions with Motion components, useMotionValue and useTransform.",
  },
  {
    icon: <SiNodedotjs className="text-[#339933] text-3xl" />,
    title: "Node.js & Drizzle ORM",
    description:
      "Server-side logic, REST APIs, repository pattern and type-safe database access.",
  },
  {
    icon: (
      <div className="flex gap-2 items-center text-3xl">
        <SiExpo className="text-black" />
        <SiReact className="text-[#61DAFB]" />
      </div>
    ),
    title: "React Native (Expo)",
    description:
      "Offline-first mobile apps, React Query, mock backend and CI/CD integration.",
  },
  {
    icon: <FiLayout className="text-accent text-3xl" />,
    title: "UI/UX Design",
    description:
      "User-centered wireframes, prototypes and usability testing informed by my architecture background.",
  },
  {
    icon: (
      <div className="flex gap-2 text-3xl">
        <SiHtml5 className="text-[#E34F26]" />
        <SiCss3 className="text-[#1572B6]" />
      </div>
    ),
    title: "HTML & CSS",
    description:
      "Semantic markup, accessibility, responsive layouts with Flexbox & Grid.",
  },
  {
    icon: <SiDocker className="text-[#2496ED] text-3xl" />,
    title: "CI/CD & DevTools",
    description:
      "GitHub Actions, Docker, task automation and agile workflows for reliable delivery.",
  },
];

  return (
    <section className="py-16 px-2 md:px-16">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-1 h-10 bg-accent"></div>
        <h2 className="text-4xl font-bold text-slate-800">What I do</h2>
      </div>

      <p className="text-lg text-paragraph mb-12 max-w-4xl">
        I started out in interior architecture and now focus on building
        full-stack web apps that feel intuitive and polished. Below is an
        overview of my core skills and technologies. Want to learn more? Check
        out my{" "}
        <Link href="/resume" className="text-accent hover:underline">
          online resume
        </Link>{" "}
        and{" "}
        <Link href="/projects" className="text-accent hover:underline">
          project portfolio
        </Link>
        .
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
        {skills.map((skill, index) => (
          <TechSkillCard
            key={index}
            icon={skill.icon}
            title={skill.title}
            description={skill.description}
          />
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white py-3 px-6 rounded-md transition-colors"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
              clipRule="evenodd"
            />
          </svg>
          Services & Pricing
        </Link>
      </div>
    </section>
  );
}
