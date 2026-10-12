import { fields } from "@/lib/home";

const samples: Record<(typeof fields)[number], string> = {
  Supplier: "Sample Supplier Co.",
  "Invoice number": "INV-0000",
  Date: "01 Jan 2026",
  "Line items": "Sample items",
  Tax: "40.00",
  Total: "1,240.00",
  "Duplicate check": "Not a duplicate",
};

export function Reads() {
  return (
    <section id="reads" className="scroll-mt-20 px-5 py-20 md:py-28" aria-labelledby="reads-heading">
      <div className="mx-auto grid max-w-content items-center gap-10 lg:grid-cols-2">
        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
            What Snapit reads
          </p>
          <h2 id="reads-heading" className="mt-3 text-4xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
            Every detail, read and checked.
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-muted">
            Snapit reads those fields from a photo or PDF, checks what is already posted, and posts
            the bill with the original document.
          </p>
          <p className="mt-6 flex max-w-none items-start gap-3 rounded-[20px] border border-accent/30 bg-accent-fill/20 px-4 py-4 text-base leading-relaxed text-ink">
            <span aria-hidden="true" className="mt-0.5 font-semibold text-accent">
              ✓
            </span>
            Checked against what is already posted, so it does not go in twice.
          </p>
        </div>
        <div className="min-w-0 rounded-[28px] border border-ink/10 bg-white p-5 shadow-sm sm:p-6">
          <div className="flex items-center justify-between gap-3">
            <h3 className="text-lg font-semibold text-ink">Sample invoice</h3>
            <span className="rounded-full bg-page px-2.5 py-1 text-xs font-semibold text-muted">
              Sample
            </span>
          </div>
          <dl className="mt-2">
            {fields.map((field) => (
              <div
                key={field}
                className="flex items-baseline justify-between gap-4 border-b border-ink/10 py-3 last:border-b-0"
              >
                <dt className="text-sm text-muted">{field}</dt>
                <dd
                  aria-hidden="true"
                  className={`text-right text-sm font-semibold ${field === "Total" ? "text-accent" : "text-ink"}`}
                >
                  {samples[field]}
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 text-xs text-muted">Sample figures for illustration.</p>
        </div>
      </div>
    </section>
  );
}
