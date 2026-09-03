import Link from "next/link";
import { cta } from "@/content/site";
import { cx } from "@/lib/cx";

type Variant = "header" | "primary" | "on-ink";

const styles: Record<Variant, string> = {
  header:
    "text-[0.9375rem] text-ink no-underline pb-px border-b border-transparent hover:border-accent transition-[border-color] duration-200",
  primary:
    "inline-flex items-center justify-center bg-ink text-canvas no-underline px-7 py-3.5 text-[0.9375rem] tracking-[0.02em] hover:bg-ink-raised transition-colors duration-200",
  "on-ink":
    "inline-flex items-center justify-center bg-canvas text-ink no-underline px-7 py-3.5 text-[0.9375rem] tracking-[0.02em] hover:bg-stone transition-colors duration-200",
};

export function PrimaryCta({
  variant = "primary",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <Link href={cta.href} className={cx(styles[variant], className)}>
      {cta.label}
    </Link>
  );
}
