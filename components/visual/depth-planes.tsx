import { cx } from "@/lib/cx";

/**
 * Original dimensional planes.
 * Meaning: operational layers — structure, partnership, elevation —
 * overlapping until their edges catch the light and come into alignment.
 *
 * Inspired by the visual character of the official mark (deep navy,
 * champagne, illuminated gold edges) without reproducing the logo
 * or any third-party artwork.
 */
export function DepthPlanes({
  variant = "moment",
  className,
}: {
  variant?: "hero" | "moment" | "intro";
  className?: string;
}) {
  if (variant === "hero") {
    return (
      <div
        aria-hidden="true"
        className={cx(
          "pointer-events-none absolute inset-0 overflow-hidden",
          className,
        )}
      >
        <span className="hero-align-a align-plane top-[18%] left-[-4%] hidden h-[58%] w-[28%] bg-navy-deep/45 lg:block">
          <span className="gold-edge gold-edge-right" />
        </span>
        <span className="hero-align-b align-plane top-[10%] right-[8%] h-[36%] w-[24%] bg-stone/35">
          <span className="gold-edge gold-edge-left hidden lg:block" />
        </span>
        <span className="hero-align-c align-plane bottom-[12%] left-[28%] hidden h-[22%] w-[18%] bg-champagne/40 lg:block">
          <span className="gold-edge gold-edge-top" />
        </span>
        <span className="parallax-fast gold-sheen absolute top-[22%] right-[46%] hidden h-[40%] w-[2px] lg:block" />
      </div>
    );
  }

  if (variant === "intro") {
    return (
      <div
        aria-hidden="true"
        className={cx(
          "pointer-events-none absolute inset-0 overflow-hidden",
          className,
        )}
      >
        <span className="align-plane parallax-slow top-[12%] right-[6%] h-[48%] w-[18%] bg-navy/12">
          <span className="gold-edge gold-edge-left" />
        </span>
        <span className="align-plane parallax-counter bottom-0 left-[10%] h-16 w-[30%] bg-champagne/50" />
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className={cx(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <span className="align-a align-plane top-[6%] left-[-8%] h-[78%] w-[38%] bg-navy-deep/72 md:w-[32%]">
        <span className="gold-edge gold-edge-right" />
      </span>
      <span className="align-b align-plane top-[16%] right-[-6%] h-[54%] w-[34%] bg-navy/40 md:w-[28%]">
        <span className="gold-edge gold-edge-left hidden md:block" />
      </span>
      <span className="align-c align-plane bottom-[8%] left-[18%] h-[32%] w-[46%] bg-champagne/50 md:left-[28%] md:w-[32%]">
        <span className="gold-edge gold-edge-top" />
      </span>
      <span className="align-d align-plane top-[28%] left-[40%] hidden h-[44%] w-[20%] bg-stone/40 lg:block">
        <span className="gold-edge gold-edge-left" />
      </span>
      <span className="parallax-mid gold-sheen absolute top-[12%] left-[34%] hidden h-[62%] w-[2px] md:block" />
      <span className="parallax-x gold-sheen absolute top-[42%] left-[8%] h-[2px] w-[42%] md:left-[18%] md:w-[28%]" />
    </div>
  );
}
