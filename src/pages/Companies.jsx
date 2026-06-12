import { useState } from "react";
import { AppLayout } from "@/layouts/AppLayout";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import { TopicTag } from "@/components/TopicTag";
import { Progress } from "@/components/ui/progress";
import { companies } from "@/data/companyData";
import { Hash, BarChart3, ArrowUpRight, Clock, TrendingUp, } from "lucide-react";
const frequencyColor = {
    high: "text-[hsl(var(--difficulty-easy))]",
    medium: "text-[hsl(var(--difficulty-medium))]",
    low: "text-muted-foreground",
};
const Companies = () => {
    const [selected, setSelected] = useState(companies[0]);
    const total = selected.difficultyBreakdown.easy +
        selected.difficultyBreakdown.medium +
        selected.difficultyBreakdown.hard;
    return (<AppLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Company Analytics</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Explore interview patterns by company
          </p>
        </div>

        {/* Company selector pills */}
        <div className="flex flex-wrap gap-2">
          {companies.map((c) => (<button key={c.name} onClick={() => setSelected(c)} className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium border transition-all ${selected.name === c.name
                ? "bg-primary text-primary-foreground border-primary shadow-sm"
                : "bg-card text-foreground border-border hover:border-primary/40 hover:shadow-sm"}`}>
              <span className="text-base">{c.logo}</span>
              {c.name}
            </button>))}
        </div>

        {/* Company header card */}
        <div className="rounded-2xl border border-border bg-card p-5 shadow-sm md:p-6">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-3xl">
              {selected.logo}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-foreground">{selected.name}</h2>
                <span className="text-xs text-muted-foreground bg-muted/20 rounded-full px-2.5 py-0.5">
                  {selected.industry}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-4 mt-3">
                <div className="flex items-center gap-2">
                  <Hash className="h-4 w-4 text-muted-foreground"/>
                  <span className="text-sm text-foreground font-semibold">{selected.questionsCount}</span>
                  <span className="text-xs text-muted-foreground">questions</span>
                </div>
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-4 w-4 text-muted-foreground"/>
                  <span className="text-sm text-foreground font-semibold capitalize">{selected.avgDifficulty}</span>
                  <span className="text-xs text-muted-foreground">avg difficulty</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mid row: Topics + Difficulty breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Frequent Topics */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <TrendingUp className="h-4 w-4 text-primary"/>
              </div>
              <h3 className="text-base font-semibold text-foreground">Top Interview Topics</h3>
            </div>
            <div className="space-y-4">
              {selected.topTopics.map((t) => {
            const max = selected.topTopics[0].count;
            return (<div key={t.topic}>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-medium text-foreground">{t.topic}</span>
                      <span className="text-xs text-muted-foreground">{t.count} questions</span>
                    </div>
                    <Progress value={(t.count / max) * 100} className="h-2"/>
                  </div>);
        })}
            </div>
          </div>

          {/* Difficulty Distribution */}
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2 mb-5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[hsl(var(--accent-glow)/.1)]">
                <BarChart3 className="h-4 w-4 text-[hsl(var(--accent-glow))]"/>
              </div>
              <h3 className="text-base font-semibold text-foreground">Difficulty Distribution</h3>
            </div>

            {/* Visual bar */}
            <div className="flex h-4 rounded-full overflow-hidden mb-6">
              <div className="bg-[hsl(var(--difficulty-easy))]" style={{ width: `${(selected.difficultyBreakdown.easy / total) * 100}%` }}/>
              <div className="bg-[hsl(var(--difficulty-medium))]" style={{ width: `${(selected.difficultyBreakdown.medium / total) * 100}%` }}/>
              <div className="bg-[hsl(var(--difficulty-hard))]" style={{ width: `${(selected.difficultyBreakdown.hard / total) * 100}%` }}/>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {["easy", "medium", "hard"].map((d) => (<div key={d} className="text-center">
                  <div className="text-2xl font-bold text-foreground">{selected.difficultyBreakdown[d]}</div>
                  <DifficultyBadge difficulty={d} className="mt-1"/>
                  <div className="text-xs text-muted-foreground mt-1">
                    {Math.round((selected.difficultyBreakdown[d] / total) * 100)}%
                  </div>
                </div>))}
            </div>
          </div>
        </div>

        {/* Recent Questions Table */}
        <div className="rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
          <div className="p-5 pb-0 md:p-6 md:pb-0">
            <div className="flex flex-col items-start justify-between gap-2 mb-1 sm:flex-row sm:items-center">
              <h3 className="text-base font-semibold text-foreground">Frequently Asked Questions</h3>
              <button className="flex items-center gap-1 text-xs text-primary font-medium hover:underline">
                View all <ArrowUpRight className="h-3 w-3"/>
              </button>
            </div>
            <p className="text-xs text-muted-foreground">Questions commonly asked at {selected.name}</p>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[640px] text-sm">
              <thead>
                <tr className="border-b border-border text-left">
                  <th className="px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider md:px-6">Problem</th>
                  <th className="px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider md:px-6">Topic</th>
                  <th className="px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider md:px-6">Difficulty</th>
                  <th className="px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider md:px-6">Frequency</th>
                  <th className="px-4 py-3 text-xs font-medium text-muted-foreground uppercase tracking-wider md:px-6">Last Asked</th>
                </tr>
              </thead>
              <tbody>
                {selected.recentQuestions.map((q) => (<tr key={q.id} className="border-b border-border/50 last:border-0 hover:bg-muted/5 transition-colors">
                    <td className="px-4 py-3.5 font-medium text-foreground md:px-6">{q.title}</td>
                    <td className="px-4 py-3.5 md:px-6"><TopicTag topic={q.topic}/></td>
                    <td className="px-4 py-3.5 md:px-6"><DifficultyBadge difficulty={q.difficulty}/></td>
                    <td className="px-4 py-3.5 md:px-6">
                      <span className={`text-xs font-semibold capitalize ${frequencyColor[q.frequency]}`}>
                        {q.frequency}
                      </span>
                    </td>
                    <td className="px-4 py-3.5 md:px-6">
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="h-3 w-3"/>
                        {q.lastAsked}
                      </div>
                    </td>
                  </tr>))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AppLayout>);
};
export default Companies;
