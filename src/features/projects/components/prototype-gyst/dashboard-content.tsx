import { DatePicker } from "./date-picker";
import { CardSlider } from "./card-slider";



export function DashboardContent({ isAiActive }: { isAiActive: boolean }) {
  return (
    <div className="px-6 space-y-6">
      {/* Dashboard content goes here */}
      <DatePicker />
      <h1>Welcome Fulana</h1>
      <CardSlider isAiActive={isAiActive} />
    </div>
  );
}
