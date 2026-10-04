# Reprise website

The coming-soon page for [Reprise](https://reprise.ink), a WYSIWYG editor.

This repository contains only the public website. Its source is maintained in
the Reprise project's `site/` directory and synced using
`scripts/publish-site.ps1` from that project.

GitHub Pages publishes `main` from the repository root. The custom domain is
`reprise.ink`; Cloudflare manages DNS.

To preview the site locally:

```sh
python -m http.server 4173
```

The page uses static HTML, CSS, and a small optional JavaScript interaction.
It works without JavaScript and respects reduced-motion preferences.
Fonts are self-hosted; their SIL Open Font Licenses and sources are under
`fonts/`. Website code is licensed under AGPL-3.0-or-later; see `LICENSE`.
