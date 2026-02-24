"use client";

import { DatePicker } from "./date-picker";
import { CardSlider } from "./card-slider";
import { Filter } from "./filter";

export function DashboardContent({ isAiActive }: { isAiActive: boolean }) {
  return (
    <div className="px-6 space-y-6">
      <DatePicker />

      <h1 className="text-2xl font-bold text-slate-800">Welcome Fulana</h1>

      <CardSlider isAiActive={isAiActive} />
      <Filter />
    </div>
  );
}
