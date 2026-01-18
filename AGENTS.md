# Repository Guidelines

## Project Structure & Module Organization
- `source/` holds site content. Posts live in `source/_posts/` and use Markdown with YAML front-matter.
- `scaffolds/` contains Hexo post templates.
- `themes/manjusaka/` is the custom theme (layouts, styles, and theme config).
- `public/` is the generated static output (do not edit by hand).
- `_config.yml` is global Hexo configuration; `themes/manjusaka/_config.yml` is theme-specific config.

## Build, Test, and Development Commands
Run these from the repo root:
- `npm install` or `yarn install`: install dependencies.
- `npm run server` or `yarn server`: start local preview at `http://localhost:4000`.
- `npm run build` or `yarn build`: generate the static site into `public/`.
- `npm run clean` or `yarn clean`: clear the generated files and cache.
- `npm run deploy` or `yarn deploy`: run Hexo deploy (used by Vercel or other targets).

## Coding Style & Naming Conventions
- Content files are Markdown; use YAML front-matter with consistent keys (see `source/_posts` for examples).
- Post assets follow Hexo’s `post_asset_folder` convention: `source/_posts/<post-title>/cover.jpg`.
- Theme changes should match the existing style in `themes/manjusaka/` (EJS, Stylus).

## Testing Guidelines
There are no automated tests configured. Validate changes by:
- running `npm run build` to ensure generation succeeds.
- running `npm run server` and visually checking pages you changed.

## Commit & Pull Request Guidelines
- Git history is minimal and does not enforce a formal convention; use short, imperative summaries (e.g., "Add weekly report post").
- PRs should include a clear description, the reason for the change, and screenshots for theme/UI updates.
- Link related issues if applicable.

## Content & Publishing Notes
- New posts: `npx hexo new "Post Title"` and edit `source/_posts/Post-Title.md`.
- Weekly/LeetCode category structures are documented in `BLOG_GUIDE.md` and should be followed for navigation behavior.
