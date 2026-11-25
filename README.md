# Portfolio

React and TypeScript portfolio built with Vite. Empty content fields render as visual placeholders.

Edit `src/content.ts` for the profile, social links, email, experience, technical stack, and projects. Add a project object with a unique slug to generate its home tile and its shareable `/?project=slug` page. Set its title, summary, description, stack, libraries, frameworks, tools, image and demo as needed. Media is stored in `public/media/`. The résumé is `public/resume.pdf`.

- `npm ci` installs the locked dependencies.
- `npm run dev` starts the development server.
- `npm run build` checks TypeScript and generates the static site in `dist/`.
- `npm run preview` serves the production build locally.
