type EducationItemProps = {
  degree: string;
  institution: string;
  location: string;
  period: string;
  description: string;
};

export function EducationItem({ degree, institution, location, period, description }: EducationItemProps) {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-2">
        <h3 className="text-xl font-bold text-slate-800">{degree}</h3>
        <div className="text-sm font-medium bg-green-100 text-green-700 px-3 py-1 rounded-full">
          {period}
        </div>
      </div>
      
      <div className="text-slate-600 mb-2">
        <span className="font-medium">{institution}</span> | {location}
      </div>
      
      <p className="text-slate-600">{description}</p>
    </div>
  );
}