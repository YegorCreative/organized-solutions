import Image from "next/image";
import Link from "next/link";
import { lockup } from "@/content/brand";
import { company } from "@/content/site";
import { cx } from "@/lib/cx";
import { withBasePath } from "@/lib/site-url";

type Size = "nav" | "footer" | "feature";

/**
 * Explicit boxes from the lockup ratio 1421×748, so the raster
 * cannot expand to its intrinsic width and overflow the header.
 */
const sizeClass: Record<Size, string> = {
  nav: "h-[3rem] w-[5.7rem] md:h-[3.35rem] md:w-[6.36rem]",
  footer: "h-[3.85rem] w-[7.32rem] md:h-[4.6rem] md:w-[8.74rem]",
  feature: "h-[5.25rem] w-[10rem] md:h-[6.75rem] md:w-[12.82rem]",
};

export function BrandLogo({
  className,
  size = "nav",
  priority = false,
}: {
  className?: string;
  size?: Size;
  priority?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cx("inline-flex shrink-0 items-center no-underline", className)}
      aria-label={`${company.name} home`}
    >
      <span className={cx("relative block overflow-hidden", sizeClass[size])}>
        <Image
          src={withBasePath(lockup.src)}
          alt=""
          fill
          className="object-contain object-left"
          sizes="(min-width: 768px) 132px, 87px"
          priority={priority}
        />
      </span>
    </Link>
  );
}
