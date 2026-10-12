import { audiences } from "@/lib/home";

export function Audience() {
  return (
    <section className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-content">
        <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
          Get invoices? Snapit is for you.
        </h2>
        <div className="mt-10 grid gap-10 md:grid-cols-2">
          {audiences.map((audience) => (
            <div key={audience.title}>
              <h3 className="text-lg font-semibold text-ink">{audience.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-ink">{audience.detail}</p>
              {"examples" in audience ? (
                <ul className="mt-4 flex flex-col gap-2">
                  {audience.examples.map((example) => (
                    <li key={example} className="text-base text-muted">
                      {example}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
