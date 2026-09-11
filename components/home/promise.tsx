import { FrameImage } from "@/components/visual/frame-image";
import { MeasureMarks } from "@/components/visual/measure-marks";
import { home } from "@/content/copy";
import { media } from "@/content/media";

export function PromiseSection() {
  return (
    <section className="relative -mt-8 bg-canvas pt-16 pb-section md:-mt-12 md:pt-24">
      <div className="art-back">
        <div
          data-parallax="slow"
          className="absolute -right-[4%] top-8 hidden h-[70%] w-[18%] bg-stone lg:block"
        >
          <span className="gold-edge gold-edge-left" />
        </div>
      </div>
      <div className="content-front shell grid items-center gap-12 lg:grid-cols-12">
        <div className="relative lg:col-span-5">
          <div className="media-shell elevate-soft">
            <FrameImage
              src={media.studio.src}
              alt={media.studio.alt}
              speed="slow"
              className="media-frame aspect-[5/4] w-full md:aspect-[4/5]"
              imgClassName="object-[center_42%] md:object-center"
            />
          </div>
          <div
            data-parallax="fast"
            className="absolute -bottom-3 -right-2 h-14 w-14 bg-navy md:-bottom-6 md:-right-6 md:h-28 md:w-28 lg:block"
          >
            <span className="gold-edge gold-edge-left" />
            <span className="gold-edge gold-edge-top" />
          </div>
          <div
            aria-hidden="true"
            data-parallax="counter"
            className="absolute -top-8 -left-8 hidden h-20 w-20 bg-champagne lg:block"
          />
        </div>
        <div className="relative lg:col-span-6 lg:col-start-7">
          <MeasureMarks className="relative mb-6 w-40 md:mb-8" />
          <p className="kicker">{home.promise.eyebrow}</p>
          <h2 className="display mt-4 max-w-3xl text-display-sm text-ink md:mt-5">
            {home.promise.headline}
          </h2>
          <p className="measure mt-6 text-lead text-muted md:mt-8">{home.promise.body}</p>
        </div>
      </div>
    </section>
  );
}
