import { home } from "@/content/copy";
import { media } from "@/content/media";
import { FrameImage } from "@/components/visual/frame-image";
import { MeasureMarks } from "@/components/visual/measure-marks";

export function Philosophy() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-stone text-ink md:min-h-[115svh]">
      <div className="absolute inset-0">
        <FrameImage
          src={media.threshold.src}
          alt={media.threshold.alt}
          speed="slow"
          className="h-full w-full"
        />
        <div className="veil veil-lift" />
      </div>

      <div className="mask-uncover-center absolute inset-0">
        <FrameImage
          src={media.thresholdClear.src}
          alt={media.thresholdClear.alt}
          speed="none"
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/58 via-champagne/15 to-transparent" />
      </div>

      <div
        aria-hidden="true"
        className="parallax-x pointer-events-none absolute inset-y-0 left-0 w-[18%] bg-navy-deep/40 md:w-[22%]"
      >
        <span className="gold-edge gold-edge-right" />
      </div>
      <div
        aria-hidden="true"
        className="parallax-fast pointer-events-none absolute top-[4.5rem] right-0 h-[38%] w-[12%] bg-champagne/50"
      >
        <span className="gold-edge gold-edge-left" />
      </div>

      <MeasureMarks
        tone="on-field"
        className="top-[18%] left-[var(--spacing-gutter)] w-[min(26rem,50vw)]"
      />

      <div className="shell relative z-10 grid min-h-[100svh] items-end py-section md:min-h-[115svh]">
        <div className="max-w-4xl">
          <p className="kicker text-champagne">Listen first</p>
          <h2 className="display mt-6 text-display text-on-field">
            <span className="mask-type block">We diagnose</span>
            <span className="mt-1 block italic text-champagne">
              before we prescribe.
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
