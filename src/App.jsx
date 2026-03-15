import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Index from "./pages/Index";
import { PlaceholderPage } from "./pages/PlaceholderPage";
import Login from "./pages/Login";
import Questions from "./pages/Questions";
import Learn from "./pages/Learn";
import Companies from "./pages/Companies";
import NotFound from "./pages/NotFound";
import Roadmaps from "./pages/Roadmaps";
import RoadmapDetail from "./pages/RoadmapDetail";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Profile from "./pages/Profile";
import Settings from "./pages/Settings";
const queryClient = new QueryClient();
const App = () => (<QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
          <Route path="/learn" element={<Learn />}/>
          <Route path="/questions" element={<Questions />}/>
          <Route path="/roadmaps" element={<Roadmaps />}/>
          <Route path="/roadmaps/:roadmapId" element={<RoadmapDetail />}/>
          <Route path="/companies" element={<Companies />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/blog/:slug" element={<BlogDetail />}/>
          <Route path="/analytics" element={<PlaceholderPage title="Analytics" description="Personal analytics coming soon."/>}/>
          <Route path="/bookmarks" element={<PlaceholderPage title="Bookmarks" description="Saved questions coming soon."/>}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/settings" element={<Settings />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>);
export default App;
