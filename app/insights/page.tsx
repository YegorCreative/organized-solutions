import { PageIntro } from "@/components/ui/page-intro";
import { insightsPage } from "@/content/copy";
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
        eyebrow={insightsPage.eyebrow}
        title={insightsPage.title}
        lede={insightsPage.lede}
      />
      <section className="bg-stone py-section">
        <div className="shell">
          <div className="border-t border-b border-line py-16 md:py-24">
            <p className="kicker">Archive</p>
            <p className="display mt-6 max-w-3xl text-display-sm text-ink">
              {insightsPage.empty}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
