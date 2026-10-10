import { useRef, useState } from "react";
import { InfoCard } from "../components/InfoCard";
import {
  CoinsIcon,
  DocIcon,
  DropIcon,
  EthIcon,
  KeyIcon,
  NameIcon,
  SlidersIcon,
  TagIcon,
} from "../components/Icons";
import { PendingLink } from "../components/PendingLink";
import { SectionHeading } from "../components/SectionHeading";
import { contractAddress, displayValue, hasContract, token } from "../config/token";

const facts = [
  {
    label: "Network",
    value: token.network,
    pending: false,
    tone: "lavender" as const,
    icon: <EthIcon />,
  },
  {
    label: "Name",
    value: token.name,
    pending: false,
    tone: "coral" as const,
    icon: <NameIcon />,
  },
  {
    label: "Ticker",
    value: `$${token.ticker}`,
    pending: false,
    tone: "yellow" as const,
    icon: <TagIcon />,
  },
  {
    label: "Total supply",
    value: displayValue(token.totalSupply, "Pending confirmation"),
    pending: token.totalSupply.trim().length === 0,
    tone: "coral" as const,
    icon: <CoinsIcon />,
  },
  {
    label: "Buy/sell tax",
    value: displayValue(token.buySellTax, "Pending confirmation"),
    pending: token.buySellTax.trim().length === 0,
    tone: "yellow" as const,
    icon: <SlidersIcon />,
  },
  {
    label: "Liquidity",
    value: displayValue(token.liquidityStatus, "Pending confirmation"),
    pending: token.liquidityStatus.trim().length === 0,
    tone: "lavender" as const,
    icon: <DropIcon />,
  },
  {
    label: "Ownership",
    value: displayValue(token.ownershipStatus, "Pending confirmation"),
    pending: token.ownershipStatus.trim().length === 0,
    tone: "cream" as const,
    icon: <KeyIcon />,
  },
];

export function TokenSection() {
  const addressRef = useRef<HTMLParagraphElement>(null);
  const [copyState, setCopyState] = useState<"idle" | "success" | "error">("idle");

  async function copyAddress() {
    if (!hasContract) return;
    try {
      if (!navigator.clipboard?.writeText) throw new Error("Clipboard unavailable");
      await navigator.clipboard.writeText(contractAddress);
      setCopyState("success");
    } catch {
      const node = addressRef.current;
      if (node) {
        const selection = window.getSelection();
        const range = document.createRange();
        range.selectNodeContents(node);
        selection?.removeAllRanges();
        selection?.addRange(range);
      }
      setCopyState("error");
    }
  }

  const copyMessage =
    copyState === "success"
      ? "Address copied"
      : copyState === "error"
        ? "Could not copy. Select the address to copy it."
        : "";

  return (
    <section className="section section--token" id="token-info" aria-labelledby="token-title">
      <div className="wrap">
        <SectionHeading
          eyebrow="Token info"
          title="The facts, when confirmed."
          titleId="token-title"
          intro="No made-up numbers. Here are the details that are confirmed—and the ones still to come."
        />
        <div className="facts">
          {facts.map((fact) => (
            <InfoCard
              key={fact.label}
              label={fact.label}
              value={fact.value}
              pending={fact.pending}
              tone={fact.tone}
              icon={fact.icon}
            />
          ))}
        </div>
        <div className="contract-panel">
          <div className="contract-panel__icon" aria-hidden="true">
            <DocIcon />
          </div>
          <div className="contract-panel__body">
            <h3>Contract address</h3>
            {hasContract ? (
              <p className="contract-address" ref={addressRef} translate="no">
                {contractAddress}
              </p>
            ) : (
              <p className="contract-address is-pending">Not announced</p>
            )}
          </div>
          {hasContract ? (
            <button type="button" className="btn btn--secondary" onClick={copyAddress}>
              Copy address
            </button>
          ) : null}
          <p className={`copy-status copy-status--${copyState}`} role="status" aria-live="polite">
            {copyMessage}
          </p>
        </div>
        <div className="link-row">
          <PendingLink href={token.etherscanUrl}>View on Etherscan</PendingLink>
          <PendingLink href={token.chartUrl}>View chart</PendingLink>
        </div>
        <p className="trust-note">
          Always compare the complete contract address with an official project announcement before
          interacting.
        </p>
      </div>
    </section>
  );
}
