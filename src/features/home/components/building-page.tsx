import { PoliceLine } from ".";
import { SvgPoliceLine } from "./svg-police-line";

export function BuildingPage() {
  return process.env.FF_NEW_BUILDING_PAGE === "ON" ? (
    <main className="flex flex-col text-center h-screen justify-center">
      {/* <ChooseTheme /> */}
      <PoliceLine
        className="-rotate-6 shadow-md"
        text="   Carolinne Melo   "
        repeat={10}
      />
      <PoliceLine className="rotate-3 shadow-md" />
      <SvgPoliceLine pattern="arrow"/>
    </main>
  ) : (
    <main className="flex min-h-screen items-center justify-center bg-gray-900 text-white">
      <div className="text-center">
        <div className="mt-4 animate-fade-in animate-duration-2000"></div>
        <h1 className="text-3xl font-bold">🚧 Under development... 🚀</h1>
      </div>
    </main>
  );
}
