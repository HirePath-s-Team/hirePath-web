import { cn } from "@/lib/utils";
export function StatsCard({ icon: Icon, value, label, className, iconClassName }) {
    return (<div className={cn("rounded-xl border border-border bg-card p-5", className)}>
      <div className="flex items-center gap-3 mb-3">
        <div className={cn("flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10", iconClassName)}>
          <Icon className="h-4 w-4 text-primary"/>
        </div>
      </div>
      <div className="text-2xl font-bold text-foreground">{value}</div>
      <div className="text-sm text-muted-foreground mt-1">{label}</div>
    </div>);
}
