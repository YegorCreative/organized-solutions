import { cx } from "@/lib/cx";

/**
 * Interval marks.
 * Meaning: looking closely, measuring what is actually there, diagnosis.
 */
export function MeasureMarks({
  className,
  tone = "blue",
}: {
  className?: string;
  tone?: "blue" | "on-blue";
}) {
  const stroke = tone === "on-blue" ? "var(--color-blush)" : "var(--color-blue)";

  return (
    <svg
      className={cx("measure-rail pointer-events-none", className)}
      viewBox="0 0 240 24"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <line
        className="draw-line"
        x1="0"
        y1="16"
        x2="240"
        y2="16"
        stroke={stroke}
        strokeWidth="1"
        pathLength="1"
      />
      {[0, 24, 48, 72, 96, 120, 144, 168, 192, 216, 240].map((x, index) => (
        <line
          key={x}
          x1={x}
          y1={index % 2 === 0 ? 4 : 8}
          x2={x}
          y2="16"
          stroke={stroke}
          strokeWidth="1"
          opacity={index % 5 === 0 ? 1 : 0.45}
        />
      ))}
    </svg>
  );
}
