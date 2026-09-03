import { cx } from "@/lib/cx";

/**
 * A continuing path.
 * Meaning: process, execution, and partnership that do not stop at the edge of a section.
 */
export function FlowPath({
  className,
  vertical = false,
}: {
  className?: string;
  vertical?: boolean;
}) {
  if (vertical) {
    return (
      <span
        aria-hidden="true"
        className={cx(
          "pointer-events-none absolute w-px origin-top bg-navy path-extend-y",
          className,
        )}
      />
    );
  }

  return (
    <span
      aria-hidden="true"
      className={cx(
        "pointer-events-none absolute h-px origin-left bg-navy path-extend",
        className,
      )}
    />
  );
}
