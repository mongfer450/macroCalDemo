import { Settings, Target } from "lucide-react";

export default function Header({ onOpenSetup }) {
  return (
    <div className="flex items-center justify-between mb-4">
      <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2 ">
        Macro Tracker
      </h1>
      <button
        onClick={onOpenSetup}
        className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg transition-colors"
      >
        <Settings className="w-4 h-4" />
        Setup
      </button>
    </div>
  );
}
