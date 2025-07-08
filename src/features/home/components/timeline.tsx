import { TimelineItem } from "./timeline-item";

import { Palette, Ruler, Sparkles, Laptop2, Brain } from "lucide-react";

export const timelineItems = [
  {
    icon: <Palette size={32} />,
    title: "Creative beginnings",
    subtitle:
      "Before coding, I was already creating — logos, invitations, visual pieces for friends and family. That sense of care still lives in the interfaces I build.",
  },
  {
    icon: <Ruler size={32} />,
    title: "From architecture to interaction",
    subtitle:
      "Working as an architect taught me to think about structure, flow, and people. Code gave me a faster way to experiment and improve.",
  },
  {
    icon: <Sparkles size={32} />,
    title: "That first 'it works' moment",
    subtitle:
      "The first time I saw something I built work in the browser, I felt something shift. I wasn’t just learning — I was building.",
  },
  {
    icon: <Laptop2 size={32} />,
    title: "Going all in",
    subtitle:
      "I joined a full-time bootcamp and started building real projects under pressure. That’s where I found rhythm, confidence, and collaboration.",
  },
  {
    icon: <Brain size={32} />,
    title: "Learning by doing",
    subtitle:
      "I set up GitHub Actions, explored Sanity as a CMS, and kept pushing myself to learn by actually shipping things.",
  },
];


export function Timeline() {
  return (
    <section className="text-center flex flex-col px-2  gap-10 md:px-16 py-6 md:py-30 md:items-center">
      <div className="flex flex-col gap-2">
        <h2 className="font-bold">My Journey</h2>
        <p>This is me, figuring things out in public.</p>
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
