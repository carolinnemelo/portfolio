type Skill = {
  name: string;
  level: number;
};

type SkillsSectionProps = {
  title: string;
  skills: Skill[];
};

export function SkillsSection({ title, skills }: SkillsSectionProps) {
  return (
    <section className="bg-white rounded-lg shadow-sm p-6 mb-6">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 pb-2 border-b border-slate-200">{title}</h2>
      
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="text-slate-700 font-medium">{skill.name}</span>
              <span className="text-slate-500 text-sm">{skill.level}%</span>
            </div>
            <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" 
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}