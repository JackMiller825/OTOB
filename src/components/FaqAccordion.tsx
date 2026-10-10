import { useId, useState, type ReactNode } from "react";

export type FaqItem = {
  id: string;
  question: string;
  answer: ReactNode;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const baseId = useId();
  const [openIds, setOpenIds] = useState<string[]>([]);

  function toggle(id: string) {
    setOpenIds((current) =>
      current.includes(id) ? current.filter((item) => item !== id) : [...current, id],
    );
  }

  return (
    <div className="accordion">
      {items.map((item) => {
        const expanded = openIds.includes(item.id);
        const buttonId = `${baseId}-${item.id}-button`;
        const panelId = `${baseId}-${item.id}-panel`;
        return (
          <div className={expanded ? "accordion__item is-open" : "accordion__item"} key={item.id}>
            <h3 className="accordion__heading">
              <button
                id={buttonId}
                type="button"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() => toggle(item.id)}
              >
                <span>{item.question}</span>
                <span className="accordion__icon" aria-hidden="true" />
              </button>
            </h3>
            <div id={panelId} role="region" aria-labelledby={buttonId} hidden={!expanded}>
              <div className="accordion__panel">{item.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
