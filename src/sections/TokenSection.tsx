import { CopyAddress } from "../components/CopyAddress";
import { InfoCard } from "../components/InfoCard";
import { CoinsIcon, DocIcon, DropIcon, KeyIcon, SlidersIcon } from "../components/Icons";
import { PendingLink } from "../components/PendingLink";
import { token } from "../config/token";

const facts = [
  {
    label: "Total supply",
    value: token.totalSupply,
    tone: "coral" as const,
    icon: <CoinsIcon />,
  },
  {
    label: "Buy/sell tax",
    value: token.buySellTax,
    tone: "yellow" as const,
    icon: <SlidersIcon />,
  },
  {
    label: "Liquidity",
    value: token.liquidityStatus,
    tone: "lavender" as const,
    icon: <DropIcon />,
  },
  {
    label: "Ownership",
    value: token.ownershipStatus,
    tone: "cream" as const,
    icon: <KeyIcon />,
  },
];

export function TokenSection() {
  return (
    <section className="section section--token" id="token-info" aria-labelledby="token-title">
      <div className="wrap">
        <h2 className="section-title" id="token-title">
          Tokenomics
        </h2>
        <div className="facts">
          {facts.map((fact) => (
            <InfoCard key={fact.label} label={fact.label} value={fact.value} tone={fact.tone} icon={fact.icon} />
          ))}
        </div>
        <div className="contract-panel">
          <div className="contract-panel__icon" aria-hidden="true">
            <DocIcon />
          </div>
          <div className="contract-panel__body">
            <h3>Contract address</h3>
            <CopyAddress />
          </div>
        </div>
        <div className="link-row">
          <PendingLink href={token.etherscanUrl} pendingLabel="Coming Soon..">
            View on Etherscan
          </PendingLink>
          <PendingLink href={token.chartUrl} pendingLabel="Coming Soon..">
            View chart
          </PendingLink>
        </div>
      </div>
    </section>
  );
}
