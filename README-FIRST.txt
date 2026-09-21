THIS ZIP IS FLAT FOR EASY GITHUB UPLOAD.

Upload every file in this ZIP to the ROOT of your GitHub repository. They are deliberately named with `__` instead of folders, e.g. `app__page.tsx`.

IMPORTANT: Next.js itself REQUIRES an `app/` folder to build. GitHub accepts flat uploads, but before connecting to Vercel you must rename/move these four files into a folder called `app`:
- app__layout.tsx  → app/layout.tsx
- app__page.tsx    → app/page.tsx
- app__globals.css → app/globals.css
- app__robots.ts   → app/robots.ts
- app__sitemap.ts  → app/sitemap.ts

GitHub web uploader cannot create folders from the upload screen, so use one of these easy ways after upload:
A) In GitHub, click Add file > Create new file. Enter `app/page.tsx` as the filename (GitHub automatically creates app). Paste content from `app__page.tsx`, then repeat for the other four. Delete the flat app__ files afterward.
B) Use GitHub Desktop / VS Code and drag the original files into an app folder, then push.
C) Use the earlier static `index.html` version if you never want folders.

After your repository has the actual app folder, import it into Vercel. Run `npm install` then `npm run dev` locally if desired.

The logo is supplied as `logo-pic.jpg`; the initial website layout is text-first and does not yet display it in the header.
