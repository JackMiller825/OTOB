import { useState, type KeyboardEvent } from "react";
import { assets } from "../config/assets";
import { SectionHeading } from "../components/SectionHeading";

type Brain = "research" | "rocket";

const poses = {
  research: {
    src: assets.traderResearch,
    alt: "The trader in a research pose, tired and still checking the details.",
    reaction: "Research brain selected. The trader goes back to the charts.",
  },
  rocket: {
    src: assets.traderClicked,
    alt: "The trader in an impulse pose, reacting after clicking.",
    reaction: "Rocket brain selected. The trader clicks first.",
  },
} as const;

const neutral = {
  src: assets.trader,
  alt: "The trader with messy charcoal hair, eye bags, and a lavender hoodie, waiting between both voices.",
  reaction: "The trader is waiting. Neither side has been chosen.",
};

export function StorySection() {
  const [brain, setBrain] = useState<Brain | null>(null);
  const pose = brain ? poses[brain] : neutral;

  function onKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key !== "ArrowRight" && event.key !== "ArrowDown" && event.key !== "ArrowLeft" && event.key !== "ArrowUp") {
      return;
    }
    event.preventDefault();
    const next: Brain =
      event.key === "ArrowRight" || event.key === "ArrowDown" ? "rocket" : "research";
    setBrain(next);
    const target = event.currentTarget.querySelector<HTMLButtonElement>(`[data-brain="${next}"]`);
    target?.focus();
  }

  return (
    <section className="section section--story" id="story" aria-labelledby="story-title">
      <div className="wrap">
        <SectionHeading
          eyebrow="The story"
          title="Meet your inner trading committee."
          titleId="story-title"
          intro="Every trader knows the debate. One more chart, says the Overthinker. Just click, says the Overbuyer. OTOB turns that familiar argument into a tiny comedy with one exhausted trader caught between them."
        />
        <div className="story-grid">
          <article className="story-card story-card--side">
            <div className="character-art">
              <img
                src={assets.professor}
                width={800}
                height={1000}
                alt="The Overthinker, a small professor in purple holding a book and thinking."
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="story-card__body">
              <h3>The Overthinker</h3>
              <p>Another chart. Another question. Another reason to wait.</p>
              <ul className="traits">
                <li>Asks the hard questions</li>
                <li>Checks the details</li>
                <li>Still not sure</li>
              </ul>
            </div>
          </article>

          <article className="story-card story-card--trader">
            <p className="speech">Can you two agree?</p>
            <div className="character-art character-art--trader">
              <img
                src={pose.src}
                width={1000}
                height={1000}
                alt={pose.alt}
                decoding="async"
              />
            </div>
            <div
              className="brain-switch"
              role="group"
              aria-label="Choose a side. The trader reacts."
              onKeyDown={onKeyDown}
            >
              <button
                type="button"
                data-brain="research"
                className={brain === "research" ? "brain-btn is-selected" : "brain-btn"}
                aria-pressed={brain === "research"}
                onClick={() => setBrain((current) => (current === "research" ? null : "research"))}
              >
                Research brain
              </button>
              <button
                type="button"
                data-brain="rocket"
                className={
                  brain === "rocket" ? "brain-btn brain-btn--rocket is-selected" : "brain-btn brain-btn--rocket"
                }
                aria-pressed={brain === "rocket"}
                onClick={() => setBrain((current) => (current === "rocket" ? null : "rocket"))}
              >
                Rocket brain
              </button>
            </div>
            <p className="brain-help">Choose a side. The trader reacts.</p>
            <p className="reaction" aria-live="polite">
              {pose.reaction}
            </p>
          </article>

          <article className="story-card story-card--side">
            <div className="character-art">
              <img
                src={assets.rocket}
                width={800}
                height={1000}
                alt="The Overbuyer, a small daredevil in a white and coral rocket suit, ready to launch."
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="story-card__body">
              <h3>The Overbuyer</h3>
              <p>Spots a spark. Imagines liftoff. Clicks first.</p>
              <ul className="traits">
                <li>Follows the excitement</li>
                <li>Reaches for the button</li>
                <li>Asks questions later</li>
              </ul>
            </div>
          </article>
        </div>
        <p className="disclaimer">
          The characters are fictional parody interpretations. No affiliation or endorsement is implied.
        </p>
        <div className="preload-art" hidden>
          <img src={assets.traderResearch} alt="" />
          <img src={assets.traderClicked} alt="" />
        </div>
      </div>
    </section>
  );
}
