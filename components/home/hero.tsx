import { PrimaryCta } from "@/components/brand/primary-cta";
import { FrameImage } from "@/components/visual/frame-image";
import { MeasureMarks } from "@/components/visual/measure-marks";
import { home } from "@/content/copy";
import { media } from "@/content/media";

export function Hero() {
  return (
    <section className="relative isolate -mt-[var(--header-offset)] min-h-[100dvh] bg-navy-deep pt-[var(--header-offset)] text-on-field">
      <div className="art-back">
        <FrameImage
          src={media.loft.src}
          alt={media.loft.alt}
          speed="deep"
          className="h-full w-full"
          imgClassName="object-[52%_40%] md:object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/88 via-navy/50 to-navy/20 md:bg-gradient-to-r md:from-navy-deep/86 md:via-navy/46 md:to-champagne/16" />

        <div
          data-parallax="slow"
          data-parallax-range="90"
          className="depth-shadow absolute top-[12%] right-0 h-[38%] w-[28%] bg-navy-deep/45 md:top-[18%] md:right-[6%] md:h-[58%] md:w-[28%] md:bg-navy-deep/50"
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
          data-parallax-range="110"
          className="absolute bottom-[38%] left-0 h-14 w-[36%] bg-champagne/40 md:bottom-[8%] md:left-auto md:right-[10%] md:h-[32%] md:w-[18%] md:bg-champagne/50"
        >
          <span className="gold-edge gold-edge-top" />
        </div>

        <div
          data-parallax="fast"
          className="gold-sheen absolute top-[22%] left-[18%] h-[46%] w-[2px] lg:top-[20%] lg:right-[48%] lg:left-auto lg:h-[55%] lg:w-[3px]"
        />

        <div
          data-parallax="fast"
          className="absolute top-[var(--header-offset)] bottom-0 left-0 w-[3%] bg-champagne/55 lg:w-[6%]"
        >
          <span className="gold-edge gold-edge-right" />
        </div>

        <div className="absolute -right-[10%] top-[var(--header-offset)] hidden h-[calc(100%-var(--header-offset))] w-[50%] lg:block">
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

      <div className="content-front shell grid min-h-[calc(100dvh-var(--header-offset))] grid-cols-1 items-end gap-10 pb-[max(2.25rem,calc(var(--safe-bottom)+1.25rem))] pt-10 md:py-12 lg:grid-cols-12 lg:pb-20 lg:pt-8">
        <div className="reveal max-w-3xl lg:col-span-6">
          <p className="kicker text-champagne">{home.hero.eyebrow}</p>
          <h1 className="display mt-5 text-display text-on-field">
            <span className="text-balance">{home.hero.headline}</span>
            <span className="mt-2 block italic text-champagne">
              {home.hero.accent}
            </span>
          </h1>
          <p className="measure mt-6 text-lead text-on-field md:mt-8">
            {home.hero.lede}
          </p>
          <div className="mt-8 md:mt-10">
            <PrimaryCta variant="on-field" />
          </div>
        </div>
      </div>
    </section>
  );
}
