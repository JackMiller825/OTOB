import { assets } from "../config/assets";
import { externalLinks, token } from "../config/token";

const socialSlots = [
  { key: "telegram", label: "Telegram", href: externalLinks.telegram },
  { key: "x", label: "X", href: externalLinks.x },
] as const;

export function SiteFooter() {
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
        </div>
      </div>
    </footer>
  );
}
