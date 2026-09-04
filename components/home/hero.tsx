import { PrimaryCta } from "@/components/brand/primary-cta";
import { FrameImage } from "@/components/visual/frame-image";
import { MeasureMarks } from "@/components/visual/measure-marks";
import { home } from "@/content/copy";
import { media } from "@/content/media";

export function Hero() {
  return (
    <section className="relative isolate -mt-[4.85rem] min-h-[100svh] bg-navy-deep pt-[4.85rem] text-on-field">
      <div className="art-back">
        <FrameImage
          src={media.loft.src}
          alt={media.loft.alt}
          speed="deep"
          className="h-full w-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep/86 via-navy/46 to-champagne/16" />

        <div
          data-parallax="slow"
          data-parallax-range="120"
          className="depth-shadow absolute top-[18%] right-[6%] hidden h-[58%] w-[28%] bg-navy-deep/50 lg:block"
        >
          <span className="gold-edge gold-edge-left" />
        </div>
        <div
          data-parallax="mid"
          data-parallax-range="180"
          className="absolute top-[28%] right-[2%] hidden h-[36%] w-[20%] bg-stone/45 lg:block"
        >
          <span className="gold-edge gold-edge-left" />
        </div>
        <div
          data-parallax="counter"
          data-parallax-range="140"
          className="absolute bottom-[8%] right-[10%] hidden h-[32%] w-[18%] bg-champagne/50 lg:block"
        >
          <span className="gold-edge gold-edge-top" />
        </div>

        <div
          data-parallax="fast"
          className="gold-sheen absolute top-[20%] right-[48%] hidden h-[55%] w-[3px] lg:block"
        />

        <div
          data-parallax="fast"
          className="absolute top-[4.85rem] bottom-0 left-0 hidden w-[6%] bg-champagne/60 lg:block"
        >
          <span className="gold-edge gold-edge-right" />
        </div>

        <div className="absolute -right-[10%] top-[4.85rem] hidden h-[calc(100%-4.85rem)] w-[50%] lg:block">
          <div className="relative h-full w-full overflow-hidden">
            <FrameImage
              src={media.atrium.src}
              alt={media.atrium.alt}
              speed="counter"
              className="h-full w-full"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-l from-champagne/16 via-transparent to-navy-deep/30" />
            <span className="gold-edge gold-edge-left" />
          </div>
        </div>

        <MeasureMarks
          tone="on-field"
          className="right-[8%] bottom-[16%] hidden w-[min(24rem,28vw)] lg:block"
        />
      </div>

      <div className="content-front shell grid min-h-[calc(100svh-4.85rem)] grid-cols-1 items-end gap-10 py-12 lg:grid-cols-12 lg:pb-20 lg:pt-8">
        <div className="reveal max-w-3xl lg:col-span-6">
          <p className="kicker text-champagne">{home.hero.eyebrow}</p>
          <h1 className="display mt-5 text-display text-on-field">
            {home.hero.headline}
            <span className="mt-2 block italic text-champagne">
              {home.hero.accent}
            </span>
          </h1>
          <p className="measure mt-8 text-lead text-on-field">{home.hero.lede}</p>
          <div className="mt-10">
            <PrimaryCta variant="on-field" />
          </div>
        </div>
      </div>
    </section>
  );
}
