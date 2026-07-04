# foundation-site

Source for [openlabor.foundation](https://openlabor.foundation) — the public home of the Open Labor Foundation.

Fully static. No server, no database, no application layer. Deployed via Cloudflare Pages with Cloudflare DNS and CDN.

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
