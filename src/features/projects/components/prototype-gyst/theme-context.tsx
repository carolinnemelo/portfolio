"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type GystTheme = "light" | "dark";

interface GystThemeContextType {
  theme: GystTheme;
  toggleTheme: () => void;
  isDark: boolean;
}

const GystThemeContext = createContext<GystThemeContextType | undefined>(
  undefined,
);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<GystTheme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <GystThemeContext.Provider
      value={{
        theme,
        toggleTheme,
        isDark: theme === "dark",
      }}
    >
      {children}
    </GystThemeContext.Provider>
  );
}

export function useGystTheme() {
  const context = useContext(GystThemeContext);
  if (!context) {
    throw new Error("useGystTheme must be used within GystThemeProvider");
  }
  return context;
}
