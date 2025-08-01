import { SectionTitle } from "./section-title";
import { ExperienceItem } from "./experience-item";

type Education = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
};

type EducationProps = {
  educationItems: Education[];
};

export function Education({ educationItems }: EducationProps) {
  return (
    <section className="mb-12">
      <SectionTitle title="EDUCATION" />
      
      <div className="space-y-8">
        {educationItems.map((education, index) => (
          <ExperienceItem
            key={index}
            position={education.degree}
            company={education.institution}
            period={education.period}
            summary={education.description}
          />
        ))}
      </div>
    </section>
  );
}