"use client";
import { Button } from "@/components/ui/button";
import { cva } from "class-variance-authority";
import { useTheme } from "next-themes";

export function ChooseTheme() {
  const { setTheme } = useTheme();

  const themeClasses = cva(
    "flex  flex-col items-center justify-center h-screen",
    {
      variants: {
        theme: {
          minimalist: "bg-gray-100",
          dopamine: "",
        },
      },
    }
  );

  return (
    <section className={themeClasses()}>
      <Button onClick={() => setTheme("light")}>Minimalist</Button>
      <Button onClick={() => setTheme("dopamine")}>Dopamine</Button>
      <section>
        <h1 className="text-2xl gradient">Hello Title 01</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
          voluptatem quos repudiandae reprehenderit cupiditate optio, vel
          tenetur veritatis fugit beatae.
        </p>
      </section>
    </section>
  );
}
