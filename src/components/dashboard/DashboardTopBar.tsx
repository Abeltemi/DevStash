import { Plus, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function DashboardTopBar() {
  return (
    <header className="flex h-16 shrink-0 items-center gap-3 border-b px-4 md:px-6">
      <div className="relative w-full max-w-2xl">
        <Search
          aria-hidden="true"
          className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
        />
        <Input
          type="search"
          aria-label="Search items, tags, and collections"
          placeholder="Search items, tags, and collections..."
          className="h-9 pl-9"
        />
      </div>
      <Button type="button" size="lg" className="ml-auto shrink-0">
        <Plus aria-hidden="true" />
        New item
      </Button>
    </header>
  );
}
