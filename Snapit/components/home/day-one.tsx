import { dayOne } from "@/lib/home";

export function DayOne() {
  return (
    <section className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-content">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
          What changes on day one.
        </h2>
        <ul className="mt-10 flex flex-col gap-8">
          {dayOne.map((row) => (
            <li key={row.label} className="min-w-0 border-t border-ink/10 pt-6">
              <h3 className="text-lg font-semibold text-ink">{row.label}</h3>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-muted">Today</p>
                  <p className="mt-1 text-base leading-relaxed text-ink">{row.today}</p>
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-semibold text-accent">With Snapit</p>
                  <p className="mt-1 text-base leading-relaxed text-ink">{row.withSnapit}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
