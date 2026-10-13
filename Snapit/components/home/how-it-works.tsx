import Link from "next/link";
import { JsonLd } from "@/components/json-ld";
import { StepFlow } from "@/components/home/step-flow";
import { steps } from "@/lib/home";
import { howToSchema } from "@/lib/schema";

export function HowItWorks() {
  return (
    <section className="px-5 py-20 md:py-28" aria-labelledby="how-it-works">
      <div className="mx-auto max-w-content">
        <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">See it work</p>
        <h2
          id="how-it-works"
          className="mt-3 max-w-4xl scroll-mt-20 text-4xl font-semibold tracking-tight text-balance text-ink sm:text-5xl"
        >
          One WhatsApp message. One posted bill.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          A photo or PDF on WhatsApp becomes a posted bill, and the chat replies with the total.
        </p>
        <StepFlow steps={steps} />
        <JsonLd data={howToSchema()} />
        <p className="mt-8">
          <Link
            href="/blog/one-whatsapp-message"
            className="inline-flex min-h-11 items-center font-semibold text-accent"
          >
            What happens after one WhatsApp message
          </Link>
        </p>
      </div>
    </section>
  );
}
