import { JsonLd } from "@/components/json-ld";
import { faqPageSchema, faqs } from "@/lib/faq";

export function Faq() {
  return (
    <section className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-content">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
          Questions
        </h2>
        <dl className="mt-10 flex max-w-measure flex-col gap-8">
          {faqs.map((faq) => (
            <div key={faq.question} className="min-w-0">
              <dt className="text-xl font-semibold tracking-tight text-ink">{faq.question}</dt>
              <dd className="mt-2 text-base leading-relaxed text-ink">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
      <JsonLd data={faqPageSchema()} />
    </section>
  );
}
