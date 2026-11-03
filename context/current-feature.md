# Current Feature

<!-- Feature name and short  description -->
**Dashboard UI Phase 2** — Phase 2 of 3 for the dashboard UI layout: build the collapsible sidebar with item type links, favorite and recent collections, and the user avatar area, using mock data until a database is implemented.

## Status
<!-- Not Started | In Progress | Completed -->
Completed

## Goals
<!-- Goals and Requirements  -->

## Notes
<!-- Any extra notes  -->
Full spec: @context/features/dashboard-phase-2-spec.md

Use the screenshot for how it should look. Import data directly from the mock data file until a database is implemented.

References:
- @context/screenshots/dashboard-ui-main.png
- @context/project-overview.md
- @src/lib/mock-data.ts
- @context/features/dashboard-phase-1-spec.md
- @context/features/dashboard-phase-3-spec.md

## History
<!--Keep this updated. Earliest to latest -->
- **Initial Next.js setup** (Completed) — Next.js 16, React 19, TypeScript and Tailwind CSS v4 scaffolded; starter boilerplate and `public/` SVGs removed; project context docs added. Pushed to GitHub on `main`.
- **Dashboard UI Phase 1** (Completed) — Built on `feature/dashboard-phase-1`.
  - ShadCN UI initialization and components
  - ShadCN component installation
  - Dashboard route at `/dashboard`
  - Main dashboard layout and any global styles
  - Dark mode by default
  - Top bar with search and new item button (display only)
  - Placeholder for sidebar and main area, with an h2 for "Sidebar" and "Main"
- **Dashboard UI Phase 2** (Completed) — Built on `feature/dashboard-phase-2`.
  - Collapsible sidebar (full width to icon rail on desktop)
  - Items/types with links to `/items/TYPE` (eg. `/items/snippets`)
  - Favorite collections
  - Most recent collections
  - Favorite and recent collection sections individually collapsible
  - User avatar area at the bottom
  - Drawer icon to open/close sidebar
  - Always a drawer on mobile view
