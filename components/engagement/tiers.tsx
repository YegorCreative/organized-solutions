import { FrameImage } from "@/components/visual/frame-image";
import { media } from "@/content/media";
import { tiers } from "@/content/site";
import { cx } from "@/lib/cx";

const visuals = [
  { image: media.studio, tone: "bg-canvas text-ink", kicker: "text-blue" },
  { image: media.desk, tone: "bg-lavender text-ink", kicker: "text-blue" },
  { image: media.loft, tone: "bg-blue-soft text-ink", kicker: "text-blue" },
  { image: media.table, tone: "bg-blush text-ink", kicker: "text-blue" },
] as const;

export function EngagementTiers() {
  return (
    <div>
      {tiers.map((tier, index) => {
        const visual = visuals[index];
        const last = index === tiers.length - 1;

        return (
          <article
            key={tier.index}
            className={cx(
              "relative grid overflow-hidden lg:grid-cols-12",
              visual.tone,
            )}
          >
            <div
              className={cx(
                "relative min-h-[16rem] lg:col-span-5 lg:min-h-[28rem]",
                index % 2 === 1 && "lg:order-2",
              )}
            >
              <FrameImage
                src={visual.image.src}
                alt={visual.image.alt}
                speed={index === 2 ? "mid" : "slow"}
                className="absolute inset-0 h-full w-full"
              />
              {last ? (
                <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-blush to-transparent" />
              ) : null}
            </div>
            <div className="px-[var(--spacing-gutter)] py-12 lg:col-span-7 lg:py-20">
              <p className="display text-display-sm text-blue">
                {tier.index}
              </p>
              <p className={cx("kicker mt-4", visual.kicker)}>{tier.stage}</p>
              <h3 className="display mt-3 text-title">{tier.name}</h3>
              <p className="measure mt-5 text-[1.0625rem] leading-relaxed text-muted">
                {tier.summary}
              </p>
              <p className="mt-8 max-w-md text-sm leading-relaxed text-faint">
                <span className={cx("kicker mb-2 block", visual.kicker)}>
                  Best for
                </span>
                {tier.bestFor}
              </p>
              {last ? (
                <p className="mt-8 max-w-md text-sm text-muted">
                  The work does not have to end when the first systems are in
                  place.
                </p>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}
