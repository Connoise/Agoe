# Agoe

A self-contained HTML implementation of the **AGOE — IDOL INTERFACE SYSTEM** landing page.

A stylized HUD/cyberpunk-aesthetic single-page site for the experimental pop artist *Agoe the Idol*, with five navigable views (Home, Socials, New Content, About, Projects).

## Run

Open `Agoe.html` directly in a browser. No build step or dependencies — React and Babel are loaded from CDN at runtime.

## Stack

- Vanilla HTML/CSS for the HUD shell, overlays (grain, scanlines, vignette, eye motif), and layout
- React 18 (UMD) + Babel Standalone for the view router and components
- Inline SVG for all decorative wireframes (sphere, icosahedron, terrain, sigil, crosshair, 909 kick waveform)
- `localStorage` for view persistence across reloads
