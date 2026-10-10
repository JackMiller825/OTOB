# OTOB Design Guide

## Direction
“Two voices. One wallet.” A friendly trading comedy that a first-time visitor can read in five seconds: the trader is stuck between careful research and impulsive excitement. Treat global reach as an ambition, not an outcome claim. Use plain international English, short sentences, and no jargon without explanation.

## Reference review
Reviewed official pages:
- Dogecoin homepage: https://dogecoin.com/ — observed plain-language opening, recognizable mascot-led identity, getting-started steps, community links, FAQ/resources, language choices, and substantial explanatory content. Dogecoin’s own currency facts and claims are specific to Dogecoin and must not be copied to OTOB.
- Dogecoin “What is Dogecoin?”: https://dogecoin.com/dogepedia/articles/what-is-dogecoin/ — observed beginner-oriented explainer and community framing.
- Shiba Inu homepage: https://shib.io/ — observed clear top-level grouping for ecosystem, tokens, community, developers, and contact; the accessible text view exposed its navigation and links but not the complete visual experience.
- Shiba ecosystem page: https://shib.io/ecosystem — discovered as an internal section from the homepage; details could not be fully verified in the text view.
- PEPE: https://pepe.vip/ — supplied/considered as a familiar meme-token reference, but the page reader could not access it. No design claims are made about it.

Observed facts are the page groupings, visible copy hierarchy, and nav/content links exposed by the official pages above. Recommendations for OTOB are the one-page anchor structure, explicit pending states, accessible buying guide, character selector, and reaction gallery. Reference pages were not inspected through a signed-in visual browser; animations, current mobile breakpoints, and unavailable internal content remain unverified. References are structural inspiration only.

## Colors
| Token | Hex | Use |
|---|---|---|
| Cream | #FFF8E7 | Main canvas, cards |
| Lavender | #BE96EE | Overthinker, selected state, section background |
| Coral | #FF9289 | Overbuyer, emphasis, community band |
| Butter yellow | #FFE77A | Highlights, numbered steps |
| Ink | #191525 | Text, outlines, dark footer |
| Muted ink | #605B72 | Secondary copy |
| Success | #188A50 | Confirmed copy feedback only, not speculative trading signals |

## Type and spacing
- Display: Fredoka, weights 600–700; fallback system rounded sans-serif.
- Body/UI: Nunito Sans, weights 400–700; fallback system sans-serif.
- Source: self-host via `@fontsource/fredoka` and `@fontsource/nunito-sans` (npm); no external image hosts or font requests at runtime.
- Body 16–18px desktop, 16px mobile; line height 1.5. H1 clamp 2.5rem–5.25rem; section headings clamp 2rem–3.25rem.
- 8px spacing base; 20px mobile gutters, 32px tablet, 48px desktop; maximum content width 1200px; section padding 88px desktop, 56px mobile.
- Rounded cards 20–28px, ink outline 2px, hard offset shadow 5px 5px ink. Buttons minimum 48px high and 44px target width/height.

## Responsive layout
- Breakpoints: 640px mobile/tablet, 900px tablet/desktop, 1200px max content width.
- Desktop: hero two columns (copy 45%, art 55%); story three columns; token data 3x2 grid; four buying steps in one row; FAQ two-column intro/accordion.
- Tablet: hero stacks if available width is under 850px; story 2+1; token grid two columns; buying steps 2x2.
- Mobile: single column; hero order: identity, hook, art, primary CTA; story character cards stack; controls stack; token grid two columns then contract spans full width; buy steps stack; social links full width; footer stacks.
- Prevent horizontal scrolling; text must reflow without clipping. Use responsive source sizes and lazy-load below-fold illustrations.

## Accessibility and performance
- Semantic header/nav/main/section/footer, one H1, ordered heading levels, real anchors and buttons.
- Keyboard-operable nav, story selector, FAQ, and copy control; visible focus ring (3px ink with 2px cream offset); active state not conveyed by color alone.
- `aria-expanded`/`aria-controls` on menu and FAQ. Story selector uses tab semantics or two native radio buttons; expose the selected state and reaction text to assistive technology.
- Respect `prefers-reduced-motion`; essential content has static rendering. Never animate flashing charts. 2D transforms only, short durations, no 3D/canvas.
- Supply meaningful alt text for mascot art; decorative shapes use empty alt/aria-hidden.
- Convert no production originals to lossy formats; optimize PNG and serve responsive sizes. Set image width/height to prevent layout shift. Lazy-load only below fold; preload the small logo and hero art.

## Signature interactions
1. Committee selector: Research brain / Rocket brain updates the trader’s static image and a short live-text reaction. Keyboard/touch usable; default is Research; both descriptions remain visible. Static fallback displays the standard trader pose.
2. Committee vote: after official community is live, a locally themed poll card directs to [OFFICIAL_TELEGRAM_URL]; no unverified vote count or fake engagement. Until then, show a non-clickable “Community link pending” state.
3. Shareable caption lab: user chooses a prewritten caption and downloads/shares a branded card; render text with HTML/canvas at runtime using approved characters. Static gallery remains usable without JavaScript.

Navigation is sticky with active section marker and anchor scroll. FAQ disclosure uses native `<details>` where possible. Copy contract remains disabled until address validation. No wallet connection required to browse.

## Content trust rules
Confirmed: selected name Overthink Overbuy, ticker $OTOB, Ethereum direction, mascot and parody narrative. Unconfirmed: deployed contract, supply, tax, liquidity, owner controls, trading/chart/explorer URLs, socials, legal entity. Use `[CONTRACT_ADDRESS]`, `[TOKENOMICS]`, `[OFFICIAL_X_URL]`, `[OFFICIAL_TELEGRAM_URL]` and related placeholders until supplied and verified. Never imply celebrity endorsement or guaranteed outcomes.
