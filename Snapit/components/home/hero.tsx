import { trySnapit } from "@/lib/nav";

const actionClass = "inline-flex min-h-11 items-center justify-center rounded-md px-4 text-sm font-semibold";

export function Hero() {
  return (
    <section className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-content">
        <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance text-ink sm:text-6xl">
          WhatsApp it. It’s in your books.
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-ink">
          Invoices go to the accounting system automatically.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={trySnapit.href} className={`${actionClass} bg-ink text-accent-fill`}>
            {trySnapit.label}
          </a>
          <a
            href="#how-it-works"
            className={`${actionClass} border border-ink/15 text-ink hover:border-ink/30`}
          >
            See how it works
          </a>
        </div>
      </div>
    </section>
  );
}
