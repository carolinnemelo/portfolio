// Mapeamento de labels para ícones lucide-react
// Você pode customizar os ícones aqui

import {
  User,
  Target,
  ListTodo,
  Clock,
  Users,
  Lightbulb,
  Zap,
  Code,
  Palette,
  Globe,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Role: User,
  Focus: Target,
  Scope: ListTodo,
  Timeline: Clock,
  Collaboration: Users,
  Insights: Lightbulb,
  Performance: Zap,
  Technology: Code,
  Design: Palette,
  Deployment: Globe,
};

export function getIconForLabel(
  label: string | undefined | null,
): LucideIcon | null {
  if (!label) {
    console.log("getIconForLabel: label é nulo/undefined");
    return null;
  }

  // Remove invisible/zero-width characters from stega encoding
  const cleanLabel = label
    .replace(/[\u200B-\u200F\u061C\u180E\u2061-\u2064\u2066-\u2069\uFEFF]/g, "") // Zero-width chars
    .trim();

  console.log("Label limpo:", cleanLabel);
  const result =
    iconMap[cleanLabel] ||
    iconMap[cleanLabel.charAt(0).toUpperCase() + cleanLabel.slice(1)] ||
    null;
  console.log("Resultado para", cleanLabel, ":", result);
  return result;
}

export function getAllAvailableLabels(): string[] {
  return Object.keys(iconMap);
}
