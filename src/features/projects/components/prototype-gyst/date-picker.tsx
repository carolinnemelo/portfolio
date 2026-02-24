"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

type DateRange = "Today" | "Week" | "Month" | "Year";

export function DatePicker() {
  const [selected, setSelected] = useState<DateRange>("Month");
  const [pillStyle, setPillStyle] = useState({ width: 0, left: 0 });
  const buttonsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const ranges: DateRange[] = ["Today", "Week", "Month", "Year"];
  const selectedIndex = ranges.indexOf(selected);

  useEffect(() => {
    const updatePillPosition = () => {
      const activeButton = buttonsRef.current[selectedIndex];
      if (activeButton) {
        const rect = activeButton.getBoundingClientRect();
        const parentRect = activeButton.parentElement?.getBoundingClientRect();
        if (parentRect) {
          setPillStyle({
            width: rect.width,
            left: rect.left - parentRect.left,
          });
        }
      }
    };

    updatePillPosition();
    window.addEventListener("resize", updatePillPosition);
    return () => window.removeEventListener("resize", updatePillPosition);
  }, [selectedIndex]);

  return (
    <div className="relative flex items-center w-full h-10 bg-[#E5E5E6] p-1 rounded-full">
      {/* Animated background pill */}
      <motion.div
        className="absolute rounded-full bg-gray-700"
        style={{
          height: "32px",
          top: "4px",
        }}
        animate={{
          width: pillStyle.width,
          x: pillStyle.left,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
      />

      {/* Buttons container */}
      <div className="flex gap-0 w-full h-full relative z-10">
        {ranges.map((range, index) => (
          <button
            key={range}
            ref={(el) => (buttonsRef.current[index] = el)}
            onClick={() => setSelected(range)}
            className={
              "flex-1 rounded-full font-medium text-sm transition-colors" +
              (selected === range
                ? " text-white"
                : " text-gray-700 hover:bg-gray-300")
            }
          >
            {range}
          </button>
        ))}
      </div>
    </div>
  );
}
