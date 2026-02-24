"use client";

import { useState } from "react";
import { Menu, Sparkles } from "lucide-react";
import { Toggle } from "./toggle";

export function GystNavbar() {
  const [isAiActive, setIsAiActive] = useState(false);

  return (
    <nav
      className="bg-[#25252E] border-b border-gray-700"
      style={{ height: "45px" }}
    >
      <div className="flex items-center justify-between px-6 h-full">
        {/* Left: Menu Button */}
        <button
          className="flex items-center justify-center hover:bg-slate-700 rounded-lg transition-colors"
          style={{ minWidth: "48px", minHeight: "48px" }}
        >
          <Menu className="w-6 h-6 text-white" />
        </button>

        {/* Right: Icons */}
        <div className="flex items-center gap-4 flex-shrink-0">
          <button
            onClick={() => setIsAiActive(!isAiActive)}
            className="flex items-center justify-center hover:bg-slate-700 rounded-lg transition-colors flex-shrink-0"
            style={{ minWidth: "48px", minHeight: "48px" }}
          >
            <Sparkles
              className="w-6 h-6 transition-colors"
              style={{
                color: isAiActive ? "#A9D615" : "white",
              }}
            />
          </button>

          <Toggle />
        </div>
      </div>
    </nav>
  );
}
