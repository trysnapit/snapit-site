import { views } from "@/lib/home";

export function TwoViews() {
  return (
    <section className="px-5 py-20 md:py-28">
      <div className="mx-auto grid max-w-content gap-10 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
            Every invoice, accounted for.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink">
            The sender gets the total back in the same chat, and the owner sees every branch.
          </p>
        </div>
        <div className="flex flex-col gap-8">
          {views.map((view) => (
            <div key={view.title}>
              <h3 className="text-lg font-semibold text-ink">{view.title}</h3>
              <p className="mt-1 text-base leading-relaxed text-muted">{view.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
