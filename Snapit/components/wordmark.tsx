import { site } from "@/lib/site";

export function Wordmark() {
  return (
    <span className="inline-flex items-center gap-2 font-heading text-lg font-semibold tracking-tight text-ink">
      <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true" className="shrink-0">
        <path
          d="M4.5 5.2A1.7 1.7 0 0 1 6.2 3.5h7.1L17.5 7.6v9.7a1.7 1.7 0 0 1-1.7 1.7H6.2a1.7 1.7 0 0 1-1.7-1.7V5.2Z"
          className="fill-accent-fill"
        />
        <path d="M13.1 3.8v3.7h3.8" className="fill-none stroke-ink" strokeWidth="1.4" />
        <path
          d="M7.4 11.4h7.2M7.4 14.3h4.8"
          className="stroke-ink"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
      {site.name}
    </span>
  );
}
