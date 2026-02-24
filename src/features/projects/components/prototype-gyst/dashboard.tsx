"use client";

import { useState } from "react";
import { DashboardContent } from "./dashboard-content";
import { Navbar } from "./navbar";
import { ThemeProvider, useGystTheme } from "./theme-context";

function GystDashboardInner() {
  const { isDark } = useGystTheme();
    const [isAiActive, setIsAiActive] = useState(false);


  return (
    <div
      className={`flex flex-col h-screen transition-colors gap-6 ${
        isDark ? "bg-[#111823] text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <Navbar isAiActive={isAiActive} setIsAiActive={setIsAiActive} />
      <DashboardContent isAiActive={isAiActive} />
    </div>
  );
}

export function GystDashboard() {
  return (
    <ThemeProvider>
      <GystDashboardInner />
    </ThemeProvider>
  );
}
