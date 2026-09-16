# Changelog

All notable changes to this project are documented in this file.

## [2026.09] - 2026-09-16

- Maintenance review of kajabiwebdesign — a single-page React 19 + Vite marketing site for "The Soul Voyage", a breathwork and sacred-geometry healing brand running in-person and online events. Built as a Kajabi-style web-design sample by SkynetLabs.
- Status: public, last commit 2026-03-24 (portfolio links added to the footer). Plain CSS (no Tailwind), one component + stylesheet pair per section — Navbar, Hero, About, Offerings, Benefits, Events, Testimonials, CTA, Footer — with only react and react-dom as runtime dependencies. README states no live URL.
- Reviewed September 2026: docs refreshed, `## Status` line added to README, changelog started, versioned as v2026.09 with the package version bumped off 0.0.0. No component code or assets were changed.
- Known gaps: the README is still the stock "React + Vite" template text and describes nothing about The Soul Voyage or how to deploy it; no LICENSE; no tests or CI; no deploy config (no vercel.json or netlify.toml) despite being a deploy-ready static SPA; no CHANGELOG before this release.
- Testimonials and event content are sample copy for a design demo; none of it was verified as real in this pass.
