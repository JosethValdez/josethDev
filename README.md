# joseth.dev — Portfolio

React + TypeScript + Vite + Tailwind portfolio, auto-deployed to GitHub Pages.

## Setup

```bash
npm install
npm run dev
```

## Deploy

1. Create a GitHub repo (e.g. `joseth-portfolio`)
2. In `vite.config.ts`, set `base` to your repo name: `base: '/joseth-portfolio/'`
3. In GitHub repo Settings → Pages → Source, choose **GitHub Actions**
4. Push to `main` — the workflow builds and deploys automatically

Your site will be live at `https://YOUR_USERNAME.github.io/joseth-portfolio/`

## Personalize

- Replace `YOUR_GITHUB` and `YOUR_LINKEDIN` placeholders in Navbar and Contact
- Add `public/profile.jpg` with your photo
- Add `public/resume.pdf` with your resume
- Update `vite.config.ts` base path to match your repo name
