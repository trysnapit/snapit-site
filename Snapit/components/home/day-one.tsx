import { dayOne } from "@/lib/home";

export function DayOne() {
  return (
    <section id="day-one" className="scroll-mt-20 px-5 py-20 md:py-28" aria-labelledby="day-one-heading">
      <div className="mx-auto max-w-content">
        <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">Day one</p>
        <h2 id="day-one-heading" className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
          What changes on day one.
        </h2>
        <ul className="mt-10 flex flex-col gap-3">
          {dayOne.map((row) => (
            <li key={row.label} className="settle min-w-0 rounded-[24px] border border-ink/10 bg-white p-5">
              <h3 className="text-sm font-semibold text-muted">{row.label}</h3>
              <div className="mt-3 grid grid-cols-1 items-center gap-3 sm:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">Today</p>
                  <p className="mt-1 text-base font-semibold leading-relaxed text-ink">{row.today}</p>
                </div>
                <span
                  aria-hidden="true"
                  className="grid size-8 place-items-center justify-self-start rounded-full bg-accent-fill text-sm font-semibold text-ink sm:justify-self-center"
                >
                  →
                </span>
                <div className="min-w-0">
                  <p className="text-xs font-semibold tracking-[0.12em] text-accent uppercase">
                    With Snapit
                  </p>
                  <p className="mt-1 text-base font-semibold leading-relaxed text-ink">{row.withSnapit}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
