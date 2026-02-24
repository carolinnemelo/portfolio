"use client";

import { useState } from "react";
import { motion, PanInfo } from "framer-motion";
import { Sparkles } from "lucide-react";

const CARDS = [
  {
    title: "Revenue",
    amount: "$ 19 000",
    daily: "$ 1 250",
    percent: "5%",
    comparison: "More than last month",
    change: "$+187",
  },
  {
    title: "Expenses",
    amount: "$ 8 500",
    daily: "$ 850",
    percent: "3%",
    comparison: "Less than last month",
    change: "$-250",
  },
  {
    title: "Profit",
    amount: "$ 10 500",
    daily: "$ 400",
    percent: "8%",
    comparison: "More than last month",
    change: "$+437",
  },
];

export function CardSlider({ isAiActive }: { isAiActive: boolean }) {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x > 50 && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (info.offset.x < -50 && currentIndex < CARDS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  return (
    <div className="relative overflow-x-clip -mx-6 px-6">
      <motion.div
        className="flex gap-2"
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={0.1}
        onDragEnd={handleDragEnd}
        animate={{ x: `calc(-${currentIndex * 100}% - ${currentIndex * 8}px)` }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {CARDS.map((card, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Card {...card} isAiActive={isAiActive} />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

function Card({
  title,
  amount,
  daily,
  percent,
  comparison,
  change,
  isAiActive,
}: {
  title: string;
  amount: string;
  daily: string;
  percent: string;
  comparison: string;
  change: string;
  isAiActive: boolean;
}) {
  const isPositive = change.includes("+");
  const [isSparkleActive, setIsSparkleActive] = useState(false);

  return (
    <div className="h-[228px] bg-[#2D2F3E] rounded-2xl p-4 text-white flex flex-col justify-between">
      <div className="flex items-start justify-between">
        <h2 className="text-lg font-medium text-white">{title}</h2>
        {isAiActive && (
          <button onClick={()=> setIsSparkleActive(!isSparkleActive)}>
            {isSparkleActive ? (
              <Sparkles className="w-6 h-6 text-[#A9D615]" />
            ) : (
              <Sparkles className="w-6 h-6 text-slate-400" />
            )}
          </button>
        )}
      </div>

      <div className="flex-1 flex flex-col justify-center space-y-2">
        <h3 className="text-5xl font-bold text-[#A9D615]">{amount}</h3>
        <div className="flex items-center gap-2 text-sm">
          <span className="text-[#A9D615]">{daily}</span>
          <span className="text-slate-400">/day</span>
          <span className={isPositive ? "text-[#A9D615]" : "text-red-400"}>
            {isPositive ? "↗" : "↘"} {percent}
          </span>
          <span className="text-slate-400">{comparison}</span>
          <span className="text-slate-500 line-through">{change}</span>
        </div>
      </div>
      <div className="space-y-2">

        <p className="text-base">{"You're killing it."} </p>
      </div>
    </div>
  );
}
