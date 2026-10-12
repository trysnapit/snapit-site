import { audiences } from "@/lib/home";

export function Audience() {
  return (
    <section id="who" className="scroll-mt-20 px-5 py-20 md:py-28" aria-labelledby="who-heading">
      <div className="mx-auto max-w-content">
        <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">Who it is for</p>
        <h2 id="who-heading" className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
          Get invoices? Snapit is for you.
        </h2>
        <div className="mt-10 grid gap-4 lg:grid-cols-2">
          {audiences.map((audience) => (
            <article key={audience.title} className="settle min-w-0 rounded-[28px] border border-ink/10 bg-white p-6">
              <h3 className="text-xl font-semibold text-ink">{audience.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted">{audience.detail}</p>
              {"examples" in audience ? (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {audience.examples.map((example) => (
                    <li
                      key={example}
                      className="inline-flex min-h-9 items-center rounded-full bg-page px-3 text-sm text-muted"
                    >
                      {example}
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
