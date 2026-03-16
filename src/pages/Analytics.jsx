import { AppLayout } from "@/layouts/AppLayout";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, Flame, Target, TrendingUp, AlertTriangle, BookOpen, Clock } from "lucide-react";
import {
  analyticsSummary,
  coachingSignals,
  nextActions,
  masteryGaps,
  strengths,
  weeklyPlan,
  recentWork,
  pendingTargets,
} from "@/data/analyticsData";

export default function Analytics() {
  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Analytics</h1>
            <p className="text-sm text-muted-foreground">
              Your personal coach view - what you did, what's missing, and the next push.
            </p>
          </div>
          <Button variant="outline" size="sm" className="border-border">
            Generate weekly plan
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <MetricCard title="Focus Score" value={`${analyticsSummary.focusScore}%`} note="Based on consistency + completion" icon={Target} />
          <MetricCard title="Weekly Goal" value={`${analyticsSummary.weeklyGoal.completed}/${analyticsSummary.weeklyGoal.target}`} note="Questions this week" icon={CheckCircle2} />
          <MetricCard title="Streak" value={`${analyticsSummary.streak.current} days`} note={`Longest ${analyticsSummary.streak.longest} days`} icon={Flame} />
          <MetricCard title="Avg Session" value={`${analyticsSummary.avgSessionMins}m`} note="Session length" icon={Clock} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-4">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm md:p-6">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-base font-semibold text-foreground">Coach Signals</h2>
                <p className="text-xs text-muted-foreground mt-1">
                  The three most important signals from your recent work.
                </p>
              </div>
              <Badge variant="outline" className="border-border">Last 7 days</Badge>
            </div>
            <div className="mt-4 space-y-3">
              {coachingSignals.map((signal) => (
                <div key={signal.title} className="rounded-xl border border-border bg-card/60 px-4 py-3">
                  <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                    {signal.tone === "warning" && <AlertTriangle className="h-4 w-4 text-[hsl(var(--difficulty-medium))]" />}
                    {signal.tone === "positive" && <TrendingUp className="h-4 w-4 text-primary" />}
                    {signal.tone === "neutral" && <BookOpen className="h-4 w-4 text-muted-foreground" />}
                    {signal.title}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{signal.description}</p>
                  <div className="mt-2 text-xs text-primary">{signal.action}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm md:p-6">
            <h2 className="text-base font-semibold text-foreground">Next Actions</h2>
            <p className="text-xs text-muted-foreground mt-1">Your best next steps this week.</p>
            <div className="mt-4 space-y-3">
              {nextActions.map((action) => (
                <div key={action.label} className="rounded-xl border border-border bg-card/60 px-4 py-3 text-sm">
                  <div className="font-semibold text-foreground">{action.label}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{action.detail}</div>
                  <div className="mt-2 text-xs text-primary">ETA {action.eta}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-4">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm md:p-6">
            <div className="flex items-center justify-between">
              <h2 className="text-base font-semibold text-foreground">Mastery Gaps</h2>
              <span className="text-xs text-muted-foreground">Accuracy vs. target</span>
            </div>
            <div className="mt-4 space-y-4">
              {masteryGaps.map((gap) => (
                <div key={gap.topic}>
                  <div className="mb-1.5 flex items-center justify-between text-sm">
                    <span className="text-foreground font-medium">{gap.topic}</span>
                    <span className="text-xs text-muted-foreground">
                      {gap.accuracy}% to {gap.target}%
                    </span>
                  </div>
                  <Progress value={gap.accuracy} className="h-2" />
                  <div className="mt-1 text-[11px] text-muted-foreground">
                    {gap.recent} recent attempts
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 rounded-xl border border-border bg-card/60 px-4 py-3 text-sm text-muted-foreground">
              Recommendation: focus on 2 weak topics until accuracy reaches target.
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm md:p-6">
              <h2 className="text-base font-semibold text-foreground">Strengths to Leverage</h2>
              <div className="mt-4 space-y-3 text-sm">
                {strengths.map((s) => (
                  <div key={s.topic} className="flex items-center justify-between rounded-xl border border-border bg-card/60 px-4 py-3">
                    <span className="text-muted-foreground">{s.topic}</span>
                    <span className="font-semibold text-foreground">{s.accuracy}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm md:p-6">
              <h2 className="text-base font-semibold text-foreground">Targets</h2>
              <div className="mt-4 space-y-3">
                {pendingTargets.map((t) => (
                  <div key={t.label}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="text-foreground">{t.label}</span>
                      <span className="text-xs text-muted-foreground">{t.progress}%</span>
                    </div>
                    <Progress value={t.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-4">
          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm md:p-6">
            <h2 className="text-base font-semibold text-foreground">Coach Plan (This Week)</h2>
            <p className="text-xs text-muted-foreground mt-1">A focused schedule aligned to your gaps.</p>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
              {weeklyPlan.map((day) => (
                <div key={day.day} className="rounded-xl border border-border bg-card/60 px-4 py-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground">{day.day}</span>
                    <Badge variant="outline" className="border-border text-xs">{day.focus}</Badge>
                  </div>
                  <ul className="mt-2 text-xs text-muted-foreground list-disc pl-4">
                    {day.tasks.map((task) => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-5 shadow-sm md:p-6">
            <h2 className="text-base font-semibold text-foreground">Recent Work</h2>
            <p className="text-xs text-muted-foreground mt-1">Last sessions and confidence notes.</p>
            <div className="mt-4 space-y-3 text-sm">
              {recentWork.map((item) => (
                <div key={item.title} className="rounded-xl border border-border bg-card/60 px-4 py-3">
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-foreground">{item.title}</span>
                    <Badge variant="outline" className="border-border text-xs">{item.status}</Badge>
                  </div>
                  <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
                    <span>{item.time} · Confidence {item.confidence}</span>
                    <span>{item.when}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

function MetricCard({ title, value, note, icon: Icon }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-5 w-5 text-primary" />
      </div>
      <div className="mt-3 text-2xl font-bold text-foreground">{value}</div>
      <div className="text-sm text-muted-foreground">{title}</div>
      <div className="text-xs text-muted-foreground/70 mt-1">{note}</div>
    </div>
  );
}
