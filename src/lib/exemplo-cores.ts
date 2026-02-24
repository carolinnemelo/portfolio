// COMO USAR AS CORES DO GYST

import { COLORS } from "./colors";
import { NAVBAR } from "./gyst-constants";

// 1. Usar cores diretas
const minhaDiv = {
  background: COLORS.green, // "#A9D615"
  color: COLORS.white, // "#FFFFFF"
};

// 2. Usar constantes do navbar
const meuToggle = {
  width: NAVBAR.toggleWidth, // "52px"
  height: NAVBAR.toggleHeight, // "25px"
  background: NAVBAR.toggleGray, // "#484851"
};

// 3. Com light/dark mode
import { getColor } from "./colors";

const isDark = true; // ou false
const cores = getColor(isDark);
// cores.background = "#111823" (se dark)
// cores.text = "#FFFFFF" (se dark)
// cores.accent = "#A9D615" (sempre verde)

// É ISSO! Simples assim.
