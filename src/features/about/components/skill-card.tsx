import { ReactNode } from "react";
import { FeatureCard } from "@/components/feature-card";

type SkillCardProps = {
  icon: ReactNode;
  title: string;
  items: string[];
  iconBgColor: string;
  iconColor: string;
  gradientFrom: string;
  gradientTo: string;
};

export function SkillCard({
  icon,
  title,
  items,
  iconColor,
  gradientFrom,
  gradientTo,
}: SkillCardProps) {
  // Criamos o elemento de lista para passar como descrição
  const skillsList = (
    <ul className="space-y-2 mt-2">
      {items.map((item, index) => (
        <li key={index} className="flex items-center gap-2 text-slate-600">
          <span className={`w-1.5 h-1.5 rounded-full ${iconColor} inline-block`}></span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
  
  return (
    <FeatureCard
      icon={icon}
      iconClassName={iconColor}
      title={title}
      description={skillsList}
      gradientFrom={gradientFrom}
      gradientTo={gradientTo}
    />
  );
}