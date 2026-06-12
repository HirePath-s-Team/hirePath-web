# Prep Analytics Frontend

React + Vite frontend for the Prep Analytics Suite.

## Getting started

```sh
npm install
copy .env.example .env
npm run dev
```

Set `VITE_API_URL` in `.env` to your backend URL. For local development the default is `http://localhost:4000`.

## Scripts

- `npm run dev` starts the local dev server
- `npm run build` builds the production bundle
- `npm run preview` serves the production build locally
- `npm run lint` runs ESLint
- `npm run test` runs the test suite

## Deployment notes

- This app is a static SPA.
- `vercel.json` is included for Vercel rewrites.
- `public/_redirects` is included for Netlify-style SPA rewrites.
- Set `VITE_API_URL` to the deployed backend URL before building.
