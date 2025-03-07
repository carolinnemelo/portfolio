import { Button } from "@/components/ui/button";
import { BuildingPage } from "./building-page";
import { Main } from "./main";

export function Homepage() {
  return process.env.FF_HOMEPAGE === "ON" ? (
    <section className="flex flex-col items-center justify-center h-screen">
    <Button variant="secondary">Minimalist</Button>
    <Button>Dopamine</Button>
    </section>
  ) : (
    <BuildingPage />
  );
}
