import { Plus, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function FoodForm({ foodEntry, setFoodEntry, onAdd, onReset }) {
  const [isVisible, setIsVisible] = useState(true); // toggle ทั้งคอมโพเนนต์

  // ถ้าไม่ visible → return ปุ่มกดโชว์ฟอร์มอย่างเดียว
  if (!isVisible) {
    return (
      <div className="mb-6 flex justify-center">
        <button
          onClick={() => setIsVisible(true)}
          className="flex items-center gap-1 text-sm text-white hover:underline"
        >
          <ChevronDown className="w-4 h-4" />
          บันทึกอาหาร
        </button>
      </div>
    );
  }

  // ถ้า visible → render ฟอร์ม + ปุ่มซ่อน
  return (
    <div className="p-4 rounded-lg mb-6 text-black bg-gradient-to-r border border-black">
      {/* Header + toggle button */}
      <div className="flex items-center justify-between mb-3">
        <h2 className="font-semibold text-gray-800 flex items-center gap-2">
          <Plus className="w-5 h-5" />
          เพิ่มอาหาร
        </h2>
        <button
          onClick={() => setIsVisible(false)}
          className="flex items-center gap-1 text-sm text-white hover:underline"
        >
          ซ่อนฟอร์ม <ChevronUp className="w-4 h-4" />
        </button>
      </div>

      {/* Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 mb-3">
        <input
          type="text"
          placeholder="ชื่ออาหาร"
          value={foodEntry.name}
          onChange={(e) =>
            setFoodEntry((prev) => ({ ...prev, name: e.target.value }))
          }
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="โปรตีน (g)"
          value={foodEntry.proteins}
          onChange={(e) =>
            setFoodEntry((prev) => ({ ...prev, proteins: e.target.value }))
          }
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="คาร์บ (g)"
          value={foodEntry.carbs}
          onChange={(e) =>
            setFoodEntry((prev) => ({ ...prev, carbs: e.target.value }))
          }
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="number"
          placeholder="ไขมัน (g)"
          value={foodEntry.fats}
          onChange={(e) =>
            setFoodEntry((prev) => ({ ...prev, fats: e.target.value }))
          }
          className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex gap-2">
        <button
          onClick={onAdd}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          เพิ่มอาหาร
        </button>
        <button
          onClick={onReset}
          className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-lg transition-colors"
        >
          รีเซ็ตวันใหม่
        </button>
      </div>
    </div>
  );
}
