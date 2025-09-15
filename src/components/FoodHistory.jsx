export default function FoodHistory({ items, onRemove }) {
  if (!items.length) return null;
  return (
    <div className="p-4 rounded-lg bg-gradient-to-r border border-black">
      <h2 className="font-semibold text-gray-800 mb-3">อาหารที่กินวันนี้</h2>
      <div className="space-y-2">
        {items.map((food) => (
          <div
            key={food.id}
            className="bg-white p-3 rounded-lg flex justify-between items-center group"
          >
            <div>
              <span className="font-medium text-gray-800">{food.name}</span>
              <span className="text-sm text-gray-500 ml-2">({food.time})</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-sm text-gray-600">
                P: {food.proteins}g | C: {food.carbs}g | F: {food.fats}g
              </div>
              <button
                onClick={() => onRemove(food.id)}
                className="opacity-0 group-hover:opacity-100 transition-opacity bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold"
                title="ลบอาหาร"
              >
                ×
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
