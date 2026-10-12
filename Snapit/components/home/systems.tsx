import Link from "next/link";
import { systems } from "@/lib/home";

export function Systems() {
  return (
    <section id="systems" className="px-5 py-20 md:py-28">
      <div className="mx-auto grid max-w-content gap-10 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
            Posts to the system you already use.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink">
            The WhatsApp step stays the same for staff.
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
        <div className="flex flex-col gap-8">
          <div>
            <h3 className="text-sm font-semibold text-accent">Live</h3>
            <ul className="mt-3 flex flex-col gap-2">
              {systems.live.map((name) => (
                <li key={name} className="text-2xl font-semibold tracking-tight text-ink">
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-accent">Coming soon</h3>
            <ul className="mt-3 flex flex-col gap-2">
              {systems.soon.map((name) => (
                <li key={name} className="text-2xl font-semibold tracking-tight text-ink">
                  {name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-accent">REST API and webhooks</h3>
            <ul className="mt-3 flex flex-col gap-3">
              {systems.api.map((line) => (
                <li key={line} className="text-base leading-relaxed text-ink">
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
