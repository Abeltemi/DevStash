"use client";

import { useState } from "react";
import { cn } from "cn";

import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardTopBar } from "@/components/dashboard/DashboardTopBar";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";

interface DashboardShellProps {
  children: React.ReactNode;
}

export function DashboardShell({ children }: DashboardShellProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="flex h-svh">
      <aside
        className={cn(
          "hidden shrink-0 border-r bg-sidebar text-sidebar-foreground transition-[width] motion-reduce:transition-none md:block",
          isCollapsed ? "w-16" : "w-64",
        )}
      >
        <DashboardSidebar collapsed={isCollapsed} />
      </aside>

      <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <SheetContent side="left" className="gap-0 bg-sidebar p-0 text-sidebar-foreground data-[side=left]:w-64">
          <SheetTitle className="sr-only">Navigation</SheetTitle>
          <DashboardSidebar onNavigate={() => setIsDrawerOpen(false)} />
        </SheetContent>
      </Sheet>

      <div className="flex min-w-0 flex-1 flex-col">
        <DashboardTopBar
          isSidebarCollapsed={isCollapsed}
          onToggleSidebar={() => setIsCollapsed((collapsed) => !collapsed)}
          onOpenDrawer={() => setIsDrawerOpen(true)}
        />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
