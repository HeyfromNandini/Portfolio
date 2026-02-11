# Nandini Singh — Portfolio

Impact-based portfolio: **Build · Teach · Lead**. One site, multiple entry points.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

## Build for production

```bash
npm run build
```

Output is in `dist/`.

## Customize

- **Profile photo**: Replace `public/hero-profile.svg` with your image (e.g. `hero-profile.jpg`) and update the `src` in `src/components/Hero.tsx` if the filename changes.
- **Social links**: Edit URLs in `src/components/SocialLinks.tsx` (LinkedIn, Instagram, Twitter/X, GitHub). Add or remove networks in the `socials` array.
- **Contact**: Update email and LinkedIn in `src/components/WorkWithMe.tsx`.
- **Projects**: Edit the `projects` array in `src/components/FeaturedWork.tsx`; set each `image` to your project image path (replace placeholders in `public/` or use your own paths).
- **Section images**: Replace placeholders in `public/`: `placeholder-project.svg` (projects & content cards), `placeholder-speaking.svg`, `placeholder-community.svg`. Use the same filenames or update the `src` in the components.
- **Copy**: All section content lives in the component files under `src/components/`.

## Stack

- React 19 + TypeScript
- Vite 7

Typography: **Sora** (headings), **DM Sans** (body). Accent: warm terracotta for clarity and impact.
