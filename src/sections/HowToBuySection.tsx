import type { ReactNode } from "react";
import { Button } from "../components/Button";
import { EthIcon, SwapIcon, VerifyIcon, WalletIcon } from "../components/Icons";
import { SectionHeading } from "../components/SectionHeading";
import { contractAddress, externalLinks, hasContract } from "../config/token";

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
    body: hasContract ? (
      <>
        Compare the full address with the official address published here:{" "}
        <code translate="no">{contractAddress}</code>.
      </>
    ) : (
      <>Compare the full address with the official address published here: Not announced.</>
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
        <SectionHeading
          eyebrow="How to buy"
          title="Research first. Click second."
          titleId="buy-title"
          intro="A simple guide to getting ready for $OTOB. Take your time and check every detail."
        />
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
        <div className="swap-banner">
          {externalLinks.swap ? (
            <>
              <p>Open the verified trading link only after you have checked the contract.</p>
              <Button href={externalLinks.swap} external>
                Open verified trading link
              </Button>
            </>
          ) : (
            <>
              <p>Trading link available after verification.</p>
              <button type="button" className="btn btn--disabled" disabled>
                Open verified trading link
              </button>
            </>
          )}
        </div>
        <p className="trust-note">
          Never share your recovery phrase. This guide is informational; crypto transactions can be
          irreversible and token prices can fall sharply.
        </p>
      </div>
    </section>
  );
}
