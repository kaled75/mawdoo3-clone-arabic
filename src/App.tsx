import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { AdminLayout } from "./layouts/AdminLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ArticlesPage from "./pages/admin/ArticlesPage";
import NewArticlePage from "./pages/admin/NewArticlePage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout><AdminDashboard /></AdminLayout>} />
          <Route path="/admin/articles" element={<AdminLayout><ArticlesPage /></AdminLayout>} />
          <Route path="/admin/articles/new" element={<AdminLayout><NewArticlePage /></AdminLayout>} />
          <Route path="/admin/analytics" element={<AdminLayout><div className="p-6">قريباً - صفحة الإحصائيات</div></AdminLayout>} />
          <Route path="/admin/categories" element={<AdminLayout><div className="p-6">قريباً - إدارة التصنيفات</div></AdminLayout>} />
          <Route path="/admin/media" element={<AdminLayout><div className="p-6">قريباً - إدارة الصور</div></AdminLayout>} />
          <Route path="/admin/comments" element={<AdminLayout><div className="p-6">قريباً - إدارة التعليقات</div></AdminLayout>} />
          <Route path="/admin/users" element={<AdminLayout><div className="p-6">قريباً - إدارة المستخدمين</div></AdminLayout>} />
          <Route path="/admin/settings" element={<AdminLayout><div className="p-6">قريباً - الإعدادات</div></AdminLayout>} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
