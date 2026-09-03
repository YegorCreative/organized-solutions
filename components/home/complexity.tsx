import { AlignmentPlanes } from "@/components/visual/alignment-planes";
import { DepthPlanes } from "@/components/visual/depth-planes";
import { FrameImage } from "@/components/visual/frame-image";
import { MeasureMarks } from "@/components/visual/measure-marks";
import { media } from "@/content/media";

/**
 * Wordless chapter: reactive complexity resolving into intentional structure.
 * The primary navy/gold dimensional moment — overlapping operational
 * planes catching light as they come into alignment.
 * Copy lives in the following Recognition section — this is the experience of it.
 */
export function Complexity() {
  return (
    <section
      className="relative min-h-[72svh] overflow-hidden bg-navy-deep md:min-h-[88svh]"
      aria-label="Visual of momentum finding operational alignment"
    >
      <div className="absolute inset-0">
        <FrameImage
          src={media.overlap.src}
          alt=""
          speed="deep"
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/35 via-transparent to-canvas" />
        <div className="absolute inset-y-0 left-0 w-[28%] bg-gradient-to-r from-navy-deep/55 to-transparent md:w-[22%]" />
      </div>

      <AlignmentPlanes variant="resolve" />
      <DepthPlanes variant="moment" />

      <div
        aria-hidden="true"
        className="parallax-counter pointer-events-none absolute top-[18%] right-[6%] h-[42%] w-[18%] bg-navy-deep/30"
      >
        <span className="gold-edge gold-edge-left" />
      </div>
      <div
        aria-hidden="true"
        className="parallax-fast pointer-events-none absolute bottom-[20%] left-[8%] h-24 w-[28%] bg-champagne/55"
      >
        <span className="gold-edge gold-edge-top" />
      </div>

      <MeasureMarks className="top-[14%] right-[var(--spacing-gutter)] w-[min(22rem,40vw)]" />

      <div className="shell relative z-10 flex min-h-[72svh] items-end py-16 md:min-h-[88svh]">
        <div className="max-w-xl">
          <div className="draw-rule h-px w-40 bg-accent" />
        </div>
      </div>
    </section>
  );
}
