# Luxu Real Estate (LuxeEstate) - Project Context

This project is a premium real estate platform called **LuxeEstate**, designed to provide a high-end experience for buying, renting, and managing luxury properties.

## Project Overview

*   **Framework:** [Next.js 16.2.0](https://nextjs.org) (App Router)
*   **Library:** [React 19.2.4](https://react.dev)
*   **Styling:** [Tailwind CSS 4.0](https://tailwindcss.com) with PostCSS
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Architecture:** Next.js App Router with a focus on high-performance and modern UI/UX.

### Key Resources
*   `PRD/resources/`: Contains HTML and PNG mockups for all major screens (Home, Property Details, Management Dashboard, etc.). These should be treated as the primary source of truth for UI/UX implementation.
*   `AGENTS.md`: Important warning about breaking changes in the specific Next.js/React versions used in this project. Always refer to `node_modules/next/dist/docs/` for the most accurate documentation.

## Building and Running

### Development
```bash
npm run dev
```
The development server runs on [http://localhost:3000](http://localhost:3000).

### Production
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

## Development Conventions

### Design System
*   **Typography:** Primary font is **Inter** (sans-serif). Use **Geist** for system UI if preferred, as it's already configured in `RootLayout`.
*   **Icons:** Material Icons and Material Symbols Outlined.
*   **Colors:**
    *   `primary`: `#06f9d0`
    *   `mosque` (Active States): `#006655`
    *   `background-light`: `#EEF6F6`
    *   `background-dark`: `#0f231f`
    *   `nordic-dark`: `#19322F`
*   **Spacing & Border Radius:** Standard Tailwind 4 defaults, with a preference for soft shadows (`box-shadow: 0 10px 40px -10px rgba(0,0,0,0.05)`).

### Coding Standards
*   **Component Structure:** Use functional components with TypeScript interfaces for props.
*   **Styling:** Strictly use Tailwind CSS classes. Avoid inline styles or external CSS files unless absolutely necessary (e.g., global resets in `globals.css`).
*   **Strict Mode:** React 19 features and Next.js 16 conventions must be strictly followed. Heed all deprecation notices in the terminal.
*   **File Naming:** Use kebab-case for directories and files (e.g., `property-card.tsx`).

### Documentation
*   Refer to `CLAUDE.md` for any LLM-specific instructions.
*   Update `AGENTS.md` if new architectural patterns or breaking changes are discovered.
