import { Goal, Task } from '../types';

export const calculateStreak = (tasks: Task[]): number => {
    if (tasks.length === 0) return 0;

    // Filter only completed tasks and sort by date descending
    const completedTasks = tasks
        .filter(t => t.completed && t.deadline) // Assuming we use deadline as "completion date" for simulated streak, or created/update time. 
        // Ideally we'd have a 'completedAt' field. For this MVP, let's assume if it's completed, we use the deadline date or creation date?
        // User didn't specify 'completedAt'. Let's strictly check based on 'deadline' dates if they were "done on that day".
        // Better yet, let's assume tasks done today count for today. 
        // Since we don't have 'completedAt', calculating a REAL streak is hard.
        // Let's degrade gracefully: Streak = "Count of tasks completed"? No.
        // Let's use `updatedAt` if we had it. We don't.
        // Let's use `deadline` as a proxy for "Day this task was for".
        .sort((a, b) => new Date(b.deadline || 0).getTime() - new Date(a.deadline || 0).getTime());

    if (completedTasks.length === 0) return 0;

    let streak = 0;
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);

    // Get unique dates from completed tasks
    const uniqueDates = Array.from(new Set(completedTasks.map(t => {
        const d = new Date(t.deadline || 0); // Warning: this logic is flawed if users don't set deadlines.
        d.setHours(0, 0, 0, 0);
        return d.getTime();
    }))).sort((a, b) => b - a);

    // Check if today (or yesterday) has a completed task
    const todayTime = currentDate.getTime();
    const yesterdayTime = todayTime - 86400000;

    if (uniqueDates.length === 0) return 0;

    const lastCompletedDate = uniqueDates[0];

    // If no task done today OR yesterday, streak is broken (0).
    if (lastCompletedDate !== todayTime && lastCompletedDate !== yesterdayTime) {
        return 0;
    }

    // Count consecutive days
    // Iterate backwards? No, we have sorted Descending.
    let expectedDate = lastCompletedDate;
    streak = 1;

    for (let i = 1; i < uniqueDates.length; i++) {
        const prevDate = expectedDate - 86400000;
        if (uniqueDates[i] === prevDate) {
            streak++;
            expectedDate = prevDate;
        } else {
            break;
        }
    }

    return streak;
};

export const calculateCompletionRates = (goals: Goal[], tasks: Task[]) => {
    const totalGoals = goals.length;
    const completedGoals = goals.filter(g => g.completed).length; // Wait, Goal doesn't have 'completed' auto-calculation in Context yet. Defaulted false.

    // Let's infer goal completion? Or use the field?
    // Let's use the field we defined in types, assuming manual toggle or we need to auto-update it.
    // Currently no auto-update. Let's rely on tasks count for "Overall Progress".

    const totalTasks = tasks.length;
    const completedTasks = tasks.filter(t => t.completed).length;

    return {
        totalGoals,
        completedGoals,  // This might be 0 if we never toggle it.
        totalTasks,
        completedTasks,
        overallPercentage: totalTasks > 0 ? (completedTasks / totalTasks) : 0
    };
};

export const getWeeklyProgress = (tasks: Task[]) => {
    // Return array of 7 days with counts of completed tasks
    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 6; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i); // Go back i days
        const dayTime = d.getTime();

        const count = tasks.filter(t => {
            if (!t.completed || !t.deadline) return false;
            const taskDate = new Date(t.deadline);
            taskDate.setHours(0, 0, 0, 0);
            return taskDate.getTime() === dayTime;
        }).length;

        days.push({
            label: d.toLocaleDateString('en-US', { weekday: 'short' }),
            count,
            date: d
        });
    }
    return days;
};
