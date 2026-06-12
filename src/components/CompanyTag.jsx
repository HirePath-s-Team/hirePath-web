import { cn } from "@/lib/utils";
export function CompanyTag({ company, className }) {
    return (<span className={cn("inline-flex items-center rounded-full border border-primary/10 bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary", className)}>
      {company}
    </span>);
}
