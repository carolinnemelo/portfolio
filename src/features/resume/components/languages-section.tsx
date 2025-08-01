import { SectionTitle } from "./section-title";

type Props = {
  languages: string[];
};



export function LanguagesSection({ languages }: Props) {
  return (
    <section className="mb-8">
      <SectionTitle title="LANGUAGES" />
      
      <ul className="text-base">
        {languages.map((language, index) => (
          <li key={index} className="flex justify-between text-paragraph">
            <span>{language}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}