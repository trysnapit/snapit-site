import { Change } from "@/components/home/change";
import { Costs } from "@/components/home/costs";
import { Hero } from "@/components/home/hero";
import { Problem } from "@/components/home/problem";

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <Costs />
      <Change />
    </>
  );
}
