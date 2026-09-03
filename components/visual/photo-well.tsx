import { cx } from "@/lib/cx";

/**
 * Architectural plane reserved for approved photography.
 * Do not fill with stock imagery.
 */
export function PhotoWell({
  className,
  caption,
  tone = "stone",
}: {
  className?: string;
  caption?: string;
  tone?: "stone" | "ink" | "canvas";
}) {
  const surface =
    tone === "ink"
      ? "bg-ink-raised"
      : tone === "canvas"
        ? "bg-canvas"
        : "bg-stone";

  return (
    <figure className={cx("relative", className)}>
      <div
        className={cx(
          "relative h-full min-h-[16rem] w-full overflow-hidden",
          surface,
        )}
      >
        <span
          className="absolute left-0 top-0 h-8 w-px bg-accent"
          aria-hidden="true"
        />
        <span
          className="absolute left-0 top-0 h-px w-8 bg-accent"
          aria-hidden="true"
        />
        <span
          className="absolute bottom-0 right-0 h-8 w-px bg-accent/70"
          aria-hidden="true"
        />
        <span
          className="absolute bottom-0 right-0 h-px w-8 bg-accent/70"
          aria-hidden="true"
        />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-[0.7rem] tracking-[0.16em] text-faint uppercase">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
