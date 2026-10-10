import { externalLinks } from "../config/token";
import { TelegramIcon, XIcon } from "./Icons";

const socials = [
  {
    key: "telegram",
    label: "Telegram",
    href: externalLinks.telegram,
    icon: <TelegramIcon />,
  },
  {
    key: "x",
    label: "X",
    href: externalLinks.x,
    icon: <XIcon />,
  },
] as const;

export function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <div className={["social-icons", className].filter(Boolean).join(" ")}>
      {socials.map((social) =>
        social.href ? (
          <a
            key={social.key}
            className={`social-icon social-icon--${social.key}`}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${social.label} (opens in a new tab)`}
          >
            {social.icon}
          </a>
        ) : null,
      )}
    </div>
  );
}
