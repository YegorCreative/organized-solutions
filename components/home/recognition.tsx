import { FlowPath } from "@/components/visual/flow-path";
import { FrameImage } from "@/components/visual/frame-image";
import { home } from "@/content/copy";
import { media } from "@/content/media";

export function Recognition() {
  return (
    <section className="relative bg-stone text-ink">
      <div className="art-back">
        <div
          data-parallax="slow"
          className="absolute left-0 top-[12%] hidden h-[42%] w-[10%] bg-navy-deep/20 lg:block"
        >
          <span className="gold-edge gold-edge-right" />
        </div>
      </div>
      <div
        data-parallax="fast"
        aria-hidden="true"
        className="gold-sheen pointer-events-none absolute bottom-[-4.5rem] left-[var(--spacing-gutter)] z-20 hidden h-[9rem] w-[3px] lg:block"
      />
      <div className="content-front grid lg:grid-cols-2">
        <div className="relative min-h-[18rem] overflow-hidden md:min-h-[22rem] lg:min-h-[38rem]">
          <FrameImage
            src={media.colonnade.src}
            alt={media.colonnade.alt}
            speed="mid"
            className="absolute inset-0 h-full w-full"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone/80 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-stone/45" />
          <span className="gold-edge gold-edge-right hidden lg:block" />
          <FlowPath tone="gold" className="bottom-10 left-0 w-2/3" />
        </div>
        <div className="relative px-[var(--spacing-gutter)] py-12 md:py-section">
          <p className="kicker">{home.recognition.eyebrow}</p>
          <h2 className="display mt-5 text-display-sm text-ink">
            {home.recognition.headline}
          </h2>
          <p className="measure mt-6 text-lead text-muted">
            {home.recognition.bridge}
          </p>
          <ul className="mt-10 space-y-4">
            {home.recognition.items.map((item) => (
              <li
                key={item}
                className="border-b border-ink/15 pb-4 text-[1.12rem] leading-snug text-ink"
              >
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-md text-lead text-muted">
            {home.recognition.close}
          </p>
        </div>
      </div>
    </section>
  );
}
