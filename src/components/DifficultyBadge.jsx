import { cn } from "@/lib/utils";
const config = {
    easy: { label: "Easy", classes: "bg-[hsl(var(--difficulty-easy)/.15)] text-[hsl(var(--difficulty-easy))]" },
    medium: { label: "Medium", classes: "bg-[hsl(var(--difficulty-medium)/.15)] text-[hsl(var(--difficulty-medium))]" },
    hard: { label: "Hard", classes: "bg-[hsl(var(--difficulty-hard)/.15)] text-[hsl(var(--difficulty-hard))]" },
};
export function DifficultyBadge({ difficulty, className }) {
    const c = config[difficulty];
    return (<span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", c.classes, className)}>
      {c.label}
    </span>);
}
