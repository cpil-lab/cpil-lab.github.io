# CPIL Research Lab Website

Static research lab homepage for **CPIL, the Cyber-Physical Intelligence Lab**, led by Prof. Xue (Steve) Liu.

The site is built with Astro, TypeScript, Tailwind CSS, Astro Content Collections, Decap CMS, and Markdown/YAML content files. It has no custom backend and no database.

## Stack

- Astro static output
- TypeScript
- Tailwind CSS 4 through the Vite plugin
- Astro Content Collections with Zod schema validation
- Decap CMS at `/admin`
- Git-based content in `src/content/**`

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Open the local URL printed by Astro. The CMS UI is available at `/admin`, but GitHub authentication must be configured before real CMS edits can be saved.

## Build

```bash
npm run build
```

The production site is generated in `dist/`.

## Content

Content files live in:

- `src/content/people/*.md`
- `src/content/projects/*.md`
- `src/content/publications/*.md`
- `src/content/news/*.md`

Each collection is validated in `src/content.config.ts`. If a content file is missing a required field or has the wrong type, `npm run build` fails before deployment.

Content records drive the public people, projects, publications, and news pages. The current public people collection keeps the verified PR-updated profiles, while projects and publications include one sample entry each for future contributors to copy.

## Content Contribution Workflow

Anyone with a GitHub account can propose content updates by opening a pull request against `main`.

Recommended paths:

- People profiles: `src/content/people/*.md`
- Project records: `src/content/projects/*.md`
- Publication records: `src/content/publications/*.md`
- News items: `src/content/news/*.md`

The GitHub Actions workflow runs `npm run build` on pull requests so content schema errors are caught before merge. Maintainers should review each PR, verify names/citations/contact details, and merge only approved changes.

## Editing Through Decap CMS

Decap CMS is configured in `public/admin/config.yml`.

Before launch:

1. Confirm the CMS backend points to `cpil-lab/cpil-lab.github.io`.
2. Confirm recruitment contacts and publication metadata.
3. Configure GitHub OAuth for Decap CMS if `/admin` will be used. GitHub Pages is static, so CMS login needs an external OAuth proxy, Netlify authentication provider, or a Cloudflare Pages deployment for the auth endpoints.
4. Keep `publish_mode: editorial_workflow` enabled.

The CMS stores uploads under `public/images/uploads` and writes content changes to Markdown files in `src/content`.

Open authoring is enabled, so GitHub users without direct write access can submit CMS changes through fork-backed pull requests. Maintainers should still review every CMS-created PR before merging.

### Decap CMS Login

The CMS config in `public/admin/config.yml` is set to write to:

- Repository: `cpil-lab/cpil-lab.github.io`
- Public site: `https://cpil-lab.github.io`

GitHub Pages can serve the `/admin` UI, but it cannot run server-side OAuth routes. To enable CMS login on GitHub Pages, deploy a Decap CMS GitHub OAuth proxy and set `base_url` and `auth_endpoint` in `public/admin/config.yml`.

Decap open authoring is enabled for the GitHub backend. With `publish_mode: editorial_workflow`, contributors without repository write access can submit CMS edits through fork-backed pull requests after OAuth is configured.

This repo also includes Cloudflare Pages Functions that can be used for Decap CMS GitHub OAuth if the site, or just the OAuth proxy, is deployed on Cloudflare Pages:

- `functions/api/auth.js`
- `functions/api/callback.js`

Create a GitHub OAuth App:

- Homepage URL: `https://cpil-lab.github.io`
- Authorization callback URL: `https://<your-cloudflare-pages-domain>/api/callback`

Then add these Cloudflare Pages environment variables:

- `GITHUB_CLIENT_ID`: add this plain, non-secret value in `wrangler.toml` under `[vars]`.
- `GITHUB_OAUTH_SCOPE`: keep this as `public_repo user:email` for a public repository.
- `GITHUB_CLIENT_SECRET`: add this in Cloudflare Pages as an encrypted secret.

Because this project has `wrangler.toml`, Cloudflare manages plain variables from that file. The dashboard will only let you add encrypted secrets.

Open authoring works best with a public repository. Users without direct write access can propose changes through pull requests, but they cannot publish directly to `main`.

## Recommended Branch Protection

Protect `main` in GitHub:

- Require pull request reviews before merging.
- Require at least one approval from a maintainer.
- Require status checks, including the Astro build workflow.
- Restrict who can push directly to `main`.
- Disable force pushes and deletions.

This keeps CMS-created changes in review instead of publishing directly to production.

## Deployment

### GitHub Pages

The included workflow `.github/workflows/deploy.yml` installs dependencies, runs `npm run build`, uploads `dist`, and deploys to GitHub Pages.

This repository is an organization page repository at `cpil-lab/cpil-lab.github.io`, so the workflow automatically sets:

```bash
SITE=https://cpil-lab.github.io
BASE_PATH=/
```

For a project page, the workflow sets:

```bash
SITE=https://<owner>.github.io
BASE_PATH=/<repo>
```

For an owner or organization page repository named `<owner>.github.io`, the workflow automatically sets:

```bash
SITE=https://<owner>.github.io
BASE_PATH=/
```

For a custom domain, set repository or workflow environment variables:

```bash
SITE=https://your-domain.edu
BASE_PATH=/
```

### Netlify

Use:

```bash
npm run build
```

Publish directory:

```bash
dist
```

### Cloudflare Pages

Use:

```bash
npm run build
```

Output directory:

```bash
dist
```

If Cloudflare asks for a Wrangler config, this repo includes `wrangler.toml` with:

```toml
name = "cpil-website"
pages_build_output_dir = "./dist"
compatibility_date = "2026-05-02"
```

You can rename `cpil-website` to match your Cloudflare Pages project name.

## Visual Assets

Deterministic placeholder PNG assets are generated by:

```powershell
powershell -ExecutionPolicy Bypass -File scripts/generate-assets.ps1
```

Replace them with official lab photos, project visuals, and approved media as they become available.

## Project Structure

```text
public/
  admin/
    config.yml
    index.html
  images/
src/
  components/
  content/
    news/
    people/
    projects/
    publications/
  data/
  layouts/
  lib/
  pages/
  styles/
```
