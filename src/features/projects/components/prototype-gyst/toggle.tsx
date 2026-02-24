"use client";

import { Moon, Sun } from "lucide-react";
import { useGystTheme } from "./theme-context";

export function Toggle() {
  const { isDark, toggleTheme } = useGystTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center justify-center transition-colors flex-shrink-0 pr-6 pl-4 h-full">
      <div
        className="relative rounded-full flex items-center flex-shrink-0 transition-colors"
        style={{
          width: "52px",
          height: "25px",
          backgroundColor: isDark ? "#484851" : "#A9D615",
          padding: "2px",
          pointerEvents: "none",
        }}
      >
        {/* White Circle Button */}
        <div
          className="absolute rounded-full bg-[#E5E5E6] transition-all flex-shrink-0"
          style={{
            width: "22px",
            height: "22px",
            left: isDark ? "28px" : "2px",
            zIndex: 0,
          }}
        />

        {/* Sun Icon - Right side when light mode (button on left) */}
        <div
          className="absolute flex-shrink-0"
          style={{
            right: isDark ? "-30px" : "5px",
            opacity: isDark ? 0 : 1,
            zIndex: isDark ? 0 : 10,
          }}
        >
          <Sun
            style={{
              width: "16px",
              height: "16px",
              color: "white",
            }}
          />
        </div>

        {/* Moon Icon - Left side when dark mode (button on right) */}
        <div
          className="absolute flex-shrink-0"
          style={{
            left: isDark ? "5px" : "-30px",
            opacity: isDark ? 1 : 0,
            zIndex: isDark ? 10 : 0,
          }}
        >
          <Moon
            style={{
              width: "16px",
              height: "16px",
              color: "#A9D615",
            }}
          />
        </div>
      </div>
    </button>
  );
}
