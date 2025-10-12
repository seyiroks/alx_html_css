# Headphones — Landing Page (HTML & CSS from scratch)

This repository is a single-page landing site rebuilt from a designer file.  
No CSS frameworks, no libraries, and no JavaScript frameworks were used. The page is responsive and accessible.

## What’s included

- `index.html` — semantic HTML (header, hero, sections, contact form, footer).
- `styles.css` — all styling with CSS variables, responsive breakpoints, and animations.
- `assets/` — images and optional font files (if you add them).

## Project goals

1. Recreate the provided design pixel-closely (layout, spacing, colors).
2. Use semantic HTML and accessible patterns (ARIA, keyboard focus).
3. Make the layout responsive — **mobile layout triggers at 480px or less**.
4. Implement interactive elements:
   - Hover/active link color: `#FF6565`
   - Buttons hover/active: `opacity: 0.9`
   - Hamburger menu for small screens (uses a small JS snippet).
5. Build pentagon shapes using CSS (no image files) and animate items.

## How to run locally

1. Clone the repo or copy files into a folder.
2. Ensure `index.html` and `styles.css` are in the same folder.
3. Open `index.html` in your browser (double-click or use `Live Server` in VSCode).

## Fonts

The design uses `Source Sans Pro` and `Spin-Cycle-OT`. If you don’t have them locally:
- Add them via `@font-face` from local files (put fonts in `assets/fonts/`) or use the fallback font (system).
- The repo uses a Google-hosted replacement for development; swap for local fonts for production.

## Accessibility notes

- All interactive controls have keyboard focus styles.
- The hamburger button has `aria-expanded` and `aria-controls`.
- Decorative hero image includes an `alt` attribute; if purely decorative, set `alt=""`.

## File structure

/project-root
├─ index.html
├─ styles.css
├─ assets/
│ ├─ hero.jpg (optional)
│ └─ fonts/
└─ README.md

## Implementation checklist

- [x] Semantic markup for header, main, footer
- [x] CSS variables and reset
- [x] Responsive layout with breakpoint at 480px
- [x] CSS-drawn pentagons using `clip-path`
- [x] Animations on hover (cards & pentagons)
- [x] Hamburger menu (JS toggle)

---

If you want, I can zip the project for download or split `styles.css` into modular files (variables / layout / components) next.
