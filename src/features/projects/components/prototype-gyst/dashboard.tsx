"use client";

import { DashboardContent } from "./dashboard-content";
import { Navbar } from "./navbar";
import { ThemeProvider, useGystTheme } from "./theme-context";

function GystDashboardInner() {
  const { isDark } = useGystTheme();

  return (
    <div
      className={`flex flex-col h-screen transition-colors gap-6 ${
        isDark ? "bg-[#111823] text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <Navbar />
      <DashboardContent />
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
