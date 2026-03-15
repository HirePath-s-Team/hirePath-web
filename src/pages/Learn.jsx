import { useState } from "react";
import { AppLayout } from "@/layouts/AppLayout";
import { Button } from "@/components/ui/button";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import { CompanyTag } from "@/components/CompanyTag";
import { learningQuestions } from "@/data/learningData";
import { BarChart3, Building2, CalendarDays, CheckCircle2, Eye, EyeOff, Hash, Layers, Sparkles } from "lucide-react";

export default function Learn() {
  const [questionIndex] = useState(0);
  const [solutionRevealed, setSolutionRevealed] = useState(true);
  const question = learningQuestions[questionIndex % learningQuestions.length];

  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="rounded-2xl border border-border bg-card/40 p-6 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-3">
              <h1 className="text-2xl font-semibold text-foreground">{question.title}</h1>
              <p className="text-sm text-muted-foreground">{question.description}</p>
              <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                <DifficultyBadge difficulty={question.difficulty} />
                <span className="flex items-center gap-1">
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  LeetCode · {question.difficulty}
                </span>
              </div>
            </div>
            <Button variant="outline" size="sm" className="border-border">
              Save
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
          <div className="space-y-5">
            <div className="rounded-2xl border border-border bg-card/40 p-6 shadow-sm">
              <h2 className="text-sm font-semibold text-foreground mb-4">Hints</h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                {question.hints.map((hint, i) => (
                  <div key={i} className="flex items-start gap-3 rounded-xl border border-border bg-background/40 px-4 py-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
                    <span>{hint}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card/40 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-sm font-semibold text-foreground">Solution (Python)</h2>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSolutionRevealed(!solutionRevealed)}
                  className="gap-1.5 border-border"
                >
                  {solutionRevealed ? (
                    <>
                      <EyeOff className="h-3.5 w-3.5" /> Hide
                    </>
                  ) : (
                    <>
                      <Eye className="h-3.5 w-3.5" /> Reveal
                    </>
                  )}
                </Button>
              </div>
              {solutionRevealed && (
                <pre className="whitespace-pre-wrap text-sm text-foreground/90 leading-relaxed font-mono bg-background/60 rounded-xl p-5 border border-border">
                  {question.solution}
                </pre>
              )}
              {!solutionRevealed && (
                <div className="rounded-xl border border-border bg-background/40 px-4 py-6 text-center text-sm text-muted-foreground">
                  Solution hidden — click Reveal to view.
                </div>
              )}
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-card/40 p-4">
              <div className="flex items-center justify-between text-sm font-semibold text-foreground">
                <span>Appearances</span>
                <span className="text-xs text-muted-foreground">Latest</span>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                {question.companies.slice(0, 3).map((c, i) => (
                  <div key={i} className="flex items-center justify-between rounded-xl border border-border bg-card/60 px-3 py-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CompanyTag company={c.name} />
                      <span>{c.name}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{c.year}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                <BadgeTag label="Medium" />
                <BadgeTag label="Sliding Window" />
                <BadgeTag label="Hash Map" />
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card/40 p-4">
              <div className="flex items-center justify-between text-sm font-semibold text-foreground">
                <span>Companies</span>
                <span className="text-xs text-muted-foreground">Top</span>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                {question.companies.slice(0, 4).map((c, i) => (
                  <div key={i} className="flex items-center justify-between rounded-xl border border-border bg-card/60 px-3 py-2">
                    <span className="text-muted-foreground">{c.name}</span>
                    <Building2 className="h-4 w-4 text-primary" />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card/40 p-4">
              <div className="flex items-center justify-between text-sm font-semibold text-foreground">
                <span>Stats</span>
                <span className="text-xs text-muted-foreground">Summary</span>
              </div>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1"><Layers className="h-4 w-4" /> Variants</span>
                  <span className="text-foreground">{question.variants.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1"><Hash className="h-4 w-4" /> Role</span>
                  <span className="text-foreground">{question.companies[0]?.role}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1"><CalendarDays className="h-4 w-4" /> Latest Year</span>
                  <span className="text-foreground">{question.companies[0]?.year}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1"><BarChart3 className="h-4 w-4" /> Frequency</span>
                  <span className="text-foreground">{question.companies[0]?.frequency}x</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

function BadgeTag({ label }) {
  return (
    <span className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">
      {label}
    </span>
  );
}
