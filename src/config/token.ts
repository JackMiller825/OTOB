export const token = {
  name: "Overthink Overbuy",
  ticker: "OTOB",
  network: "Ethereum mainnet (confirm before launch)",
  contractAddress: "0xae12ab49256172453a6ecae9b06a16497f9fbad5",
  totalSupply: "1,000,000,000",
  buySellTax: "0%",
  liquidityStatus: "Burn",
  ownershipStatus: "Renounce",
  officialXUrl: "https://x.com/otob_eth",
  officialTelegramUrl: "https://t.me/otob_eth",
  swapUrl: "", // [SWAP_URL]
  chartUrl: "https://www.dextools.io/app/ether/pair-explorer/0x69245f89ec1a19c32af73c97083db2db33d432d4",
  etherscanUrl: "https://etherscan.io/token/0xae12ab49256172453a6ecae9b06a16497f9fbad5",
  termsUrl: "", // [TERMS_URL]
  privacyUrl: "", // [PRIVACY_URL]
} as const;

export function displayValue(value: string, emptyLabel: string): string {
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : emptyLabel;
}

/** Returns an http(s) URL, or null when the value is blank or not a web URL. */
export function configuredHttpUrl(value: string): string | null {
  const trimmed = value.trim();
  if (!trimmed) return null;
  try {
    const url = new URL(trimmed);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    return url.href;
  } catch {
    return null;
  }
}

export const contractAddress = token.contractAddress.trim();
export const hasContract = contractAddress.length > 0;
export const comingSoon = "Coming Soon..";
export const contractDisplay = hasContract ? contractAddress : comingSoon;

export const externalLinks = {
  swap: configuredHttpUrl(token.swapUrl),
  chart: configuredHttpUrl(token.chartUrl),
  etherscan: configuredHttpUrl(token.etherscanUrl),
  x: configuredHttpUrl(token.officialXUrl),
  telegram: configuredHttpUrl(token.officialTelegramUrl),
  terms: configuredHttpUrl(token.termsUrl),
  privacy: configuredHttpUrl(token.privacyUrl),
} as const;
