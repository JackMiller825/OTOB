import { assets } from "../config/assets";
import { SectionHeading } from "../components/SectionHeading";
import { SocialIcons } from "../components/SocialIcons";
import { externalLinks } from "../config/token";

const activities = [
  {
    title: "Weekly Committee Poll",
    copy: "Which voice won this week? Vote: Research / Rocket.",
    status: "Coming soon",
    image: assets.traderResearch,
    alt: "The trader researching, still caught between the two voices.",
  },
  {
    title: "OTOB Caption Lab",
    copy: "Add a short caption to a blank trader reaction card and share it.",
    status: "Community idea",
    image: assets.traderClicked,
    alt: "The trader after an impulsive click, as a caption-card idea.",
  },
  {
    title: "Two-Brain Meme Relay",
    copy: "Remix the same template in your language; keep the joke readable everywhere.",
    status: "Community idea",
    image: assets.trader,
    alt: "The tired trader, ready for a shared meme template.",
  },
];

export function CommunitySection() {
  const linksReady = Boolean(externalLinks.telegram || externalLinks.x);

  return (
    <section className="section section--community" id="community" aria-labelledby="community-title">
      <div className="wrap">
        <div className="community-sheet">
          <SectionHeading
            eyebrow="Community"
            title="Bring both brain cells."
            titleId="community-title"
            intro="Share the overthinking. Laugh at the impulse. Make the next reaction image with us."
          />
          <SocialIcons className="community-actions" />
          {!linksReady ? <p className="community-pending">Official community links will be added here.</p> : null}
          <div className="activity-grid">
            {activities.map((activity) => (
              <article key={activity.title} className="activity-card">
                <div className="activity-card__art">
                  <img src={activity.image} alt={activity.alt} width={1000} height={1000} loading="lazy" decoding="async" />
                </div>
                <p className="activity-card__status">{activity.status}</p>
                <h3>{activity.title}</h3>
                <p>{activity.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
