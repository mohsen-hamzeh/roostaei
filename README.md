# کشتارگاه صنعتی دام روستائی — Website

Single-page, fully responsive RTL introduction site built with **React + TypeScript + Vite**.

## Features
- Theme colors taken from the logo: maroon `#61002B`, green `#259100`, navy `#013766`
- Light / dark theme (follows the OS setting, with a manual toggle that is remembered)
- Hero slideshow (Swiper creative effect, Ken Burns zoom, animated captions, progress tabs)
- Meat types, animated stats counters, bento-style services, about, gallery with lightbox, news, Aparat video, contact
- Footer credit: *Powered by Jiyar* → https://jiyar24.com

## Development
```bash
npm install
npm run dev      # local dev server
npm run build    # production build in dist/
npm run preview  # serve the build
```

## Editing content
All text, links and image paths are in `src/data/content.ts`.
Images live in `public/images/` (`brand/`, `hero/`, `meat/`, `gallery/`) — replace a file with the same name to update it.
Gallery images are the 300×199 thumbnails from the old site; drop in the full-size versions with the same names for sharper photos.
