"use client";

import { ResumeHeader } from "./components/resume-header";
import { ProfileSummary } from "./components/profile-summary";
import { WorkExperience } from "./components/work-experience";
import { Education } from "./components/education";
import { SkillsSection } from "./components/skills-section";
import { LanguagesSection } from "./components/languages-section";
import { InterestsSection } from "./components/interests-section";
import { DownloadButton } from "./components/download-button";

export function Resume() {
  const workExperiences = [
    {
      position: "Frontend Developer",
      company: "TribuSoft",
      period: "2023 - Present",
      summary: "Led frontend development for client projects using React, Next.js, and TypeScript. Implemented responsive designs and optimized performance for better user experience.",
      responsibilities: [
        "Built responsive interfaces using React and Next.js with TypeScript",
        "Optimized website performance and SEO through improved content structure",
        "Collaborated closely with designers to implement pixel-perfect layouts"
      ]
    },
    {
      position: "Fullstack Developer",
      company: "School of Applied Technology",
      period: "2022 - 2023",
      summary: "Developed full-stack applications using React, Node.js, and PostgreSQL. Practiced test-driven development and pair programming in an agile environment.",
      responsibilities: [
        "Created RESTful APIs with Node.js and Express",
        "Designed database schemas and implemented ORM solutions",
        "Practiced agile methodologies with daily standups and sprint planning"
      ]
    },
    {
      position: "Junior Web Developer",
      company: "Previous Company",
      period: "2020 - 2022",
      summary: "Assisted in developing and maintaining client websites using HTML, CSS, and JavaScript.",
      responsibilities: [
        "Implemented responsive designs and basic frontend functionality",
        "Collaborated with senior developers on larger projects and bug fixes",
        "Contributed to internal documentation and process improvements"
      ]
    }
  ];

  const educationItems = [
    {
      degree: "Fullstack JavaScript Development",
      institution: "School of Applied Technology",
      location: "Stockholm, Sweden",
      period: "2022",
      description: "Intensive bootcamp focused on modern JavaScript development practices, including React, Node.js, and TDD."
    },
    {
      degree: "Fullstack JavaScript Development",
      institution: "Chas Academy",
      location: "Stockholm, Sweden",
      period: "2021",
      description: "Vocational program covering web development fundamentals, including HTML/CSS, JavaScript, and basic backend development."
    },
    {
      degree: "Architecture and Urban Planning",
      institution: "University Name",
      location: "Location",
      period: "2015 - 2020",
      description: "Bachelor's degree with focus on architectural design principles, spatial thinking, and project planning."
    }
  ];

  const skillCategories = [
    {
      title: "Technical",
      skills: [
        "JavaScript/TypeScript/React",
        "Node.js/Express",
        "HTML5/CSS3/Tailwind",
        "PostgreSQL/MongoDB",
        "RESTful APIs",
        "Git/GitHub/CI/CD"
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        "Problem-solving",
        "Communication",
        "Teamwork",
        "Time management",
        "Adaptability"
      ]
    }
  ];

  const languages = [
    { name: "English", level: "Professional" },
    { name: "Portuguese", level: "Native" },
    { name: "Swedish", level: "Conversational" }
  ];

  const interests = [
    "Architecture", "Design", "Photography", "Travel", "Reading", "Hiking"
  ];

  const profileSummary = "I'm a Frontend Developer with a background in architecture, bringing a design-oriented approach to web development. With expertise in React and TypeScript, I create responsive and accessible interfaces that prioritize user experience. My architectural thinking helps me build structured, scalable applications and work effectively across the development stack. My goal is to create digital spaces that are both aesthetically pleasing and functionally robust.";

  return (
    <div className=" py-10 px-4 min-h-screen">
      <div className="max-w-5xl mx-auto bg-white shadow-md rounded-sm p-8 md:p-12">
        <ResumeHeader 
          name="CAROLINNE MELO"
          title="Frontend Developer"
        />
        
        <ProfileSummary 
          imageSrc="/carolinne.avif"
          altText="Carolinne Melo"
          summary={profileSummary}
        />
        
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Column - Work Experience & Education */}
          <div className="md:w-3/4">
            <WorkExperience experiences={workExperiences} />
            <Education educationItems={educationItems} />
          </div>
          
          {/* Right Column - Skills & Other Info */}
          <div className="md:w-1/4 border-l pl-8">
            <SkillsSection categories={skillCategories} />
            <LanguagesSection languages={languages} />
            <InterestsSection interests={interests} />
          </div>
        </div>
        
        <div className="mt-10 text-center">
          <DownloadButton 
            filePath="/carolinne-melo-resume.pdf"
            label="Download PDF Version"
          />
        </div>
      </div>
    </div>
  );
}