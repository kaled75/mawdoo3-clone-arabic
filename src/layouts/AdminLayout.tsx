import { ReactNode } from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AdminSidebar } from "@/components/admin/AdminSidebar";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import { Link } from "react-router-dom";

interface AdminLayoutProps {
  children: ReactNode;
}

export function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <SidebarProvider>
      <header className="h-14 flex items-center justify-between border-b bg-white px-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger />
          <h1 className="text-xl font-bold text-primary">موضوع - لوحة التحكم</h1>
        </div>
        <Button variant="outline" asChild>
          <Link to="/">
            <Home className="ml-2 h-4 w-4" />
            العودة للموقع
          </Link>
        </Button>
      </header>

      <div className="flex min-h-screen w-full">
        <AdminSidebar />
        <main className="flex-1 p-6 bg-muted/30">
          {children}
        </main>
      </div>
    </SidebarProvider>
  );
}