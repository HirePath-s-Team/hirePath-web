// Mock data for the dashboard
export function generateHeatmapData() {
    const data = [];
    const today = new Date();
    for (let i = 364; i >= 0; i--) {
        const d = new Date(today);
        d.setDate(d.getDate() - i);
        const key = d.toISOString().slice(0, 10);
        // Weighted random: more likely low values
        const rand = Math.random();
        let count = 0;
        if (rand > 0.35)
            count = Math.floor(Math.random() * 3);
        if (rand > 0.7)
            count = Math.floor(Math.random() * 5) + 2;
        if (rand > 0.9)
            count = Math.floor(Math.random() * 4) + 6;
        data.push({ date: key, count });
    }
    return data;
}
export const dashboardStats = {
    questionsSolved: 187,
    longestStreak: 23,
    activeDays: 94,
    reviewQueue: 12,
    avgConfidence: 3.7,
};
export const readModuleTopics = [
    { topic: "Arrays & Hashing", count: 34, total: 50 },
    { topic: "Two Pointers", count: 18, total: 25 },
    { topic: "Sliding Window", count: 12, total: 20 },
    { topic: "Stack", count: 8, total: 15 },
    { topic: "Binary Search", count: 15, total: 30 },
];
export const verdictModuleTopics = [
    { topic: "Trees", verdict: "Strong", color: "easy" },
    { topic: "Dynamic Programming", verdict: "Weak", color: "hard" },
    { topic: "Graphs", verdict: "Moderate", color: "medium" },
    { topic: "Greedy", verdict: "Strong", color: "easy" },
    { topic: "Backtracking", verdict: "Weak", color: "hard" },
];
export const recentQuestions = [
    { id: "1", title: "Two Sum", difficulty: "easy", companies: ["Google", "Amazon"], topic: "Arrays", status: "solved" },
    { id: "2", title: "LRU Cache", difficulty: "hard", companies: ["Meta", "Microsoft"], topic: "Design", status: "solved" },
    { id: "3", title: "Valid Parentheses", difficulty: "easy", companies: ["Bloomberg"], topic: "Stack", status: "solved" },
    { id: "4", title: "Merge Intervals", difficulty: "medium", companies: ["Google", "Meta"], topic: "Arrays", status: "review" },
    { id: "5", title: "Word Break", difficulty: "medium", companies: ["Amazon", "Apple"], topic: "DP", status: "solved" },
    { id: "6", title: "Trapping Rain Water", difficulty: "hard", companies: ["Goldman Sachs"], topic: "Two Pointers", status: "attempted" },
];
export const milestoneData = {
    current: 187,
    target: 250,
    label: "Solve 250 Problems",
};
