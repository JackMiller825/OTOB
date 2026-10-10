import type { ReactNode } from "react";
import { FaqAccordion } from "../components/FaqAccordion";
import { SectionHeading } from "../components/SectionHeading";
import { contractAddress, externalLinks, hasContract, token } from "../config/token";

function detailsAnswer(): string {
  const fields: [string, string][] = [
    ["supply", token.totalSupply],
    ["taxes", token.buySellTax],
    ["liquidity", token.liquidityStatus],
    ["ownership", token.ownershipStatus],
    ["contract", token.contractAddress],
    ["trading links", token.swapUrl],
  ];
  const pending = fields.filter(([, value]) => value.trim().length === 0).map(([label]) => label);
  const base = "The project name, ticker, and Ethereum direction are selected.";
  if (pending.length === fields.length) {
    return `${base} Supply, taxes, liquidity, ownership, contract, and trading links remain pending confirmation.`;
  }
  if (pending.length === 0) {
    return `${base} Supply, taxes, liquidity, ownership, contract, and trading links are listed in the token facts above.`;
  }
  const list = new Intl.ListFormat("en", { style: "long", type: "conjunction" }).format(pending);
  const sentence = `${list} remain pending confirmation.`;
  return `${base} ${sentence.charAt(0).toUpperCase()}${sentence.slice(1)}`;
}

function VisibleLink({ href }: { href: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {href}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

function pendingOrLink(href: string | null): ReactNode {
  return href ? <VisibleLink href={href} /> : "not announced";
}

const items: { id: string; question: string; answer: ReactNode }[] = [
  {
    id: "what",
    question: "What is OTOB?",
    answer:
      "Overthink Overbuy is an Ethereum meme-token concept about the research brain and the impulse brain inside every trader.",
  },
  {
    id: "affiliation",
    question: "Is OTOB affiliated with Vitalik Buterin or Elon Musk?",
    answer:
      "No. OTOB uses fictional parody-inspired characters. No affiliation, involvement, or endorsement is claimed.",
  },
  {
    id: "contract",
    question: "What is the official contract?",
    answer: hasContract ? (
      <>
        The address is <code translate="no">{contractAddress}</code>. Until it is confirmed and
        published through official project channels, do not rely on addresses shared elsewhere.
      </>
    ) : (
      "The address is not announced. Until it is confirmed and published through official project channels, do not rely on addresses shared elsewhere."
    ),
  },
  {
    id: "details",
    question: "Are the token details confirmed?",
    answer: detailsAnswer(),
  },
  {
    id: "buy",
    question: "How can I buy OTOB?",
    answer: externalLinks.swap ? (
      <>
        Use the steps above and only the verified link <VisibleLink href={externalLinks.swap} /> after
        it is published. Check the network, contract, fees, and transaction details before confirming.
      </>
    ) : (
      "Use the steps above and only the verified link after it is published. Check the network, contract, fees, and transaction details before confirming."
    ),
  },
  {
    id: "return",
    question: "Does OTOB promise a return?",
    answer:
      "No. OTOB makes no promise of price, profit, adoption, or audience size. Meme tokens are highly volatile; you can lose the full amount you spend.",
  },
  {
    id: "community",
    question: "Where is the community?",
    answer: (
      <>
        Official links will be published here: Telegram {pendingOrLink(externalLinks.telegram)} and X{" "}
        {pendingOrLink(externalLinks.x)}. Verify that a link is listed on this website before joining.
      </>
    ),
  },
];

export function FaqSection() {
  return (
    <section className="section section--faq" id="faq" aria-labelledby="faq-title">
      <div className="wrap faq-layout">
        <SectionHeading
          eyebrow="FAQ"
          title="A few things you might be wondering."
          titleId="faq-title"
          align="start"
        />
        <FaqAccordion items={items} />
      </div>
    </section>
  );
}
