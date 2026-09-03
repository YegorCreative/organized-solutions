import { PageIntro } from "@/components/ui/page-intro";
import { SystemField } from "@/components/visual/system-field";
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
        eyebrow={insightsPage.eyebrow}
        title={insightsPage.title}
        lede={insightsPage.lede}
      />
      <section className="relative overflow-hidden bg-stone py-section">
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <SystemField progress={1} tone="paper" />
        </div>
        <div className="shell relative z-10">
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
