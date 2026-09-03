import { FlowPath } from "@/components/visual/flow-path";
import { FrameImage } from "@/components/visual/frame-image";
import { MeasureMarks } from "@/components/visual/measure-marks";
import { media } from "@/content/media";
import { tiers } from "@/content/site";
import { cx } from "@/lib/cx";

const visuals = [
  {
    image: media.studio,
    tone: "bg-canvas text-ink",
    kicker: "text-muted",
    speed: "slow" as const,
  },
  {
    image: media.desk,
    tone: "bg-stone text-ink",
    kicker: "text-muted",
    speed: "slow" as const,
  },
  {
    image: media.loft,
    tone: "bg-champagne text-ink",
    kicker: "text-muted",
    speed: "mid" as const,
  },
  {
    image: media.course,
    tone: "bg-stone text-ink",
    kicker: "text-muted",
    speed: "fast" as const,
  },
] as const;

export function EngagementTiers() {
  return (
    <div className="relative">
      {tiers.map((tier, index) => {
        const visual = visuals[index];
        const last = index === tiers.length - 1;

        return (
          <article
            key={tier.index}
            className={cx(
              "relative grid overflow-hidden lg:grid-cols-12",
              last && "overflow-visible",
              visual.tone,
              index === 0 && "border-t border-accent/40",
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
                speed={visual.speed}
                className="absolute inset-0 h-full w-full"
              />
              {index === 0 ? (
                <div
                  aria-hidden="true"
                  className="parallax-x absolute inset-y-0 left-0 w-1/4 bg-canvas/50"
                />
              ) : null}
              {index === 1 ? (
                <MeasureMarks className="bottom-8 left-6 w-[70%]" />
              ) : null}
              {index === 2 ? (
                <div
                  aria-hidden="true"
                  className="parallax-fast absolute bottom-8 right-8 h-16 w-16 bg-navy"
                >
                  <span className="gold-edge gold-edge-left" />
                  <span className="gold-edge gold-edge-top" />
                </div>
              ) : null}
              {last ? (
                <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-stone to-transparent" />
              ) : null}
            </div>
            <div className="relative px-[var(--spacing-gutter)] py-12 lg:col-span-7 lg:py-20">
              <p className="display text-display-sm text-navy">{tier.index}</p>
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
                <>
                  <p className="mt-8 max-w-md text-sm text-muted">
                    Continued leadership after implementation — check-ins,
                    course-correction, and hands-on availability as the business
                    evolves.
                  </p>
                  <FlowPath
                    vertical
                    tone="gold"
                    className="top-12 bottom-[-6rem] left-[var(--spacing-gutter)] hidden lg:block"
                  />
                </>
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}
