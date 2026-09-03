import { PageIntro } from "@/components/ui/page-intro";
import { privacyPage } from "@/content/copy";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Privacy",
  description:
    "How Organized Solutions handles information on this website.",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageIntro
        eyebrow={privacyPage.eyebrow}
        title={privacyPage.title}
        lede={privacyPage.lede}
      />
      <section className="bg-canvas pb-section">
        <div className="shell">
          <p className="kicker py-8">Updated {privacyPage.updated}</p>
          {privacyPage.sections.map((section) => (
            <article
              key={section.title}
              className="grid gap-4 border-t border-line py-10 md:grid-cols-12 md:py-12"
            >
              <h2 className="display text-title text-ink md:col-span-4">
                {section.title}
              </h2>
              <p className="measure text-lead text-muted md:col-span-7 md:col-start-6">
                {section.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
