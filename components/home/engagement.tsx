import { EngagementTiers } from "@/components/engagement/tiers";
import { home } from "@/content/copy";

export function Engagement() {
  return (
    <section className="bg-canvas pt-section">
      <div className="shell mb-8 max-w-3xl lg:mb-4">
        <p className="kicker">{home.engagement.eyebrow}</p>
        <h2 className="display mt-5 text-display-sm text-ink">
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
