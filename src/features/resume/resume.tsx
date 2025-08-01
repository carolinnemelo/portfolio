"use client";

import { ResumeHeader } from "./components/resume-header";
import { ResumeSection } from "./components/resume-section";
import { ExperienceItem } from "./components/experience-item";
import { EducationItem } from "./components/education-item";
import { SkillsSection } from "./components/skills-section";
import { LanguagesSection } from "./components/languages-section";
import { InterestsSection } from "./components/interests-section";
import { DownloadButton } from "./components/download-button";

export function Resume() {
  return (
    <div className="bg-slate-50 min-h-screen pt-16 pb-16">
      <div className="max-w-4xl mx-auto px-4 md:px-6">
        {/* Resume Header */}
        <ResumeHeader 
          name="Carolinne Melo"
          title="Frontend Developer"
          email="carolinnepmelo@gmail.com"
          phone="+1 (123) 456-7890"
          location="Stockholm, Sweden"
          website="carolinnemelo.dev"
          linkedin="linkedin.com/in/carolinnemelo"
          github="github.com/carolinnemelo"
        />
        
        {/* Career Summary */}
        <ResumeSection title="Career Summary">
          <div className="text-slate-600">
            <p className="mb-3">
              I'm a Frontend Developer with a unique background in architecture, bringing a design-oriented approach to web development. 
              With expertise in React and TypeScript, I create responsive and accessible interfaces that prioritize user experience. 
            </p>
            <p>
              I leverage my architectural thinking to build structured, scalable applications and work effectively across the development stack.
              My goal is to create digital spaces that are both aesthetically pleasing and functionally robust.
            </p>
          </div>
        </ResumeSection>
        
        {/* Work Experience */}
        <ResumeSection title="Work Experience">
          <div className="space-y-6">
            <ExperienceItem
              position="Frontend Developer"
              company="TribuSoft"
              location="Stockholm, Sweden"
              period="2023 - Present"
              description={[
                "Led frontend development for client projects using React, Next.js, and TypeScript",
                "Implemented responsive designs and optimized performance for better user experience",
                "Collaborated with designers to create pixel-perfect interfaces and component libraries",
                "Contributed to code reviews and mentored junior developers"
              ]}
            />
            
            <ExperienceItem
              position="Fullstack Developer"
              company="School of Applied Technology (SALT)"
              location="Stockholm, Sweden"
              period="2022 - 2023"
              description={[
                "Developed full-stack applications using React, Node.js, and PostgreSQL",
                "Practiced test-driven development and pair programming in an agile environment",
                "Created reusable component systems and implemented database architectures",
                "Participated in code reviews and continuous integration workflows"
              ]}
            />
            
            <ExperienceItem
              position="Junior Web Developer"
              company="Previous Company"
              location="Stockholm, Sweden"
              period="2020 - 2022"
              description={[
                "Assisted in developing and maintaining client websites using HTML, CSS, and JavaScript",
                "Implemented responsive designs and basic frontend functionality",
                "Collaborated with senior developers on larger projects and bug fixes",
                "Contributed to internal documentation and process improvements"
              ]}
            />
          </div>
        </ResumeSection>
        
        {/* Education */}
        <ResumeSection title="Education">
          <div className="space-y-6">
            <EducationItem
              degree="Fullstack JavaScript Development"
              institution="School of Applied Technology (SALT)"
              location="Stockholm, Sweden"
              period="2022"
              description="Intensive bootcamp focused on modern JavaScript development practices, including React, Node.js, and TDD."
            />
            
            <EducationItem
              degree="Fullstack JavaScript Development"
              institution="Chas Academy"
              location="Stockholm, Sweden"
              period="2021"
              description="Vocational program covering web development fundamentals, including HTML/CSS, JavaScript, and basic backend development."
            />
            
            <EducationItem
              degree="Architecture and Urban Planning"
              institution="University Name"
              location="Location"
              period="2015 - 2020"
              description="Bachelor's degree with focus on architectural design principles, spatial thinking, and project planning."
            />
          </div>
        </ResumeSection>
        
        {/* Skills & Tools */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <SkillsSection 
              title="Technical Skills"
              skills={[
                { name: "JavaScript/TypeScript", level: 90 },
                { name: "React & Next.js", level: 85 },
                { name: "HTML5/CSS3/SASS", level: 90 },
                { name: "Node.js/Express", level: 75 },
                { name: "PostgreSQL/MongoDB", level: 70 },
                { name: "RESTful APIs", level: 80 },
                { name: "Test-Driven Development", level: 75 },
                { name: "Git & CI/CD", level: 80 }
              ]}
            />
          </div>
          
          <div className="space-y-6">
            <LanguagesSection 
              languages={[
                { name: "English", level: "Professional" },
                { name: "Portuguese", level: "Native" },
                { name: "Swedish", level: "Conversational" }
              ]}
            />
            
            <InterestsSection 
              interests={[
                "Architecture", "Design", "Photography", "Travel", "Reading", "Hiking"
              ]}
            />
          </div>
        </div>
        
        {/* Download Button */}
        <div className="mt-10 flex justify-center">
          <DownloadButton />
        </div>
      </div>
    </div>
  );
}