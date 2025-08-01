import { SectionTitle } from "./section-title";
import { ExperienceItem } from "./experience-item";

type Experience = {
  position: string;
  company: string;
  period: string;
  summary: string;
  responsibilities: string[];
};

type WorkExperienceProps = {
  experiences: Experience[];
};

export function WorkExperience({ experiences }: WorkExperienceProps) {
  return (
    <section className="mb-12">
      <SectionTitle title="WORK EXPERIENCES" />
      
      <div className="space-y-8">
        {experiences.map((experience, index) => (
          <ExperienceItem
            key={index}
            position={experience.position}
            company={experience.company}
            period={experience.period}
            summary={experience.summary}
            responsibilities={experience.responsibilities}
          />
        ))}
      </div>
    </section>
  );
}