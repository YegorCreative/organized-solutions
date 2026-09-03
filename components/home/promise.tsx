import { FrameImage } from "@/components/visual/frame-image";
import { home } from "@/content/copy";
import { media } from "@/content/media";

export function PromiseSection() {
  return (
    <section className="relative -mt-16 overflow-hidden bg-canvas pt-28 pb-section">
      <div className="shell grid items-center gap-12 lg:grid-cols-12">
        <div className="relative lg:col-span-5">
          <FrameImage
            src={media.studio.src}
            alt={media.studio.alt}
            speed="slow"
            className="aspect-[4/5] w-full"
          />
          <div className="absolute -bottom-6 -right-6 hidden h-28 w-28 bg-blue lg:block" />
          <div
            aria-hidden="true"
            className="parallax-counter absolute -top-8 -left-8 hidden h-20 w-20 bg-lavender lg:block"
          />
        </div>
        <div className="lg:col-span-6 lg:col-start-7">
          <p className="kicker text-blue">{home.promise.eyebrow}</p>
          <h2 className="display mt-5 max-w-3xl text-display-sm text-ink">
            {home.promise.headline}
          </h2>
          <p className="measure mt-8 text-lead text-muted">{home.promise.body}</p>
        </div>
      </div>
    </section>
  );
}
