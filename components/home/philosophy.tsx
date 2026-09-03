import { home } from "@/content/copy";
import { media } from "@/content/media";
import { FrameImage } from "@/components/visual/frame-image";
import { MeasureMarks } from "@/components/visual/measure-marks";

export function Philosophy() {
  return (
    <section className="relative isolate min-h-[100svh] bg-stone text-ink">
      <div className="art-back">
        <FrameImage
          src={media.threshold.src}
          alt={media.threshold.alt}
          speed="slow"
          className="h-full w-full"
        />
        <div className="veil veil-lift" />
        <div className="mask-uncover-center absolute inset-0">
          <FrameImage
            src={media.thresholdClear.src}
            alt=""
            speed="none"
            className="h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/58 via-champagne/15 to-transparent" />
        </div>
        <div className="parallax-x absolute inset-y-0 left-0 w-[18%] bg-navy-deep/40 md:w-[22%]">
          <span className="gold-edge gold-edge-right" />
        </div>
        <div className="parallax-fast absolute top-[4.5rem] right-0 h-[38%] w-[12%] bg-champagne/50">
          <span className="gold-edge gold-edge-left" />
        </div>
        <MeasureMarks
          tone="on-field"
          className="top-[18%] left-[var(--spacing-gutter)] w-[min(26rem,50vw)]"
        />
      </div>

      <div className="content-front shell grid min-h-[100svh] items-end py-section">
        <div className="max-w-4xl pb-2">
          <p className="kicker text-champagne">{home.philosophy.kicker}</p>
          <h2 className="display mt-6 text-display text-on-field">
            <span className="block">{home.philosophy.lead}</span>
            <span className="mt-1 block italic text-champagne">
              {home.philosophy.accent}
            </span>
          </h2>
          <div className="draw-rule mt-10 h-px w-full max-w-md bg-accent" />
          <p className="measure mt-10 text-lead text-on-field">
            {home.philosophy.body}
          </p>
        </div>
      </div>
    </section>
  );
}
