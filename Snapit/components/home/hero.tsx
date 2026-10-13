import { trySnapit } from "@/lib/nav";

const actionClass =
  "nudge inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-semibold";

const rows = [
  ["Supplier", "Sample Supplier Co."],
  ["Invoice number", "INV-0000"],
  ["Total", "1,240.00"],
] as const;

export function Hero() {
  return (
    <section className="px-5 pb-8 pt-16 md:pt-24">
      <div className="mx-auto max-w-content text-center">
        <p className="rise mx-auto text-xs font-semibold tracking-[0.16em] text-accent uppercase">
          WhatsApp in. Invoice booked.
        </p>
        <h1 className="rise delay-1 mx-auto mt-4 max-w-4xl text-5xl font-semibold tracking-tight text-balance text-ink sm:text-7xl">
          WhatsApp it. It’s in your books.
        </h1>
        <p className="rise delay-2 mx-auto mt-5 text-lg leading-relaxed text-muted">
          Invoices go to the accounting system automatically.
        </p>
        <div className="rise delay-3 mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <a href={trySnapit.href} className={`${actionClass} bg-accent-fill text-ink`}>
            {trySnapit.label}
          </a>
          <a href="#how-it-works" className={`${actionClass} border border-ink/15 text-ink`}>
            See how it works
          </a>
        </div>
        <figure className="rise delay-4 mx-auto mt-14 max-w-5xl rounded-[28px] border border-ink/10 bg-white p-3 text-left shadow-sm sm:p-5">
          <div aria-hidden="true">
          <div className="flex gap-1.5 px-2 pt-1">
            <span className="size-2 rounded-full bg-ink/15" />
            <span className="size-2 rounded-full bg-ink/15" />
            <span className="size-2 rounded-full bg-ink/15" />
          </div>
          <div className="mt-4 grid gap-3 lg:grid-cols-2">
            <div className="min-w-0 rounded-[20px] bg-page p-4">
              <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                In · WhatsApp
              </p>
              <div className="mt-4 rounded-[18px] rounded-br-md bg-accent-fill/25 p-3">
                <div className="rounded-xl bg-white p-4">
                  <p className="text-sm font-semibold text-ink">Sample invoice</p>
                  <div className="mt-3 space-y-2" aria-hidden="true">
                    <div className="h-2 rounded-full bg-ink/10" />
                    <div className="h-2 w-4/5 rounded-full bg-ink/10" />
                    <div className="h-2 w-2/3 rounded-full bg-ink/10" />
                  </div>
                </div>
                <p className="mt-3 text-sm text-muted">Invoice photo sent</p>
              </div>
              <p className="mt-3 rounded-[18px] rounded-bl-md bg-white px-4 py-3 text-sm text-ink">
                Booked. Total: 1,240.00 (sample)
              </p>
            </div>
            <div className="min-w-0 rounded-[20px] border border-ink/10 bg-white p-4">
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
                  Out · Booked bill
                </p>
                <span className="rounded-full bg-accent-fill/40 px-2.5 py-1 text-xs font-semibold text-ink">
                  Posted
                </span>
              </div>
              <dl className="mt-4">
                {rows.map(([label, value]) => (
                  <div
                    key={label}
                    className="flex items-baseline justify-between gap-4 border-b border-ink/10 py-3"
                  >
                    <dt className="text-sm text-muted">{label}</dt>
                    <dd className={`text-right text-sm font-semibold ${label === "Total" ? "text-accent" : "text-ink"}`}>
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          </div>
          <figcaption className="mt-3 text-center text-xs text-muted">
            Sample figures for illustration. Not a customer invoice.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
