import { useState } from "react";
import { 
  Home, 
  FileText, 
  Plus, 
  Tags, 
  Users, 
  Settings, 
  BarChart3,
  Image,
  MessageSquare
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

const items = [
  { title: "الرئيسية", url: "/admin", icon: Home },
  { title: "إحصائيات", url: "/admin/analytics", icon: BarChart3 },
  { title: "المقالات", url: "/admin/articles", icon: FileText },
  { title: "إضافة مقال", url: "/admin/articles/new", icon: Plus },
  { title: "التصنيفات", url: "/admin/categories", icon: Tags },
  { title: "الصور", url: "/admin/media", icon: Image },
  { title: "التعليقات", url: "/admin/comments", icon: MessageSquare },
  { title: "المستخدمين", url: "/admin/users", icon: Users },
  { title: "الإعدادات", url: "/admin/settings", icon: Settings },
];

export function AdminSidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;
  const getNavCls = ({ isActive }: { isActive: boolean }) =>
    isActive ? "bg-primary text-primary-foreground font-medium" : "hover:bg-muted/50";

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <div className="p-4 border-b">
          <h2 className="text-lg font-bold text-primary">لوحة التحكم</h2>
        </div>
        
        <SidebarGroup>
          <SidebarGroupLabel>الإدارة</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink to={item.url} end className={getNavCls}>
                      <item.icon className="ml-2 h-4 w-4" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}