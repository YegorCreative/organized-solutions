import { home } from "@/content/copy";
import { media } from "@/content/media";
import { FrameImage } from "@/components/visual/frame-image";

export function Philosophy() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-lavender text-ink">
      <div className="absolute inset-0">
        <FrameImage
          src={media.threshold.src}
          alt={media.threshold.alt}
          speed="slow"
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-lavender/40" />
      </div>
      <div className="mask-uncover absolute inset-0">
        <FrameImage
          src={media.thresholdClear.src}
          alt={media.thresholdClear.alt}
          speed="none"
          className="h-full w-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-deep/88 via-blue/30 to-transparent" />
      </div>
      <div
        aria-hidden="true"
        className="parallax-color pointer-events-none absolute -left-[8%] bottom-[12%] h-56 w-56 rounded-full bg-blush/70 blur-2xl"
      />

      <div className="shell relative z-10 grid min-h-[100svh] items-end py-section">
        <div className="max-w-4xl">
          <p className="kicker text-blush">Listen first</p>
          <h2 className="display mt-6 text-display text-on-blue">
            We diagnose
            <span className="mt-1 block italic text-lavender">
              before we prescribe.
            </span>
          </h2>
          <div className="draw-rule mt-10 h-px w-full max-w-md bg-blush" />
          <p className="measure mt-10 text-lead text-on-blue">
            {home.philosophy.body}
          </p>
        </div>
      </div>
    </section>
  );
}
