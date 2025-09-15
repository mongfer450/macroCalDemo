// โปรตีน/คาร์บ = 4 kcal/g, ไขมัน = 9 kcal/g
export const calculateCalories = (p, c, f) => (p * 4) + (c * 4) + (f * 9);

export const getProgressColor = (remaining, target) => {
    const percentage = ((target - remaining) / Math.max(target, 1)) * 100;
    if (percentage >= 100) return 'bg-red-600';
    if (percentage >= 75) return 'bg-yellow-600';
    return 'bg-green-600';
};

export const getProgressWidth = (remaining, target) => {
    const percentage = Math.min(((target - remaining) / Math.max(target, 1)) * 100, 100);
    return `${Math.max(0, percentage)}%`;
};
