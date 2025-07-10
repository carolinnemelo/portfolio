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

      <section className="bg-secondary lg:bg-white px-2 md:p-0 py-16">
        <div className="lg:bg-secondary gap-10 md:py-0 md:px-16 lg:pl-16 flex flex-col lg:flex-row-reverse justify-center ">
          <Image
            src={"/game/screen.avif"}
            alt={"blue45"}
            width={500}
            height={500}
            className="hidden lg:block object-cover"
            loading="lazy"
          />
          <Image
            src={"/game/mobile.avif"}
            alt={"blue45"}
            width={700}
            height={700}
            className="lg:hidden"
            loading="lazy"
          />

          <div className="flex flex-col gap-10 lg:w-[60%] justify-center">
            <div className="flex flex-col gap-4">
              <p className="leading-snug text-2xl">UI Concept:</p>
              <h2 className=" leading-14 text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-green-500  bg-clip-text text-transparent">
                Nature & Magic Game Master
              </h2>
            </div>
            <ul className="flex flex-col gap-8">
              <li className="text-paragraph text-xl">
                <ArrowRight className="text-green-500 inline mr-2" />
                Built a fantasy game UI in Figma with reusable components and
                structured layout.
              </li>
              <li className="text-paragraph text-xl ">
                <ArrowRight className="text-green-500 inline mr-2" />
                Applied visual hierarchy principles using contrast, scale and
                spacing.
              </li>
              <li className="text-paragraph text-xl ">
                <ArrowRight className="text-green-500 inline mr-2" />
                Designed flows for onboarding, interaction and narrative events.
              </li>
              <li className="text-paragraph text-xl ">
                <ArrowRight className="text-green-500 inline mr-2" />
                Balanced magical aesthetics with functional clarity.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="text-center flex flex-col gap-12 items-center justify-center px-4 pt-16 md:py-24 md:px-16">
        <h2 className="text-3xl font-bold">Same game, different feelings </h2>
        <div className="flex flex-col items-center justify-center md:gap-12">
          <GameCard variant="carousel" classname="md:hidden" />
          <GameCard classname="hidden md:flex" />
        </div>
      </section>
    </main>
  );
}
