import { steps } from "@/lib/home";

export function HowItWorks() {
  return (
    <section className="px-5 py-20 md:py-28">
      <div className="mx-auto grid max-w-content gap-10 md:grid-cols-2 md:items-start">
        <div>
          <h2
            id="how-it-works"
            className="scroll-mt-8 text-3xl font-semibold tracking-tight text-balance text-ink sm:text-5xl"
          >
            One WhatsApp message. One posted bill.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink">
            A photo or PDF on WhatsApp becomes a posted bill, and the chat replies with the total.
          </p>
        </div>
        <ol className="list-decimal space-y-4 pl-6 text-lg leading-relaxed text-ink">
          {steps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </div>
    </section>
  );
}
