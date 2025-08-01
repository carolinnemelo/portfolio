"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type FeatureCardProps = {
  icon: ReactNode;
  iconClassName?: string;
  title: string;
  description: string | ReactNode;
  className?: string;
  gradientFrom?: string;
  gradientTo?: string;
};

export function FeatureCard({
  icon,
  iconClassName = "text-accent",
  title,
  description,
  className = "",
  gradientFrom = "blue-500",
  gradientTo = "cyan-400",
}: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all relative overflow-hidden ${className}`}
    >
      {/* Gradient bar on top using inline style to avoid hydration mismatch */}
      <div
        className="absolute top-0 left-0 w-full h-1"
        style={{
          background: `linear-gradient(to right, var(--tw-gradient-from-${gradientFrom}) 0%, var(--tw-gradient-to-${gradientTo}) 100%)`,
        }}
      />

      <div className={`${iconClassName} mb-4`}>{icon}</div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      {typeof description === "string" ? (
        <p className="text-slate-600">{description}</p>
      ) : (
        description
      )}
    </motion.div>
  );
}