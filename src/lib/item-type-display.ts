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
  tintClass: string;
}

// Class names are spelled out in full so Tailwind can detect them at build time.
export const ITEM_TYPE_DISPLAY: Record<string, ItemTypeDisplay> = {
  snippet: { icon: Code, textClass: "text-type-snippet", dotClass: "bg-type-snippet", tintClass: "bg-type-snippet/10" },
  prompt: { icon: Sparkles, textClass: "text-type-prompt", dotClass: "bg-type-prompt", tintClass: "bg-type-prompt/10" },
  command: { icon: Terminal, textClass: "text-type-command", dotClass: "bg-type-command", tintClass: "bg-type-command/10" },
  note: { icon: StickyNote, textClass: "text-type-note", dotClass: "bg-type-note", tintClass: "bg-type-note/10" },
  link: { icon: LinkIcon, textClass: "text-type-link", dotClass: "bg-type-link", tintClass: "bg-type-link/10" },
  file: { icon: FileIcon, textClass: "text-type-file", dotClass: "bg-type-file", tintClass: "bg-type-file/10" },
  image: { icon: ImageIcon, textClass: "text-type-image", dotClass: "bg-type-image", tintClass: "bg-type-image/10" },
};
