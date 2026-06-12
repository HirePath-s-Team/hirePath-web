import { cn } from "@/lib/utils";
export function TopicTag({ topic, className }) {
    return (<span className={cn("inline-flex items-center rounded-full border border-accent/50 bg-accent/45 px-2.5 py-0.5 text-xs font-medium text-accent-foreground", className)}>
      {topic}
    </span>);
}
