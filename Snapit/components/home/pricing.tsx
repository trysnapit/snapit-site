import { pricing } from "@/lib/pricing";
import { site } from "@/lib/site";

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 px-5 py-20 md:py-28" aria-labelledby="pricing-heading">
      <div className="mx-auto max-w-content">
        <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">Pricing</p>
        <h2 id="pricing-heading" className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
          Pay per invoice. No subscription.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          Start with {pricing.welcomeCredits} free credits. One credit reads one invoice.
        </p>
        <div className="mt-10 grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
          <div className="min-w-0 rounded-[24px] bg-ink p-6 text-white md:p-8">
            <p className="text-xs font-semibold tracking-[0.12em] text-accent-fill uppercase">Per invoice</p>
            <p className="mt-3 font-heading text-5xl font-semibold tracking-tight tabular-nums sm:text-6xl">
              {pricing.perInvoice}
            </p>
            <p className="mt-3 text-base leading-relaxed text-white/70">1 credit. Charged when the invoice arrives.</p>
          </div>
          <ul className="grid gap-4 sm:grid-cols-3">
            {pricing.packs.map((pack) => (
              <li key={pack.credits} className="settle min-w-0 rounded-[24px] border border-ink/10 bg-white p-6">
                <h3 className="text-sm font-semibold text-muted">{pack.credits} credits</h3>
                <p className="mt-3 font-heading text-3xl font-semibold tracking-tight text-ink tabular-nums">
                  {pack.price}
                </p>
                <p className="mt-2 text-base leading-relaxed text-muted">{pack.credits} invoices</p>
              </li>
            ))}
          </ul>
        </div>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {pricing.terms.map((term) => (
            <li key={term} className="flex min-w-0 items-start gap-3 text-base font-semibold text-ink">
              <span aria-hidden="true" className="mt-0.5 text-accent">
                ●
              </span>
              {term}
            </li>
          ))}
        </ul>
        <p className="mt-8 text-lg font-semibold text-ink">{pricing.firms}</p>
        <p className="mt-3 text-base leading-relaxed text-muted">
          {pricing.volume}{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-accent">
            Email {site.email}
          </a>
        </p>
        <div className="mt-8 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          <a
            href={site.registerUrl}
            className="nudge inline-flex min-h-12 items-center justify-center rounded-full bg-accent-fill px-6 text-sm font-semibold text-ink"
          >
            Start free with {pricing.welcomeCredits} credits
          </a>
          <a
            href={site.whatsappUrl}
            className="inline-flex min-h-11 items-center px-2 text-sm font-semibold text-ink"
          >
            Ask on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
