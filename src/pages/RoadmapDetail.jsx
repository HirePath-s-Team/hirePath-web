import { Link, useParams } from "react-router-dom";
import { AppLayout } from "@/layouts/AppLayout";
import { Button } from "@/components/ui/button";
import { roadmaps } from "@/data/roadmapsData";
import { BarChart3, CalendarDays, ChevronLeft, Layers, ShieldCheck } from "lucide-react";

export default function RoadmapDetail() {
  const { roadmapId } = useParams();
  const roadmap = roadmaps.find((r) => r.id === roadmapId);

  if (!roadmap) {
    return (
      <AppLayout>
        <div className="max-w-4xl mx-auto rounded-2xl border border-border bg-card/40 p-8">
          <p className="text-foreground">Roadmap not found.</p>
          <Button asChild variant="outline" className="mt-4 border-border">
            <Link to="/roadmaps">Back to Roadmaps</Link>
          </Button>
        </div>
      </AppLayout>
    );
  }

  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex items-center gap-3 text-sm text-muted-foreground">
          <Link to="/roadmaps" className="flex items-center gap-1 hover:text-foreground">
            <ChevronLeft className="h-4 w-4" />
            Roadmaps
          </Link>
        </div>

        <div className="rounded-2xl border border-border bg-card/40 p-6 shadow-sm">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="space-y-3">
              <h1 className="text-3xl font-semibold text-foreground">{roadmap.title}</h1>
              <p className="text-sm text-muted-foreground">{roadmap.overview}</p>
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span className="rounded-full border border-border bg-card/60 px-3 py-1">{roadmap.duration}</span>
                <span className="rounded-full border border-border bg-card/60 px-3 py-1">{roadmap.progress}% complete</span>
              </div>
            </div>
            <Button className="h-10">Continue Path</Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-4">
            {roadmap.weeks.map((week) => (
              <div key={week.title} className="rounded-2xl border border-border bg-card/40 p-5">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{week.title}</p>
                    <h2 className="text-lg font-semibold text-foreground">{week.focus}</h2>
                  </div>
                  <span className="rounded-full border border-border bg-card/60 px-3 py-1 text-xs text-muted-foreground">Focus</span>
                </div>
                <div className="mt-4 grid gap-2 text-sm">
                  {week.items.map((item) => (
                    <div key={item} className="flex items-center gap-2 rounded-xl border border-border bg-card/60 px-3 py-2 text-muted-foreground">
                      <Layers className="h-4 w-4 text-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-card/40 p-4">
              <div className="flex items-center justify-between text-sm font-semibold text-foreground">
                <span>Progress</span>
                <span className="text-xs text-muted-foreground">{roadmap.progress}%</span>
              </div>
              <div className="mt-4 h-2 w-full rounded-full bg-muted/70">
                <div className={`h-2 rounded-full bg-gradient-to-r ${roadmap.accent}`} style={{ width: `${roadmap.progress}%` }} />
              </div>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1"><CalendarDays className="h-4 w-4" /> Duration</span>
                  <span className="text-foreground">{roadmap.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1"><BarChart3 className="h-4 w-4" /> Modules</span>
                  <span className="text-foreground">{roadmap.items.length}</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card/40 p-4">
              <div className="flex items-center justify-between text-sm font-semibold text-foreground">
                <span>Core Modules</span>
                <span className="text-xs text-muted-foreground">Highlights</span>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                {roadmap.items.map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-xl border border-border bg-card/60 px-3 py-2 text-muted-foreground">
                    <ShieldCheck className="h-4 w-4 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
