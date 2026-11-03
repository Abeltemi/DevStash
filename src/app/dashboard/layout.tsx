import { DashboardTopBar } from "@/components/dashboard/DashboardTopBar";

export default function DashboardLayout({ children }: LayoutProps<"/dashboard">) {
  return (
    <div className="flex h-svh">
      <aside className="hidden w-64 shrink-0 border-r bg-sidebar p-4 text-sidebar-foreground md:block">
        <h2>Sidebar</h2>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <DashboardTopBar />
        <main className="flex-1 overflow-y-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
