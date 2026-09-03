import { FrameImage } from "@/components/visual/frame-image";
import { home } from "@/content/copy";
import { media } from "@/content/media";

export function Difference() {
  return (
    <section className="relative overflow-hidden bg-canvas py-section">
      <div className="shell grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <p className="kicker text-moss-soft">{home.difference.eyebrow}</p>
          <FrameImage
            src={media.material.src}
            alt={media.material.alt}
            speed="slow"
            className="mt-8 aspect-square w-full max-w-sm"
          />
        </div>
        <div className="lg:col-span-7 lg:col-start-6">
          {home.difference.items.map((item) => (
            <article
              key={item.title}
              className="group grid gap-3 border-b border-line py-8 first:border-t md:grid-cols-12 md:py-10"
            >
              <h3 className="display text-title text-ink md:col-span-4">
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
