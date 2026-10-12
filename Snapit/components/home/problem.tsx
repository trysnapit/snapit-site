const sources = [
  { label: "WhatsApp", icon: "chat" },
  { label: "Email", icon: "mail" },
  { label: "PDFs", icon: "file" },
  { label: "Paper", icon: "file" },
] as const;

export function Problem() {
  return (
    <section className="px-5 py-20 md:py-28">
      <div className="mx-auto max-w-content">
        <p className="text-xs font-semibold tracking-[0.16em] text-accent uppercase">The problem</p>
        <h2 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
          Invoices arrive everywhere.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-muted">
          They arrive from WhatsApp, email, PDFs, and paper, and someone retypes every one. It is
          slow, and amounts get entered wrong.
        </p>
        <ul className="mt-8 flex flex-wrap gap-3">
          {sources.map((source) => (
            <li
              key={source.label}
              className="inline-flex min-h-11 items-center gap-2 rounded-full border border-ink/10 bg-white px-4 text-sm font-semibold text-ink"
            >
              <Mark name={source.icon} />
              {source.label}
            </li>
          ))}
        </ul>
        <p className="mt-4 flex min-h-16 max-w-none items-center gap-3 rounded-[24px] border border-ink/10 bg-white px-5 text-lg font-semibold text-ink">
          <Mark name="desk" />
          Someone retypes every one.
        </p>
      </div>
    </section>
  );
}

function Mark({ name }: { name: "chat" | "mail" | "file" | "desk" }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" className="shrink-0 text-accent">
      {name === "chat" ? (
        <path
          d="M3.5 4.5h11v7.2H7.2L4.2 14v-2.3H3.5V4.5Z"
          className="fill-none stroke-current"
          strokeWidth="1.4"
        />
      ) : null}
      {name === "mail" ? (
        <path
          d="M3 5.2h12v8H3v-8Zm0 0 6 4.2L15 5.2"
          className="fill-none stroke-current"
          strokeWidth="1.4"
        />
      ) : null}
      {name === "file" ? (
        <path
          d="M5 2.8h5.2L13.5 6v9.2H5V2.8Zm5 0V6h3.2M7 9.2h4.2M7 11.6h3"
          className="fill-none stroke-current"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      ) : null}
      {name === "desk" ? (
        <path
          d="M3 6.2h12v6.2H3V6.2Zm2.2 6.2V14M12.8 12.4V14M6.2 8.4h5.6"
          className="fill-none stroke-current"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      ) : null}
    </svg>
  );
}
