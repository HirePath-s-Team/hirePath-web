export const blogPosts = [
  {
    slug: "building-dynamic-forms-in-react",
    title: "Building Dynamic Forms in React",
    category: "Frontend",
    excerpt:
      "Learn how to create powerful, reusable form flows using hooks, schema validation, and dynamic field arrays.",
    author: "Sarah Lee",
    date: "Apr 20, 2024",
    tags: ["JavaScript", "React", "Frontend"],
    minutes: 8,
    heroTheme: "from-secondary via-background to-accent",
    imageTheme: "from-secondary via-card to-accent",
    sections: [
      {
        heading: "Why dynamic forms matter",
        body:
          "Interview apps, intake flows, and analytics dashboards all depend on flexible forms. Dynamic inputs let you adapt to user context without reinventing each screen.",
      },
      {
        heading: "A reliable data model",
        body:
          "Use a schema-first approach to define fields, validations, and UI intent. That schema becomes the single source of truth for both rendering and validation.",
      },
      {
        heading: "Design patterns that scale",
        body:
          "Combine field arrays with reusable input components and a consistent error model. This keeps the UI predictable even when forms grow in complexity.",
      },
    ],
    code: `const form = useForm({
  defaultValues: {
    steps: [{ title: "", description: "" }],
  },
});

const { fields, append, remove } = useFieldArray({
  control: form.control,
  name: "steps",
});`,
  },
  {
    slug: "ace-coding-interviews-at-amazon",
    title: "Ace Coding Interviews at Amazon",
    category: "Interview Prep",
    excerpt:
      "A focused playbook for Amazon interviews: what to practice, how to communicate, and where candidates typically stumble.",
    author: "Daniel Brown",
    date: "Apr 16, 2024",
    tags: ["Interview", "Algorithms", "Leadership"],
    minutes: 6,
    heroTheme: "from-primary/15 via-background to-secondary/80",
    imageTheme: "from-secondary via-background to-primary/15",
    sections: [
      {
        heading: "Understand the bar",
        body:
          "Amazon values clarity and ownership. Your approach matters as much as the final answer, especially during system design rounds.",
      },
      {
        heading: "Practice narrative structure",
        body:
          "Use a repeatable structure: clarify, outline, solve, evaluate. This makes your thinking visible and easy to follow.",
      },
      {
        heading: "Leadership principles in practice",
        body:
          "Tie your technical decisions to customer impact, scaling concerns, and operational readiness. This signals senior thinking.",
      },
    ],
    code: `Framework:
1. Clarify requirements
2. Propose approach
3. Implement cleanly
4. Analyze complexity`,
  },
  {
    slug: "top-10-algorithms-to-master",
    title: "Top 10 Algorithms to Master for Coding Interviews",
    category: "Algorithms",
    excerpt:
      "A curated list of the most common algorithm patterns with practical ways to practice them efficiently.",
    author: "Mark Stevenson",
    date: "Apr 10, 2024",
    tags: ["Algorithms", "Patterns", "Practice"],
    minutes: 7,
    heroTheme: "from-accent via-background to-secondary",
    imageTheme: "from-accent via-card to-secondary",
    sections: [
      {
        heading: "Pattern recognition beats memorization",
        body:
          "Focus on identifying repeatable patterns: two pointers, sliding window, BFS/DFS, and dynamic programming.",
      },
      {
        heading: "Create a spaced practice loop",
        body:
          "Rotate through patterns weekly and track your error types. You’ll improve faster than grinding random problems.",
      },
    ],
    code: `Focus patterns:
• Two pointers
• Sliding window
• BFS / DFS
• DP (1D + 2D)`,
  },
  {
    slug: "behavioral-questions-candidates-should-prepare",
    title: "Behavioral Interview Questions Every Candidate Should Prepare For",
    category: "Behavioral",
    excerpt:
      "Prepare for the most common behavioral questions with a clear storytelling framework.",
    author: "Emily Parker",
    date: "Apr 2, 2024",
    tags: ["Behavioral", "Storytelling", "Leadership"],
    minutes: 5,
    heroTheme: "from-secondary/80 via-background to-primary/12",
    imageTheme: "from-secondary via-card to-primary/15",
    sections: [
      {
        heading: "Use a crisp STAR format",
        body:
          "Keep your story tight by focusing on Situation, Task, Action, and Result. Highlight your role and impact.",
      },
      {
        heading: "Prepare outcome metrics",
        body:
          "Quantify results where possible to anchor your story in measurable outcomes.",
      },
    ],
    code: `STAR example:
Situation: ...
Task: ...
Action: ...
Result: ...`,
  },
  {
    slug: "three-hash-map-problems-to-know",
    title: "Three Hash Map Problems You Should Know How To Solve",
    category: "Data Structures",
    excerpt:
      "Three classic hash map prompts with the reasoning patterns interviewers expect to see.",
    author: "Alex Rodriguez",
    date: "Mar 15, 2024",
    tags: ["Hash Map", "Interview", "Practice"],
    minutes: 4,
    heroTheme: "from-accent/90 via-background to-primary/10",
    imageTheme: "from-accent via-card to-primary/15",
    sections: [
      {
        heading: "Leverage constant-time lookup",
        body:
          "Hash maps let you track counts, last seen indexes, or pairs in linear time.",
      },
      {
        heading: "Explain tradeoffs",
        body:
          "Communicate why you trade space for time and how that impacts complexity.",
      },
    ],
    code: `Use a map to store value -> index.
Check complements before insert.`,
  },
];
