const lines = ["Snap it.", "Send it.", "Booked."] as const;

export function Change() {
  return (
    <section className="px-5 py-20 md:py-28">
      <div className="mx-auto grid max-w-content gap-10 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
            Your team already sends invoices on WhatsApp.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink">
            There is no new app, no new forms, and no retyping.
          </p>
        </div>
        <ol className="flex flex-col gap-3">
          {lines.map((line) => (
            <li key={line} className="text-3xl font-semibold tracking-tight text-ink">
              {line}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
