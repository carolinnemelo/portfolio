type Language = {
  name: string;
  level: string;
};

type LanguagesSectionProps = {
  languages: Language[];
};

export function LanguagesSection({ languages }: LanguagesSectionProps) {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">Languages</h2>
      
      <ul className="space-y-2">
        {languages.map((language, index) => (
          <li key={index} className="flex justify-between">
            <span className="text-slate-700">{language.name}</span>
            <span className="text-slate-500 text-sm">{language.level}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}