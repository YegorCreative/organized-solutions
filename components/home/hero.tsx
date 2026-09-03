import { PrimaryCta } from "@/components/brand/primary-cta";
import { PhotoWell } from "@/components/visual/photo-well";
import { company } from "@/content/site";
import { home } from "@/content/copy";

export function Hero() {
  return (
    <section className="grain relative isolate -mt-[4.5rem] min-h-svh overflow-hidden bg-ink pt-[4.5rem] text-on-ink">
      <div
        className="parallax-slow pointer-events-none absolute inset-y-[-8%] right-0 w-[46%] bg-ink-raised"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-70"
        aria-hidden="true"
      />

      <div className="shell relative z-10 grid min-h-[calc(100svh-4.5rem)] grid-cols-1 items-end gap-12 py-12 lg:grid-cols-12 lg:items-end lg:pb-16 lg:pt-12">
        <div className="reveal max-w-3xl lg:col-span-7">
          <p className="kicker text-accent-soft">{home.hero.eyebrow}</p>
          <h1 className="display mt-5 text-display text-on-ink">
            Growth can outpace
            <span className="mt-1 block italic text-accent-soft">
              the systems that once held it.
            </span>
          </h1>
          <p className="measure mt-8 text-lead text-on-ink-muted">
            {home.hero.lede}
          </p>
          <p className="mt-5 hidden max-w-xl text-[1.05rem] text-on-ink sm:block">
            {company.supportingMessage}
          </p>
          <div className="mt-10">
            <PrimaryCta variant="on-ink" />
          </div>
        </div>

        <div className="parallax-mid hidden lg:col-span-4 lg:col-start-9 lg:block">
          <PhotoWell tone="stone" className="h-[min(32rem,56svh)]" />
        </div>
      </div>
    </section>
  );
}
