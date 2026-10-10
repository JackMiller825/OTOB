import { assets } from "../config/assets";
import { navLinks } from "../config/navigation";
import { externalLinks, token } from "../config/token";
import { ArrowUpIcon } from "./Icons";

const socialSlots = [
  { key: "telegram", label: "Telegram", href: externalLinks.telegram },
  { key: "x", label: "X", href: externalLinks.x },
  { key: "terms", label: "Terms", href: externalLinks.terms },
  { key: "privacy", label: "Privacy", href: externalLinks.privacy },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap footer-top">
        <a className="footer-brand" href="#hero">
          <img src={assets.logo} alt="" width={1024} height={1024} />
          <span>
            Overthink Overbuy
            <span className="footer-ticker"> · ${token.ticker}</span>
          </span>
        </a>
        <nav className="footer-nav" aria-label="Footer">
          {navLinks.map((link) => (
            <a key={link.id} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="footer-extra">
          {socialSlots.map((slot) =>
            slot.href ? (
              <a key={slot.key} href={slot.href} target="_blank" rel="noopener noreferrer">
                {slot.label}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              <span key={slot.key} className="footer-pending">
                {slot.label}
                <span>Pending</span>
              </span>
            ),
          )}
          <a className="back-to-top" href="#hero">
            <ArrowUpIcon />
            Back to top
          </a>
        </div>
      </div>
      <div className="wrap footer-notes">
        <p>
          Fictional parody. No affiliation with or endorsement by Vitalik Buterin, Elon Musk, or
          their organizations.
        </p>
        <p>
          Meme tokens are volatile and may lose all value. Nothing on this site is financial advice
          or a promise of returns.
        </p>
        <p>© {year} Overthink Overbuy.</p>
      </div>
    </footer>
  );
}
