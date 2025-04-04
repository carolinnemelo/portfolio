"use client";
import { Switch } from "@/components";
import { useTheme } from "next-themes";

export function ChooseTheme() {
  const { setTheme, resolvedTheme } = useTheme();
  if (!resolvedTheme) {
  }
  return (
    <section>
      <Switch
        id="toggle-theme"
        checked={resolvedTheme === "dark"}
        onCheckedChange={() =>
          setTheme(resolvedTheme === "light" ? "dark" : "light")
        }
      />
      <label htmlFor="toggle-theme">
        {resolvedTheme === "light" ? "Light mode" : "Dark mode"}
      </label>
    </section>
  );
}
