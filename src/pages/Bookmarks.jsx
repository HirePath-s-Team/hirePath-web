import { useMemo, useState } from "react";
import { AppLayout } from "@/layouts/AppLayout";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { CompanyTag } from "@/components/CompanyTag";
import { DifficultyBadge } from "@/components/DifficultyBadge";
import { questionsBank, allTopics, allCompanies } from "@/data/questionsData";
import { BookmarkCheck, Filter, Search, SlidersHorizontal } from "lucide-react";

const baseBookmarks = questionsBank.slice(0, 9).map((q, i) => ({
  ...q,
  savedAt: ["Today", "Yesterday", "2d ago", "4d ago", "1w ago"][i % 5],
  list: ["Daily Focus", "Top 50", "Warmup"][i % 3],
}));

export default function Bookmarks() {
  const [search, setSearch] = useState("");
  const [topic, setTopic] = useState("all");
  const [company, setCompany] = useState("all");
  const [difficulty, setDifficulty] = useState("all");

  const filtered = useMemo(() => {
    return baseBookmarks.filter((q) => {
      if (search && !q.title.toLowerCase().includes(search.toLowerCase())) return false;
      if (topic !== "all" && q.topic !== topic) return false;
      if (difficulty !== "all" && q.difficulty !== difficulty) return false;
      if (company !== "all" && !q.companies.includes(company)) return false;
      return true;
    });
  }, [search, topic, company, difficulty]);

  return (
    <AppLayout>
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Bookmarks</h1>
            <p className="text-sm text-muted-foreground">
              Your saved questions, curated lists, and study sets.
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <BookmarkCheck className="h-4 w-4 text-primary" />
            {filtered.length} saved
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-card/60 px-4 py-3">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative min-w-[220px] flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search bookmarks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="border-border/60 bg-transparent pl-10 focus-visible:ring-1"
              />
            </div>
            <Select value={company} onValueChange={setCompany}>
              <SelectTrigger className="h-9 w-[150px] border-border bg-card text-sm">
                <SelectValue placeholder="Company" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Companies</SelectItem>
                {allCompanies.map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={topic} onValueChange={setTopic}>
              <SelectTrigger className="h-9 w-[150px] border-border bg-card text-sm">
                <SelectValue placeholder="Topic" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Topics</SelectItem>
                {allTopics.map((t) => (
                  <SelectItem key={t} value={t}>{t}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={difficulty} onValueChange={setDifficulty}>
              <SelectTrigger className="h-9 w-[150px] border-border bg-card text-sm">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="easy">Easy</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="hard">Hard</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground">
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground">
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.7fr_1fr]">
          <div className="space-y-4">
            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-border bg-card/40 px-4 py-12 text-center text-muted-foreground">
                No bookmarks match your filters.
              </div>
            ) : (
              filtered.map((q) => (
                <div key={q.id} className="rounded-2xl border border-border bg-card/40 px-4 py-4 transition-colors hover:bg-card/70">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex h-6 w-6 items-center justify-center rounded-md bg-secondary/60 text-primary">
                      <BookmarkCheck className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <div className="space-y-1">
                          <h3 className="text-base font-semibold text-foreground">
                            {q.id}. {q.title}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            {q.topic} / {q.difficulty} / {q.companies.slice(0, 3).join(", ")}
                          </p>
                        </div>
                        <div className="flex flex-wrap items-center gap-2">
                          <Badge variant="outline" className="border-border bg-secondary/45 text-xs text-foreground">
                            {q.list}
                          </Badge>
                          <DifficultyBadge difficulty={q.difficulty} />
                        </div>
                      </div>
                      <div className="flex flex-wrap items-center gap-2">
                        {q.companies.slice(0, 3).map((c) => (
                          <CompanyTag key={c} company={c} />
                        ))}
                        {q.companies.length > 3 && (
                          <span className="text-xs text-muted-foreground">+{q.companies.length - 3}</span>
                        )}
                        <span className="ml-auto text-xs text-muted-foreground">Saved {q.savedAt}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-border bg-card/40 p-4">
              <div className="flex items-center justify-between text-sm font-semibold text-foreground">
                <span>Collections</span>
                <span className="text-xs text-muted-foreground">Quick lists</span>
              </div>
              <div className="mt-4 space-y-2 text-sm">
                {["Daily Focus", "Top 50", "Warmup", "Revisit"].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-xl border border-border bg-card/60 px-3 py-2">
                    <span className="text-muted-foreground">{item}</span>
                    <span className="text-xs text-muted-foreground">
                      {baseBookmarks.filter((b) => b.list === item).length} items
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card/40 p-4">
              <div className="flex items-center justify-between text-sm font-semibold text-foreground">
                <span>Saved Recently</span>
                <span className="text-xs text-muted-foreground">Last 7 days</span>
              </div>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                {baseBookmarks.slice(0, 4).map((q) => (
                  <div key={q.id} className="flex items-center justify-between rounded-xl border border-border bg-card/60 px-3 py-2">
                    <span className="truncate">{q.title}</span>
                    <span className="text-xs text-muted-foreground">{q.savedAt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card/40 p-4">
              <div className="flex items-center justify-between text-sm font-semibold text-foreground">
                <span>Focus Areas</span>
                <span className="text-xs text-muted-foreground">Tagged</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Arrays", "Graphs", "DP", "Binary Search", "Intervals"].map((tag) => (
                  <Badge key={tag} variant="outline" className="border-border bg-card/60 text-muted-foreground">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
