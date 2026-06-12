import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Index from "./pages/Index";
import Analytics from "./pages/Analytics";
import Bookmarks from "./pages/Bookmarks";
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
import { ProtectedRoute } from "./components/ProtectedRoute";
const queryClient = new QueryClient();
const App = () => (<QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />}/>
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
          <Route path="/learn" element={<ProtectedRoute><Learn /></ProtectedRoute>}/>
          <Route path="/questions" element={<ProtectedRoute><Questions /></ProtectedRoute>}/>
          <Route path="/roadmaps" element={<ProtectedRoute><Roadmaps /></ProtectedRoute>}/>
          <Route path="/roadmaps/:roadmapId" element={<ProtectedRoute><RoadmapDetail /></ProtectedRoute>}/>
          <Route path="/companies" element={<ProtectedRoute><Companies /></ProtectedRoute>}/>
          <Route path="/blog" element={<ProtectedRoute><Blog /></ProtectedRoute>}/>
          <Route path="/blog/:slug" element={<ProtectedRoute><BlogDetail /></ProtectedRoute>}/>
          <Route path="/analytics" element={<ProtectedRoute><Analytics /></ProtectedRoute>}/>
          <Route path="/bookmarks" element={<ProtectedRoute><Bookmarks /></ProtectedRoute>}/>
          <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>}/>
          <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>}/>
          <Route path="/login" element={<Login />}/>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>);
export default App;
