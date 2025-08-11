import { ProjectsGrid } from "@/features/projects/components/projects-grid";

export default function ProjectsPage() {
const projects = [
  {
    title: "Voting App",
    description: "Full stack voting app built in 3 days: reps, elections, basic stats.",
    image: "/representatives.png",
    tags: ["Next.js", "TypeScript", "Drizzle", "Docker"],
    href: undefined,
    githubUrl: "https://github.com/carolinnemelo/voting-app",
  },
  {
    title: "Consulting App",
    description: "Consultant profiles with admin review and a simple dashboard.",
    image: "",
    tags: ["Next.js", "TypeScript", "Drizzle", "Admin"],
    href: undefined,
    githubUrl: "https://github.com/carolinnemelo/consulting-app",
  },
  {
    title: "Spicy Slow Chat",
    description: "Landing and UI concept for a chat product with simple sections and CTAs.",
    image: "/slow.png",
    tags: ["Design", "Landing", "UI", "Chat"],
    href: "https://carolinnemelo.my.canva.site/spicy-slow-chat",
    githubUrl: "https://github.com/SpicyJS/spicy-slow-chat",
    className: "bg-center",
  },
  {
    title: "ESIK Alpina",
    description: "Figma landing concept for a skiing club: sign up, trips, competitions.",
    image: "/home.png",
    tags: ["Design", "Figma", "Landing", "Typography"],
    href: undefined,
    githubUrl: undefined,
  },
  {
    title: "Adri: Meal Plan Assistant",
    description: "Early mobile prototype that creates meal plans from user inputs.",
    image: "/adri.png",
    tags: ["React Native", "Expo", "TypeScript", "Supabase"],
    href: undefined,
    githubUrl: undefined,
  },
  {
    title: "Next.js Dashboard",
    description: "Course dashboard using App Router, auth and Tailwind.",
    image: "",
    tags: ["Next.js", "App Router", "Tailwind", "Auth"],
    href: "https://nextjs-dashboard-three-nu-99.vercel.app",
    githubUrl: "https://github.com/carolinnemelo/nextjs-dashboard",
  },
  {
    title: "Taskly (React Native)",
    description: "Expo project with basic navigation, theming and task list.",
    image: "",
    tags: ["React Native", "Expo", "TypeScript", "UI"],
    href: undefined,
    githubUrl: "https://github.com/carolinnemelo/taskly",
  },
  {
    title: "Portfolio",
    description: "This site: clean Next.js + Tailwind + shadcn/ui.",
    image: "",
    tags: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
    href: undefined,
    githubUrl: "https://github.com/carolinnemelo/portfolio",
  },
];





  return (
    <main className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-8">
          Projects
        </h1>
        <ProjectsGrid items={projects} />
      </div>
    </main>
  );
}
