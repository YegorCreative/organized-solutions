import { FrameImage } from "@/components/visual/frame-image";
import { home } from "@/content/copy";
import { media } from "@/content/media";

export function Difference() {
  return (
    <section className="relative bg-canvas py-section">
      <div className="art-back">
        <div
          data-parallax="slow"
          className="absolute top-[12%] right-0 hidden h-[48%] w-[14%] bg-navy-deep/10 lg:block"
        >
          <span className="gold-edge gold-edge-left" />
        </div>
      </div>
      <div className="content-front shell grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="kicker">{home.difference.eyebrow}</p>
          <div className="relative mt-8 max-w-sm">
            <FrameImage
              src={media.material.src}
              alt={media.material.alt}
              speed="slow"
              className="aspect-square w-full"
            />
            <div
              data-parallax="fast"
              className="absolute -bottom-5 -right-5 hidden h-20 w-20 bg-navy-deep lg:block"
            >
              <span className="gold-edge gold-edge-left" />
              <span className="gold-edge gold-edge-top" />
            </div>
          </div>
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          {home.difference.items.map((item) => (
            <article
              key={item.title}
              className="group grid gap-3 border-b border-line py-8 first:border-t md:grid-cols-12 md:py-10"
            >
              <h3 className="display text-title text-ink transition-transform duration-500 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0 md:col-span-4">
                {item.title}
              </h3>
              <p className="text-lead text-muted md:col-span-8">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
