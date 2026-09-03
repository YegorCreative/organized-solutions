import { cx } from "@/lib/cx";

/**
 * Architectural color planes.
 * Meaning: operational elements moving from irregular positions into alignment.
 * Not decorative blobs — measured rectangles that resolve as you scroll.
 */
export function AlignmentPlanes({
  variant = "resolve",
  className,
}: {
  variant?: "hero" | "resolve";
  className?: string;
}) {
  const hero = variant === "hero";

  return (
    <div
      aria-hidden="true"
      className={cx("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <span
        className={cx(
          "align-plane bg-navy/20",
          hero
            ? "hero-align-a top-[12%] left-[4%] hidden h-[42%] w-[22%] lg:block"
            : "align-a top-[10%] left-[6%] h-[46%] w-[34%]",
        )}
      >
        {hero ? null : <span className="gold-edge gold-edge-right" />}
      </span>
      <span
        className={cx(
          "align-plane bg-stone/55",
          hero
            ? "hero-align-b top-[16%] right-[6%] h-[40%] w-[30%]"
            : "align-b top-[18%] right-[8%] h-[38%] w-[28%]",
        )}
      >
        <span className="gold-edge gold-edge-left" />
      </span>
      <span
        className={cx(
          "align-plane bg-champagne/55",
          hero
            ? "hero-align-c bottom-[14%] right-[36%] hidden h-[24%] w-[16%] lg:block"
            : "align-c bottom-[12%] left-[22%] h-[22%] w-[40%]",
        )}
      >
        <span className="gold-edge gold-edge-top" />
      </span>
      {hero ? null : (
        <span className="align-plane align-d top-[28%] left-[42%] h-[44%] w-[18%] border border-accent/70 bg-transparent" />
      )}
    </div>
  );
}
