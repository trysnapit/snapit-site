import Link from "next/link";
import { costs } from "@/lib/home";

const icons = ["clock", "copy", "file", "search", "folder", "desk"] as const;

export function Costs() {
  return (
    <section id="costs" className="scroll-mt-20 px-5 py-20 md:py-28">
      <div className="mx-auto max-w-content">
        <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">
          Beyond the typing time
        </p>
        <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
          What retyping really costs you.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-muted">The cost is more than typing time.</p>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {costs.map((cost, index) => (
            <li key={cost.title} className="min-w-0 rounded-[24px] border border-ink/10 bg-white p-6">
              <span className="grid size-10 place-items-center rounded-xl bg-accent-fill/25 text-accent">
                <CostIcon name={icons[index]} />
              </span>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-ink">{cost.detail}</h3>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <Link
            href="/blog/retyping-invoices"
            className="inline-flex min-h-11 items-center font-semibold text-accent"
          >
            Why retyping invoices costs more than the typing
          </Link>
        </p>
      </div>
    </section>
  );
}

function CostIcon({ name }: { name: (typeof icons)[number] }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      {name === "clock" ? (
        <path
          d="M9 3.2a5.8 5.8 0 1 0 0 11.6A5.8 5.8 0 0 0 9 3.2Zm0 2.2V9l2.4 1.6"
          className="fill-none stroke-current"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      ) : null}
      {name === "copy" ? (
        <path
          d="M6.2 6.2h7.2v8.2H6.2V6.2Zm-1.6-2.6h7.2M4.6 5.2h.1"
          className="fill-none stroke-current"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      ) : null}
      {name === "file" ? (
        <path
          d="M5 2.8h5.2L13.5 6v9.2H5V2.8Zm5 .2V6h3"
          className="fill-none stroke-current"
          strokeWidth="1.4"
        />
      ) : null}
      {name === "search" ? (
        <path
          d="M8 3.6a4.2 4.2 0 1 0 0 8.4 4.2 4.2 0 0 0 0-8.4Zm3.4 6.8 2.6 2.6"
          className="fill-none stroke-current"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      ) : null}
      {name === "folder" ? (
        <path
          d="M2.8 5.4h4l1.4 1.6h7v6.6H2.8V5.4Z"
          className="fill-none stroke-current"
          strokeWidth="1.4"
        />
      ) : null}
      {name === "desk" ? (
        <path
          d="M3 6.2h12v6.2H3V6.2Zm2.2 6.2V14M12.8 12.4V14"
          className="fill-none stroke-current"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      ) : null}
    </svg>
  );
}
