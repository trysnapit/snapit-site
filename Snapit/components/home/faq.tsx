import { JsonLd } from "@/components/json-ld";
import { faqPageSchema, faqs } from "@/lib/faq";

export function Faq() {
  return (
    <section id="questions" className="scroll-mt-20 px-5 py-20 md:py-28" aria-labelledby="questions-heading">
      <div className="mx-auto max-w-content">
        <h2
          id="questions-heading"
          className="max-w-3xl text-4xl font-semibold tracking-tight text-balance text-ink sm:text-5xl"
        >
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
