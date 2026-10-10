import type { ReactNode } from "react";
import { configuredHttpUrl } from "../config/token";

type PendingLinkProps = {
  href: string;
  children: ReactNode;
  pendingLabel?: string;
  className?: string;
};

export function PendingLink({
  href,
  children,
  pendingLabel = "Pending",
  className = "",
}: PendingLinkProps) {
  const url = configuredHttpUrl(href);
  if (!url) {
    return (
      <span className={["pending-link", className].filter(Boolean).join(" ")}>
        <span>{children}</span>
        <span className="pending-link__state">{pendingLabel}</span>
      </span>
    );
  }

  return (
    <a className={["text-link", className].filter(Boolean).join(" ")} href={url} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
