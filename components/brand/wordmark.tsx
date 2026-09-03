import Link from "next/link";
import { company } from "@/content/site";
import { cx } from "@/lib/cx";

export function Mark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cx(
        "inline-block size-[0.85rem] shrink-0 border border-ink",
        "relative",
        className,
      )}
    >
      <span className="absolute inset-x-[2px] bottom-[3px] h-px bg-accent" />
    </span>
  );
}

export function Wordmark({
  className,
  onInk = false,
}: {
  className?: string;
  onInk?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cx(
        "inline-flex items-center gap-2.5 no-underline",
        onInk ? "text-on-ink" : "text-ink",
        className,
      )}
    >
      <Mark className={onInk ? "border-on-ink" : undefined} />
      <span className="text-[0.95rem] font-medium tracking-[0.01em]">
        {company.name}
      </span>
    </Link>
  );
}
