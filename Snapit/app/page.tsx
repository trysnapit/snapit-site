import type { Metadata } from "next";
import { Audience } from "@/components/home/audience";
import { Change } from "@/components/home/change";
import { Close } from "@/components/home/close";
import { Costs } from "@/components/home/costs";
import { DayOne } from "@/components/home/day-one";
import { Faq } from "@/components/home/faq";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { Problem } from "@/components/home/problem";
import { Reads } from "@/components/home/reads";
import { Systems } from "@/components/home/systems";
import { TwoViews } from "@/components/home/two-views";
import { JsonLd } from "@/components/json-ld";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: site.title },
  description: site.description,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Costs />
      <Change />
      <HowItWorks />
      <Reads />
      <TwoViews />
      <Systems />
      <Audience />
      <DayOne />
      <Faq />
      <Close />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: site.name,
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
        }}
      />
    </>
  );
}
