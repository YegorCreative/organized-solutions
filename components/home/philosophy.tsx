import { home } from "@/content/copy";
import { media } from "@/content/media";
import { FrameImage } from "@/components/visual/frame-image";
import { MeasureMarks } from "@/components/visual/measure-marks";

export function Philosophy() {
  return (
    <section className="relative isolate bg-stone text-ink">
      <div className="stage-run relative h-[132svh] md:h-[165svh] lg:h-[180svh]">
        <div
          data-stage
          className="sticky top-[var(--header-offset)] h-[calc(100dvh-var(--header-offset))] bg-stone"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0">
              <FrameImage
                src={media.threshold.src}
                alt={media.threshold.alt}
                speed="slow"
                className="h-full w-full"
              />
            </div>
            <div data-stage-veil className="veil" />
            <div data-stage-clip className="absolute inset-0">
              <FrameImage
                src={media.thresholdClear.src}
                alt=""
                speed="mid"
                className="h-full w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/55 via-champagne/12 to-transparent" />
            </div>

            <div
              data-parallax="mid"
              data-parallax-range="140"
              className="depth-shadow absolute inset-y-0 left-0 w-[12%] bg-navy-deep/45 md:w-[15%]"
            >
              <span className="gold-edge gold-edge-right" />
            </div>
            <div
              data-parallax="counter"
              data-parallax-range="160"
              className="absolute top-[8%] right-0 h-[42%] w-[14%] bg-champagne/55"
            >
              <span className="gold-edge gold-edge-left" />
            </div>
            <div
              data-parallax="fast"
              data-parallax-range="220"
              className="gold-sheen absolute top-[12%] left-[15%] hidden h-[70%] w-[3px] md:block"
            />
            <MeasureMarks
              tone="on-field"
              className="top-[16%] left-[var(--spacing-gutter)] w-[min(26rem,50vw)]"
            />
          </div>

          <div className="content-front shell relative z-10 flex h-full items-end overflow-visible py-8 md:py-section">
            <div className="max-w-4xl pb-[max(1.25rem,var(--safe-bottom))]">
              <p className="kicker text-champagne">{home.philosophy.kicker}</p>
              <h2 className="display mt-4 text-display text-on-field md:mt-6">
                <span className="block text-balance">{home.philosophy.lead}</span>
                <span className="mt-1 block italic text-champagne text-balance">
                  {home.philosophy.accent}
                </span>
              </h2>
              <div className="draw-rule mt-7 h-px w-full max-w-md bg-accent md:mt-10" />
              <p className="measure mt-7 text-lead text-on-field md:mt-10">
                {home.philosophy.body}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
