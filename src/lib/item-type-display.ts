import {
  Code,
  File as FileIcon,
  Image as ImageIcon,
  Link as LinkIcon,
  Sparkles,
  StickyNote,
  Terminal,
  type LucideIcon,
} from "lucide-react";

export interface ItemTypeDisplay {
  icon: LucideIcon;
  textClass: string;
  dotClass: string;
}

// Class names are spelled out in full so Tailwind can detect them at build time.
export const ITEM_TYPE_DISPLAY: Record<string, ItemTypeDisplay> = {
  snippet: { icon: Code, textClass: "text-type-snippet", dotClass: "bg-type-snippet" },
  prompt: { icon: Sparkles, textClass: "text-type-prompt", dotClass: "bg-type-prompt" },
  command: { icon: Terminal, textClass: "text-type-command", dotClass: "bg-type-command" },
  note: { icon: StickyNote, textClass: "text-type-note", dotClass: "bg-type-note" },
  link: { icon: LinkIcon, textClass: "text-type-link", dotClass: "bg-type-link" },
  file: { icon: FileIcon, textClass: "text-type-file", dotClass: "bg-type-file" },
  image: { icon: ImageIcon, textClass: "text-type-image", dotClass: "bg-type-image" },
};
