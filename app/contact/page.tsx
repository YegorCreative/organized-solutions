import { ContactForm } from "@/components/contact/contact-form";
import { PageIntro } from "@/components/ui/page-intro";
import { contactPage } from "@/content/copy";
import { company } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Start a conversation with Organized Solutions. Tell us what you are seeing in the organization. We will listen first.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageIntro
        tone="blush"
        image={{ src: "/media/table.jpg", alt: "A round pale table by a window, an open notebook, and a blush chair" }}
        eyebrow={contactPage.eyebrow}
        title={contactPage.title}
        lede={contactPage.lede}
      />
      <section className="bg-canvas py-section-tight pb-section">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <ContactForm />
          </div>
          <aside className="lg:col-span-4 lg:col-start-9">
            <p className="kicker">A note on this conversation</p>
            <p className="mt-5 text-muted">
              There is no intake quiz and no automated proposal. If the work
              appears to be a fit, we will say so. If it does not, we will say
              that too.
            </p>
            <ul className="mt-10 border-t border-line">
              {company.promises.map((promise) => (
                <li
                  key={promise}
                  className="border-b border-line py-4 text-[1.05rem] text-ink"
                >
                  {promise}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  );
}
