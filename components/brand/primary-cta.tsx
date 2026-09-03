import Link from "next/link";
import { Arrow } from "@/components/brand/arrow";
import { cta } from "@/content/site";
import { cx } from "@/lib/cx";

type Variant = "header" | "primary" | "on-field";

export function PrimaryCta({
  variant = "primary",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  if (variant === "header") {
    return (
      <Link href={cta.href} className={cx("cta-header", className)}>
        <span>{cta.label}</span>
        <Arrow className="cta-arrow" />
      </Link>
    );
  }

  return (
    <Link
      href={cta.href}
      className={cx(
        "cta",
        variant === "on-field" ? "cta-on-field" : "cta-primary",
        className,
      )}
    >
      <span>{cta.label}</span>
      <Arrow className="cta-arrow" />
    </Link>
  );
}
