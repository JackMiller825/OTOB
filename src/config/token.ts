export const token = {
  name: "Overthink Overbuy",
  ticker: "OTOB",
  network: "Ethereum mainnet (confirm before launch)",
  contractAddress: "", // [CONTRACT_ADDRESS]
  totalSupply: "1,000,000,000",
  buySellTax: "0%",
  liquidityStatus: "Burn",
  ownershipStatus: "Renounce",
  officialXUrl: "https://x.com/otob_eth",
  officialTelegramUrl: "https://t.me/otob_eth",
  swapUrl: "", // [SWAP_URL]
  chartUrl: "", // [CHART_URL]
  etherscanUrl: "", // [ETHERSCAN_URL]
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
