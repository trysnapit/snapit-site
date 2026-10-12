import { costs } from "@/lib/home";

export function Costs() {
  return (
    <section id="costs" className="px-5 py-20 md:py-28">
      <div className="mx-auto grid max-w-content gap-10 md:grid-cols-2 md:items-start">
        <div>
          <p className="text-sm font-semibold text-accent">Beyond the typing time</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
            What retyping really costs you.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink">The cost is more than typing time.</p>
        </div>
        <ul className="flex flex-col gap-6">
          {costs.map((cost) => (
            <li key={cost.title}>
              <h3 className="text-lg font-semibold text-ink">{cost.title}</h3>
              <p className="mt-1 text-base leading-relaxed text-muted">{cost.detail}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
