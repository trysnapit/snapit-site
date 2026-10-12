import Link from "next/link";
import { steps } from "@/lib/home";

const labels = ["Snap", "Read", "Post", "Reply"] as const;

export function HowItWorks() {
  return (
    <section className="px-5 py-20 md:py-28">
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
        <ol className="mt-10 grid gap-8 rounded-[28px] border border-ink/10 bg-white p-6 sm:p-8 lg:grid-cols-3">
          {steps.map((step, index) => (
            <li key={step} className="min-w-0">
              <div className="flex items-center gap-3">
                <span
                  className={`grid size-8 shrink-0 place-items-center rounded-full text-sm font-semibold ${
                    index === steps.length - 1
                      ? "bg-accent-fill text-ink"
                      : "border border-accent text-accent"
                  }`}
                >
                  {index === steps.length - 1 ? "✓" : index + 1}
                </span>
                {index < 2 ? <span className="hidden h-px flex-1 bg-accent/30 lg:block" /> : null}
              </div>
              <h3 className="mt-4 text-xl font-semibold text-ink">{labels[index]}</h3>
              <p className="mt-2 text-base leading-relaxed text-muted">{step}</p>
            </li>
          ))}
        </ol>
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
