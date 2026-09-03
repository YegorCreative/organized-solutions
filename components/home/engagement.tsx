import { EngagementTiers } from "@/components/engagement/tiers";
import { FlowPath } from "@/components/visual/flow-path";
import { home } from "@/content/copy";

export function Engagement() {
  return (
    <section className="relative overflow-hidden bg-canvas pt-section">
      <FlowPath className="top-24 left-[var(--spacing-gutter)] hidden w-[42%] lg:block" />
      <div className="shell relative mb-8 max-w-3xl lg:mb-4">
        <p className="kicker">{home.engagement.eyebrow}</p>
        <h2 className="display type-drift mt-5 text-display-sm text-ink">
          {home.engagement.headline}
        </h2>
        <p className="measure mt-6 text-lead text-muted">
          {home.engagement.lede}
        </p>
      </div>
      <EngagementTiers />
    </section>
  );
}
