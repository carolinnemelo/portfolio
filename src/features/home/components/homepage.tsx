  import { Button } from "@/components/ui/button";
  import { BuildingPage } from "./building-page";
  import { useState } from "react";
  import { cva } from "class-variance-authority";

  export function Homepage() {
    const [theme, setTheme] = useState("minimalist");
    theme === "minimalist" ? 

  const themeClasses = cva("",{variants: {theme:{ minimalist:"bg-red-600", dopamine:"bg-green-600"
  }}})

    return process.env.FF_HOMEPAGE === "ON" ? (
      <section className={`${themeClasses}flex  flex-col items-center justify-center h-screen`}>
      <Button onClick={()=>setTheme("minimalist")} variant="secondary">Minimalist</Button>
      <Button onClick={()=>setTheme("dopamine")}>Dopamine</Button>
      </section>
    ) : (
      <BuildingPage />
    );
  }
