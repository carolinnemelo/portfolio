import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FaFileAlt } from "react-icons/fa";
import { FolderIcon } from "lucide-react";

type Props = {
  name: string;
  title: string;
  description: string;
  portfolioUrl: string;
  resumeUrl: string;
};

export function ProfileIntro({
  name,
  title,
  description,
  portfolioUrl,
  resumeUrl,
}: Props) {
  return (
    <section className="flex items-center py-16 bg-secondary md:min-h-[50vh]">
      <div className="px-4 md:px-16 md:max-w-7xl">
        <div className="flex flex-col gap-2">
          <h1 className="mb-0 leading-snug text-4xl md:text-6xl font-bold font-accent bg-gradient-to-r from-blue-500 from-[10%] via-pink-500 via-[30%] to-yellow-500 to-[60%] bg-clip-text text-transparent">
            {name}
          </h1>
          <h2 className="text-2xl prose leading-tight">{title}</h2>
        </div>

        <div className="prose prose-slate max-w-none mb-8 mt-8">
          <p className="text-xl">{description}</p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button asChild variant="accent" size={"lg"}>
            <Link href={portfolioUrl} className="flex items-center gap-2">
              <FolderIcon />
              Projects
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            size={"lg"}
            className="border-slate-300 hover:bg-slate-100"
          >
            <Link href={resumeUrl} className="flex items-center gap-2">
              <FaFileAlt size={16} />
              <span>View Resume</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
