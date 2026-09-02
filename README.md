# abhyaung.github.io

Personal portfolio of Abhyaung Havale, live at https://abhyaung.github.io.

Single-page React app (Create React App). Content-sized hero on a steel-grey ground with a typewriter intro and a
background-removed portrait, a filterable project gallery, skills, experience and a Formspree contact form.
Light by default with a dark theme toggle. Body text uses the system font stack; headings use Archivo from Google Fonts.
The single accent colour is safety orange, used for the wordmark mark, active filter and focus rings.

## Develop

```bash
npm install
npm start          # http://localhost:3000
```

## Build and deploy

```bash
npm run build      # production bundle in build/
npm run deploy     # publishes build/ to the gh-pages branch
```

CI (`.github/workflows/ci.yml`) runs the build on every push and pull request.

## Where things live

| What | Where |
| --- | --- |
| Design tokens (theme colours, hero palette), shared chips | `src/index.css` |
| Social preview image | `public/og.jpg` |
| Hero copy, typewriter phrases, chips | `src/components/hero/Hero.jsx` |
| Hero portrait (background removed) | `src/assets/hero-cutout.webp` |
| Projects | `src/components/portfolio/projectsData.js` |
| Experience and education | `src/components/resume/resumeData.js` |
| Skills rows | `src/components/skills/Skills.jsx` |
| About text, facts and credentials | `src/components/about/About.jsx` |
| Resume and degree PDFs | `public/` |

The portrait cutout was produced from `src/assets/me-image.jpg` with `rembg` (isnet-general-use model).
To swap the photo, run a new image through `rembg`, trim it, and replace `hero-cutout.webp`.
