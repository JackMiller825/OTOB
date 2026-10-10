# Page and Asset Map

## Route structure
One page at `/`; section anchors are `#hero`, `#story`, `#token-info`, `#how-to-buy`, `#community`, and `#faq`. Reusable navigation appears in the header; reusable footer appears at the bottom. No separate page adds enough value while contract, tokenomics, and social details are pending.

## Section specification
| Order / anchor | Purpose and copy | Layout and action | Production artwork | Preview |
|---|---|---|---|---|
| 0 Header | OTOB identity and quick navigation | Sticky desktop links; mobile drawer; primary “Meet the committee” | `branding/otob-logo-transparent.png` | `previews/02-otob-home-hero-desktop.png`, `previews/09-otob-shared-navigation-footer.png`, `previews/10-otob-home-hero-mobile.png` |
| 1 `#hero` | Explain in five seconds: “Overthink Overbuy”; “Two voices. One wallet.” | Desktop split copy/art; mobile stacked; “Meet the committee” | `website/otob-hero-trio.png` | `previews/01-otob-home-overview-desktop.png`, `previews/02-otob-home-hero-desktop.png`, `previews/08-otob-home-overview-mobile.png`, `previews/10-otob-home-hero-mobile.png` |
| 2 `#story` | Origin joke and both inner voices | Desktop 3-card; mobile stacked; brain selector | `website/otob-story-professor.png`, `website/otob-story-trader.png`, `website/otob-story-rocket.png`, `website/otob-trader-research.png`, `website/otob-trader-clicked.png` | `previews/03-otob-home-story-desktop.png`, `previews/08-otob-home-overview-mobile.png`, `previews/11-otob-home-story-mobile.png` |
| 3 `#token-info` | Trustworthy confirmed vs pending facts | 3x2 desktop grid, 2-column mobile; copy verified address | `website/favicon.svg` (small Ethereum-independent UI marks may use CSS) | `previews/04-otob-home-token-info-desktop.png`, `previews/08-otob-home-overview-mobile.png` |
| 4 `#how-to-buy` | Beginner-oriented Ethereum steps | 4 cards desktop; vertical mobile; verified swap link is primary when available | SVG icons in `website/interaction-icons.svg`; use CSS/SVG for line icons | `previews/05-otob-home-how-to-buy-desktop.png`, `previews/08-otob-home-overview-mobile.png`, `previews/12-otob-home-how-to-buy-mobile.png` |
| 5 `#community` | Give people safe, creative reasons to join | Weekly Committee Poll, Caption Lab, Two-Brain Meme Relay; verified social links | `website/otob-trader-research.png`, `website/otob-trader-clicked.png`, `website/otob-story-trader.png` | `previews/06-otob-home-community-desktop.png`, `previews/08-otob-home-overview-mobile.png` |
| 6 `#faq` | Answer practical/trust questions | Accessible accordion; keyboard operable | No raster asset; CSS shapes/icons | `previews/07-otob-home-faq-desktop.png`, `previews/08-otob-home-overview-mobile.png` |
| 7 Footer | Disclaimer, navigation and return to top | Dark desktop bar; stacked mobile | `branding/otob-logo-transparent.png` | `previews/01-otob-home-overview-desktop.png`, `previews/08-otob-home-overview-mobile.png`, `previews/09-otob-shared-navigation-footer.png` |

## Social artwork
- `social/otob-x-banner-1500x500.png` — X profile header.
- `social/otob-telegram-banner-1100x520.png` — Telegram group/channel header.
- `social/otob-social-preview-1200x630.png` — Open Graph/social card.

## Preview index and interaction states
All are generated front-facing design mockups; their text and controls illustrate intended layout, not a live site. Overview previews are condensed; detail previews specify exact content. Preview 01 accidentally depicts an extra tiny hero character; omit it. Use exactly the three approved characters. Preview 07 shows FAQ open/closed states. Preview 03 shows Research brain selected; implement the Rocket brain state with the supplied `otob-trader-clicked.png` art. Preview 09 shows shared desktop navigation, an open mobile drawer, and footer. Proposed behavior is in `specs/design-guide.md`.

| Number | File | Page/section | Inspect |
|---|---|---|---|
| 01 | `previews/01-otob-home-overview-desktop.png` | Home | Full desktop flow |
| 02 | `previews/02-otob-home-hero-desktop.png` | Hero | Desktop hero details |
| 03 | `previews/03-otob-home-story-desktop.png` | Story | Story cards and selected state |
| 04 | `previews/04-otob-home-token-info-desktop.png` | Token info | Confirmed and pending fields |
| 05 | `previews/05-otob-home-how-to-buy-desktop.png` | How to buy | Desktop steps |
| 06 | `previews/06-otob-home-community-desktop.png` | Community | Community invitation/gallery |
| 07 | `previews/07-otob-home-faq-desktop.png` | FAQ | Disclosure states |
| 08 | `previews/08-otob-home-overview-mobile.png` | Home | Full mobile flow |
| 09 | `previews/09-otob-shared-navigation-footer.png` | Shared | Desktop nav, mobile drawer, footer |
| 10 | `previews/10-otob-home-hero-mobile.png` | Hero | Mobile-specific hierarchy |
| 11 | `previews/11-otob-home-story-mobile.png` | Story | Mobile cards and selector |
| 12 | `previews/12-otob-home-how-to-buy-mobile.png` | How to buy | Mobile step stack |

## Approved existing branding reused
`branding/otob-logo-transparent.png`, `social/otob-x-banner-1500x500.png`, and `social/otob-telegram-banner-1100x520.png` are copied from approved assets. Preserve their artwork and spelling. Raster art contains no live page copy; headings and buttons should be coded as text.
