import { ItemTypeIcon } from "@/components/dashboard/ItemTypeIcon";
import { Card, CardContent } from "@/components/ui/card";
import { itemTypes, type MockItem } from "@/lib/mock-data";

interface PinnedItemCardProps {
  item: MockItem;
}

export function PinnedItemCard({ item }: PinnedItemCardProps) {
  const type = itemTypes.find((itemType) => itemType.id === item.itemTypeId);

  return (
    <Card size="sm">
      <CardContent className="flex items-center gap-3">
        <ItemTypeIcon slug={type?.slug} />
        <h3 className="truncate font-medium">{item.title}</h3>
      </CardContent>
    </Card>
  );
}
