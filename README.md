# Sri Lekhya Pulluru | Portfolio

React + Vite + Tailwind. One page, six sections. **All content is in `src/data/profile.js`.**

## Step-by-step: replace the old site

You need Node.js 18+ and Git installed.

### 1. Get the old repo onto your computer
```bash
git clone https://github.com/srilekhya-p/<your-portfolio-repo>.git
cd <your-portfolio-repo>
git checkout -b redesign
```

### 2. Swap in the new code
- Delete everything in the folder **except the hidden `.git` folder**.
- Unzip this project and copy all its files (including `.gitignore` and `netlify.toml`) into that folder.

### 3. Run it locally
```bash
npm install
npm run dev
```
Open http://localhost:5173 and look through every section on desktop and on a phone-width window.

### 4. Fill in the blanks (all in `src/data/profile.js`)
- `github` / `demo` on each project: paste the repo link and live link. Empty links are hidden automatically.
- `image` on each project (optional): put screenshots in `public/projects/` and write `'/projects/name.png'`.
- `url` on each certification: paste the Microsoft Learn or Credly verification link.
- `photo` (optional): put a headshot at `public/headshot.jpg` and set `photo: '/headshot.jpg'`.
- Resume: whenever it changes, replace `public/Sri_Lekhya_Pulluru_Resume.pdf` (keep the same file name).

### 5. Publish
```bash
git add -A
git commit -m "Redesign portfolio"
git push -u origin redesign
```
Netlify builds a **deploy preview** for the branch. Check it, then merge `redesign` into `main` on GitHub. Netlify publishes the live site in a minute or two.

In Netlify > Site configuration > Build & deploy, confirm:
- Build command: `npm run build`
- Publish directory: `dist`

(`netlify.toml` already sets these.)

### 6. After it's live
- Paste the URL into https://www.linkedin.com/post-inspector/ to refresh LinkedIn's preview card.
- Optional: buy a domain (e.g. `srilekhya.dev`), connect it in Netlify > Domain management, then update `og:url` and `og:image` in `index.html`.

## Change the look
- Accent color: `tailwind.config.js` > `colors.accent`
- Section order: `src/App.jsx`
- Top three numbers in the hero: `highlights` in `src/data/profile.js`
