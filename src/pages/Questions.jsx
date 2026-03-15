import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { AppLayout } from "@/layouts/AppLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CompanyTag } from "@/components/CompanyTag";
import { questionsBank, allTopics, allCompanies } from "@/data/questionsData";
import { Search, ChevronLeft, ChevronRight, CheckCircle2, AlertCircle, RotateCcw, Circle, SlidersHorizontal, LayoutGrid, List, BarChart3 } from "lucide-react";
const ITEMS_PER_PAGE = 10;
const statusConfig = {
    solved: { icon: CheckCircle2, label: "Solved", className: "text-[hsl(var(--difficulty-easy))]" },
    attempted: { icon: AlertCircle, label: "Attempted", className: "text-[hsl(var(--difficulty-medium))]" },
    review: { icon: RotateCcw, label: "Review", className: "text-primary" },
    unsolved: { icon: Circle, label: "Unsolved", className: "text-muted-foreground" },
};
export default function Questions() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState("");
    const [difficulty, setDifficulty] = useState("all");
    const [topic, setTopic] = useState("all");
    const [company, setCompany] = useState("all");
    const [status, setStatus] = useState("all");
    const [page, setPage] = useState(1);
    const [sort, setSort] = useState("newest");
    useEffect(() => {
        const q = searchParams.get("q") || "";
        setSearch(q);
    }, [searchParams]);

    const filtered = useMemo(() => {
        return questionsBank.filter((q) => {
            if (search && !q.title.toLowerCase().includes(search.toLowerCase()))
                return false;
            if (difficulty !== "all" && q.difficulty !== difficulty)
                return false;
            if (topic !== "all" && q.topic !== topic)
                return false;
            if (company !== "all" && !q.companies.includes(company))
                return false;
            if (status !== "all" && q.status !== status)
                return false;
            return true;
        });
    }, [search, difficulty, topic, company, status]);
    const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
    const currentPage = Math.min(page, totalPages);
    const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);
    const clearFilters = () => {
        setSearch("");
        setDifficulty("all");
        setTopic("all");
        setCompany("all");
        setStatus("all");
        setPage(1);
    };
    const hasActiveFilters = search || difficulty !== "all" || topic !== "all" || company !== "all" || status !== "all";
    return (<AppLayout>
      <div className="space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-semibold text-foreground">Question List</h1>
            <p className="text-sm text-muted-foreground mt-1">
              Browse {questionsBank.length} canonical questions and their real appearances.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Select value={company} onValueChange={(v) => { setCompany(v); setPage(1); }}>
              <SelectTrigger className="w-[150px] bg-card border-border h-9 text-sm">
                <SelectValue placeholder="Company"/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Companies</SelectItem>
                {allCompanies.map((c) => (<SelectItem key={c} value={c}>{c}</SelectItem>))}
              </SelectContent>
            </Select>
            <Select value={difficulty} onValueChange={(v) => { setDifficulty(v); setPage(1); }}>
              <SelectTrigger className="w-[130px] bg-card border-border h-9 text-sm">
                <SelectValue placeholder="All Levels"/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sort} onValueChange={(v) => setSort(v)}>
              <SelectTrigger className="w-[150px] bg-card border-border h-9 text-sm">
                <SelectValue placeholder="Sort by"/>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="popular">Most Appeared</SelectItem>
                <SelectItem value="acceptance">Highest Acceptance</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-border bg-card/60 px-4 py-3">
          <div className="relative flex-1 min-w-[220px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search..." value={search} onChange={(e) => {
            const value = e.target.value;
            setSearch(value);
            setPage(1);
            setSearchParams(value ? { q: value } : {});
        }} className="pl-10 bg-transparent border-border/60 focus-visible:ring-1" />
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9">
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.7fr_1fr]">
          <div className="space-y-4">
            {paginated.length === 0 ? (<div className="rounded-2xl border border-border bg-card/40 px-4 py-12 text-center text-muted-foreground">
                No questions match your filters.
              </div>) : (paginated.map((q) => {
            const StatusIcon = statusConfig[q.status].icon;
            return (<div key={q.id} className="rounded-2xl border border-border bg-card/40 px-4 py-4 hover:bg-card/70 transition-colors">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-md bg-[#1b2b52] text-white/70">
                      <StatusIcon className={`h-3.5 w-3.5 ${statusConfig[q.status].className}`} />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="space-y-1">
                          <h3 className="text-base font-semibold text-foreground">
                            {q.id}. {q.title}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            {q.topic} • {q.difficulty} • {q.companies.slice(0, 3).join(" · ")}
                          </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="outline" className="border-border bg-[#1b2b52]/40 text-xs text-foreground">{q.topic}</Badge>
                          <Badge variant="outline" className="border-border bg-[#1b2b52]/40 text-xs text-foreground">{q.difficulty}</Badge>
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {q.companies.slice(0, 3).map((c) => (<CompanyTag key={c} company={c} />))}
                        {q.companies.length > 3 && (<span className="text-xs text-muted-foreground">+{q.companies.length - 3}</span>)}
                        <span className="ml-auto text-xs text-muted-foreground">Accept {q.acceptance}%</span>
                      </div>
                    </div>
                  </div>
                </div>);
        }))}

            {totalPages > 1 && (<div className="flex items-center justify-between pt-2">
                <p className="text-sm text-muted-foreground">
                  Page {currentPage} of {totalPages}
                </p>
                <div className="flex items-center gap-1">
                  <Button variant="outline" size="sm" onClick={() => setPage((p) => Math.max(1, p - 1))} disabled={currentPage <= 1} className="h-8 border-border">
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (<Button key={p} variant={p === currentPage ? "default" : "outline"} size="sm" onClick={() => setPage(p)} className="h-8 w-8 border-border">
                      {p}
                    </Button>))}
                  <Button variant="outline" size="sm" onClick={() => setPage((p) => Math.min(totalPages, p + 1))} disabled={currentPage >= totalPages} className="h-8 border-border">
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>)}
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-card/40 p-4">
              <div className="flex items-center justify-between text-sm font-semibold text-foreground">
                <span>Appearance</span>
                <span className="text-xs text-muted-foreground">Last 12 months</span>
              </div>
              <div className="mt-4 grid gap-3 text-xs text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Two Sum</span>
                  <span>Last: 2024</span>
                </div>
                <div className="flex h-24 items-end gap-2">
                  {[18, 26, 22, 30, 24, 34, 28].map((h, i) => (
                    <span key={i} className="w-full rounded-md bg-gradient-to-t from-[#3d6bff] to-[#7d5cff]" style={{ height: `${h}%` }} />
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card/40 p-4">
              <div className="flex items-center justify-between text-sm font-semibold text-foreground">
                <span>Governance</span>
                <span className="text-xs text-muted-foreground">Microsoft</span>
              </div>
              <div className="mt-4 space-y-3 text-sm">
                {["Frequent", "Recurring", "High Signal"].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-xl border border-border bg-card/60 px-3 py-2">
                    <span className="text-muted-foreground">{item}</span>
                    <BarChart3 className="h-4 w-4 text-primary" />
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card/40 p-4">
              <div className="flex items-center justify-between text-sm font-semibold text-foreground">
                <span>Companies</span>
                <span className="text-xs text-muted-foreground">Top appearances</span>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                {["Google", "Amazon", "Meta", "Microsoft"].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-xl border border-border bg-card/60 px-3 py-2">
                    <span className="text-muted-foreground">{item}</span>
                    <span className="text-xs text-muted-foreground">Frequent</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-sm text-muted-foreground">
          <span>Showing {paginated.length} of {filtered.length} questions</span>
          {hasActiveFilters && (<Button variant="ghost" size="sm" onClick={clearFilters} className="h-9 text-muted-foreground hover:text-foreground">
              Clear filters
            </Button>)}
        </div>
      </div>
    </AppLayout>);
}
