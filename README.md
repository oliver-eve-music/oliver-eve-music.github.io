# olivereve.com

Static site (Bulma via CDN), hosted on GitHub Pages. No build step.

- `index.html` — Music (default), Production, Art sections, switched via URL hash
- `assets/css/site.css` — dark theme, maroon accent
- `assets/js/site.js` — section routing, mobile nav, gallery lightbox
- `assets/img/photos/` — web-resized photos (max 1800px)

Preview locally: `python3 -m http.server` then open http://localhost:8000

Deploy: push to `main`, then Settings → Pages → Deploy from branch → main / root.
