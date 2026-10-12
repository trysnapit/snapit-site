import { trySnapit } from "@/lib/nav";
import { site } from "@/lib/site";

export function Close() {
  return (
    <section className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-content rounded-[28px] border border-ink/10 bg-white px-6 py-16 text-center md:px-16">
        <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-balance text-ink sm:text-6xl">
          Stop typing invoices. Start sending them.
        </h2>
        <div className="mt-8 flex flex-col items-center gap-3">
          <a
            href={trySnapit.href}
            className="nudge inline-flex min-h-12 items-center justify-center rounded-full bg-accent-fill px-6 text-sm font-semibold text-ink"
          >
            {trySnapit.label}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex min-h-11 items-center text-sm font-medium text-muted"
          >
            {site.email}
          </a>
          <a
            href={site.whatsappUrl}
            className="inline-flex min-h-11 items-center text-sm font-medium text-ink"
          >
            {site.whatsappDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
