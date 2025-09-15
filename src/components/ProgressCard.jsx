import ProgressBar from "./ProgressBar";
import { getProgressColor, getProgressWidth } from "../utils/calc";

export function TotalCaloriesCard({
  consumedCalories,
  targetCalories,
  remainingCalories,
}) {
  return (
    <div className=" p-4 rounded-lg bg-gradient-to-r border border-black">
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold text-gray-700">แคลอรี่รวม</span>
        <span className="text-sm text-gray-500">
          {Math.round(consumedCalories)}/{Math.round(targetCalories)} kcal
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
        <div
          className={`h-3 rounded-full transition-all duration-300 ${getProgressColor(
            remainingCalories,
            targetCalories
          )}`}
          style={{ width: getProgressWidth(remainingCalories, targetCalories) }}
        />
      </div>
      <div className="text-sm ">
        <span
          className={
            remainingCalories >= 0 ? "text-gray-600  " : "text-red-600 "
          }
        >
          {remainingCalories >= 0
            ? `เหลือ ${Math.round(remainingCalories)}`
            : `เกิน ${Math.round(Math.abs(remainingCalories))}`}{" "}
          kcal
        </span>
      </div>
    </div>
  );
}

export function MacroCard({ label, unit, consumed, target }) {
  const remaining = target - consumed;
  return (
    <div className="bg-gradient-to-r border border-black p-4 rounded-lg">
      <div className="flex justify-between items-center mb-2">
        <span className="font-bold text-gray-700">{label}</span>
        <span className="text-sm text-gray-500">
          {consumed}/{target} {unit}
        </span>
      </div>
      <ProgressBar
        remaining={remaining}
        target={target}
        barClass={getProgressColor(remaining, target)}
      />
      <div className="text-sm">
        <span className={remaining >= 0 ? "text-gray-600 " : "text-red-600"}>
          {remaining >= 0
            ? `เหลือ ${remaining}`
            : `เกิน ${Math.abs(remaining)}`}{" "}
          {unit}
        </span>
      </div>
    </div>
  );
}
