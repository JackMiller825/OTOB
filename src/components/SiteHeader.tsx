import { useCallback, useRef } from "react";
import { assets } from "../config/assets";
import { navLinks } from "../config/navigation";
import { Button } from "./Button";
import { MobileNav } from "./MobileNav";
import { SocialIcons } from "./SocialIcons";

type SiteHeaderProps = {
  activeId: string;
  menuOpen: boolean;
  onMenuOpenChange: (open: boolean) => void;
};

export function SiteHeader({ activeId, menuOpen, onMenuOpenChange }: SiteHeaderProps) {
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeMenu = useCallback(() => onMenuOpenChange(false), [onMenuOpenChange]);

  return (
    <div className="header-shell">
      <a className="skip-link" href="#hero">
        Skip to content
      </a>
      <header className="site-header">
        <div className="wrap header-bar">
          <a className="brand" href="#hero">
            <img
              src={assets.logo}
              alt=""
              width={1024}
              height={1024}
              decoding="async"
            />
            <span className="brand__name">Overthink Overbuy</span>
          </a>
          <nav className="desktop-nav" aria-label="Primary">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={activeId === link.id ? "nav-link is-active" : "nav-link"}
                aria-current={activeId === link.id ? "location" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="header-tools">
            <SocialIcons />
            <Button href="#story" className="header-cta">
              Meet the committee
            </Button>
            <button
              ref={menuButtonRef}
              className="menu-toggle"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => onMenuOpenChange(!menuOpen)}
            >
              {menuOpen ? "Close menu" : "Menu"}
            </button>
          </div>
        </div>
      </header>
      <MobileNav
        open={menuOpen}
        activeId={activeId}
        onClose={closeMenu}
        menuButtonRef={menuButtonRef}
      />
    </div>
  );
}
