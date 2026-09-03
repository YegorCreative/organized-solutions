import { FrameImage } from "@/components/visual/frame-image";
import { MeasureMarks } from "@/components/visual/measure-marks";
import { media } from "@/content/media";

/**
 * Strongest art parallax: moving through overlapping operational
 * planes until they come into alignment.
 */
export function Complexity() {
  return (
    <section
      className="relative bg-navy-deep"
      aria-label="Visual of momentum finding operational alignment"
    >
      <div className="stage-run relative h-[175svh] md:h-[200svh]">
        <div
          data-stage
          className="sticky top-[4.85rem] h-[calc(100svh-4.85rem)] overflow-hidden bg-navy-deep"
        >
          <div className="absolute inset-0">
            <FrameImage
              src={media.overlap.src}
              alt=""
              speed="deep"
              className="h-full w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/30 via-transparent to-canvas/80" />
          </div>

          <div
            data-parallax="counter"
            data-parallax-range="200"
            data-align="a"
            className="depth-shadow align-plane top-[4%] left-[-10%] h-[82%] w-[40%] bg-navy-deep/78 md:w-[34%]"
          >
            <span className="gold-edge gold-edge-right" />
          </div>
          <div
            data-parallax="slow"
            data-parallax-range="120"
            data-align="b"
            className="align-plane top-[12%] right-[-8%] h-[58%] w-[36%] bg-navy/45 md:w-[30%]"
          >
            <span className="gold-edge gold-edge-left" />
          </div>
          <div
            data-parallax="mid"
            data-parallax-range="180"
            data-align="c"
            className="align-plane bottom-[6%] left-[16%] h-[36%] w-[48%] bg-champagne/55 md:left-[26%] md:w-[34%]"
          >
            <span className="gold-edge gold-edge-top" />
          </div>
          <div
            data-parallax="fast"
            data-parallax-range="240"
            data-align="d"
            className="align-plane top-[24%] left-[38%] hidden h-[48%] w-[22%] bg-stone/45 lg:block"
          >
            <span className="gold-edge gold-edge-left" />
          </div>
          <div
            data-parallax="x"
            data-parallax-range="160"
            className="gold-sheen absolute top-[14%] left-[32%] hidden h-[64%] w-[3px] md:block"
          />
          <div
            data-parallax="counter"
            data-parallax-range="150"
            className="gold-sheen absolute top-[44%] left-[10%] h-[3px] w-[46%] md:left-[18%] md:w-[30%]"
          />

          <MeasureMarks className="top-[12%] right-[var(--spacing-gutter)] w-[min(22rem,40vw)]" />

          <div className="shell relative z-10 flex h-full items-end py-16">
            <div className="max-w-xl">
              <div className="draw-rule h-px w-40 bg-accent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
