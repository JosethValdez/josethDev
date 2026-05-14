# josethDev

Personal portfolio for **Joseth Valdez** — CS undergraduate at UTEP, cybersecurity researcher at CyberRIG.

Built with **React + TypeScript + Vite + Tailwind CSS + Framer Motion**. Deploys to GitHub Pages via Actions.

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:5173` to preview.

```bash
npm run build      # production build into ./dist
npm run preview    # preview the production build locally
```

## Deploying to GitHub Pages

1. Create a public repo on GitHub named **`josethDev`** (exact case matters — must match the `base` path in `vite.config.ts` and the `basename` in `src/App.tsx`).
2. Push this project to it:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-username>/josethDev.git
   git push -u origin main
   ```
3. On GitHub, go to **Settings → Pages** and set **Source** to `gh-pages` branch.
4. The workflow in `.github/workflows/deploy.yml` builds and pushes to `gh-pages` on every push to `main`. First run takes a couple of minutes.
5. Your site lives at `https://<your-username>.github.io/josethDev/`.

If you want it at a different repo name (e.g. `portfolio`), update **three** places to match:
- `vite.config.ts` → `base: "/<repo-name>/"`
- `src/App.tsx` → `<Router basename="/<repo-name>">`
- `index.html` → `<link rel="icon" ... href="/<repo-name>/shield.svg" />`

## What to customize

### Real content
- **Photo**: replace `src/assets/pfp.jpg` with your real headshot. Same filename — no code changes needed.
- **Social links**: search for `https://github.com/` and `https://www.linkedin.com/` in:
  - `src/components/Hero.tsx`
  - `src/components/Footer.tsx`
  - `src/pages/Projects.tsx` (project repo links)
  - `src/components/ui/HoneypotShowcase.tsx` (View Repository button)
- **Resume**: file lives at `src/assets/Joseth_Valdez_Resume.pdf` — replace anytime, keep the filename.
- **Experience photos**: `src/assets/experience.jpg`, `experience2.jpg`, `experience3.jpg` — used in the carousel on the Experience section.
- **Interest photos**: `src/assets/interests.jpg`, `interests2.jpg` — used in the Interests carousel.
- **Project preview images**: `src/assets/sentinel.jpg`, `src/assets/portfolio.jpg` — these appear as faded backgrounds in the project cards.

All placeholder images currently use the bone/sage/primary palette so the site looks intentional even before you swap them.

### Page structure
- `src/pages/Layout.tsx` — section order (Home → Experience → Projects → Interests → Contact)
- `src/pages/Home.tsx` → uses `Hero.tsx`
- `src/pages/Experience.tsx` — CyberRIG + IT Support Specialist roles
- `src/pages/Projects.tsx` — Dynamic Honeypot featured + Sentinel + portfolio
- `src/pages/Interests.tsx` — Cybersecurity, Hacking, Coding, Reading, RPGs
- `src/pages/Contact.tsx` — email / phone / location

### The featured showcase
`src/components/ui/HoneypotShowcase.tsx` is the animated centerpiece for the Dynamic Honeypot research — particle canvas + 3-stage flow (attacker probe → honeynet core → behavioral pattern). All the demo strings (the nmap command, the captured TTPs, etc.) are in that file if you want to tune them.

### Colors & fonts
- `tailwind.config.js` — palette (`bone`, `sage`, `primary`, `accent-hover`, `muted`)
- `src/index.css` — global styles + component classes (`section-container`, `section-heading`, `btn-primary`, `btn-outline`, `earthy-card`)
- Fonts loaded from Google in `index.html`: DM Serif Display, DM Sans, JetBrains Mono

## Credit

Architecture inspired by [mJiga/memoDev](https://github.com/mJiga/memoDev) — same component patterns and earthy palette, retuned for cybersecurity content.
