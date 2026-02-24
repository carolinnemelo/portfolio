"use client";

import { useState } from "react";

type DateRange = "Today" | "Week" | "Month" | "Year";

export function DatePicker() {
  const [selected, setSelected] = useState<DateRange>("Month");
  const ranges: DateRange[] = ["Today", "Week", "Month", "Year"];
  const selectedIndex = ranges.indexOf(selected);
  
  // Calculate the transform: each button takes 25% of the width (354/4 = 88.5px)
  const buttonWidth = 354 / 4;
  const translateDistance = selectedIndex * buttonWidth;

  return (
    <div 
      className="relative flex items-center justify-center"
      style={{ 
        width: "354px", 
        height: "40px",
        backgroundColor: "#E5E5E6",
        padding: "4px",
        borderRadius: "20px",
      }}
    >
      {/* Animated background pill */}
      <div
        className="absolute rounded-full transition-all"
        style={{
          width: `calc(25% - 3px)`,
          height: "32px",
          backgroundColor: "#484851",
          transform: `translateX(${translateDistance}px)`,
          left: "4px",
          top: "4px",
          zIndex: 0,
        }}
      />

      {/* Buttons container */}
      <div className="flex gap-0 w-full h-full relative z-10">
        {ranges.map((range) => (
          <button
            key={range}
            onClick={() => setSelected(range)}
            className="flex-1 rounded-full font-medium text-sm transition-colors"
            style={{
              color: selected === range ? "white" : "#484851",
              zIndex: selected === range ? 10 : 0,
            }}
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  );
}
