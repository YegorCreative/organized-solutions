import { AlignmentPlanes } from "@/components/visual/alignment-planes";
import { FrameImage } from "@/components/visual/frame-image";
import { MeasureMarks } from "@/components/visual/measure-marks";
import { media } from "@/content/media";

/**
 * Wordless chapter: reactive complexity resolving into intentional structure.
 * Copy lives in the following Recognition section — this is the experience of it.
 */
export function Complexity() {
  return (
    <section
      className="relative min-h-[100svh] overflow-hidden bg-canvas md:min-h-[120svh]"
      aria-label="Visual of operational complexity resolving into order"
    >
      <div className="absolute inset-0">
        <FrameImage
          src={media.overlap.src}
          alt=""
          speed="deep"
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-canvas/20 via-transparent to-canvas" />
      </div>

      <AlignmentPlanes variant="resolve" />

      <div
        aria-hidden="true"
        className="parallax-counter pointer-events-none absolute top-[18%] right-[6%] h-[42%] w-[18%] bg-blue/20"
      />
      <div
        aria-hidden="true"
        className="parallax-fast pointer-events-none absolute bottom-[20%] left-[8%] h-24 w-[28%] bg-blush/60"
      />

      <MeasureMarks className="top-[14%] right-[var(--spacing-gutter)] w-[min(22rem,40vw)]" />

      <div className="shell relative z-10 flex min-h-[100svh] items-end py-16 md:min-h-[120svh]">
        <div className="max-w-xl">
          <div className="draw-rule h-px w-40 bg-blue" />
        </div>
      </div>
    </section>
  );
}
