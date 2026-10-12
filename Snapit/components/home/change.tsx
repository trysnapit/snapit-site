const dropped = ["New app.", "New forms.", "Retyping."] as const;

export function Change() {
  return (
    <section className="bg-accent-fill px-5 py-20 text-ink md:py-28">
      <div className="mx-auto max-w-content">
        <h2 className="max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">
          Your team already sends invoices on WhatsApp.
        </h2>
        <p className="mt-5 max-w-none text-lg leading-relaxed">
          There is no new app, no new forms, and no retyping.
        </p>
        <ul className="mt-8 flex flex-wrap gap-3">
          {dropped.map((item) => (
            <li
              key={item}
              className="inline-flex min-h-11 items-center rounded-full border border-ink/20 px-4 text-sm font-semibold text-ink/70 line-through"
            >
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-12 max-w-none font-heading text-6xl font-semibold leading-[0.92] tracking-tight sm:text-8xl">
          Snap it.
          <br />
          Send it.
          <br />
          Booked.
        </p>
      </div>
    </section>
  );
}
