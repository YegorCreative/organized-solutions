import { tiers } from "@/content/site";
import { cx } from "@/lib/cx";

export function EngagementTiers() {
  const [first, second, third] = tiers;

  return (
    <div>
      <div className="shell">
        <TierRow tier={first} />
        <TierRow tier={second} />
      </div>
      <div className="bg-ink text-on-ink">
        <div className="shell">
          <TierRow tier={third} onInk />
        </div>
      </div>
    </div>
  );
}

function TierRow({
  tier,
  onInk = false,
}: {
  tier: (typeof tiers)[number];
  onInk?: boolean;
}) {
  return (
    <article
      className={cx(
        "grid gap-8 py-12 md:grid-cols-12 md:gap-8 md:py-16",
        onInk ? "border-t border-line-on-ink" : "border-t border-line",
      )}
    >
      <p
        className={cx(
          "display text-display-sm md:col-span-3",
          onInk ? "text-accent-soft" : "text-accent",
        )}
      >
        {tier.index}
      </p>
      <div className="md:col-span-8 md:col-start-5">
        <p className={cx("kicker", onInk && "text-on-ink-muted")}>
          {tier.stage}
        </p>
        <h3 className="display mt-3 text-title">{tier.name}</h3>
        <p
          className={cx(
            "measure mt-5 text-[1.0625rem] leading-relaxed",
            onInk ? "text-on-ink-muted" : "text-muted",
          )}
        >
          {tier.summary}
        </p>
        <p
          className={cx(
            "mt-8 max-w-md text-sm leading-relaxed",
            onInk ? "text-on-ink-muted" : "text-faint",
          )}
        >
          <span className={cx("kicker block mb-2", onInk && "text-on-ink-muted")}>
            Best for
          </span>
          {tier.bestFor}
        </p>
      </div>
    </article>
  );
}
