import { Complexity } from "@/components/home/complexity";
import { Difference } from "@/components/home/difference";
import { Engagement } from "@/components/home/engagement";
import { Hero } from "@/components/home/hero";
import { Invitation } from "@/components/home/invitation";
import { Philosophy } from "@/components/home/philosophy";
import { PromiseSection } from "@/components/home/promise";
import { Recognition } from "@/components/home/recognition";
import { Solution } from "@/components/home/solution";
import { seo } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";

export const metadata = pageMetadata({
  title: seo.titleDefault,
  description: seo.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <PromiseSection />
      <Complexity />
      <Recognition />
      <Solution />
      <Philosophy />
      <Engagement />
      <Difference />
      <Invitation />
    </>
  );
}
