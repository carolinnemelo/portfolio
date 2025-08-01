import { SectionTitle } from "./section-title";

type InterestsSectionProps = {
  interests: string[];
};

export function InterestsSection({ interests }: InterestsSectionProps) {
  return (
    <section>
      <SectionTitle title="INTERESTS" />
      
      <div className="flex flex-wrap gap-2">
        {interests.map((interest, index) => (
          <span 
            key={index} 
            className="bg-slate-100 px-3 py-1 rounded-full text-slate-600 text-sm"
          >
            {interest}
          </span>
        ))}
      </div>
    </section>
  );
}