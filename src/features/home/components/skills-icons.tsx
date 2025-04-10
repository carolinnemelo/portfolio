// import { Card } from "@/components";
import { cn } from "@/lib/utils";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaDocker, FaFigma, FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiVite, SiExpress, SiDrizzle } from "react-icons/si";

type Props = {
  className?: string;
};

export function SkillsIcons({ className }: Props) {
  const skills = [
    { name: "JavaScript", icon: <IoLogoJavascript size={40} /> },
    { name: "Node.js", icon: <FaNodeJs size={40} /> },
    { name: "React", icon: <FaReact size={40} /> },
    { name: "Next.js", icon: <RiNextjsFill size={40} /> },
    { name: "Express", icon: <SiExpress size={40} /> },
    { name: "Drizzle", icon: <SiDrizzle size={40} /> },
    { name: "PostgreSQL", icon: <BiLogoPostgresql size={40} /> },
    { name: "Docker", icon: <FaDocker size={40} /> },
    { name: "Figma", icon: <FaFigma size={40} /> },
    { name: "Tailwind CSS", icon: <RiTailwindCssFill size={40} /> },
    { name: "Vite", icon: <SiVite size={40} /> },
    { name: "GitHub", icon: <FaGithub size={40} /> },
  ];

  return (
    <section className={cn("overflow-hidden text-primary py-2 items-center", className)}>
      <div className="animate-marquee whitespace-nowrap max-w-fit flex w-[100%] gap-10">
        {skills.map((skill) => (
          <div
            className="p-8 bg-gradient-to-br  from-transparent via-transparent to-zinc-400/10 shadow rounded-lg  col-start-2"
            key={skill.name}
          >
            {skill.icon}
          </div>
        ))}
        {skills.map((skill) => (
          <div
            className="p-8 bg-gradient-to-br from-transparent via-transparent to-zinc-400/10 shadow rounded-lg  col-start-2"
            key={skill.name + "2"}
          >
            {skill.icon}
          </div>
        ))}
      </div>
    </section>
  );
}
