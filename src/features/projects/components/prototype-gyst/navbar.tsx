"use client";

import { useState } from "react";
import { Menu, Sparkles } from "lucide-react";
import { Toggle } from "./toggle";

export function Navbar() {
  const [isAiActive, setIsAiActive] = useState(false);

  return (
    <nav
      className="bg-[#25252E] border-b border-gray-700"

    >
      <div className="flex items-center justify-between h-full">
        {/* Left: Menu Button */}
        <button
          className="flex items-center justify-center hover:bg-slate-700 rounded-lg transition-colors px-6"
        >
          <Menu className="w-6 h-6 text-white" />
        </button>

        {/* Right: Icons */}
        <div className="flex items-center flex-shrink-0">
          <button
            onClick={() => setIsAiActive(!isAiActive)}
            className="flex items-center justify-center hover:bg-slate-700 rounded-lg transition-colors flex-shrink-0 h-[45px] w-[45px]"
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
