import { cx } from "@/lib/cx";

type Tone = "ink" | "stone" | "canvas";

export function PageIntro({
  eyebrow,
  title,
  lede,
  tone = "canvas",
  className,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  tone?: Tone;
  className?: string;
}) {
  const dark = tone === "ink";

  return (
    <header
      className={cx(
        "relative overflow-hidden pt-section-tight pb-section-tight",
        tone === "ink" && "bg-ink text-on-ink",
        tone === "stone" && "bg-stone text-ink",
        tone === "canvas" && "bg-canvas text-ink",
        className,
      )}
    >
      <div className="shell">
        <p className={cx("kicker", dark && "text-accent-soft")}>{eyebrow}</p>
        <h1
          className={cx(
            "display mt-5 max-w-4xl text-display-sm",
            dark ? "text-on-ink" : "text-ink",
          )}
        >
          {title}
        </h1>
        <div
          className={cx(
            "draw-rule mt-8 h-px w-40",
            dark ? "bg-accent" : "bg-ink/20",
          )}
        />
        <p
          className={cx(
            "measure-wide mt-8 text-lead",
            dark ? "text-on-ink-muted" : "text-muted",
          )}
        >
          {lede}
        </p>
      </div>
    </header>
  );
}
