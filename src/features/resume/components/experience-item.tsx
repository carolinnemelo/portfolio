type Props = {
  position: string;
  company: string;
  period: string;
  summary: string;
  responsibilities?: string[];
};

export function ExperienceItem({
  position,
  company,
  period,
  summary,
  responsibilities,
}: Props) {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between mb-2">
        <h3 className="text-xl font-semibold">{position}</h3>
        <span className="text-paragraph">
          {company} | {period}
        </span>
      </div>
      <p className="text-paragraph text-sm mb-3">{summary}</p>
      {responsibilities && (
        <ul className="list-disc text-sm pl-5 text-paragraph space-y-1">
          {responsibilities.map((responsibility, index) => (
            <li key={index}>{responsibility}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
