import { Hero } from "./hero";
import { SkillsIcons } from "./skills-icons";
import { GameCard } from "@/components";
import Image from "next/image";
import { Timeline } from "./timeline";
import { ArrowRight } from "lucide-react";

export async function Homepage() {
  return (
    <main className="bg-teal-200 h-7">
      <Hero />
      <SkillsIcons />

      <Timeline />

      <section className="text-center flex flex-col gap-12 items-center justify-center px-4 pt-16 md:py-24 md:px-16">
        <h2 className="text-3xl font-bold">
          How It Feels, Not Just How It Looks
        </h2>
        <div className="flex flex-col items-center justify-center md:gap-12">
          <GameCard variant="carousel" classname="md:hidden" />
          <GameCard classname="hidden md:flex" />

          <p className="text-xl">
            I designed three versions of the same screen to explore how layout,
            color, and texture shift the emotional tone without changing a
            single word of content.
          </p>

          <p className="text-xl">
            The first one feels like chaos with loud colors, gritty textures,
            and a super cramped layout that kinda throws you right into the
            action. Then I tried something slower and quieter, more space, more
            structure, like everything just paused for a second.
          </p>

          <p className="text-xl font-bold ">
            The last one is the chill version with soft light, cozy colors,
            something that feels safe and a little magical.
          </p>
          <p className="text-xl font-bold">
            This experiment is about how visuals tell a story, even when the
            words don’t change.
          </p>
        </div>
      </section>

      <section className="bg-secondary px-2">
        <div className="gap-6 md:py-24 md:pl-16 flex flex-col md:flex-row-reverse justify-center">
          <div className="relative w-full lg:-mb-16 lg:pr-16">
            <Image
              src={"/game/screen.avif"}
              alt={"blue45"}
              width={700}
              height={700}
              className="hidden lg-block"
              loading="lazy"
            /> 
            <Image
              src={"/game/mobile.avif"}
              alt={"blue45"}
              width={900}
              height={700}
              className="lg:hidden object-cover overflow-hidden" 
              loading="lazy"
            /> 
          </div>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <p className="leading-snug text-2xl">UI Concept:</p>
              <h2 className="text-center leading-14 text-5xl font-bold bg-gradient-to-r from-blue-500 to-green-500  bg-clip-text text-transparent">
                Nature & Magic Game Master
              </h2>
            </div>
            <ul className="flex flex-col gap-8">
              <li className="text-paragraph text-xl flex gap-2">
                <ArrowRight className="text-green-500" />
                Built a fantasy game UI in Figma with reusable components and
                structured layout.
              </li>
              <li className="text-paragraph text-xl flex gap-2">
                <ArrowRight className="text-green-500" />
                Applied visual hierarchy principles using contrast, scale and
                spacing.
              </li>
              <li className="text-paragraph text-xl flex gap-2">
                <ArrowRight className="text-green-500" />
                Designed flows for onboarding, interaction and narrative events.
              </li>
              <li className="text-paragraph text-xl flex gap-2">
                <ArrowRight className="text-green-500" />
                Balanced magical aesthetics with functional clarity.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
