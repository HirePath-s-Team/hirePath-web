import { useMemo } from "react";
import { AppLayout } from "@/layouts/AppLayout";
import { ActivityHeatmap } from "@/components/ActivityHeatmap";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import { CompanyTag } from "@/components/CompanyTag";
import { TopicTag } from "@/components/TopicTag";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Flame, CalendarDays, Target, TrendingUp, ArrowUpRight, Zap, BookOpen, Clock, Sparkles } from "lucide-react";
import { generateHeatmapData, dashboardStats, readModuleTopics, verdictModuleTopics, recentQuestions, milestoneData } from "@/data/mockData";

const Dashboard = () => {
  const heatmapData = useMemo(() => generateHeatmapData(), []);
  const milestonePercent = Math.round((milestoneData.current / milestoneData.target) * 100);

  const coachCues = [
    {
      title: "Momentum",
      detail: "You are 2 sessions away from matching last week.",
      action: "Do one 45m focused set today.",
      tone: "primary",
      icon: Flame,
    },
    {
      title: "Weak Spot",
      detail: "Graphs accuracy dipped to 54% in recent attempts.",
      action: "Solve 2 BFS/DFS mediums.",
      tone: "medium",
      icon: Target,
    },
    {
      title: "Strength",
      detail: "Arrays are holding steady at 84% accuracy.",
      action: "Try one harder variant next.",
      tone: "easy",
      icon: Sparkles,
    },
  ];

  const todayPlan = [
    "Warm up: 2 easy arrays",
    "Main set: 1 graph medium",
    "Review: 1 missed DP",
  ];

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
          <div className="relative overflow-hidden rounded-[1.75rem] border border-border bg-gradient-to-br from-card via-secondary/45 to-accent/30 p-5 text-foreground shadow-xl md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_18%,hsl(var(--primary)/0.12),transparent_42%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_82%,hsl(var(--accent-glow)/0.18),transparent_34%)]" />
            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                <span>Today</span>
              </div>
              <h1 className="mt-2 text-3xl font-bold tracking-tight">
                Welcome back
              </h1>
              <p className="mt-2 max-w-lg text-muted-foreground">
                You have solved {dashboardStats.questionsSolved} problems and held a {dashboardStats.longestStreak}-day streak. Keep the momentum steady.
              </p>
              <div className="mt-6 flex items-center gap-3 overflow-x-auto pb-1">
                <StatPill icon={Zap} value={`${dashboardStats.longestStreak}`} label="Day Streak" />
                <StatPill icon={CheckCircle} value={`${dashboardStats.questionsSolved}`} label="Solved" />
                <StatPill icon={CalendarDays} value={`${dashboardStats.activeDays}`} label="Active Days" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm md:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-foreground">Today Focus</h2>
              <span className="text-xs text-muted-foreground">45-60 min</span>
            </div>
            <div className="mt-4 space-y-3 text-sm">
              {todayPlan.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-border bg-card/60 px-4 py-3 text-muted-foreground">
                  <span className="mt-0.5 h-2 w-2 rounded-full bg-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <button className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90">
              Start session
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <MetricCard icon={CheckCircle} value={dashboardStats.questionsSolved} label="Questions Solved" accent="primary" delta="+12 this week" />
          <MetricCard icon={Flame} value={`${dashboardStats.longestStreak} days`} label="Longest Streak" accent="medium" delta="Personal best" />
          <MetricCard icon={CalendarDays} value={dashboardStats.activeDays} label="Active Days" accent="easy" delta="Last 6 months" />
          <MetricCard icon={TrendingUp} value={`${dashboardStats.avgConfidence}/5`} label="Avg Confidence" accent="primary" delta="Improving" />
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm md:p-6">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <h2 className="text-base font-semibold text-foreground">Activity</h2>
              <p className="mt-0.5 text-xs text-muted-foreground">Your problem-solving consistency over the past year</p>
            </div>
          </div>
          <ActivityHeatmap data={heatmapData} />
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm md:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-foreground">Coach Cues</h2>
              <span className="text-xs text-muted-foreground">This week</span>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {coachCues.map((cue) => {
                const Icon = cue.icon;

                return (
                  <div key={cue.title} className="rounded-xl border border-border bg-card/60 px-4 py-3">
                    <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                      <Icon className={`h-4 w-4 ${cue.tone === "primary" ? "text-primary" : cue.tone === "easy" ? "text-[hsl(var(--difficulty-easy))]" : "text-[hsl(var(--difficulty-medium))]"}`} />
                      {cue.title}
                    </div>
                    <p className="mt-1 text-xs text-muted-foreground">{cue.detail}</p>
                    <div className="mt-2 text-xs text-primary">{cue.action}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm md:p-6">
            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <BookOpen className="h-4 w-4 text-primary" />
              </div>
              <h2 className="text-base font-semibold text-foreground">Read Progress</h2>
            </div>
            <div className="space-y-4">
              {readModuleTopics.map((t) => (
                <div key={t.topic}>
                  <div className="mb-1.5 flex items-center justify-between">
                    <span className="text-sm font-medium text-foreground">{t.topic}</span>
                    <span className="text-xs text-muted-foreground">
                      {t.count}/{t.total}
                    </span>
                  </div>
                  <Progress value={(t.count / t.total) * 100} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm md:p-6">
            <div className="mb-5 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[hsl(var(--accent-glow)/.14)]">
                <Target className="h-4 w-4 text-[hsl(var(--accent-glow))]" />
              </div>
              <h2 className="text-base font-semibold text-foreground">Topic Verdict</h2>
            </div>
            <div className="space-y-3.5">
              {verdictModuleTopics.map((t) => (
                <div key={t.topic} className="flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">{t.topic}</span>
                  <DifficultyBadge difficulty={t.color} />
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-card p-5 shadow-sm md:p-6">
            <div className="relative flex h-32 w-32 items-center justify-center">
              <svg className="h-full w-full -rotate-90" viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="50" fill="none" stroke="hsl(var(--muted) / .25)" strokeWidth="10" />
                <circle
                  cx="60"
                  cy="60"
                  r="50"
                  fill="none"
                  stroke="url(#milestoneGrad)"
                  strokeWidth="10"
                  strokeLinecap="round"
                  strokeDasharray={`${milestonePercent * 3.14} ${314 - milestonePercent * 3.14}`}
                />
                <defs>
                  <linearGradient id="milestoneGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--accent-glow))" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute flex flex-col items-center">
                <span className="text-3xl font-bold text-foreground">{milestonePercent}%</span>
              </div>
            </div>
            <div className="mt-5 text-center">
              <div className="flex items-center justify-center gap-2">
                <Target className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-foreground">{milestoneData.label}</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">
                {milestoneData.current} / {milestoneData.target} completed
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="p-5 pb-0 md:p-6 md:pb-0">
            <div className="mb-1 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
              <h2 className="text-base font-semibold text-foreground">Recent Questions</h2>
              <button className="flex items-center gap-1 text-xs font-medium text-primary hover:underline">
                View all <ArrowUpRight className="h-3 w-3" />
              </button>
            </div>
            <p className="text-xs text-muted-foreground">Your latest problem-solving activity</p>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground md:px-6">Problem</th>
                  <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground md:px-6">Topic</th>
                  <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground md:px-6">Companies</th>
                  <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground md:px-6">Difficulty</th>
                  <th className="px-4 py-3 text-xs font-medium uppercase tracking-wider text-muted-foreground md:px-6">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentQuestions.map((q) => (
                  <tr key={q.id} className="border-b border-border/50 transition-colors last:border-0 hover:bg-muted/5">
                    <td className="px-4 py-3.5 font-medium text-foreground md:px-6">{q.title}</td>
                    <td className="px-4 py-3.5 md:px-6"><TopicTag topic={q.topic} /></td>
                    <td className="px-4 py-3.5 md:px-6">
                      <div className="flex flex-wrap gap-1.5">
                        {q.companies.map((c) => (<CompanyTag key={c} company={c} />))}
                      </div>
                    </td>
                    <td className="px-4 py-3.5 md:px-6"><DifficultyBadge difficulty={q.difficulty} /></td>
                    <td className="px-4 py-3.5 md:px-6">
                      <span className={`text-xs font-semibold ${q.status === "solved" ? "text-[hsl(var(--difficulty-easy))]" : q.status === "review" ? "text-[hsl(var(--difficulty-medium))]" : "text-muted-foreground"}`}>
                        {q.status === "solved" ? "Solved" : q.status === "review" ? "Review" : "Attempted"}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

function StatPill({ icon: Icon, value, label }) {
  return (
    <div className="flex items-center gap-2 rounded-full border border-primary/10 bg-background/80 px-4 py-2 text-foreground shadow-sm backdrop-blur-sm">
      <Icon className="h-4 w-4 text-primary" />
      <span className="text-sm font-bold">{value}</span>
      <span className="text-xs text-muted-foreground">{label}</span>
    </div>
  );
}

function MetricCard({ icon: Icon, value, label, accent, delta }) {
  const accentMap = {
    primary: { bg: "bg-primary/10", text: "text-primary" },
    easy: { bg: "bg-[hsl(var(--difficulty-easy)/.1)]", text: "text-[hsl(var(--difficulty-easy))]" },
    medium: { bg: "bg-[hsl(var(--difficulty-medium)/.1)]", text: "text-[hsl(var(--difficulty-medium))]" },
    hard: { bg: "bg-[hsl(var(--difficulty-hard)/.1)]", text: "text-[hsl(var(--difficulty-hard))]" },
  };

  const a = accentMap[accent];

  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-shadow hover:shadow-md">
      <div className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${a.bg}`}>
        <Icon className={`h-5 w-5 ${a.text}`} />
      </div>
      <div className="text-2xl font-bold text-foreground">{value}</div>
      <div className="mt-0.5 text-sm text-muted-foreground">{label}</div>
      {delta && <div className="mt-1 text-xs text-muted-foreground/70">{delta}</div>}
    </div>
  );
}

export default Dashboard;
