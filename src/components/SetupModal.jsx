export default function SetupModal({
  open,
  onClose,
  tempTarget,
  setTempTarget,
  onSave,
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 text-black bg-gradient-to-r border border-black">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          ตั้งค่าเป้าหมายรายวัน
        </h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1 ">
              โปรตีน (กรัม)
            </label>
            <input
              type="number"
              value={tempTarget.proteins}
              onChange={(e) =>
                setTempTarget((prev) => ({
                  ...prev,
                  proteins: parseInt(e.target.value) || 0,
                }))
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              คาร์โบไฮเดรต (กรัม)
            </label>
            <input
              type="number"
              value={tempTarget.carbs}
              onChange={(e) =>
                setTempTarget((prev) => ({
                  ...prev,
                  carbs: parseInt(e.target.value) || 0,
                }))
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1">
              ไขมัน (กรัม)
            </label>
            <input
              type="number"
              value={tempTarget.fats}
              onChange={(e) =>
                setTempTarget((prev) => ({
                  ...prev,
                  fats: parseInt(e.target.value) || 0,
                }))
              }
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex gap-3 mt-6">
          <button
            onClick={onSave}
            className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-colors"
          >
            บันทึก
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg transition-colors"
          >
            ยกเลิก
          </button>
        </div>
      </div>
    </div>
  );
}
