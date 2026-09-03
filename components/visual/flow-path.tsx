import { cx } from "@/lib/cx";

/**
 * A continuing path.
 * Meaning: process, execution, and partnership that do not stop at the edge of a section.
 */
export function FlowPath({
  className,
  vertical = false,
  tone = "navy",
}: {
  className?: string;
  vertical?: boolean;
  tone?: "navy" | "gold";
}) {
  const color = tone === "gold" ? "bg-accent" : "bg-navy";

  if (vertical) {
    return (
      <span
        aria-hidden="true"
        className={cx(
          "pointer-events-none absolute w-px origin-top path-extend-y",
          color,
          className,
        )}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className={cx(
        "pointer-events-none absolute h-px origin-left path-extend",
        color,
        className,
      )}
    />
  );
}
