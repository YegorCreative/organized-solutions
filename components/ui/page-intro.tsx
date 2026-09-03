import { FrameImage } from "@/components/visual/frame-image";
import { cx } from "@/lib/cx";

type Tone = "ink" | "stone" | "canvas" | "moss" | "clay" | "slate";

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
  const dark = tone === "ink" || tone === "moss" || tone === "clay" || tone === "slate";

  return (
    <header
      className={cx(
        "relative overflow-hidden",
        tone === "ink" && "bg-ink text-on-ink",
        tone === "moss" && "bg-moss text-on-ink",
        tone === "clay" && "bg-clay text-on-ink",
        tone === "slate" && "bg-slate text-on-ink",
        tone === "stone" && "bg-stone text-ink",
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
              tone === "moss" && "bg-gradient-to-r from-moss/85 via-moss/60 to-moss/20",
              tone === "clay" && "bg-gradient-to-r from-clay/85 via-clay/55 to-clay/25",
              tone === "slate" && "bg-gradient-to-r from-slate/88 via-slate/60 to-slate/25",
              tone === "ink" && "bg-gradient-to-r from-ink/85 via-ink/55 to-ink/20",
              tone === "stone" && "bg-gradient-to-r from-stone via-stone/80 to-stone/30",
              tone === "canvas" && "bg-gradient-to-r from-canvas via-canvas/80 to-canvas/35",
            )}
          />
        </div>
      ) : null}
      <div className="shell relative z-10 py-20 md:py-28">
        <p className={cx("kicker", dark && "text-copper")}>{eyebrow}</p>
        <h1
          className={cx(
            "display mt-5 max-w-4xl text-display-sm",
            dark ? "text-on-ink" : "text-ink",
          )}
        >
          {title}
        </h1>
        <div
          className={cx(
            "draw-rule mt-8 h-px w-40",
            dark ? "bg-copper" : "bg-moss/40",
          )}
        />
        <p
          className={cx(
            "measure-wide mt-8 text-lead",
            dark ? "text-on-ink" : "text-muted",
          )}
        >
          {lede}
        </p>
      </div>
    </header>
  );
}
