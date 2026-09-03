import { PrimaryCta } from "@/components/brand/primary-cta";
import { AlignmentPlanes } from "@/components/visual/alignment-planes";
import { FrameImage } from "@/components/visual/frame-image";
import { MeasureMarks } from "@/components/visual/measure-marks";
import { company } from "@/content/site";
import { home } from "@/content/copy";
import { media } from "@/content/media";

export function Hero() {
  return (
    <section className="relative isolate -mt-[4.5rem] min-h-[100svh] overflow-hidden bg-blue pt-[4.5rem] text-on-blue">
      <div className="absolute inset-0">
        <FrameImage
          src={media.loft.src}
          alt={media.loft.alt}
          speed="deep"
          className="h-full w-full"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-deep/90 via-blue/48 to-lavender/35" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-blue-deep/50 to-transparent" />
      </div>

      <AlignmentPlanes variant="hero" />

      <div
        aria-hidden="true"
        className="parallax-fast pointer-events-none absolute top-[4.6rem] bottom-0 left-0 hidden w-[7%] bg-blush/55 lg:block"
      />
      <div
        aria-hidden="true"
        className="parallax-x pointer-events-none absolute right-[42%] top-[22%] hidden h-[46%] w-[9%] bg-blue/25 lg:block"
      />

      <div className="pointer-events-none absolute -right-[8%] top-[4.6rem] hidden h-[calc(100%-4.6rem)] w-[50%] lg:block">
        <div className="parallax-mid relative h-full w-full overflow-hidden">
          <FrameImage
            src={media.atrium.src}
            alt={media.atrium.alt}
            speed="counter"
            className="h-full w-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-l from-lavender/20 via-transparent to-blue/20" />
        </div>
      </div>

      <MeasureMarks
        tone="on-blue"
        className="right-[8%] bottom-[16%] hidden w-[min(24rem,28vw)] lg:block"
      />

      <div className="shell relative z-10 grid min-h-[calc(100svh-4.5rem)] grid-cols-1 items-end gap-10 py-10 lg:grid-cols-12 lg:pb-20 lg:pt-8">
        <div className="reveal max-w-3xl lg:col-span-7">
          <p className="kicker text-blush">{home.hero.eyebrow}</p>
          <h1 className="display mt-5 pr-1 text-display text-on-blue">
            Growth can outpace
            <span className="mt-1 block italic text-lavender">
              the systems that once{" "}
              <span className="block sm:inline">held it.</span>
            </span>
          </h1>
          <p className="measure mt-8 text-lead text-on-blue">
            {home.hero.lede}
          </p>
          <p className="mt-5 hidden max-w-xl text-[1.05rem] text-on-blue-muted xl:block">
            {company.supportingMessage}
          </p>
          <div className="mt-10">
            <PrimaryCta variant="on-field" />
          </div>
        </div>
      </div>
    </section>
  );
}
