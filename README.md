## React portfolio (Vite + Ant Design)

Personal portfolio site with **skills**, **selected projects**, and a **downloadable resume**.

## Requirements

- Node.js (see `package.json` engines)

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.<br />
Vite will print the local URL in your terminal.

The page will reload if you make edits.<br />

### `npm run build`

Builds the app for production to the `build` folder.

### `npm run preview`

Serves the production build locally.

### `npm run lint`

Runs ESLint.

### `npm test`

Runs unit/component tests via Vitest.

## Quality

- CI runs `install → lint → test → build` on pushes/PRs (see `.github/workflows/ci.yml`).

## Portfolio talking points

- Recruiter-proof setup (clean install + CI checks).
- Basic security/a11y hygiene (safe external links, image `alt` text).
