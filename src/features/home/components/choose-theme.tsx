"use client";
import { Switch } from "@/components";
import { useTheme } from "next-themes";

export function ChooseTheme() {
  const { setTheme, theme} = useTheme();
  if (!theme) {
    return "light";
  }
  return (
    <section>
      <Switch id="toggle-theme" checked={theme === "dark"} onCheckedChange={() => setTheme(theme === "light" ? "dark" : "light")} />
      <label htmlFor="toggle-theme">{theme === "light" ? "Light mode" : "Dark mode"}</label>
    </section>
  );
}
