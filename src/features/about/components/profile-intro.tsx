import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaFileAlt } from "react-icons/fa";
import { FolderIcon } from "lucide-react";

type ProfileIntroProps = {
  name: string;
  title: string;
  description: string;
  imageSrc: string;
  portfolioUrl: string;
  resumeUrl: string;
};

export function ProfileIntro({
  name,
  title,
  description,
  imageSrc,
  portfolioUrl,
  resumeUrl,
}: ProfileIntroProps) {
  return (
    <section className="flex items-center py-12 md:py-16 bg-secondary h-[65vh]">
      <div className="flex w-full px-2 justify-between md:px-16 flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-16">
        {/* Left content area */}
        <div className="lg:flex-1 max-w-2xl">
          <h1 className="leading-loose text-4xl md:text-6xl font-bold font-accent bg-gradient-to-r from-blue-500 from-[10%] via-pink-500 via-[30%] to-yellow-500 to-[60%] bg-clip-text text-transparent">
            {name}
          </h1>
          <h2 className="text-2xl text-slate-600 mb-6">{title}</h2>

          <div className="prose prose-slate max-w-none mb-8">
            <p className="text-lg">{description}</p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Button asChild variant="accent">
              <Link href={portfolioUrl} className="flex items-center gap-2">
                <FolderIcon />
                Projects
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              className="border-slate-300 hover:bg-slate-100"
            >
              <Link href={resumeUrl} className="flex items-center gap-2">
                <FaFileAlt size={16} />
                <span>View Resume</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* Right image area - Reduced size */}
        <div className="lg:flex-shrink-0">
          <div className="w-64 h-64 md:w-72 md:h-72 relative overflow-hidden rounded-lg shadow-md">
            <Image src={imageSrc} alt={name} fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
