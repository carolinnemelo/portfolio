import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

export type ProjectCardProps = {
  title: string;
  description?: string;
  image: string;
  tags?: string[];
  href?: string;
  githubUrl?: string;
  className?: string;
};

export function ProjectCard({
  title,
  description,
  image,
  tags = [],
  href,
  githubUrl,
  className = "",
}: ProjectCardProps) {
  return (
    <Card
      style={{ backgroundImage: `url(${image})` }}
      className={cn("bg-cover bg- m-0 border-0 p-0 overflow-hidden flex", className, image ? "" : "bg-gradient-to-br from-primary/50 to-transparent")}
    >
      <div className="h-56"></div>
      <CardContent className="h-[50%] flex flex-col justify-between py-4 backdrop-blur-md border-0 m-0 bg-primary/35 [background-blend-mode:multiply]">
        <CardHeader className="text-white pl-0 font-bold">{title}</CardHeader>
        <CardDescription className="text-slate-300 flex flex-col gap-4">
          {description}
          <div className="flex flex-wrap gap-2">
            {tags.length > 0 &&
              tags.map((tag) => <Badge variant={"secondary"} key={tag}>{tag}</Badge>)}
          </div>
        </CardDescription>

        <CardFooter className="flex items-center justify-end gap-3  mt-4 pr-0">
          {githubUrl && (
            <Button
              variant={"link"}
              className="text-secondary hover:text-slate-300 h-fit w-fit p-0 m-0 rounded-full"
            >
              <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub className="scale-180" />
              </Link>
            </Button>
          )}
          <Button
            variant={"secondary"}
            className="rounded-full p-0 m-0 w-[30px] h-[30px]"
          >
            <Link
              href={href || "/projects"}
              className="flex items-center gap-2"
            >
              <ArrowRight />
            </Link>
          </Button>
        </CardFooter>
      </CardContent>
    </Card>
  );
}
