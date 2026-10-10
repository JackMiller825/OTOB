import { Button } from "../components/Button";
import { CopyAddress } from "../components/CopyAddress";
import { assets } from "../config/assets";
import { token } from "../config/token";

export function HeroSection() {
  return (
    <section className="section section--hero" id="hero" aria-labelledby="hero-title">
      <div className="blob blob--yellow" aria-hidden="true" />
      <div className="blob blob--lavender" aria-hidden="true" />
      <div className="blob blob--coral" aria-hidden="true" />
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Ethereum meme token · ${token.ticker}</p>
          <h1 id="hero-title">
            <span className="h1-line h1-line--think">Overthink</span>
            <span className="h1-line h1-line--buy">Overbuy</span>
          </h1>
          <p className="hook">Two voices. One wallet.</p>
          <p className="hero-body">
            One says research. One says liftoff. You are caught in the middle.
            <br />
            Vitalik Buterin vs Elon Musk, Who is right?
          </p>
          <div className="hero-actions">
            <Button href="#story">Meet the committee</Button>
            <Button href="#token-info" variant="secondary">
              Tokenomics
            </Button>
          </div>
          <aside className="status-card" aria-label="Contract status">
            <p className="status-card__label">Contract address</p>
            <CopyAddress />
          </aside>
        </div>
        <figure className="hero-stage">
          <img
            src={assets.hero}
            width={1800}
            height={1400}
            alt="A tired trader in a lavender hoodie sits with a laptop, flanked by a small purple professor holding a book and a small rocket-suited daredevil."
            fetchPriority="high"
            decoding="async"
          />
        </figure>
      </div>
    </section>
  );
}
