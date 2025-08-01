import { SectionTitle } from "./section-title";

type Language = {
  name: string;
};

type Props = {
  languages: Language[];
};

export function LanguagesSection({ languages }: Props) {
  return (
    <section className="mb-8">
      <SectionTitle title="LANGUAGES" />
      
      <ul className="text-sm">
        {languages.map((language, index) => (
          <li key={index} className="flex justify-between text-slate-600">
            <span>{language.name}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}