type InterestsSectionProps = {
  interests: string[];
};

export function InterestsSection({ interests }: InterestsSectionProps) {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">Interests</h2>
      
      <div className="flex flex-wrap gap-2">
        {interests.map((interest, index) => (
          <span 
            key={index} 
            className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm"
          >
            {interest}
          </span>
        ))}
      </div>
    </section>
  );
}