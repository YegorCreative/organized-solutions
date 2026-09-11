import { EngagementTiers } from "@/components/engagement/tiers";
import { FlowPath } from "@/components/visual/flow-path";
import { home } from "@/content/copy";

export function Engagement() {
  return (
    <section className="relative bg-canvas pt-section">
      <div className="art-back">
        <FlowPath
          tone="gold"
          className="top-24 left-[var(--spacing-rail)] hidden w-[42%] lg:block"
        />
      </div>
      <div className="content-front shell relative mb-6 max-w-3xl md:mb-8 lg:mb-4">
        <p className="kicker">{home.engagement.eyebrow}</p>
        <h2 className="display mt-4 text-display-sm text-ink text-balance md:mt-5">
          {home.engagement.headline}
        </h2>
        <p className="measure-wide mt-5 text-lead text-muted md:mt-6">
          {home.engagement.lede}
        </p>
      </div>
      <EngagementTiers />
    </section>
  );
}
