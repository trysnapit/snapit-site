import { Change } from "@/components/home/change";
import { Costs } from "@/components/home/costs";
import { Hero } from "@/components/home/hero";
import { HowItWorks } from "@/components/home/how-it-works";
import { Problem } from "@/components/home/problem";
import { Reads } from "@/components/home/reads";
import { TwoViews } from "@/components/home/two-views";

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
    </>
  );
}
