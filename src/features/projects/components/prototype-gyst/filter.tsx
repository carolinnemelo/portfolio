"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";

export function Filter() {
  const [selectedPlatform, setSelectedPlatform] = useState("All");
  const platforms = ["All", "Instagram", "YouTube", "Twitch", "TikTok"];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 bg-white/30 backdrop-blur-lg rounded-md px-4 py-2 font-medium text-primary hover:bg-white/50 transition-colors shadow-sm">
        {selectedPlatform}
        <ChevronDown className="w-4 h-4" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="start"
        className="bg-white/30 backdrop-blur-lg shadow-sm"
      >
        {platforms.map((platform) => (
          <DropdownMenuItem
            key={platform}
            onClick={() => setSelectedPlatform(platform)}
            className={`${selectedPlatform === platform ? "bg-white/70" : ""}`}
          >
            {platform}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
