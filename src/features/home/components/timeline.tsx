import { TimelineItem } from "./timeline-item";

import {
  Sparkles,
  Hammer,
  Settings,
  Brain,
} from "lucide-react";

export const timelineItems = [
  {
    icon: <Sparkles size={32} />,
    title: "Discovering Code as Creative Expression",
    subtitle:
      "I was drawn to frontend development because I wanted to build things that felt alive — responsive to users and adaptable over time.",
  },
  {
    icon: <Hammer size={32} />,
    title: "From Architecture to Interfaces",
    subtitle:
      "My background in visual design and architecture gave me an eye for structure and aesthetics, which naturally evolved into designing and coding user interfaces.",
  },
  {
    icon: <Settings size={32} />,
    title: "Learning by Building: CI/CD & GitHub Actions",
    subtitle:
      "In my portfolio project, I configured a GitHub Actions workflow to automate deployment — applying DevOps practices to real-world code.",
  },
  {
    icon: <Brain size={32} />,
    title: "Experimenting with Sanity as Headless CMS",
    subtitle:
      "To better understand how a headless CMS works, I integrated Sanity into my own website and used it to manage this very timeline.",
  },
];

export function Timeline() {
  return (
    <section className="text-center flex flex-col px-2  gap-10 md:px-16 py-6 md:py-12 md:items-center">
      <div className="flex flex-col gap-2"> 
        <h2>My Journey</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet
          repellat.
        </p>
      </div>
      <section className="relative pr-2">
        <span className="absolute left-2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent via-10% to-transparent" />
        <div className="flex flex-col gap-6 ">
          {timelineItems.map((item) => (
            <div key={item.title} className="relative pl-6 md:px-12">
              <span className="absolute left-0 top-10 w-4 h-4 bg-accent rounded-full ring-4 ring-white" />
              <TimelineItem
                title={item.title}
                subtitle={item.subtitle}
                icon={item.icon}
              />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
