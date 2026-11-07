# Shreyas Shukla – Portfolio (React)

React + Vite port of the single-page portfolio at https://logicb0mb.github.io.
Same layout (CSS Grid), same BEM class names and SCSS, same scroll animations.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build in dist/
npm run preview    # serve the production build
```

## What's where

| Path | What it is |
| --- | --- |
| `src/data.js` | All content: contacts, skills, story text, projects, footer links |
| `src/components/` | `Preloader`, `Particles`, `Header`, `Contacts`, `Skills`, `Story`, `Projects` / `ProjectCard`, `Footer`, plus the shared `Icon` component |
| `src/styles/` | Original SCSS partials (same values, grids and breakpoints), now using `@use` |
| `public/particles.js`, `public/assets/particlesjs.json` | Original particles.js library and config |
| `public/assets/Resume.pdf` | Resume download |

## Icons

Icons are rendered with `react-icons`: Lucide icons cover general UI symbols and
Simple Icons provide technology and service logos. Add new named icon mappings
in `src/components/Icon.jsx` and reference those names from `src/data.js`.

## How the effects are done

- **Scroll animations:** `aos` (`fade-down`, `fade-up`, `zoom-in`), same `data-aos` attributes as the original.
- **Background particles:** the original particles.js with the original config, started in `Particles.jsx`.
- **Project flip cards:** pure CSS (`perspective` + `rotateY`) in `_projects.scss`.
- **Preloader:** GIF shown until `window` `load`, then a 600ms fade (the original used jQuery `fadeOut('slow')`).

## Notes

- `back.jpg` (hero background) and `story-3.jpg` (story photo) were resized for the web (originally 4000px and 8MB).
- Not ported: the commented-out certificate gallery and the unused sidebar styles.
- Fonts (Josefin Sans, Nunito, Megrim) load from Google Fonts.
