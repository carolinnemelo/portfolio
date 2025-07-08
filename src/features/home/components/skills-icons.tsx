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
    <section
      className={cn(
        "overflow-hidden text-primary pt-10 items-center",
        className
      )}
    >
      <div className="relative w-full overflow-hidden">
        <div className="inline-flex whitespace-nowrap animate-marquee">
          <div className="inline-flex gap-10 px-5">
            {skills.map((skill) => (
              <div
                className="p-8 bg-gradient-to-br from-white  to-zinc-400/10 shadow rounded-lg"
                key={skill.name}
              >
                {skill.icon}
              </div>
            ))}
          </div>
          <div className="inline-flex gap-10 px-5">
            {skills.map((skill) => (
              <div
                className="p-8 bg-gradient-to-br from-white  to-zinc-400/10 shadow rounded-lg"
                key={skill.name + "-copy"}
              >
                {skill.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
