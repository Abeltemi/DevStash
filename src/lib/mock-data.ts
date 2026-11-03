export interface MockUser {
  id: string;
  name: string;
  email: string;
  initials: string;
}

export interface MockItemType {
  id: string;
  name: string;
  slug: string;
  icon: string;
  color: string;
}

export interface MockItem {
  id: string;
  itemTypeId: string;
  title: string;
  description: string;
  content: string | null;
  url: string | null;
  tags: string[];
  isFavorite: boolean;
  isPinned: boolean;
  updatedAtLabel: string;
}

export interface MockCollection {
  id: string;
  name: string;
  description: string;
  isFavorite: boolean;
  defaultTypeId: string;
  itemIds: string[];
}

export const currentUser: MockUser = {
  id: "user-1",
  name: "Alex Morgan",
  email: "alex@example.com",
  initials: "AM",
};

export const itemTypes: MockItemType[] = [
  { id: "type-snippet", name: "Snippet", slug: "snippet", icon: "Code", color: "#3b82f6" },
  { id: "type-prompt", name: "Prompt", slug: "prompt", icon: "Sparkles", color: "#8b5cf6" },
  { id: "type-command", name: "Command", slug: "command", icon: "Terminal", color: "#f97316" },
  { id: "type-note", name: "Note", slug: "note", icon: "StickyNote", color: "#fde047" },
  { id: "type-link", name: "Link", slug: "link", icon: "Link", color: "#10b981" },
  { id: "type-file", name: "File", slug: "file", icon: "File", color: "#6b7280" },
  { id: "type-image", name: "Image", slug: "image", icon: "Image", color: "#ec4899" },
];

export const items: MockItem[] = [
  {
    id: "item-1",
    itemTypeId: "type-snippet",
    title: "Fetch with retry + backoff",
    description: "A small, resilient fetch wrapper for APIs that occasionally hiccup.",
    content: `export async function fetchWithRetry(url: string, retries = 3): Promise<Response> {
  for (let attempt = 0; attempt < retries; attempt++) {
    const response = await fetch(url);
    if (response.ok) return response;
    await new Promise((resolve) => setTimeout(resolve, 2 ** attempt * 250));
  }
  throw new Error(\`Request failed after \${retries} attempts\`);
}`,
    url: null,
    tags: ["typescript", "api"],
    isFavorite: true,
    isPinned: true,
    updatedAtLabel: "12 min ago",
  },
  {
    id: "item-2",
    itemTypeId: "type-prompt",
    title: "Senior frontend reviewer",
    description: "Review this pull request for accessibility, performance, and maintainability.",
    content:
      "You are a senior frontend engineer. Review this pull request for accessibility, performance, and maintainability. List issues by severity and suggest a fix for each.",
    url: null,
    tags: ["ai", "review"],
    isFavorite: false,
    isPinned: true,
    updatedAtLabel: "1 hour ago",
  },
  {
    id: "item-3",
    itemTypeId: "type-command",
    title: "Kill process on port",
    description: "Find and stop whatever is listening on a local development port.",
    content: "lsof -ti :3000 | xargs kill -9",
    url: null,
    tags: ["cli", "debugging"],
    isFavorite: false,
    isPinned: false,
    updatedAtLabel: "Yesterday",
  },
  {
    id: "item-4",
    itemTypeId: "type-note",
    title: "Release checklist",
    description: "A calm, repeatable list for shipping a new version without surprises.",
    content: "- Run the full build\n- Review pending migrations\n- Update the changelog\n- Tag the release\n- Watch error monitoring",
    url: null,
    tags: ["process", "shipping"],
    isFavorite: true,
    isPinned: false,
    updatedAtLabel: "Yesterday",
  },
  {
    id: "item-5",
    itemTypeId: "type-link",
    title: "Radix primitives",
    description: "Unstyled, accessible components for building high-quality interfaces.",
    content: null,
    url: "https://www.radix-ui.com/primitives",
    tags: ["react", "ui"],
    isFavorite: false,
    isPinned: false,
    updatedAtLabel: "2 days ago",
  },
  {
    id: "item-6",
    itemTypeId: "type-note",
    title: "Database migration playbook",
    description: "Notes and reminders for safe, observable production migrations.",
    content: "- Take a backup first\n- Prefer additive changes\n- Backfill in small batches\n- Watch slow queries during rollout",
    url: null,
    tags: ["postgres", "ops"],
    isFavorite: false,
    isPinned: false,
    updatedAtLabel: "3 days ago",
  },
];

export const collections: MockCollection[] = [
  {
    id: "collection-1",
    name: "Frontend patterns",
    description: "Reusable code and references for building interfaces.",
    isFavorite: true,
    defaultTypeId: "type-snippet",
    itemIds: ["item-1", "item-5"],
  },
  {
    id: "collection-2",
    name: "AI workflows",
    description: "Prompts for repeatable AI-assisted work.",
    isFavorite: false,
    defaultTypeId: "type-prompt",
    itemIds: ["item-2"],
  },
  {
    id: "collection-3",
    name: "Terminal toolkit",
    description: "Commands worth keeping close at hand.",
    isFavorite: false,
    defaultTypeId: "type-command",
    itemIds: ["item-3"],
  },
  {
    id: "collection-4",
    name: "Release ops",
    description: "Checklists and notes for shipping safely.",
    isFavorite: false,
    defaultTypeId: "type-note",
    itemIds: ["item-3", "item-4", "item-6"],
  },
];
