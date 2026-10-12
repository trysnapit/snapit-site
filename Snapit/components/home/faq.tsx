import { JsonLd } from "@/components/json-ld";
import { faqPageSchema, faqs } from "@/lib/faq";

export function Faq() {
  return (
    <section className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-content">
        <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
          Questions
        </h2>
        <dl className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((faq) => (
            <div key={faq.question} className="min-w-0 py-6">
              <dt className="text-xl font-semibold tracking-tight text-ink">{faq.question}</dt>
              <dd className="mt-2 max-w-measure text-base leading-relaxed text-muted">{faq.answer}</dd>
            </div>
          ))}
        </dl>
      </div>
      <JsonLd data={faqPageSchema()} />
    </section>
  );
}
