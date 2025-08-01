import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

type ExperienceCardProps = {
  icon: ReactNode;
  company: string;
  position: string;
  responsibilities: string[];
  bgColor: string;
  textColor: string;
  headingColor: string;
  arrowColor: string;
};

export function ExperienceCard({
  icon,
  company,
  position,
  responsibilities,
  bgColor,
  textColor,
  headingColor,
  arrowColor,
}: ExperienceCardProps) {
  return (
    <Card className="border-none shadow-sm overflow-hidden">
      <CardContent className="p-0">
        <div className="grid md:grid-cols-4">
          <div className={`${bgColor} p-6 flex flex-col justify-center`}>
            <div className="flex items-center gap-4 mb-1">
              <div className={`h-5 w-5 ${textColor}`}>{icon}</div>
              <h3 className={`font-semibold ${headingColor}`}>{company}</h3>
            </div>
            <p className={`text-sm ${textColor} ml-9`}>{position}</p>
          </div>
          
          <div className="p-6 md:col-span-3">
            <ul className="space-y-3">
              {responsibilities.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <ArrowRight className={`${arrowColor} h-5 w-5 mt-1 flex-shrink-0`} />
                  <span className="text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}