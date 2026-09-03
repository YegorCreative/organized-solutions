import { tiers } from "@/content/site";
import { cx } from "@/lib/cx";

export function EngagementTiers() {
  return (
    <div className="relative">
      <div className="shell">
        <div className="relative">
          <span
            className="absolute top-3 -bottom-10 left-[0.7rem] hidden w-px bg-accent/80 md:block"
            aria-hidden="true"
          />

          {tiers.map((tier, index) => {
            const last = index === tiers.length - 1;
            const execute = index === 2;

            return (
              <article
                key={tier.index}
                className={cx(
                  "relative grid gap-6 py-12 md:grid-cols-12 md:gap-8 md:py-16",
                  execute && "bg-ink px-[var(--spacing-gutter)] text-on-ink md:-mx-[var(--spacing-gutter)] md:px-[var(--spacing-gutter)]",
                  last && "pb-4",
                )}
              >
                <div className="md:col-span-3">
                  <p
                    className={cx(
                      "display text-display-sm",
                      execute ? "text-accent-soft" : "text-accent",
                    )}
                  >
                    {tier.index}
                  </p>
                  <p className={cx("kicker mt-4", execute && "text-on-ink-muted")}>
                    {tier.stage}
                  </p>
                </div>
                <div className="md:col-span-8 md:col-start-5">
                  <h3 className="display text-title">{tier.name}</h3>
                  <p
                    className={cx(
                      "measure mt-5 text-[1.0625rem] leading-relaxed",
                      execute ? "text-on-ink-muted" : "text-muted",
                    )}
                  >
                    {tier.summary}
                  </p>
                  <p
                    className={cx(
                      "mt-8 max-w-md text-sm leading-relaxed",
                      execute ? "text-on-ink-muted" : "text-faint",
                    )}
                  >
                    <span className={cx("kicker mb-2 block", execute && "text-on-ink-muted")}>
                      Best for
                    </span>
                    {tier.bestFor}
                  </p>
                  {last ? (
                    <p className="mt-10 max-w-md text-sm text-faint">
                      The work does not have to end when the first systems are in
                      place.
                    </p>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
