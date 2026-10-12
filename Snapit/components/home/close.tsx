import { site } from "@/lib/site";

const linkClass =
  "inline-flex min-h-11 items-center justify-center rounded-md px-4 text-sm font-semibold";

export function Close() {
  return (
    <section className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-content">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
          Stop typing invoices. Start sending them.
        </h2>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a href={`mailto:${site.email}`} className={`${linkClass} border border-ink/15 text-ink`}>
            {site.email}
          </a>
          <a href={site.whatsappUrl} className={`${linkClass} bg-ink text-accent-fill`}>
            {site.whatsappDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
