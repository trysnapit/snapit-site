import { views } from "@/lib/home";

export function TwoViews() {
  return (
    <section className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-content">
        <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">Built-in checks</p>
        <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
          Every invoice, accounted for.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          The sender gets the total back in the same chat, and the owner sees every branch.
        </p>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          <article className="min-w-0 rounded-[28px] border border-ink/10 bg-white p-6">
            <h3 className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
              {views[0].title}
            </h3>
            <ul className="mt-4 space-y-3 text-lg font-semibold text-ink">
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-accent">
                  ✓
                </span>
                The total comes back in the chat.
              </li>
              <li className="flex gap-2">
                <span aria-hidden="true" className="text-accent">
                  ✓
                </span>
                Duplicates are flagged.
              </li>
            </ul>
            <div className="mt-5 rounded-2xl bg-page p-4 text-sm leading-relaxed">
              <p className="text-ink">Booked. Total: 1,240.00 (sample)</p>
              <p className="mt-2 text-accent">Duplicate flagged: already posted (sample)</p>
            </div>
            <p className="mt-4 text-base leading-relaxed text-muted">{views[0].detail}</p>
          </article>
          <article className="min-w-0 rounded-[28px] border border-ink/10 bg-white p-6">
            <h3 className="text-xs font-semibold tracking-[0.14em] text-accent uppercase">
              {views[1].title}
            </h3>
            <p className="mt-4 flex gap-2 text-lg font-semibold text-ink">
              <span aria-hidden="true" className="text-accent">
                ✓
              </span>
              Every branch, posted or flagged.
            </p>
            <ul className="mt-5 divide-y divide-ink/10 rounded-2xl bg-page px-4">
              {[
                ["Sample Branch A", "Posted", "3,120.00"],
                ["Sample Branch B", "Posted", "1,860.00"],
                ["Sample Branch C", "Flagged", "640.00"],
              ].map(([name, status, amount]) => (
                <li key={name} className="flex items-center gap-3 py-3 text-sm">
                  <span className="min-w-0 flex-1 font-medium text-ink">{name}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                      status === "Flagged" ? "bg-ink/10 text-ink" : "bg-accent-fill/50 text-ink"
                    }`}
                  >
                    {status}
                  </span>
                  <span className="font-semibold text-ink">{amount}</span>
                </li>
              ))}
              <li className="flex items-center justify-between gap-3 py-3 text-sm font-semibold">
                <span className="text-accent">Running total, posted</span>
                <span className="text-accent">4,980.00</span>
              </li>
            </ul>
            <p className="mt-3 text-xs text-muted">Branch names and figures are samples.</p>
            <p className="mt-3 text-base leading-relaxed text-muted">{views[1].detail}</p>
          </article>
        </div>
      </div>
    </section>
  );
}
