type ExperienceItemProps = {
  position: string;
  company: string;
  location: string;
  period: string;
  description: string[];
};

export function ExperienceItem({ position, company, location, period, description }: ExperienceItemProps) {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
        <h3 className="text-xl font-bold text-slate-800">{position}</h3>
        <div className="text-sm font-medium bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
          {period}
        </div>
      </div>
      
      <div className="text-slate-600 mb-3">
        <span className="font-medium">{company}</span> | {location}
      </div>
      
      <ul className="list-disc pl-5 space-y-1 text-slate-600">
        {description.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}