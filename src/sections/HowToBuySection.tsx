import type { ReactNode } from "react";
import { EthIcon, SwapIcon, VerifyIcon, WalletIcon } from "../components/Icons";
import { contractDisplay } from "../config/token";

const steps: { title: string; body: ReactNode; icon: ReactNode; tone: string }[] = [
  {
    title: "Get a wallet.",
    body: "Choose a wallet that supports Ethereum. Keep your recovery phrase private.",
    icon: <WalletIcon />,
    tone: "lavender",
  },
  {
    title: "Fund it with ETH.",
    body: "Use Ethereum mainnet and leave enough ETH for network fees.",
    icon: <EthIcon />,
    tone: "coral",
  },
  {
    title: "Verify the contract.",
    body: (
      <>
        Compare the full address with the official address published here:{" "}
        <span translate="no">{contractDisplay}</span>.
      </>
    ),
    icon: <VerifyIcon />,
    tone: "cream",
  },
  {
    title: "Review your swap.",
    body: "Check the token, network, fees, price impact and minimum received before confirming in your wallet.",
    icon: <SwapIcon />,
    tone: "lavender",
  },
];

export function HowToBuySection() {
  return (
    <section className="section section--buy" id="how-to-buy" aria-labelledby="buy-title">
      <div className="wrap">
        <h2 className="section-title" id="buy-title">
          How to buy
        </h2>
        <ol className="steps">
          {steps.map((step, index) => (
            <li key={step.title} className={`step step--${step.tone}`}>
              <span className="step__num">{String(index + 1).padStart(2, "0")}</span>
              <div className="step__icon" aria-hidden="true">
                {step.icon}
              </div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
