import { Lattice } from "@/components/visual/lattice";
import { SystemField } from "@/components/visual/system-field";
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
    <header
      className={cx(
        "grain relative -mt-[4.5rem] overflow-hidden bg-ink pt-[4.5rem] text-on-ink",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-50">
        <Lattice tone="ink" />
      </div>
      <div className="pointer-events-none absolute inset-[-6%] opacity-80">
        <SystemField progress={0.84} tone="ink" />
      </div>
      <div className="shell relative z-10 py-20 md:py-28">
        <p className="kicker text-accent">{eyebrow}</p>
        <h1 className="display mt-5 max-w-4xl text-display-sm text-on-ink">
          {title}
        </h1>
        <p className="measure-wide mt-6 text-lead text-on-ink-muted">{lede}</p>
      </div>
    </header>
  );
}
