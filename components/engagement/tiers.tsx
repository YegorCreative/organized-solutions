"use client";

import { useRef } from "react";
import { useSectionProgress } from "@/components/motion/use-section-progress";
import { SystemField } from "@/components/visual/system-field";
import { tiers } from "@/content/site";
import { cx } from "@/lib/cx";

export function EngagementTiers() {
  const ref = useRef<HTMLDivElement>(null);
  const progress = useSectionProgress(ref, 1);

  return (
    <div ref={ref} className="relative">
      <div className="shell relative hidden pb-4 pt-6 lg:block">
        <svg
          className="h-8 w-full"
          viewBox="0 0 1000 32"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <line
            x1="40"
            y1="16"
            x2="960"
            y2="16"
            stroke="currentColor"
            className="text-line"
            strokeWidth="1"
          />
          <line
            x1="40"
            y1="16"
            x2="960"
            y2="16"
            stroke="#b08f5c"
            strokeWidth="2"
            strokeDasharray="920"
            strokeDashoffset={920 - 920 * progress}
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="grid gap-0 lg:grid-cols-3">
        {tiers.map((tier, index) => {
          const deepest = index === 2;
          const density = 0.25 + index * 0.28 + progress * 0.2;
          return (
            <article
              key={tier.index}
              className={cx(
                "relative overflow-hidden border-t px-[var(--spacing-gutter)] py-12 md:py-16 lg:border-t-0 lg:py-16",
                index > 0 && "lg:border-l",
                deepest
                  ? "border-line bg-ink text-on-ink lg:border-line-on-ink"
                  : "border-line bg-transparent text-ink",
              )}
            >
              {deepest ? (
                <div className="pointer-events-none absolute inset-0 opacity-70">
                  <SystemField progress={Math.min(1, density)} tone="ink" />
                </div>
              ) : (
                <div className="pointer-events-none absolute inset-0 opacity-40">
                  <SystemField progress={density} tone="paper" />
                </div>
              )}
              <div className="relative z-10">
                <p
                  className={cx(
                    "display text-display-sm",
                    deepest ? "text-accent-soft" : "text-accent",
                  )}
                >
                  {tier.index}
                </p>
                <p className={cx("kicker mt-6", deepest && "text-on-ink-muted")}>
                  {tier.stage}
                </p>
                <h3 className="display mt-3 text-title">{tier.name}</h3>
                <p
                  className={cx(
                    "mt-5 max-w-md text-[1.0625rem] leading-relaxed",
                    deepest ? "text-on-ink-muted" : "text-muted",
                  )}
                >
                  {tier.summary}
                </p>
                <p
                  className={cx(
                    "mt-8 max-w-md text-sm leading-relaxed",
                    deepest ? "text-on-ink-muted" : "text-faint",
                  )}
                >
                  <span
                    className={cx(
                      "kicker mb-2 block",
                      deepest && "text-on-ink-muted",
                    )}
                  >
                    Best for
                  </span>
                  {tier.bestFor}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
