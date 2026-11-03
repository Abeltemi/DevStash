import { ItemTypeIcon } from "@/components/dashboard/ItemTypeIcon";
import { Card, CardContent } from "@/components/ui/card";
import { itemTypes, type MockItem } from "@/lib/mock-data";

interface ItemCardProps {
  item: MockItem;
}

export function ItemCard({ item }: ItemCardProps) {
  const type = itemTypes.find((itemType) => itemType.id === item.itemTypeId);

  return (
    <Card className="h-full">
      <CardContent className="flex h-full flex-col gap-3">
        <div className="flex items-center gap-2.5">
          <ItemTypeIcon slug={type?.slug} />
          <span className="text-xs font-medium text-muted-foreground">{type?.name}</span>
        </div>
        <div className="flex-1">
          <h3 className="font-medium">{item.title}</h3>
          <p className="mt-1 line-clamp-2 text-muted-foreground">{item.description}</p>
        </div>
        <div className="flex items-center justify-between gap-3 text-xs text-muted-foreground">
          <ul aria-label="Tags" className="flex min-w-0 flex-wrap gap-x-2">
            {item.tags.map((tag) => (
              <li key={tag}>#{tag}</li>
            ))}
          </ul>
          <span className="shrink-0">{item.updatedAtLabel}</span>
        </div>
      </CardContent>
    </Card>
  );
}
