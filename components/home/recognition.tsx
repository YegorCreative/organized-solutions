import { FrameImage } from "@/components/visual/frame-image";
import { home } from "@/content/copy";
import { media } from "@/content/media";

export function Recognition() {
  return (
    <section className="relative overflow-hidden bg-clay py-0 text-on-ink">
      <div className="grid lg:grid-cols-2">
        <div className="relative min-h-[28rem] lg:min-h-[42rem]">
          <FrameImage
            src={media.colonnade.src}
            alt={media.colonnade.alt}
            speed="mid"
            className="absolute inset-0 h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-clay/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-clay/40" />
        </div>
        <div className="px-[var(--spacing-gutter)] py-section">
          <p className="kicker text-clay-soft">{home.recognition.eyebrow}</p>
          <h2 className="display mt-5 text-display-sm text-on-ink">
            {home.recognition.headline}
          </h2>
          <ul className="mt-10 space-y-4">
            {home.recognition.items.map((item) => (
              <li
                key={item}
                className="border-b border-white/15 pb-4 text-[1.12rem] leading-snug text-on-ink"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-md text-lead text-clay-soft">
            {home.recognition.close}
          </p>
        </div>
      </div>
    </section>
  );
}
