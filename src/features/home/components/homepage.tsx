import { BuildingPage } from "./building-page";
import { Hero } from "./hero";

export function Homepage() {
  return process.env.FF_HOMEPAGE === "ON" ? <Hero /> : <BuildingPage />;
}
