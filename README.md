# ScoreSync Landing

Standalone landing page for ScoreSync.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Required environment variable

```bash
VITE_SCORESYNC_WAITLIST_URL=https://tally.so/r/GxoRjz
```

## Deploy on Render

- Runtime: Static Site
- Build Command: `npm install && npm run build`
- Publish Directory: `dist`
- Env var: `VITE_SCORESYNC_WAITLIST_URL`
