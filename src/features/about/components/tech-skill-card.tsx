import { ReactNode } from "react";

type TechSkillCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export function TechSkillCard({ icon, title, description }: TechSkillCardProps) {
  return (
    <div className="flex flex-col">
      <div className="mb-3 text-4xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-paragraph text-sm">{description}</p>
    </div>
  );
}