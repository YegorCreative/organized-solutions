import Image from "next/image";
import { cx } from "@/lib/cx";
import { withBasePath } from "@/lib/site-url";

type Speed = "slow" | "mid" | "counter" | "none";

export function FrameImage({
  src,
  alt,
  speed = "mid",
  className,
  imgClassName,
  priority = false,
}: {
  src: string;
  alt: string;
  speed?: Speed;
  className?: string;
  imgClassName?: string;
  priority?: boolean;
}) {
  return (
    <div className={cx("photo-grade relative overflow-hidden", className)}>
      <Image
        src={withBasePath(src)}
        alt={alt}
        fill
        priority={priority}
        sizes="(max-width: 768px) 100vw, 70vw"
        className={cx(
          "object-cover",
          speed === "slow" && "parallax-media-slow",
          speed === "mid" && "parallax-media-mid",
          speed === "counter" && "parallax-media-counter",
          speed === "none" && "scale-[1.04]",
          imgClassName,
        )}
      />
    </div>
  );
}
