"use client";

import { useState } from "react";

type DateRange = "Today" | "Week" | "Month" | "Year";

export function DatePicker() {
  const [selected, setSelected] = useState<DateRange>("Month");
  const ranges: DateRange[] = ["Today", "Week", "Month", "Year"];  

  return (
    <div className="relative flex items-center justify-center w-[354px] h-10 bg-[#E5E5E6] p-1 rounded-full">
      {/* Buttons container */}
      <div className="flex gap-0 w-full h-full relative z-10 justify-between">
        {ranges.map((range) => (
          <button
            key={range}
            onClick={() => setSelected(range)}
            className={"rounded-full font-medium text-sm transition-colors w-full" + (selected === range ? " bg-gray-700 text-white" : " text-gray-700 hover:bg-gray-300")}
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  );
}
