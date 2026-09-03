"use client";

import { useRef } from "react";
import { useSectionProgress } from "@/components/motion/use-section-progress";
import { Lattice } from "@/components/visual/lattice";
import { SystemField } from "@/components/visual/system-field";
import { home } from "@/content/copy";

export function Philosophy() {
  const ref = useRef<HTMLElement>(null);
  const progress = useSectionProgress(ref, 1);

  return (
    <section
      ref={ref}
      className="grain relative isolate min-h-[88svh] overflow-hidden bg-ink py-section text-on-ink"
    >
      <div className="parallax-slow pointer-events-none absolute inset-0">
        <Lattice tone="ink" />
      </div>
      <div className="parallax-mid pointer-events-none absolute inset-[-10%] opacity-95">
        <SystemField progress={progress} tone="ink" />
      </div>
      <div className="shell relative z-10 grid min-h-[60svh] items-end gap-12 lg:grid-cols-12">
        <div className="lg:col-span-9">
          <p className="kicker text-accent">Complexity becoming clarity</p>
          <h2 className="display mt-6 text-display text-on-ink">
            We diagnose
            <span className="mt-1 block italic text-accent-soft">
              before we prescribe.
            </span>
          </h2>
          <div
            className="mt-8 h-px origin-left bg-accent"
            style={{ transform: `scaleX(${0.18 + progress * 0.82})` }}
          />
        </div>
        <p className="measure text-lead text-on-ink-muted lg:col-span-5 lg:col-start-8">
          {home.philosophy.body}
        </p>
      </div>
    </section>
  );
}
