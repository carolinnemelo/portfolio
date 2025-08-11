import Link from "next/link";
import {
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
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
      "Built fullstack apps with App Router, Server Components, and static generation. Used feature flags and vertical slice architecture for scalable development.",
  },
  {
    icon: <SiTypescript className="text-[#3178C6] text-3xl" />,
    title: "TypeScript",
    description:
      "Write components and backend code with TypeScript, using type annotations and interfaces to catch errors early and keep code easier to maintain.",
  },
  {
    icon: <SiTailwindcss className="text-[#38B2AC] text-3xl" />,
    title: "Tailwind CSS v4",
    description:
      "I style projects with Tailwind CSS v4, using @apply and @theme for consistent layouts. I focus on keeping the design clean, responsive, and easy to adjust for different screen sizes.",
  },
  {
    icon: <SiFramer className="text-[#0055FF] text-3xl" />,
    title: "Framer Motion",
    description:
      "I’m exploring Framer Motion to create smooth animations and simple interactions in React projects. I’ve tried motion components, useMotionValue, and useTransform to add effects that react to user actions.",
  },
  {
    icon: <SiNodedotjs className="text-[#339933] text-3xl" />,
    title: "Node.js & Drizzle ORM",
    description:
      "With Node.js, I have built simple REST APIs, organized the code using the repository pattern, and written basic tests with Node’s built-in test runner. I’ve also started working with Drizzle ORM to access databases in a type-safe way.",
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
      "Explored mobile development with Expo and React Native, creating small prototypes to learn about layouts, navigation, and data fetching. Experimented with Supabase for backend services.",
  },
  {
    icon: <FiLayout className="text-accent text-3xl" />,
    title: "UI/UX Design",
    description:
      "Worked on layouts and prototypes with a focus on clear structure and easy navigation. Used balance, contrast, and spacing to make the interface more usable.",
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
      "Write semantic HTML and maintainable CSS, focusing on accessibility, clean structure, and responsive design. Use clear class naming conventions like BEM to keep styles consistent and easy to manage.",
  },
  {
    icon: <SiDocker className="text-[#2496ED] text-3xl" />,
    title: "CI/CD & DevTools",
    description:
      "Set up GitHub Actions to automate builds and deployments in personal projects. Used Docker to create consistent development environments.",
  },
];

return (
  <section className="py-16 px-2 md:px-16">
    <div className="flex items-center gap-4 mb-8">
      <div className="w-1 h-10 bg-accent"></div>
      <h2 className="text-4xl font-bold text-slate-800">What I do</h2>
    </div>

    <p className="text-lg text-paragraph mb-16 max-w-7xl">
      I like creating web apps that are easy to follow and pleasant to use. My
      background in architecture makes me think about structure, balance, and
      how people move through spaces, both physical and digital. When I design a
      layout, I also think about how to build it, choosing the right tools,
      keeping the code clean, and making sure the experience works well on
      different devices. I focus on how elements relate to each other, how
      contrast can guide attention, and how white space gives clarity and
      breathing room. These details help people understand and use a product
      without having to think about it. If you want to know more about my work,
      check out my{" "}
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
  </section>
);
}
