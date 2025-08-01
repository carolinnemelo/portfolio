import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

type ExperienceCardProps = {
  company: string;
  position: string;
  period?: string;
  responsibilities: string[];
  textColor: string;
  headingColor: string;
  arrowColor: string;
};

export function ExperienceCard({
  company,
  position,
  period,
  responsibilities,
  textColor,
  headingColor,
  arrowColor,
}: ExperienceCardProps) {
  return (
    <Card className="border-none shadow-sm overflow-hidden w-full">
      <CardContent className="p-6">
        <div className="flex flex-col gap-1 mb-4">
          <div className="flex items-center justify-between">
            <h3 className={`font-bold text-xl ${headingColor}`}>{position}</h3>
            {period && (
              <span className="text-sm text-slate-500 font-medium bg-slate-100 px-3 py-1 rounded-full">
                {period}
              </span>
            )}
          </div>
          <p className={`text-lg ${textColor} font-medium`}>{company}</p>
        </div>

        <ul className="space-y-3">
          {responsibilities.map((item, index) => (
            <li key={index} className="flex items-start gap-2">
              <ArrowRight
                className={`${arrowColor} h-5 w-5 mt-1 flex-shrink-0`}
              />
              <span className="text-slate-600">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}