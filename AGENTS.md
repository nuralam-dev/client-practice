<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# client-practice

Single-package Next.js 16 (App Router) + React 19 app. Not a monorepo. No test runner and no CI exist — do not invent test commands.

## Commands (npm, not pnpm/yarn)

- `npm run dev` — dev server (rewrites the agent-rules block above; leave it committed)
- `npm run lint` — ESLint (flat config, `eslint-config-next`)
- `npm run typecheck` — `tsc --noEmit`
- `npm run format` — Prettier, but the glob is `**/*.{ts,tsx}` only: `.jsx`/`.mjs`/`.css` files are never formatted
- Verify with `npm run lint && npm run typecheck` (order doesn't strictly matter; there is no test step)

## Conventions that differ from defaults

- Backend calls are hardcoded to `http://localhost:4000` (see `app/user/*`); pages throw without that API running. It lives outside this repo.
- Route params are async: `const { slug } = await params` (see `app/user/[slug]/page.jsx`). Never read `params` synchronously.
- shadcn/ui is configured with style `base-nova` (`components.json`), so components import from `@base-ui/react`, not Radix. Add components with `npx shadcn@latest add <name>`; they land in `components/ui/`.
- Tailwind v4: no `tailwind.config` — theme lives in `app/globals.css`, wired via `postcss.config.mjs`.
- Prettier: no semicolons, double quotes, `prettier-plugin-tailwindcss` (class order is enforced on format).
- Path alias `@/*` → repo root. `tsconfig.json` has `allowJs: true`; both `.tsx` and `.jsx` pages/components are in use — match the language of the file you're editing.
- `hooks/` and `lib/` are shadcn alias targets (currently near-empty); keep generated UI in `components/ui/` and app routes under `app/`.
