import { useMemo } from "react";
import { cn } from "@/lib/utils";
function getColor(count) {
    if (count === 0)
        return "bg-muted/40";
    if (count <= 2)
        return "bg-[hsl(var(--difficulty-easy)/.3)]";
    if (count <= 4)
        return "bg-[hsl(var(--difficulty-easy)/.55)]";
    if (count <= 6)
        return "bg-[hsl(var(--difficulty-easy)/.75)]";
    return "bg-[hsl(var(--difficulty-easy))]";
}
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const DAYS = ["Mon", "", "Wed", "", "Fri", "", ""];
export function ActivityHeatmap({ data, className }) {
    const grid = useMemo(() => {
        const map = new Map(data.map((d) => [d.date, d.count]));
        const weeks = [];
        const today = new Date();
        const start = new Date(today);
        start.setDate(start.getDate() - 364);
        // Align to Sunday
        start.setDate(start.getDate() - start.getDay());
        let currentWeek = [];
        const cursor = new Date(start);
        while (cursor <= today) {
            const key = cursor.toISOString().slice(0, 10);
            currentWeek.push({ date: key, count: map.get(key) ?? 0 });
            if (currentWeek.length === 7) {
                weeks.push(currentWeek);
                currentWeek = [];
            }
            cursor.setDate(cursor.getDate() + 1);
        }
        if (currentWeek.length > 0)
            weeks.push(currentWeek);
        return weeks;
    }, [data]);
    // Month labels
    const monthLabels = useMemo(() => {
        const labels = [];
        let lastMonth = -1;
        grid.forEach((week, i) => {
            const d = new Date(week[0].date);
            if (d.getMonth() !== lastMonth) {
                lastMonth = d.getMonth();
                labels.push({ label: MONTHS[lastMonth], col: i });
            }
        });
        return labels;
    }, [grid]);
    return (<div className={cn("overflow-x-auto", className)}>
      {/* Month labels */}
      <div className="flex ml-8 mb-1 gap-0">
        {monthLabels.map((m, i) => (<div key={i} className="text-xs text-muted-foreground" style={{ position: "relative", left: `${m.col * 14}px`, marginRight: i < monthLabels.length - 1 ? 0 : undefined }}>
            {m.label}
          </div>))}
      </div>

      <div className="flex gap-0.5">
        {/* Day labels */}
        <div className="flex flex-col gap-0.5 mr-1 mt-0">
          {DAYS.map((d, i) => (<div key={i} className="h-[12px] w-6 text-[10px] text-muted-foreground leading-[12px]">
              {d}
            </div>))}
        </div>

        {/* Grid */}
        {grid.map((week, wi) => (<div key={wi} className="flex flex-col gap-0.5">
            {week.map((day, di) => (<div key={di} className={cn("h-[12px] w-[12px] rounded-sm transition-colors", getColor(day.count))} title={`${day.date}: ${day.count} problems`}/>))}
          </div>))}
      </div>

      {/* Legend */}
      <div className="flex items-center gap-1 mt-3 ml-8">
        <span className="text-[10px] text-muted-foreground mr-1">Less</span>
        {[0, 2, 4, 6, 8].map((v) => (<div key={v} className={cn("h-[12px] w-[12px] rounded-sm", getColor(v))}/>))}
        <span className="text-[10px] text-muted-foreground ml-1">More</span>
      </div>
    </div>);
}
