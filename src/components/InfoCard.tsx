import type { ReactNode } from "react";

type InfoCardProps = {
  label: string;
  value: string;
  pending?: boolean;
  tone?: "lavender" | "coral" | "yellow" | "cream";
  icon?: ReactNode;
};

export function InfoCard({ label, value, pending = false, tone = "cream", icon }: InfoCardProps) {
  return (
    <article className={`info-card info-card--${tone}`}>
      {icon ? <div className="info-card__icon">{icon}</div> : null}
      <div>
        <h3 className="info-card__label">{label}</h3>
        <p className={pending ? "info-card__value is-pending" : "info-card__value"}>{value}</p>
      </div>
    </article>
  );
}
