import { FrameImage } from "@/components/visual/frame-image";
import { MeasureMarks } from "@/components/visual/measure-marks";
import { home } from "@/content/copy";
import { media } from "@/content/media";

export function PromiseSection() {
  return (
    <section className="relative -mt-16 overflow-hidden bg-canvas pt-28 pb-section">
      <div
        aria-hidden="true"
        className="parallax-slow pointer-events-none absolute -right-[4%] top-8 hidden h-[70%] w-[18%] bg-stone lg:block"
      />
      <div className="shell grid items-center gap-12 lg:grid-cols-12">
        <div className="relative lg:col-span-5">
          <FrameImage
            src={media.studio.src}
            alt={media.studio.alt}
            speed="slow"
            className="aspect-[4/5] w-full"
          />
          <div className="absolute -bottom-6 -right-6 hidden h-28 w-28 bg-navy lg:block">
            <span className="gold-edge gold-edge-left" />
            <span className="gold-edge gold-edge-top" />
          </div>
          <div
            aria-hidden="true"
            className="parallax-counter absolute -top-8 -left-8 hidden h-20 w-20 bg-champagne lg:block"
          />
        </div>
        <div className="relative lg:col-span-6 lg:col-start-7">
          <MeasureMarks className="relative mb-8 w-40" />
          <p className="kicker">{home.promise.eyebrow}</p>
          <h2 className="display type-drift mt-5 max-w-3xl text-display-sm text-ink">
            {home.promise.headline}
          </h2>
          <p className="measure mt-8 text-lead text-muted">{home.promise.body}</p>
        </div>
      </div>
    </section>
  );
}
