type Props = {
  pattern?: "diagonal" | "arrow";
};

export function SvgPoliceLine({ pattern = "diagonal" }: Props) {
  const patternId = pattern === "diagonal" ? "diagonalPattern" : "arrowPattern";

  return (
    <div className="relative w-full overflow-hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="0"
        width="0"
        style={{ position: "absolute" }}
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="diagonalPattern"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <rect width="20" height="20" fill="#f0bb2b" />
            <line
              x1="0"
              y1="-10"
              x2="30"
              y2="50"
              stroke="#000000"
              strokeWidth="7"
            />
          </pattern>

          <pattern
            id="arrowPattern"
            width="15"
            height="20"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(1.3)"

          >
            <rect width="20" height="20" fill="#f0bb2b" />
            <polyline
              points="0,25 10,10 0,-5"
              stroke="#000000"
              strokeWidth={5}
              fill="none"
            />
          </pattern>
        </defs>
      </svg>
      <div className="animate-marquee inline-block w-full">
        <svg xmlns="http://www.w3.org/2000/svg" height="25" width="200vw" >
          <rect width="100%" height="100%" fill={`url(#${patternId})`} />
        </svg>
      </div>
    </div>
  );
}
