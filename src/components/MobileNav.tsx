import { useEffect, useRef, type RefObject } from "react";
import { navLinks } from "../config/navigation";
import { SocialIcons } from "./SocialIcons";

type MobileNavProps = {
  open: boolean;
  activeId: string;
  onClose: () => void;
  menuButtonRef: RefObject<HTMLButtonElement | null>;
};

export function MobileNav({ open, activeId, onClose, menuButtonRef }: MobileNavProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const dialog = dialogRef.current;
    const menuButton = menuButtonRef.current;

    const focusable = () => {
      const items: HTMLElement[] = [];
      if (menuButton) items.push(menuButton);
      if (dialog) {
        items.push(...dialog.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"));
      }
      return items;
    };

    const preferred = dialog?.querySelector<HTMLElement>("[data-autofocus]");
    preferred?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const items = focusable();
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;
      const current = document.activeElement;
      const index = current instanceof HTMLElement ? items.indexOf(current) : -1;
      if (index === -1) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
        return;
      }
      if (event.shiftKey && current === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && current === last) {
        event.preventDefault();
        first.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
      menuButton?.focus();
    };
  }, [open, onClose, menuButtonRef]);

  if (!open) return null;

  return (
    <div className="drawer-root">
      <div className="drawer-backdrop" onClick={onClose} />
      <div
        id="mobile-menu"
        ref={dialogRef}
        className="drawer-panel"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <p className="drawer-kicker">Overthink Overbuy</p>
        <nav className="drawer-nav" aria-label="Mobile">
          {navLinks.map((link, index) => (
            <a
              key={link.id}
              href={link.href}
              data-autofocus={index === 0 ? true : undefined}
              aria-current={activeId === link.id ? "location" : undefined}
              className={activeId === link.id ? "drawer-link is-active" : "drawer-link"}
              onClick={onClose}
            >
              {link.label}
            </a>
          ))}
          <a className="btn btn--primary drawer-cta" href="#story" onClick={onClose}>
            Meet the committee
          </a>
          <SocialIcons className="drawer-social" />
        </nav>
      </div>
    </div>
  );
}
