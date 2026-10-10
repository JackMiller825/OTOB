import type { ReactNode } from "react";

type IconProps = { className?: string };

function Svg({ className, children }: IconProps & { children: ReactNode }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {children}
    </svg>
  );
}

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function WalletIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M3 6h16a2 2 0 0 1 2 2v12H5a2 2 0 0 1-2-2V6Zm0 0 2-3h14v3m-1 7h4" {...stroke} />
      <circle cx="17" cy="13" r="1" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function VerifyIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 3h12l4 4v7M4 3v18h11M16 3v5h4m-1 11 2 2 3-4" {...stroke} />
    </Svg>
  );
}

export function SwapIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 7h15l-3-3m4 13H5l3 3" {...stroke} />
    </Svg>
  );
}

export function EthIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 2.5 5.5 12.2 12 15.6l6.5-3.4L12 2.5Z" {...stroke} />
      <path d="M5.5 13.4 12 21.5l6.5-8.1L12 16.6 5.5 13.4Z" {...stroke} />
    </Svg>
  );
}

export function TagIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 3H4v8l8.5 8.5a2 2 0 0 0 2.8 0l4.2-4.2a2 2 0 0 0 0-2.8L12 3Z" {...stroke} />
      <circle cx="8" cy="8" r="1.2" fill="currentColor" stroke="none" />
    </Svg>
  );
}

export function CoinsIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <ellipse cx="12" cy="7" rx="6" ry="2.5" {...stroke} />
      <path d="M6 7v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5V7" {...stroke} />
      <path d="M6 11v4c0 1.4 2.7 2.5 6 2.5s6-1.1 6-2.5v-4" {...stroke} />
    </Svg>
  );
}

export function SlidersIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M4 7h16M4 12h16M4 17h16" {...stroke} />
      <circle cx="9" cy="7" r="2" fill="#fff8e7" stroke="currentColor" strokeWidth="2" />
      <circle cx="15" cy="12" r="2" fill="#fff8e7" stroke="currentColor" strokeWidth="2" />
      <circle cx="8" cy="17" r="2" fill="#fff8e7" stroke="currentColor" strokeWidth="2" />
    </Svg>
  );
}

export function DropIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 3s6 6.2 6 10a6 6 0 0 1-12 0c0-3.8 6-10 6-10Z" {...stroke} />
    </Svg>
  );
}

export function KeyIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="8" cy="14" r="3.2" {...stroke} />
      <path d="M11 14h9l-2 2 2 2-2 2" {...stroke} />
    </Svg>
  );
}

export function DocIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M7 3h7l5 5v13H7V3Z" {...stroke} />
      <path d="M14 3v5h5M9 13h6M9 17h6" {...stroke} />
    </Svg>
  );
}

export function NameIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <circle cx="12" cy="8" r="3" {...stroke} />
      <path d="M5.5 19.5c1.4-3 3.6-4.5 6.5-4.5s5.1 1.5 6.5 4.5" {...stroke} />
    </Svg>
  );
}

export function TelegramIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="10.4" fill="#fff" />
      <path
        fill="#2AABEE"
        d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
      />
    </svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="12" fill="#191525" />
      <path
        fill="#fff"
        transform="translate(5.1 5.1) scale(0.575)"
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.727-8.835L1.254 2.25H8.08l4.253 5.622L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z"
      />
    </svg>
  );
}

export function ArrowUpIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 19V6M6.5 11.5 12 6l5.5 5.5" {...stroke} />
    </Svg>
  );
}
