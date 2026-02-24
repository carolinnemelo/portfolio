/**
 * Cores do Dashboard Gyst
 * Simples e direto - use como quiser!
 */

// Cores principais
export const COLORS = {
  // Verde principal
  green: "#A9D615",

  // Cinza do navbar
  navbarBg: "#25252E",

  // Toggle
  toggleGray: "#484851",
  toggleButton: "#E5E5E6",

  // Ícones
  white: "#FFFFFF",

  // Background
  bgLight: "#FFFFFF",
  bgDark: "#111823",
} as const;

// Se você precisa de light/dark mode
export function getColor(isDark: boolean) {
  return {
    background: isDark ? COLORS.bgDark : COLORS.bgLight,
    text: isDark ? COLORS.white : "#111827",
    accent: COLORS.green,
  };
}
