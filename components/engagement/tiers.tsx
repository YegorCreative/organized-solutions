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
    photoMin: "min-h-[16rem] lg:min-h-[26rem]",
  },
  {
    image: media.desk,
    tone: "bg-stone text-ink",
    kicker: "text-muted",
    speed: "slow" as const,
    photoMin: "min-h-[18rem] lg:min-h-[30rem]",
  },
  {
    image: media.loft,
    tone: "bg-champagne text-ink",
    kicker: "text-muted",
    speed: "mid" as const,
    photoMin: "min-h-[20rem] lg:min-h-[34rem]",
  },
  {
    image: media.course,
    tone: "bg-navy-deep text-on-field",
    kicker: "text-champagne",
    speed: "fast" as const,
    photoMin: "min-h-[22rem] lg:min-h-[36rem]",
  },
] as const;

export function EngagementTiers() {
  return (
    <div className="relative">
      <FlowPath
        vertical
        tone="gold"
        className="top-0 bottom-[-5rem] left-[var(--spacing-gutter)] hidden w-px lg:block"
      />
      {tiers.map((tier, index) => {
        const visual = visuals[index];
        const last = index === tiers.length - 1;
        const onField = last;

        return (
          <article
            key={tier.index}
            className={cx(
              "relative grid lg:grid-cols-12",
              last ? "overflow-visible" : "overflow-hidden",
              visual.tone,
              index === 0 && "border-t border-accent/50",
            )}
          >
            <div
              className={cx(
                "relative overflow-hidden lg:col-span-5",
                visual.photoMin,
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
                  className="parallax-x absolute inset-y-0 left-0 w-1/3 bg-canvas/45"
                />
              ) : null}
              {index === 1 ? (
                <>
                  <MeasureMarks className="bottom-8 left-6 w-[70%]" />
                  <div
                    aria-hidden="true"
                    className="parallax-slow absolute top-8 right-0 h-24 w-[40%] bg-champagne/40"
                  >
                    <span className="gold-edge gold-edge-left" />
                  </div>
                </>
              ) : null}
              {index === 2 ? (
                <div
                  aria-hidden="true"
                  className="parallax-fast absolute bottom-8 right-8 h-24 w-24 bg-navy-deep"
                >
                  <span className="gold-edge gold-edge-left" />
                  <span className="gold-edge gold-edge-top" />
                </div>
              ) : null}
              {last ? (
                <>
                  <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-navy-deep to-transparent" />
                  <div
                    aria-hidden="true"
                    className="parallax-mid absolute bottom-0 left-0 h-1/2 w-[22%] bg-champagne/35"
                  >
                    <span className="gold-edge gold-edge-right" />
                  </div>
                </>
              ) : null}
            </div>
            <div className="relative px-[var(--spacing-gutter)] py-12 lg:col-span-7 lg:py-20">
              <p
                className={cx(
                  "display text-display-sm",
                  onField ? "text-champagne" : "text-navy",
                )}
              >
                {tier.index}
              </p>
              <p className={cx("kicker mt-4", visual.kicker)}>{tier.stage}</p>
              <h3
                className={cx(
                  "display mt-3 text-title",
                  onField && "text-on-field",
                )}
              >
                {tier.name}
              </h3>
              <p
                className={cx(
                  "measure mt-5 text-[1.0625rem] leading-relaxed",
                  onField ? "text-on-field-muted" : "text-muted",
                )}
              >
                {tier.summary}
              </p>
              <p
                className={cx(
                  "mt-8 max-w-md text-sm leading-relaxed",
                  onField ? "text-on-field-muted" : "text-faint",
                )}
              >
                <span className={cx("kicker mb-2 block", visual.kicker)}>
                  Best for
                </span>
                {tier.bestFor}
              </p>
              {last ? (
                <FlowPath
                  vertical
                  tone="gold"
                  className="top-12 bottom-[-7rem] left-[var(--spacing-gutter)] hidden lg:block"
                />
              ) : null}
            </div>
          </article>
        );
      })}
    </div>
  );
}
