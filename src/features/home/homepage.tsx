"use client";

import { Hero } from "./components/hero";
import { SkillsIcons } from "./components/skills-icons";
import { Button } from "@/components";
import Link from "next/link";

export function Homepage() {
  return (
    <main>
      <div className="md:flex md:flex-col ">
        <div className=" flex md:h-screen-2/4">
          <Hero />
        </div>
        <div className="">
          <SkillsIcons />
        </div>
      </div>

      <section className="">
        <h2 className="text-4xl font-bold mb-16 bg-gradient-to-r from-blue-500 to- bg-clip-text text-transparent">
          Behind the Code
        </h2>
        <p className="text-xl max-w-5xl">
          {" "}
          I didn’t start in tech — I started designing spaces. Today, I use that
          same mindset to build human-centered digital experiences. Curious
          about how I got here?
        </p>
        <Button variant="accent" size={"lg"} className="mt-8">
          <Link href="/about">Read My Story</Link>
        </Button>
      </section>
    </main>
  );
}
