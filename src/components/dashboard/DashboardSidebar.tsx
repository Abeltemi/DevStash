"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronRight, Diamond, Star } from "lucide-react";
import { cn } from "cn";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ITEM_TYPE_DISPLAY } from "@/lib/item-type-display";
import { collections, currentUser, itemTypes, type MockCollection } from "@/lib/mock-data";

const RECENT_COLLECTIONS_LIMIT = 3;

const favoriteCollections = collections.filter((collection) => collection.isFavorite);
// Mock collections have no timestamps, so array order stands in for recency.
const recentCollections = collections
  .filter((collection) => !collection.isFavorite)
  .slice(0, RECENT_COLLECTIONS_LIMIT);

const NAV_LINK_CLASS =
  "flex h-9 items-center gap-3 rounded-lg px-2.5 text-sm text-muted-foreground transition-colors outline-none hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-3 focus-visible:ring-ring/50 motion-reduce:transition-none";
const ACTIVE_NAV_LINK_CLASS = "bg-sidebar-accent text-sidebar-accent-foreground";

interface DashboardSidebarProps {
  collapsed?: boolean;
  onNavigate?: () => void;
}

interface SidebarSectionProps {
  title: string;
  collapsed: boolean;
  children: React.ReactNode;
}

interface CollectionLinksProps {
  items: MockCollection[];
  isFavorite?: boolean;
  collapsed: boolean;
  pathname: string;
  onNavigate?: () => void;
}

interface CollectionSectionProps extends CollectionLinksProps {
  title: string;
}

function SidebarSection({ title, collapsed, children }: SidebarSectionProps) {
  return (
    <section aria-label={title} className="group/section flex flex-col gap-1">
      {collapsed ? (
        <div aria-hidden="true" className="mx-2.5 mb-1 border-t group-first/section:hidden" />
      ) : (
        <h2 className="px-2.5 pb-1 text-xs font-medium text-muted-foreground">{title}</h2>
      )}
      {children}
    </section>
  );
}

function CollectionLinks({
  items,
  isFavorite = false,
  collapsed,
  pathname,
  onNavigate,
}: CollectionLinksProps) {
  return items.map((collection) => {
    const href = `/collections/${collection.id}`;
    const isActive = pathname === href;
    const typeSlug = itemTypes.find((type) => type.id === collection.defaultTypeId)?.slug;
    const dotClass = typeSlug ? ITEM_TYPE_DISPLAY[typeSlug]?.dotClass : undefined;

    return (
      <Link
        key={collection.id}
        href={href}
        aria-label={collapsed ? collection.name : undefined}
        aria-current={isActive ? "page" : undefined}
        title={collapsed ? collection.name : undefined}
        onNavigate={onNavigate}
        className={cn(NAV_LINK_CLASS, collapsed && "justify-center", isActive && ACTIVE_NAV_LINK_CLASS)}
      >
        <span
          aria-hidden="true"
          className={cn("size-2 shrink-0 rounded-full bg-muted-foreground", dotClass)}
        />
        {!collapsed && <span className="truncate">{collection.name}</span>}
        {!collapsed && isFavorite && (
          <Star aria-label="Favorite" className="ml-auto size-3.5 shrink-0 fill-current" />
        )}
      </Link>
    );
  });
}

function CollectionSection({ title, ...linksProps }: CollectionSectionProps) {
  // State lives here so a section stays closed when the rail is toggled; the rail always shows its dots.
  const [isOpen, setIsOpen] = useState(true);

  if (linksProps.collapsed) {
    return (
      <SidebarSection title={title} collapsed>
        <CollectionLinks {...linksProps} />
      </SidebarSection>
    );
  }

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      render={<section aria-label={title} />}
      className="flex flex-col gap-1"
    >
      <CollapsibleTrigger className="flex items-center justify-between rounded-lg px-2.5 pb-1 text-xs font-medium text-muted-foreground outline-none hover:text-sidebar-foreground focus-visible:ring-3 focus-visible:ring-ring/50">
        {title}
        <ChevronRight
          aria-hidden="true"
          className={cn("size-3.5 transition-transform motion-reduce:transition-none", isOpen && "rotate-90")}
        />
      </CollapsibleTrigger>
      <CollapsibleContent className="flex flex-col gap-1">
        <CollectionLinks {...linksProps} />
      </CollapsibleContent>
    </Collapsible>
  );
}

export function DashboardSidebar({ collapsed = false, onNavigate }: DashboardSidebarProps) {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col">
      <div className={cn("flex h-16 shrink-0 items-center border-b px-4", collapsed && "justify-center px-0")}>
        <Link
          href="/dashboard"
          aria-label="DevStash dashboard"
          onNavigate={onNavigate}
          className="flex items-center gap-2.5 rounded-lg font-semibold outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
        >
          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Diamond aria-hidden="true" className="size-4" />
          </span>
          {!collapsed && <span>DevStash</span>}
        </Link>
      </div>

      <nav aria-label="Sidebar" className="flex min-h-0 flex-1 flex-col gap-5 overflow-y-auto p-3">
        <SidebarSection title="Items" collapsed={collapsed}>
          {itemTypes.map((type) => {
            const href = `/items/${type.slug}s`;
            const isActive = pathname === href;
            const display = ITEM_TYPE_DISPLAY[type.slug];
            const Icon = display?.icon;

            return (
              <Link
                key={type.id}
                href={href}
                aria-label={collapsed ? `${type.name}s` : undefined}
                aria-current={isActive ? "page" : undefined}
                title={collapsed ? `${type.name}s` : undefined}
                onNavigate={onNavigate}
                className={cn(NAV_LINK_CLASS, collapsed && "justify-center", isActive && ACTIVE_NAV_LINK_CLASS)}
              >
                {Icon && <Icon aria-hidden="true" className={cn("size-4 shrink-0", display.textClass)} />}
                {!collapsed && <span className="truncate">{type.name}s</span>}
              </Link>
            );
          })}
        </SidebarSection>

        <CollectionSection
          title="Favorite collections"
          items={favoriteCollections}
          isFavorite
          collapsed={collapsed}
          pathname={pathname}
          onNavigate={onNavigate}
        />

        <CollectionSection
          title="Recent collections"
          items={recentCollections}
          collapsed={collapsed}
          pathname={pathname}
          onNavigate={onNavigate}
        />
      </nav>

      <div className={cn("flex shrink-0 items-center gap-3 border-t p-3", collapsed && "justify-center")}>
        <Avatar title={collapsed ? currentUser.name : undefined}>
          <AvatarFallback>{currentUser.initials}</AvatarFallback>
        </Avatar>
        {!collapsed && (
          <div className="min-w-0 text-sm">
            <p className="truncate font-medium">{currentUser.name}</p>
            <p className="truncate text-xs text-muted-foreground">{currentUser.email}</p>
          </div>
        )}
      </div>
    </div>
  );
}
