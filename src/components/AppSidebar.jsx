import { LayoutDashboard, BookOpen, FileQuestion, Map, Building2, BarChart3, Bookmark, User, ChevronLeft, PenTool, Settings } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { useLocation } from "react-router-dom";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarHeader, SidebarFooter, useSidebar, } from "@/components/ui/sidebar";
const navItems = [
    { title: "Dashboard", url: "/dashboard", icon: LayoutDashboard },
    { title: "Learn", url: "/learn", icon: BookOpen },
    { title: "Questions", url: "/questions", icon: FileQuestion },
    { title: "Roadmaps", url: "/roadmaps", icon: Map },
    { title: "Companies", url: "/companies", icon: Building2 },
    { title: "Blog", url: "/blog", icon: PenTool },
    { title: "Analytics", url: "/analytics", icon: BarChart3 },
    { title: "Bookmarks", url: "/bookmarks", icon: Bookmark },
    // { title: "Profile", url: "/profile", icon: User },
    // { title: "Settings", url: "/settings", icon: Settings },
];
export function AppSidebar() {
    const { state, toggleSidebar } = useSidebar();
    const collapsed = state === "collapsed";
    const location = useLocation();
    return (<Sidebar collapsible="icon" className="border-r border-border bg-sidebar">
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
            <span className="text-sm font-bold text-foreground">H</span>
          </div>
          {!collapsed && (<span className="text-lg font-bold text-foreground tracking-tight">HirePath</span>)}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navItems.map((item) => {
            const isActive = location.pathname === item.url;
            return (<SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink to={item.url} end={item.url === "/dashboard"} className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-sidebar-foreground transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground" activeClassName="bg-sidebar-accent text-foreground font-medium">
                        <item.icon className="h-4 w-4 shrink-0"/>
                        {!collapsed && <span>{item.title}</span>}
                      </NavLink>
                    </SidebarMenuButton>
                  </SidebarMenuItem>);
        })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-2">
        <button onClick={toggleSidebar} className="flex w-full items-center justify-center rounded-lg p-2 text-muted-foreground hover:bg-sidebar-accent hover:text-foreground transition-colors">
          <ChevronLeft className={`h-4 w-4 transition-transform ${collapsed ? "rotate-180" : ""}`}/>
        </button>
      </SidebarFooter>
    </Sidebar>);
}
