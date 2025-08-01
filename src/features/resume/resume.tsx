"use client";

import { ResumeHeader } from "./components/resume-header";
import { ProfileSummary } from "./components/profile-summary";
import { WorkExperience } from "./components/work-experience";
import { Education } from "./components/education";
import { SkillsSection } from "./components/skills-section";
import { LanguagesSection } from "./components/languages-section";
import { InterestsSection } from "./components/interests-section";
import { Button } from "@/components";
import Link from "next/link";

export function Resume() {

const workExperiences = [
  {
    position: "Frontend & Content Developer",
    company: "TribuSoft",
    period: "April 2025 to Present",
    summary:
      "I build and update websites using WordPress, create responsive pages and publish content optimized for clarity and SEO. I collaborate with designers and project leads to align layout and messaging.",
    responsibilities: []
  },
  {
    position: "Fullstack Developer",
    company: "SALT",
    period: "February 2025 to June 2025",
    summary:
      "I worked across the stack with React, TypeScript, Node.js and Next.js using the App Router and Server Components. I improved component consistency, adapted backend data with Drizzle to match UI needs and contributed in agile sprints with frequent pair programming.",
    responsibilities: []
  },
  {
    position: "Barista",
    company: "Brod & Salt Bageri AB",
    period: "March 2023 to April 2024",
    summary:
      "I adapted quickly to customer-facing work, took initiative and handled responsibilities usually given to experienced staff.",
    responsibilities: []
  },
  {
    position: "Architect",
    company: "Sahlin Inredningsarkitekter",
    period: "January 2022 to June 2023",
    summary:
      "I designed interiors for homes and commercial spaces with a focus on layout, flow and usability, keeping visual details aligned with client needs and constraints.",
    responsibilities: []
  },
  {
    position: "BIM Intern",
    company: "SAM Konsult",
    period: "June 2021 to August 2021",
    summary:
      "I modeled a preschool in Revit from 2D plans and delivered the full 3D structure with technical documentation.",
    responsibilities: []
  }
];

const educationItems = [
  {
    degree: "Fullstack JavaScript",
    institution: "SALT",
    location: "Stockholm, Sweden",
    period: "September 2024 to January 2025",
    description:
      "Full time program focused on TypeScript, Next.js with App Router and Server Components, Express and TDD. Agile sprints with daily standups, pair programming and production ready delivery."
  },
  {
    degree: "Fullstack JavaScript",
    institution: "Chas Academy – Yrkeshögskola",
    location: "Stockholm, Sweden",
    period: "August 2023 to August 2024",
    description:
      "Vocational program in modern web development covering JavaScript fundamentals, REST APIs, databases, version control and team based projects with tools like Axios, Next.js and Vite."
  },
  {
    degree: "Bachelor of Architecture",
    institution: "UFPA, Brazil",
    location: "Belém, Brazil",
    period: "March 2012 to December 2017",
    description:
      "Training in structured thinking, design systems, spatial logic and user focused solutions."
  }
];

const skillCategories = [
  {
    title: "Technical",
    skills: [
      "TypeScript and JavaScript",
      "React and Next.js",
      "Tailwind CSS",
      "Figma and Framer Motion",
      "Node.js and Express",
      "Drizzle ORM and PostgreSQL",
      "REST APIs",
      "CI/CD and GitHub Actions",
      "TDD, Agile and Pair Programming",
      "Feature Flags",
      "Docker",
      "React Native"
    ]
  },
  {
    title: "Soft Skills",
    skills: [
      "Curiosity and continuous learning",
      "Problem solving",
      "Collaboration and empathy",
      "Time management",
      "Adaptability"
    ]
  }
];

const languages = [
  "English",
  "Portuguese",
  "Swedish"
];

const interests = [
  "UI and UX Design",
  "Web Design",
  "Design Systems",
  "Accessibility",
  "Mobile Development",
  "Data Visualization",
  "Photography",
  "Cooking",
  "Hiking",
  "Travel",
  "Reading"
];

const profileSummary =
  "I am a frontend focused fullstack developer. I build responsive and user friendly web apps with TypeScript, React, Next.js and Tailwind CSS. I like clean, reusable code and fast feedback. I enjoy working in agile teams to ship interfaces that feel intuitive and polished.";


  return (
    <div className="py-16 md:px-4 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-md md:rounded-sm p-8 md:p-12">
        <ResumeHeader name="CAROLINNE MELO" title="Frontend Developer" />

        <ProfileSummary
          imageSrc="/carolinne.avif"
          altText="Carolinne Melo"
          summary={profileSummary}
        />

        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-3/4">
            <WorkExperience experiences={workExperiences} />
            <Education educationItems={educationItems} />
          </div>

          <div className="md:w-1/4 md:border-l md:pl-8 ">
            <SkillsSection categories={skillCategories} />
            <LanguagesSection languages={languages} />
            <InterestsSection interests={interests} />
          </div>
        </div>

        <div className="mt-10 text-center">
          <Button variant={"accent"}>
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}