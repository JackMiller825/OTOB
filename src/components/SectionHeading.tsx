type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  titleId: string;
  intro?: string;
  align?: "center" | "start";
};

export function SectionHeading({
  eyebrow,
  title,
  titleId,
  intro,
  align = "center",
}: SectionHeadingProps) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={titleId}>{title}</h2>
      {intro ? <p className="lede">{intro}</p> : null}
    </header>
  );
}
