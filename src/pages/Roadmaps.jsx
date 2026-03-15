import { Link } from "react-router-dom";
import { AppLayout } from "@/layouts/AppLayout";
import { Button } from "@/components/ui/button";
import { BarChart3, Database, Flame, Layers, Rocket, ShieldCheck } from "lucide-react";
import { roadmaps } from "@/data/roadmapsData";

const iconMap = {
  Arrays: Layers,
  Trees: ShieldCheck,
  "System Design": BarChart3,
  "Greedy Algorithms": ShieldCheck,
  Databases: Database,
  APIs: Rocket,
  Caching: Layers,
  Scalability: ShieldCheck,
  "Load Balancing": BarChart3,
  Sharding: Layers,
  SQL: Database,
  "API Design": Rocket,
  Microservices: ShieldCheck,
};

export default function Roadmaps() {
  return (
    <AppLayout>
      <div className="max-w-6xl mx-auto space-y-6">
        <div>
          <h1 className="text-3xl font-semibold text-foreground">Preparation Roadmaps</h1>
          <p className="text-sm text-muted-foreground mt-2">Structured paths to get interview ready.</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {roadmaps.map((roadmap, index) => {
            const Icon = [Rocket, Database, BarChart3, Flame][index] || Rocket;
            return (
              <div key={roadmap.id} className="rounded-2xl border border-border bg-card/40 p-5 shadow-sm flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#141c34] text-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs text-muted-foreground">{roadmap.duration}</span>
                </div>

                <div className="space-y-1">
                  <h2 className="text-lg font-semibold text-foreground">{roadmap.title}</h2>
                  <div className="h-2 w-full rounded-full bg-[#141c34]">
                    <div className={`h-2 rounded-full bg-gradient-to-r ${roadmap.accent}`} style={{ width: `${roadmap.progress}%` }} />
                  </div>
                  <p className="text-xs text-muted-foreground">{roadmap.progress}% Complete</p>
                </div>

                <div className="space-y-2 text-sm">
                  {roadmap.items.map((item) => {
                    const ItemIcon = iconMap[item] || Layers;
                    return (
                      <div key={item} className="flex items-center gap-2 rounded-xl border border-border bg-card/60 px-3 py-2 text-muted-foreground">
                        <ItemIcon className="h-4 w-4 text-primary" />
                        <span>{item}</span>
                      </div>
                    );
                  })}
                </div>

                <Button asChild className="mt-auto h-10 bg-[#3d6bff] text-white hover:bg-[#335ce0]">
                  <Link to={`/roadmaps/${roadmap.id}`}>View Path</Link>
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </AppLayout>
  );
}
