import { cn } from "@/lib/utils";
export function TopicTag({ topic, className }) {
    return (<span className={cn("inline-flex items-center rounded-md bg-accent/15 px-2 py-0.5 text-xs font-medium text-accent", className)}>
      {topic}
    </span>);
}
