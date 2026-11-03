import Link from "next/link";
import { cn } from "cn";

import { Card, CardContent } from "@/components/ui/card";
import { ITEM_TYPE_DISPLAY } from "@/lib/item-type-display";
import { itemTypes, type MockCollection } from "@/lib/mock-data";

interface CollectionCardProps {
  collection: MockCollection;
}

export function CollectionCard({ collection }: CollectionCardProps) {
  const typeSlug = itemTypes.find((type) => type.id === collection.defaultTypeId)?.slug;
  const dotClass = typeSlug ? ITEM_TYPE_DISPLAY[typeSlug]?.dotClass : undefined;
  const itemCount = collection.itemIds.length;

  return (
    <Link
      href={`/collections/${collection.id}`}
      className="block h-full rounded-xl outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
    >
      <Card className="h-full transition-colors hover:bg-accent motion-reduce:transition-none">
        <CardContent className="flex h-full flex-col gap-2">
          <div className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className={cn("size-2 shrink-0 rounded-full bg-muted-foreground", dotClass)}
            />
            <h3 className="truncate font-medium">{collection.name}</h3>
          </div>
          <p className="line-clamp-2 flex-1 text-muted-foreground">{collection.description}</p>
          <p className="text-xs text-muted-foreground">
            {itemCount} {itemCount === 1 ? "item" : "items"}
          </p>
        </CardContent>
      </Card>
    </Link>
  );
}
