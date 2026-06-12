import { useEffect, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { Search, Bell, Monitor, ChevronDown, LogOut, User, Settings, Check } from "lucide-react";
import { Input } from "@/components/ui/input";
import { SidebarTrigger } from "@/components/ui/sidebar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { apiUrl } from "@/lib/api";

export function TopBar() {
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const [query, setQuery] = useState("");
    const [view, setView] = useState("Comfort");

    useEffect(() => {
        if (location.pathname === "/questions") {
            setQuery(searchParams.get("q") || "");
        }
        else {
            setQuery("");
        }
    }, [location.pathname, searchParams]);

    const handleSubmit = () => {
        const trimmed = query.trim();
        if (!trimmed) {
            navigate("/questions");
            return;
        }
        navigate(`/questions?q=${encodeURIComponent(trimmed)}`);
    };

    const handleLogout = async () => {
        try {
            await fetch(`${apiUrl}/auth/logout`, {
                method: "POST",
                credentials: "include",
            });
        }
        finally {
            navigate("/login");
        }
    };

    return (<header className="sticky top-0 z-40 flex min-h-14 items-center justify-between gap-3 border-b border-border bg-card/70 px-4 py-2 backdrop-blur-sm md:px-6">
      <div className="flex min-w-0 flex-1 items-center gap-3">
        <SidebarTrigger className="md:hidden" />
        <div className="relative w-full max-w-md min-w-0">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground"/>
          <Input placeholder="Search questions, topics..." value={query} onChange={(e) => setQuery(e.target.value)} onKeyDown={(e) => {
            if (e.key === "Enter") {
                handleSubmit();
            }
        }} className="pl-9 bg-muted/50 border-border text-sm h-9"/>
        </div>
      </div>

      <div className="flex shrink-0 items-center gap-2 md:gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="hidden h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:flex">
              <Monitor className="h-4 w-4"/>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52">
            {["Comfort", "Compact", "Focus"].map((item) => (<DropdownMenuItem key={item} onClick={() => setView(item)} className="flex items-center justify-between">
                <span>{item} view</span>
                {view === item && <Check className="h-4 w-4 text-primary"/>}
              </DropdownMenuItem>))}
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="relative flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
              <Bell className="h-4 w-4"/>
              <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-primary"/>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-64">
            <DropdownMenuItem>
              New roadmap milestones unlocked
            </DropdownMenuItem>
            <DropdownMenuItem>
              3 new company appearances added
            </DropdownMenuItem>
            <DropdownMenuItem>
              Continue "FAANG SWE Path" week 3
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="ml-2 inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm">
              JP
              <ChevronDown className="h-3.5 w-3.5"/>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            <DropdownMenuItem onClick={() => navigate("/profile")}>
              <User className="mr-2 h-4 w-4"/>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => navigate("/settings")}>
              <Settings className="mr-2 h-4 w-4"/>
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4"/>
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>);
}
