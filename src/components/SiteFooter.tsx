import { assets } from "../config/assets";
import { token } from "../config/token";
import { SocialIcons } from "./SocialIcons";

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
        <SocialIcons className="footer-extra" />
      </div>
    </footer>
  );
}
