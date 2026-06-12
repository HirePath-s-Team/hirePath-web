import { AppLayout } from "@/layouts/AppLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Briefcase, Building2, CalendarDays, GraduationCap, Trophy } from "lucide-react";

const recentActivity = [
  { title: "Completed Sliding Window Drill", detail: "Week 2 - FAANG SWE Path" },
  { title: "Solved: Two Sum", detail: "Google - 2023 appearance" },
  { title: "Reviewed System Design Notes", detail: "Caching + Queues" },
];

const savedRoadmaps = [
  { name: "FAANG SWE Path", progress: 33 },
  { name: "Backend Developer Path", progress: 56 },
];

export default function Profile() {
  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="rounded-2xl border border-border bg-card/40 p-6 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-xl font-semibold text-primary-foreground shadow-sm">
                JP
              </div>
              <div>
                <h1 className="text-2xl font-semibold text-foreground">Jordan Parker</h1>
                <p className="text-sm text-muted-foreground">SWE - Interview prep in progress</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <Badge variant="outline" className="border-border text-xs">120+ questions</Badge>
                  <Badge variant="outline" className="border-border text-xs">5 roadmaps</Badge>
                  <Badge variant="outline" className="border-border text-xs">Top 10% consistency</Badge>
                </div>
              </div>
            </div>
            <Button className="h-10">Edit Profile</Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr]">
          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-card/40 p-5">
              <h2 className="mb-4 text-sm font-semibold text-foreground">Progress Snapshot</h2>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  { label: "Questions Solved", value: "84", icon: BookOpen },
                  { label: "Company Coverage", value: "46", icon: Building2 },
                  { label: "Streak", value: "12 days", icon: Trophy },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-xl border border-border bg-card/60 p-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <stat.icon className="h-4 w-4 text-primary" />
                      <span className="text-xs">{stat.label}</span>
                    </div>
                    <div className="mt-2 text-lg font-semibold text-foreground">{stat.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card/40 p-5">
              <h2 className="mb-4 text-sm font-semibold text-foreground">Recent Activity</h2>
              <div className="space-y-3 text-sm">
                {recentActivity.map((item) => (
                  <div key={item.title} className="rounded-xl border border-border bg-card/60 p-4">
                    <div className="font-medium text-foreground">{item.title}</div>
                    <div className="mt-1 text-muted-foreground">{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-card/40 p-5">
              <h2 className="mb-4 text-sm font-semibold text-foreground">Profile Details</h2>
              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2"><Briefcase className="h-4 w-4" /> Role</span>
                  <span className="text-foreground">Software Engineer</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2"><GraduationCap className="h-4 w-4" /> Level</span>
                  <span className="text-foreground">Mid-level</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2"><CalendarDays className="h-4 w-4" /> Target</span>
                  <span className="text-foreground">Aug 2026</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card/40 p-5">
              <h2 className="mb-4 text-sm font-semibold text-foreground">Saved Roadmaps</h2>
              <div className="space-y-3 text-sm">
                {savedRoadmaps.map((roadmap) => (
                  <div key={roadmap.name} className="rounded-xl border border-border bg-card/60 p-4">
                    <div className="flex items-center justify-between text-foreground">
                      <span>{roadmap.name}</span>
                      <span className="text-xs text-muted-foreground">{roadmap.progress}%</span>
                    </div>
                    <div className="mt-2 h-2 rounded-full bg-muted/70">
                      <div
                        className="h-2 rounded-full bg-gradient-to-r from-primary to-[hsl(var(--accent-glow))]"
                        style={{ width: `${roadmap.progress}%` }}
                      />
                    </div>
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
