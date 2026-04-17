# Global Extreme Weather Monitor

A vibe-coded weather data interface exploring editorial typography, climate dashboards, and AI-assisted product prototyping.

The public demo is a static React/Vite frontend using curated mock weather data. It is designed as a portfolio-ready prototype rather than a production weather service.

## What It Shows

- Global extreme weather rankings
- Warmest, coldest, and widest temperature-range city lists
- Celsius / Fahrenheit switching
- Multi-language UI labels
- Editorial, archive-inspired visual direction

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CDN
- lucide-react

## Local Development

```bash
npm install
npm run dev-frontend
```

## Build

```bash
npm run build
```

## Notes

The exported Vertex AI project also includes a local Node backend scaffold for Google Cloud proxy experiments. The public GitHub Pages demo does not require that backend.

Local environment files such as `backend/.env.local` are intentionally ignored and should not be committed.
