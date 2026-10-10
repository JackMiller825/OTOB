const publicFile = (path: string) => `${import.meta.env.BASE_URL}${path}`;

export const assets = {
  logo: publicFile("assets/branding/otob-logo-transparent.png"),
  hero: publicFile("assets/website/otob-hero-trio.png"),
  professor: publicFile("assets/website/otob-story-professor.png"),
  rocket: publicFile("assets/website/otob-story-rocket.png"),
  trader: publicFile("assets/website/otob-story-trader.png"),
  traderResearch: publicFile("assets/website/otob-trader-research.png"),
  traderClicked: publicFile("assets/website/otob-trader-clicked.png"),
} as const;
