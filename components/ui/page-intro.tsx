import { FrameImage } from "@/components/visual/frame-image";
import { cx } from "@/lib/cx";

type Tone = "blue" | "lavender" | "blush" | "canvas";

export function PageIntro({
  eyebrow,
  title,
  lede,
  tone = "canvas",
  image,
  className,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  tone?: Tone;
  image?: { src: string; alt: string };
  className?: string;
}) {
  const onBlue = tone === "blue";

  return (
    <header
      className={cx(
        "relative overflow-hidden",
        tone === "blue" && "bg-blue text-on-blue",
        tone === "lavender" && "bg-lavender text-ink",
        tone === "blush" && "bg-blush text-ink",
        tone === "canvas" && "bg-canvas text-ink",
        className,
      )}
    >
      {image ? (
        <div className="absolute inset-0">
          <FrameImage
            src={image.src}
            alt={image.alt}
            speed="slow"
            className="h-full w-full"
            priority
          />
          <div
            className={cx(
              "absolute inset-0",
              tone === "blue" &&
                "bg-gradient-to-r from-blue-deep/90 via-blue/60 to-lavender/25",
              tone === "lavender" &&
                "bg-gradient-to-r from-lavender via-lavender/75 to-blue/20",
              tone === "blush" &&
                "bg-gradient-to-r from-blush via-blush/80 to-lavender/30",
              tone === "canvas" &&
                "bg-gradient-to-r from-canvas via-canvas/80 to-blush/35",
            )}
          />
        </div>
      ) : null}
      <div
        aria-hidden="true"
        className="parallax-color pointer-events-none absolute -right-[8%] top-[10%] h-48 w-48 rounded-full bg-blush/40 blur-3xl"
      />
      <div className="shell relative z-10 py-20 md:py-28">
        <p className={cx("kicker", onBlue ? "text-blush" : "text-blue")}>
          {eyebrow}
        </p>
        <h1
          className={cx(
            "display mt-5 max-w-4xl text-display-sm",
            onBlue ? "text-on-blue" : "text-ink",
          )}
        >
          {title}
        </h1>
        <div
          className={cx(
            "draw-rule mt-8 h-px w-40",
            onBlue ? "bg-blush" : "bg-blue/50",
          )}
        />
        <p
          className={cx(
            "measure-wide mt-8 text-lead",
            onBlue ? "text-on-blue" : "text-muted",
          )}
        >
          {lede}
        </p>
      </div>
    </header>
  );
}
