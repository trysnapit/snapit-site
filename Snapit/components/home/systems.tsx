import Link from "next/link";
import { systems } from "@/lib/home";

export function Systems() {
  return (
    <section id="systems" className="scroll-mt-20 px-5 py-20 md:py-28" aria-labelledby="systems-heading">
      <div className="mx-auto max-w-content">
        <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
          Accounting systems
        </p>
        <h2 id="systems-heading" className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
          Posts to the system you already use.
        </h2>
        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {systems.live.map((name) => (
            <li
              key={name}
              className="settle grid min-h-28 place-items-center rounded-[24px] border border-ink/10 bg-white px-4 text-center text-2xl font-semibold tracking-tight text-ink"
            >
              {name}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <h3 className="text-sm font-semibold text-accent">Coming soon</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {systems.soon.map((name) => (
              <li
                key={name}
                className="inline-flex min-h-11 items-center rounded-full border border-ink/10 bg-white px-4 text-sm font-medium text-ink"
              >
                {name}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-8 text-lg font-semibold text-ink">
          Using something else? Connect any system through the API.
        </p>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {systems.api.map((line) => {
            const title = line.startsWith("The REST API") ? "REST API" : "Webhooks";
            return (
              <article key={line} className="settle min-w-0 rounded-[24px] border border-ink/10 bg-white p-6">
                <h3 className="text-lg font-semibold text-ink">{title}</h3>
                <p className="mt-2 text-base leading-relaxed text-muted">{line}</p>
              </article>
            );
          })}
        </div>
        <p className="mt-6 flex max-w-none items-start gap-3 text-base font-semibold text-ink">
          <span aria-hidden="true" className="mt-0.5 text-accent">
            ●
          </span>
          {systems.whatsapp}
        </p>
        <p className="mt-6">
          <Link
            href="/blog/posting-to-your-books"
            className="inline-flex min-h-11 items-center font-semibold text-accent"
          >
            Posting into Xero, QuickBooks, Zoho Books, or your own system
          </Link>
        </p>
      </div>
    </section>
  );
}
