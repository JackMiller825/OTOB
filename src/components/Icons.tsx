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
    <Svg className={className}>
      <path d="M21 5 3.5 12.2l6.2 2.1L17 8.5l-5.2 7.2.2 3.8 2.6-3.2 4.6 3.2L21 5Z" {...stroke} />
    </Svg>
  );
}

export function XIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M5 5l14 14M19 5 5 19" {...stroke} />
    </Svg>
  );
}

export function ArrowUpIcon({ className }: IconProps) {
  return (
    <Svg className={className}>
      <path d="M12 19V6M6.5 11.5 12 6l5.5 5.5" {...stroke} />
    </Svg>
  );
}
