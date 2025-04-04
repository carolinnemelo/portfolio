export function PoliceLine() {
  const text = "Experimental zone • Proceed with coffee • ";

  return (
    <div className="relative w-full overflow-hidden  bg-yellow-300 justify-self-center py-1 rotate-3">
      <div className="flex overflow-hidden font-bold dark:text-black">
        <div className="uppercase whitespace-nowrap animate-marquee pr-0.5">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
        <div className="uppercase whitespace-nowrap animate-marquee">
          {Array.from({ length: 5 }, (_, i) => (
            <span key={i}>{text}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
