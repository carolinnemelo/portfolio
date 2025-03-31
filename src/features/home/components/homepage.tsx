import { BuildingPage } from "./building-page";
import { ChooseTheme } from "./choose-theme";

export function Homepage() {
  return process.env.FF_HOMEPAGE === "ON" ? <ChooseTheme /> : <BuildingPage />;
}
