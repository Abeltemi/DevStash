import { cn } from "cn";

import { ITEM_TYPE_DISPLAY } from "@/lib/item-type-display";

interface ItemTypeIconProps {
  slug?: string;
}

export function ItemTypeIcon({ slug }: ItemTypeIconProps) {
  const display = slug ? ITEM_TYPE_DISPLAY[slug] : undefined;
  const Icon = display?.icon;

  return (
    <span
      aria-hidden="true"
      className={cn("flex size-8 shrink-0 items-center justify-center rounded-lg bg-muted", display?.tintClass)}
    >
      {Icon && <Icon className={cn("size-4", display.textClass)} />}
    </span>
  );
}
