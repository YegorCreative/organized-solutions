import { cx } from "@/lib/cx";

export function PageIntro({
  eyebrow,
  title,
  lede,
  className,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  className?: string;
}) {
  return (
    <header className={cx("shell pt-section-tight pb-section-tight", className)}>
      <p className="kicker">{eyebrow}</p>
      <h1 className="display mt-5 max-w-4xl text-display-sm text-ink">{title}</h1>
      <p className="measure-wide mt-6 text-lead text-muted">{lede}</p>
    </header>
  );
}
