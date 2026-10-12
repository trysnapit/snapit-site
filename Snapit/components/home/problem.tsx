const sources = ["WhatsApp", "Email", "PDFs", "Paper"] as const;

export function Problem() {
  return (
    <section className="px-5 py-20 md:py-28">
      <div className="mx-auto grid max-w-content gap-10 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
            Invoices arrive everywhere.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink">
            They arrive from WhatsApp, email, PDFs, and paper, and someone retypes every one. It is
            slow, and amounts get entered wrong.
          </p>
        </div>
        <ul className="flex flex-col gap-3">
          {sources.map((source) => (
            <li key={source} className="text-2xl font-semibold tracking-tight text-ink">
              {source}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
