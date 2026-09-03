import { DepthPlanes } from "@/components/visual/depth-planes";
import { FrameImage } from "@/components/visual/frame-image";
import { cx } from "@/lib/cx";

type Tone = "navy" | "stone" | "champagne" | "canvas";

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
  const onField = tone === "navy";

  return (
    <header
      className={cx(
        "relative overflow-hidden",
        tone === "navy" && "bg-navy-deep text-on-field",
        tone === "stone" && "bg-stone text-ink",
        tone === "champagne" && "bg-champagne text-ink",
        tone === "canvas" && "bg-canvas text-ink",
        className,
      )}
    >
      {image ? (
        <div className="absolute inset-0">
          <FrameImage
            src={image.src}
            alt={image.alt}
            speed="mid"
            className="h-full w-full"
            priority
          />
          <div
            className={cx(
              "absolute inset-0",
              tone === "navy" &&
                "bg-gradient-to-r from-navy-deep/90 via-navy/55 to-champagne/20",
              tone === "stone" &&
                "bg-gradient-to-r from-stone via-stone/80 to-stone/30",
              tone === "champagne" &&
                "bg-gradient-to-r from-champagne via-champagne/80 to-stone/30",
              tone === "canvas" &&
                "bg-gradient-to-r from-canvas via-canvas/80 to-champagne/30",
            )}
          />
        </div>
      ) : null}
      <DepthPlanes variant="intro" />
      <div
        aria-hidden="true"
        className="parallax-fast pointer-events-none absolute top-[18%] right-[8%] h-[42%] w-[16%] bg-champagne/40"
      >
        <span className="gold-edge gold-edge-left" />
      </div>
      <div
        aria-hidden="true"
        className="parallax-counter pointer-events-none absolute bottom-0 left-[12%] h-20 w-[28%] bg-navy/10"
      />
      <div className="shell relative z-10 py-20 md:py-28">
        <p className={cx("kicker", onField ? "text-champagne" : undefined)}>
          {eyebrow}
        </p>
        <h1
          className={cx(
            "display type-drift mt-5 max-w-4xl text-display-sm",
            onField ? "text-on-field" : "text-ink",
          )}
        >
          {title}
        </h1>
        <div
          className={cx(
            "draw-rule mt-8 h-px w-40",
            onField ? "bg-accent" : "bg-accent/80",
          )}
        />
        <p
          className={cx(
            "measure-wide mt-8 text-lead",
            onField ? "text-on-field" : "text-muted",
          )}
        >
          {lede}
        </p>
      </div>
    </header>
  );
}
