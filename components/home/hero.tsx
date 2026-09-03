"use client";

import { useRef } from "react";
import { PrimaryCta } from "@/components/brand/primary-cta";
import { useSectionProgress } from "@/components/motion/use-section-progress";
import { Lattice } from "@/components/visual/lattice";
import { SystemField } from "@/components/visual/system-field";
import { company } from "@/content/site";
import { home } from "@/content/copy";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const progress = useSectionProgress(ref, 0.85);

  return (
    <section
      ref={ref}
      className="grain relative isolate -mt-[4.5rem] min-h-svh overflow-hidden bg-ink pt-[4.5rem] text-on-ink"
    >
      <div className="parallax-slow pointer-events-none absolute inset-0 opacity-80">
        <Lattice tone="ink" />
      </div>
      <div className="parallax-mid pointer-events-none absolute inset-[-8%] opacity-80">
        <SystemField progress={0.18 + progress * 0.72} tone="ink" mouse />
      </div>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-[1] w-[70%] bg-gradient-to-r from-ink via-ink/75 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-70"
        aria-hidden="true"
      />

      <div className="shell relative z-10 grid min-h-[calc(100svh-4.5rem)] grid-cols-1 items-end gap-12 py-12 lg:grid-cols-12 lg:items-end lg:pb-16 lg:pt-10">
        <div className="reveal max-w-4xl lg:col-span-8">
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
          <div className="mt-10">
            <PrimaryCta variant="on-ink" />
          </div>
        </div>

        <aside className="reveal hidden lg:col-span-4 lg:block" style={{ animationDelay: "160ms" }}>
          <p className="kicker text-accent-soft">The work</p>
          <ol className="relative mt-7 space-y-0">
            <span
              className="absolute top-2 bottom-2 left-[0.7rem] w-px bg-line-on-ink"
              aria-hidden="true"
            />
            {company.operatingIdea.map((step, index) => (
              <li key={step} className="relative flex items-baseline gap-5 py-3.5">
                <span className="relative z-10 grid size-6 place-items-center rounded-full border border-accent/50 bg-ink text-[0.65rem] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="display text-title text-on-ink">{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-8 max-w-[16rem] text-sm leading-relaxed text-on-ink-muted">
            {company.tagline}
          </p>
        </aside>
      </div>
    </section>
  );
}
