import { PoliceLine } from ".";
import { SvgPoliceLine } from "./svg-police-line";

export function BuildingPage() {
  return (
    <main className="flex flex-col text-center h-screen justify-center w-full bg-secondary">
      <SvgPoliceLine pattern="arrow" className="top-9 rotate-2" />
      <PoliceLine
        className="-rotate-3 shadow-md z-10"
        text="   Carolinne Melo    "
        repeat={10}
      />
      <PoliceLine className="rotate-6 shadow-md z-10 top-15 " />
      <SvgPoliceLine className="-top-8 -rotate-9" />
    </main>
  ); 
}
