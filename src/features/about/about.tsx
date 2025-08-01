"use client";

import { 
  FaCode, 
  FaReact, 
  FaServer, 
  FaTools,
  FaGraduationCap,
} from "react-icons/fa";
import { FiLayout } from "react-icons/fi";
import { SkillCard } from "./components/skill-card";
import { ExperienceCard } from "./components/experience-card";
import { EducationCard } from "./components/education-card";
import { CTACard } from "./components/cta-card";
import { SectionHeading } from "./components/section-heading";

export function About() {
  const skills = [
    {
      icon: <FaReact />,
      title: "Frontend Development",
      items: [
        "React, Next.js, TypeScript",
        "TanStack Query, Zustand, Redux",
        "Tailwind CSS, Styled Components"
      ],
      iconBgColor: "bg-blue-500/10",
      iconColor: "text-blue-500",
      gradientFrom: "blue-500",
      gradientTo: "cyan-400"
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      items: [
        "Node.js, Express, REST APIs",
        "PostgreSQL, Drizzle ORM",
        "API Authentication & Authorization"
      ],
      iconBgColor: "bg-purple-500/10",
      iconColor: "text-purple-500",
      gradientFrom: "purple-500",
      gradientTo: "violet-400"
    },
    {
      icon: <FiLayout />,
      title: "UI/UX & Design",
      items: [
        "Responsive Design Principles",
        "Accessibility Best Practices",
        "Figma, Component-Based Design"
      ],
      iconBgColor: "bg-pink-500/10",
      iconColor: "text-pink-500",
      gradientFrom: "pink-500",
      gradientTo: "rose-400"
    },
    {
      icon: <FaTools />,
      title: "Development Practices",
      items: [
        "Git, GitHub Actions, CI/CD",
        "Test-Driven Development",
        "Agile/Scrum Methodologies"
      ],
      iconBgColor: "bg-green-500/10",
      iconColor: "text-green-500",
      gradientFrom: "green-500",
      gradientTo: "emerald-400"
    }
  ];

  const experiences = [
    {
      icon: <FaCode />,
      company: "TribuSoft",
      position: "Frontend Developer",
      responsibilities: [
        "Built responsive interfaces using React and Next.js with TypeScript",
        "Optimized website performance and SEO through improved content structure",
        "Collaborated closely with designers to implement pixel-perfect layouts"
      ],
      bgColor: "bg-blue-500/10",
      textColor: "text-blue-500",
      headingColor: "text-blue-800",
      arrowColor: "text-blue-500"
    },
    {
      icon: <FaServer />,
      company: "SALT",
      position: "Fullstack Developer",
      responsibilities: [
        "Developed and deployed full-stack applications using React, Node.js and Express",
        "Implemented database architecture with PostgreSQL and Drizzle ORM",
        "Created reusable component systems for improved development efficiency"
      ],
      bgColor: "bg-purple-500/10",
      textColor: "text-purple-500",
      headingColor: "text-purple-800",
      arrowColor: "text-purple-500"
    }
  ];

  const education = [
    {
      icon: <FaGraduationCap />,
      degree: "Fullstack JavaScript Development",
      institution: "School of Applied Technology (SALT)",
      description: "Intensive program focused on modern JavaScript development practices:",
      skills: [
        "TypeScript, Next.js, React, Express.js",
        "Test-Driven Development",
        "Agile methodology with pair programming"
      ],
      gradientFrom: "blue-500",
      gradientTo: "purple-500",
      iconBgColor: "bg-purple-500/10",
      iconColor: "text-purple-500",
      institutionColor: "text-purple-600"
    },
    {
      icon: <FaCode />,
      degree: "Fullstack JavaScript Development",
      institution: "Chas Academy",
      description: "Vocational program covering web development fundamentals:",
      skills: [
        "JavaScript, HTML5, CSS3",
        "REST APIs and database design",
        "Project-based team collaboration"
      ],
      gradientFrom: "pink-500",
      gradientTo: "orange-500",
      iconBgColor: "bg-pink-500/10",
      iconColor: "text-pink-500",
      institutionColor: "text-pink-600"
    }
  ];

  return (
    <div className="pt-20 bg-slate-50">
      {/* Technical Skills Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <SectionHeading 
          title="Technical Skills" 
          gradientFrom="blue-500" 
          gradientTo="green-500"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              icon={skill.icon}
              title={skill.title}
              items={skill.items}
              iconBgColor={skill.iconBgColor}
              iconColor={skill.iconColor}
              gradientFrom={skill.gradientFrom}
              gradientTo={skill.gradientTo}
            />
          ))}
        </div>
      </section>

      {/* Experience Highlights Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            title="Professional Experience" 
            gradientFrom="blue-500" 
            gradientTo="purple-500"
          />
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <ExperienceCard
                key={index}
                icon={exp.icon}
                company={exp.company}
                position={exp.position}
                responsibilities={exp.responsibilities}
                bgColor={exp.bgColor}
                textColor={exp.textColor}
                headingColor={exp.headingColor}
                arrowColor={exp.arrowColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <SectionHeading 
            title="Education & Training" 
            gradientFrom="purple-500" 
            gradientTo="pink-500"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => (
              <EducationCard
                key={index}
                icon={edu.icon}
                degree={edu.degree}
                institution={edu.institution}
                description={edu.description}
                skills={edu.skills}
                gradientFrom={edu.gradientFrom}
                gradientTo={edu.gradientTo}
                iconBgColor={edu.iconBgColor}
                iconColor={edu.iconColor}
                institutionColor={edu.institutionColor}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <CTACard
            title="Ready to Work Together?"
            description="I'm open to new opportunities and collaborations. Let's connect and discuss how my skills can contribute to your team."
            primaryBtnText="Get in Touch"
            primaryBtnLink="/contact"
            secondaryBtnText="Email Me"
            secondaryBtnLink="mailto:carolinnepmelo@gmail.com"
          />
        </div>
      </section>
    </div>
  );
}
