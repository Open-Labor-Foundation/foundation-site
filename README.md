# foundation-site

Source for [openlabor.foundation](https://openlabor.foundation) — the public home of the Open Labor Foundation.

Fully static. No server, no database, no application layer. Deployed via Cloudflare Pages with Cloudflare DNS and CDN.

> See [open-labor-foundation/ARCHITECTURE.md](https://github.com/Open-Labor-Foundation/open-labor-foundation/blob/main/ARCHITECTURE.md)
> for the full ecosystem picture and current known shortcomings across the
> stack. Site copy describing other repos' status should stay checked against
> that reference rather than drift independently. One concrete, known gap in
> this repo: `themes/olf/static/js/catalog-count.js` counts labor-commons
> specialists by matching only `catalog/naics-overlays/**/spec.yaml` — once
> labor-commons gains a second catalog axis (`catalog/function-overlays/`,
> planned, not yet built), this script will need widening or the displayed
> count will silently undercount.

---

## Stack

| | |
|---|---|
| Static site generator | [Hugo](https://gohugo.io) |
| Theme | `themes/olf` — custom, ships with the repo |
| Hosting | Cloudflare Pages |
| Domain | openlabor.foundation |
| DNS + CDN + DDoS protection | Cloudflare |

Pushes to `main` deploy automatically.

---

## Local development

```bash
# Install Hugo (macOS)
brew install hugo

# Serve with live reload
hugo server

# Build static output (output goes to public/ — gitignored)
hugo
```

---

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).

---

Part of the [Open Labor Foundation](https://github.com/Open-Labor-Foundation/open-labor-foundation).
