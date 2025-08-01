import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

type EducationCardProps = {
  icon: ReactNode;
  degree: string;
  institution: string;
  description: string;
  skills: string[];
  gradientFrom: string;
  gradientTo: string;
  iconBgColor: string;
  iconColor: string;
  institutionColor: string;
};

export function EducationCard({
  icon,
  degree,
  institution,
  description,
  skills,
  iconBgColor,
  iconColor,
  institutionColor,
}: EducationCardProps) {
  return (
    <Card className="border-none shadow-sm overflow-hidden">

      <CardContent className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className={`${iconBgColor} p-3 rounded-lg`}>
            <div className={`h-5 w-5 ${iconColor}`}>{icon}</div>
          </div>
          <div>
            <h3 className="font-semibold text-lg">{degree}</h3>
            <p className={`text-sm ${institutionColor}`}>{institution}</p>
          </div>
        </div>
        
        <div className="mt-4 ml-12">
          <p className="text-slate-600 mb-4">{description}</p>
          <ul className="space-y-2">
            {skills.map((skill, index) => (
              <li key={index} className="flex items-center gap-2 text-slate-600">
                <span className={`w-1.5 h-1.5 rounded-full ${iconColor} inline-block`}></span>
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}