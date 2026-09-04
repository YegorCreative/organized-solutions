import { Arrow } from "@/components/brand/arrow";
import { PageIntro } from "@/components/ui/page-intro";
import { contactPage } from "@/content/copy";
import { company, inquiryMailto } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: "Contact",
  description:
    "Start a conversation with Organized Solutions. Email us about the operational challenges or support you are looking for.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageIntro
        tone="champagne"
        image={{ src: "/media/table.jpg", alt: "A round pale table by a window, an open notebook, and a blush chair" }}
        eyebrow={contactPage.eyebrow}
        title={contactPage.title}
        lede={contactPage.lede}
      />
      <section className="relative overflow-hidden bg-canvas py-section">
        <div className="art-back">
          <div
            aria-hidden="true"
            className="parallax-counter pointer-events-none absolute top-10 right-[6%] h-32 w-[20%] bg-stone"
          >
            <span className="gold-edge gold-edge-left" />
          </div>
        </div>
        <div className="shell content-front grid gap-16 lg:grid-cols-12">
          <div className="relative bg-canvas lg:col-span-6">
            <a href={inquiryMailto.href} className="cta cta-primary w-full max-w-[22rem] sm:w-auto">
              <span>{contactPage.cta}</span>
              <Arrow className="cta-arrow" />
            </a>
            <p className="kicker mt-12">{contactPage.emailKicker}</p>
            <a
              href={inquiryMailto.href}
              className="nav-link mt-3 inline-block w-fit max-w-full break-all text-[1.05rem] text-ink"
            >
              {company.email}
            </a>
          </div>
          <aside className="relative bg-canvas lg:col-span-4 lg:col-start-9">
            <p className="kicker">{contactPage.noteKicker}</p>
            <p className="mt-5 text-muted">{contactPage.note}</p>
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
