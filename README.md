# Muhammad Abdullah — Portfolio

A glassmorphic developer portfolio built with React + Vite + Tailwind CSS.

## Run it locally

```bash
npm install
npm run dev
```

Then open the local URL Vite gives you (usually http://localhost:5173).

## Build for production

```bash
npm run build
```

Output goes to the `dist/` folder — upload that anywhere (Vercel, Netlify, GitHub Pages, etc).

## Where to edit things

- `src/components/Hero.jsx` — name, tagline, intro text, buttons
- `src/components/TypingCode.jsx` — the animated code snippet in the hero
- `src/components/About.jsx` — bio text and "currently focused on" list
- `src/components/Skills.jsx` — your tech stack, grouped by category
- `src/components/Projects.jsx` — **placeholder projects, swap with your real ones**. Each project needs a title, description, tags, and (once you add real links) a GitHub/live demo URL.
- `src/components/Contact.jsx` — your real email, GitHub, LinkedIn, and Upwork links (currently placeholders — search for `yourusername` / `you@example.com`)
- `tailwind.config.js` — colors, fonts, animation timings if you want to tweak the theme

## Notes

- Colors and fonts are defined as design tokens in `tailwind.config.js` — change them once there and they update everywhere.
- The blurred moving shapes in the background are pure CSS (see `LiquidBackground.jsx`) — no images needed.
- Respects `prefers-reduced-motion` for accessibility.
