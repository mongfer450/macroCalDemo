import useMacroTracker from "./hooks/useMacroTracker";
import Header from "./components/Header";
import { TotalCaloriesCard, MacroCard } from "./components/ProgressCard";
import FoodForm from "./components/FoodForm";
import FoodHistory from "./components/FoodHistory";
import SetupModal from "./components/SetupModal";

export default function MacroTracker() {
  const {
    dailyTarget,
    consumed,
    foodEntry,
    setFoodEntry,
    showSetup,
    setShowSetup,
    tempTarget,
    setTempTarget,
    foodHistory,
    targetCalories,
    consumedCalories,
    remainingCalories,
    handleAddFood,
    handleSaveTarget,
    resetDay,
    removeFood,
  } = useMacroTracker();

  return (
    <div className="max-w-4xl mx-auto p-4 min-h-screen">
      <div className="rounded-lg shadow-md p-6 mb-6">
        <Header
          onOpenSetup={() => {
            setTempTarget(dailyTarget);
            setShowSetup(true);
          }}
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <TotalCaloriesCard
            consumedCalories={consumedCalories}
            targetCalories={targetCalories}
            remainingCalories={remainingCalories}
          />
          <MacroCard
            label="โปรตีน"
            unit="g"
            consumed={consumed.proteins}
            target={dailyTarget.proteins}
          />
          <MacroCard
            label="คาร์โบไฮเดรต"
            unit="g"
            consumed={consumed.carbs}
            target={dailyTarget.carbs}
          />
          <MacroCard
            label="ไขมัน"
            unit="g"
            consumed={consumed.fats}
            target={dailyTarget.fats}
          />
        </div>

        <FoodForm
          foodEntry={foodEntry}
          setFoodEntry={setFoodEntry}
          onAdd={handleAddFood}
          onReset={resetDay}
        />

        <FoodHistory items={foodHistory} onRemove={removeFood} />
      </div>

      <SetupModal
        open={showSetup}
        onClose={() => setShowSetup(false)}
        tempTarget={tempTarget}
        setTempTarget={setTempTarget}
        onSave={handleSaveTarget}
      />
    </div>
  );
}
