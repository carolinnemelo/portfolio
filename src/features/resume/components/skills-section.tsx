import { SectionTitle } from "./section-title";

type SkillCategory = {
  title: string;
  skills: string[];
};

type SkillsSectionProps = {
  categories: SkillCategory[];
};

export function SkillsSection({ categories }: SkillsSectionProps) {
  return (
    <section className="mb-8">
      <SectionTitle title="SKILLS" />

      {categories.map((category, index) => (
        <div key={index} className="mb-6">
          <h3 className="font-semibold mb-2">{category.title}</h3>
          <ul className="text-sm text-paragraph">
            {category.skills.map((skill, skillIndex) => (
              <li key={skillIndex}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
