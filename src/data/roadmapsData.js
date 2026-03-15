export const roadmaps = [
  {
    id: "faang-swe",
    title: "FAANG SWE Path",
    duration: "8-Week Plan",
    progress: 33,
    accent: "from-[#4b7bff] to-[#7d5cff]",
    items: ["Arrays", "Trees", "System Design", "Greedy Algorithms"],
    overview:
      "A focused path for SWE interviews covering core data structures, algorithm patterns, and foundational system design.",
    weeks: [
      { title: "Week 1", focus: "Arrays + Hashing", items: ["Two Sum", "Sliding Window", "Prefix Sums"] },
      { title: "Week 2", focus: "Trees + Graphs", items: ["BFS / DFS", "Binary Trees", "Topological Sort"] },
      { title: "Week 3", focus: "Dynamic Programming", items: ["1D DP", "2D DP", "Optimization patterns"] },
      { title: "Week 4", focus: "System Design Foundations", items: ["CAP", "Caching", "Queues"] },
    ],
  },
  {
    id: "backend",
    title: "Backend Developer Path",
    duration: "6-Week Plan",
    progress: 56,
    accent: "from-[#f2a454] to-[#a2693d]",
    items: ["Databases", "APIs", "Caching", "Scalability"],
    overview:
      "Backend fundamentals with emphasis on APIs, data modeling, and scalable architecture decisions.",
    weeks: [
      { title: "Week 1", focus: "Databases", items: ["Indexes", "Transactions", "Modeling"] },
      { title: "Week 2", focus: "API Design", items: ["REST patterns", "Auth", "Pagination"] },
      { title: "Week 3", focus: "Caching", items: ["Redis", "Cache invalidation", "TTL"] },
      { title: "Week 4", focus: "Scale & Reliability", items: ["Queues", "Rate limiting", "Monitoring"] },
    ],
  },
  {
    id: "system-design",
    title: "System Design Sprint",
    duration: "4-Week Plan",
    progress: 25,
    accent: "from-[#7d5cff] to-[#4b7bff]",
    items: ["Load Balancing", "Sharding", "Caching", "Scalability"],
    overview:
      "Rapid system design refresh to get fluent with tradeoffs, scaling strategies, and architecture diagrams.",
    weeks: [
      { title: "Week 1", focus: "Traffic + Load Balancing", items: ["L4 vs L7", "Health checks", "CDN"] },
      { title: "Week 2", focus: "Storage + Sharding", items: ["Partitioning", "Replication", "Consistency"] },
      { title: "Week 3", focus: "Caching Layers", items: ["Edge cache", "DB cache", "Warmups"] },
      { title: "Week 4", focus: "Reliability", items: ["SLOs", "Backpressure", "Failover"] },
    ],
  },
  {
    id: "startup-crash",
    title: "Startup Crash Course",
    duration: "Accelerated 3 Week Plan",
    progress: 50,
    accent: "from-[#58d3b0] to-[#3b6f64]",
    items: ["Arrays", "SQL", "API Design", "Microservices"],
    overview:
      "Accelerated prep across core SWE and backend topics for fast-moving startup interviews.",
    weeks: [
      { title: "Week 1", focus: "Core DS/Algo", items: ["Arrays", "Two pointers", "Sorting"] },
      { title: "Week 2", focus: "Backend APIs", items: ["REST", "Auth", "Rate limits"] },
      { title: "Week 3", focus: "System Design Lite", items: ["Caching", "Queues", "Microservices"] },
    ],
  },
];
