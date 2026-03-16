export const analyticsSummary = {
  focusScore: 78,
  weeklyGoal: { target: 20, completed: 12 },
  streak: { current: 6, longest: 18 },
  avgSessionMins: 38,
  confidenceAvg: 3.7,
};

export const coachingSignals = [
  {
    title: "Momentum Risk",
    tone: "warning",
    description: "Your sessions dropped 32% this week. One strong session today keeps your streak healthy.",
    action: "Schedule a 45-minute block today.",
  },
  {
    title: "Topic Gap",
    tone: "neutral",
    description: "Graphs and DP show the lowest accuracy in the last 10 attempts.",
    action: "Do 3 graph traversals + 2 DP warmups.",
  },
  {
    title: "Strength",
    tone: "positive",
    description: "Arrays + Two Pointers are consistent at 84% accuracy.",
    action: "Move to medium-hard variants next.",
  },
];

export const nextActions = [
  { label: "Finish 5 unsolved mediums", detail: "Priority based on recent misses.", eta: "60-90m" },
  { label: "Review 3 DP patterns", detail: "Knapsack, LIS, interval DP.", eta: "45m" },
  { label: "1 mock interview set", detail: "Timed, 2 questions.", eta: "50m" },
];

export const masteryGaps = [
  { topic: "Graphs", accuracy: 41, recent: 9, target: 65 },
  { topic: "Dynamic Programming", accuracy: 46, recent: 8, target: 65 },
  { topic: "Binary Search", accuracy: 54, recent: 7, target: 70 },
];

export const strengths = [
  { topic: "Arrays", accuracy: 86 },
  { topic: "Two Pointers", accuracy: 84 },
  { topic: "Hash Maps", accuracy: 81 },
];

export const weeklyPlan = [
  { day: "Mon", focus: "Graphs", tasks: ["BFS/DFS fundamentals", "2 medium problems"] },
  { day: "Tue", focus: "DP", tasks: ["1D DP review", "1 medium + 1 hard"] },
  { day: "Wed", focus: "Mocks", tasks: ["Timed set", "Post-mortem notes"] },
  { day: "Thu", focus: "Binary Search", tasks: ["Templates", "2 medium"] },
  { day: "Fri", focus: "Revision", tasks: ["Revisit misses", "Speed run 4 easies"] },
];

export const recentWork = [
  { title: "Two Sum", status: "solved", time: "18m", confidence: "4/5", when: "Today" },
  { title: "Longest Substring", status: "attempted", time: "32m", confidence: "3/5", when: "Yesterday" },
  { title: "Number of Islands", status: "review", time: "26m", confidence: "3/5", when: "2d ago" },
  { title: "Coin Change", status: "attempted", time: "44m", confidence: "2/5", when: "3d ago" },
];

export const pendingTargets = [
  { label: "Complete Roadmap: Graphs", progress: 58 },
  { label: "Solve 100 Mediums", progress: 42 },
  { label: "Streak Goal: 21 days", progress: 28 },
];
