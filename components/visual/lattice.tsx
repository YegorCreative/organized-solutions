import { cx } from "@/lib/cx";

export function Lattice({
  className,
  tone = "ink",
}: {
  className?: string;
  tone?: "ink" | "paper";
}) {
  const stroke = tone === "ink" ? "rgba(255,244,244,0.16)" : "rgba(21,32,60,0.10)";

  return (
    <svg
      className={cx("pointer-events-none h-full w-full", className)}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {Array.from({ length: 13 }, (_, i) => (
        <line
          key={`v-${i}`}
          x1={i * (100 / 12)}
          y1="0"
          x2={i * (100 / 12)}
          y2="100"
          stroke={stroke}
          strokeWidth="0.2"
        />
      ))}
      {Array.from({ length: 9 }, (_, i) => (
        <line
          key={`h-${i}`}
          x1="0"
          y1={i * (100 / 8)}
          x2="100"
          y2={i * (100 / 8)}
          stroke={stroke}
          strokeWidth="0.2"
        />
      ))}
    </svg>
  );
}
