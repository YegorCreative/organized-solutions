import Link from "next/link";
import { company } from "@/content/site";
import { cx } from "@/lib/cx";

export function Mark({
  className,
  onField = false,
}: {
  className?: string;
  onField?: boolean;
}) {
  return (
    <span
      aria-hidden="true"
      className={cx(
        "inline-block size-[0.85rem] shrink-0 border relative",
        onField ? "border-on-blue" : "border-ink",
        className,
      )}
    >
      <span
        className={cx(
          "absolute inset-x-[2px] bottom-[3px] h-px",
          onField ? "bg-blush" : "bg-blue",
        )}
      />
    </span>
  );
}

export function Wordmark({
  className,
  onField = false,
}: {
  className?: string;
  onField?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cx(
        "inline-flex items-center gap-2.5 no-underline",
        onField ? "text-on-blue" : "text-ink",
        className,
      )}
    >
      <Mark onField={onField} />
      <span className="text-[0.95rem] font-medium tracking-[0.01em]">
        {company.name}
      </span>
    </Link>
  );
}
