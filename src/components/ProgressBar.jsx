export default function ProgressBar({ remaining, target, barClass }) {
  const safeTarget = Math.max(target, 1);
  const percent = Math.min(((target - remaining) / safeTarget) * 100, 100);
  return (
    <div className="w-full bg-gray-200 rounded-full h-3 mb-2 ">
      <div
        className={`h-3 rounded-full transition-all duration-300 ${barClass}`}
        style={{ width: `${Math.max(0, percent)}%` }}
      />
    </div>
  );
}
