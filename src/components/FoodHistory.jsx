export default function FoodHistory({ items, onRemove }) {
  if (!items.length) return null;
  return (
    <div className="p-4 rounded-lg bg-gradient-to-r border border-black">
      <h2 className="font-semibold text-gray-800 mb-3">อาหารที่กินวันนี้</h2>
      <div className="space-y-2">
        {items.map((food) => (
          <div
            key={food.id}
            className="bg-gradient-to-r border border-black p-3 rounded-lg flex-inline items-center group"
          >
            <div>
              <span className="font-medium text-gray-800">{food.name}</span>
              <span className="text-sm text-gray-500 ml-2">({food.time})</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                P: {food.proteins}g | C: {food.carbs}g | F: {food.fats} | kcal:{" "}
                {food.proteins * 4 + food.carbs * 4 + food.fats * 9}
              </div>
              <button
                className="!bg-gray-300  !mr-5 !px-3 hover:!bg-gray-800 !transition !duration-200"
                onClick={() => onRemove(food.id)}
                title="ลบอาหาร"
              >
                🗑️
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
