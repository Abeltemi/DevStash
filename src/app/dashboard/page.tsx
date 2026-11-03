import { Folder, FolderHeart, Layers, Pin, Plus, Star } from "lucide-react";

import { CollectionCard } from "@/components/dashboard/CollectionCard";
import { ItemCard } from "@/components/dashboard/ItemCard";
import { PinnedItemCard } from "@/components/dashboard/PinnedItemCard";
import { StatCard } from "@/components/dashboard/StatCard";
import { Button } from "@/components/ui/button";
import { collections, currentUser, items } from "@/lib/mock-data";

const RECENT_COLLECTIONS_LIMIT = 4;
const RECENT_ITEMS_LIMIT = 10;

const STATS = [
  { label: "Items", value: items.length, icon: Layers },
  { label: "Collections", value: collections.length, icon: Folder },
  { label: "Favorite items", value: items.filter((item) => item.isFavorite).length, icon: Star },
  {
    label: "Favorite collections",
    value: collections.filter((collection) => collection.isFavorite).length,
    icon: FolderHeart,
  },
];

// Mock data has no timestamps, so array order stands in for recency.
const recentCollections = collections.slice(0, RECENT_COLLECTIONS_LIMIT);
const recentItems = items.slice(0, RECENT_ITEMS_LIMIT);
const pinnedItems = items.filter((item) => item.isPinned);

export default function DashboardPage() {
  const firstName = currentUser.name.split(" ")[0];

  return (
    <div className="mx-auto flex max-w-6xl flex-col gap-8">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h1 className="text-2xl font-semibold tracking-tight">Welcome back, {firstName}</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Your knowledge, organized and ready when you need it.
          </p>
        </div>
        <Button type="button" size="lg" className="shrink-0">
          <Plus aria-hidden="true" />
          New item
        </Button>
      </div>

      <section aria-label="Stats">
        <ul className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {STATS.map((stat) => (
            <li key={stat.label}>
              <StatCard {...stat} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="recent-collections" className="flex flex-col gap-3">
        <h2 id="recent-collections" className="text-lg font-semibold">
          Recent collections
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {recentCollections.map((collection) => (
            <li key={collection.id}>
              <CollectionCard collection={collection} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="pinned-items" className="flex flex-col gap-3">
        <h2 id="pinned-items" className="flex items-center gap-2 text-lg font-semibold">
          <Pin aria-hidden="true" className="size-4 text-primary" />
          Pinned items
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2">
          {pinnedItems.map((item) => (
            <li key={item.id}>
              <PinnedItemCard item={item} />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="recent-items" className="flex flex-col gap-3">
        <h2 id="recent-items" className="text-lg font-semibold">
          Recent items
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {recentItems.map((item) => (
            <li key={item.id}>
              <ItemCard item={item} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
