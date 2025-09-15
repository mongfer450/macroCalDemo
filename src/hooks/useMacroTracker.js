import { useState, useMemo } from 'react';
import { calculateCalories } from '../utils/calc';

export default function useMacroTracker() {
    const [dailyTarget, setDailyTarget] = useState({ proteins: 150, carbs: 300, fats: 67 });
    const [consumed, setConsumed] = useState({ proteins: 0, carbs: 0, fats: 0 });
    const [foodEntry, setFoodEntry] = useState({ name: '', proteins: '', carbs: '', fats: '' });
    const [showSetup, setShowSetup] = useState(false);
    const [tempTarget, setTempTarget] = useState(dailyTarget);
    const [foodHistory, setFoodHistory] = useState([]);

    const targetCalories = useMemo(
        () => calculateCalories(dailyTarget.proteins, dailyTarget.carbs, dailyTarget.fats),
        [dailyTarget]
    );
    const consumedCalories = useMemo(
        () => calculateCalories(consumed.proteins, consumed.carbs, consumed.fats),
        [consumed]
    );
    const remainingCalories = targetCalories - consumedCalories;

    const remaining = {
        proteins: dailyTarget.proteins - consumed.proteins,
        carbs: dailyTarget.carbs - consumed.carbs,
        fats: dailyTarget.fats - consumed.fats,
    };

    const handleAddFood = () => {
        if (!foodEntry.name || foodEntry.proteins === '' || foodEntry.carbs === '' || foodEntry.fats === '') {
            alert('กรุณากรอกข้อมูลให้ครบทุกช่อง');
            return;
        }
        const proteins = parseFloat(foodEntry.proteins) || 0;
        const carbs = parseFloat(foodEntry.carbs) || 0;
        const fats = parseFloat(foodEntry.fats) || 0;

        setConsumed(prev => ({
            proteins: prev.proteins + proteins,
            carbs: prev.carbs + carbs,
            fats: prev.fats + fats,
        }));

        setFoodHistory(prev => ([
            ...prev,
            {
                id: Date.now(),
                name: foodEntry.name,
                proteins,
                carbs,
                fats,
                time: new Date().toLocaleTimeString('th-TH', { hour: '2-digit', minute: '2-digit' }),
            },
        ]));

        setFoodEntry({ name: '', proteins: '', carbs: '', fats: '' });
    };

    const handleSaveTarget = () => {
        setDailyTarget(tempTarget);
        setShowSetup(false);
    };

    const resetDay = () => {
        setConsumed({ proteins: 0, carbs: 0, fats: 0 });
        setFoodHistory([]);
    };

    const removeFood = (foodId) => {
        const foodToRemove = foodHistory.find(f => f.id === foodId);
        if (!foodToRemove) return;
        setConsumed(prev => ({
            proteins: prev.proteins - foodToRemove.proteins,
            carbs: prev.carbs - foodToRemove.carbs,
            fats: prev.fats - foodToRemove.fats,
        }));
        setFoodHistory(prev => prev.filter(f => f.id !== foodId));
    };

    return {
        dailyTarget, setDailyTarget,
        consumed, setConsumed,
        foodEntry, setFoodEntry,
        showSetup, setShowSetup,
        tempTarget, setTempTarget,
        foodHistory, setFoodHistory,
        targetCalories, consumedCalories, remainingCalories,
        remaining,
        handleAddFood, handleSaveTarget, resetDay, removeFood,
    };
}
