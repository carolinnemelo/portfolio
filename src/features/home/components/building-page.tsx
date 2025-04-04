// import { ChooseTheme } from "./choose-theme";

export function BuildingPage() {
  const text = " Under development •";

  return process.env.FF_NEW_BUILDING_PAGE === "ON" ? (
    <main className="flex flex-col text-center h-screen justify-center bg-blue-400">
      {/* <ChooseTheme /> */}
      <div className="relative w-full overflow-hidden  bg-yellow-300 justify-self-center py-1 rotate-2">
        <div className="flex overflow-hidden">
          <div className="whitespace-nowrap animate-marquee">
            {Array.from({ length: 10 }, (_, i) => (
              <span key={i}>
                {text}
              </span>
            ))}
          </div>
          <div className="whitespace-nowrap animate-marquee">
            {Array.from({ length: 10 }, (_, i) => (
              <span key={i}>
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
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
