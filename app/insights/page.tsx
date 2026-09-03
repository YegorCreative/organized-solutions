import { PageIntro } from "@/components/ui/page-intro";
import { FrameImage } from "@/components/visual/frame-image";
import { insightsPage } from "@/content/copy";
import { media } from "@/content/media";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Insights",
  description:
    "Writing from Organized Solutions on operations, leadership, and systems that last. The archive is prepared; essays will appear when they are ready.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <PageIntro
        tone="canvas"
        image={{ src: "/media/library.jpg", alt: "A quiet reading corner with pale shelves and a linen chair" }}
        eyebrow={insightsPage.eyebrow}
        title={insightsPage.title}
        lede={insightsPage.lede}
      />
      <section className="bg-blush py-section">
        <div className="shell grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="kicker">Archive</p>
            <p className="display mt-6 max-w-3xl text-display-sm text-ink">
              {insightsPage.empty}
            </p>
          </div>
          <div className="lg:col-span-5">
            <FrameImage
              src={media.library.src}
              alt={media.library.alt}
              speed="slow"
              className="aspect-[3/4] w-full"
            />
          </div>
        </div>
      </section>
    </>
  );
}
