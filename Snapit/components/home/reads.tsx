import { fields } from "@/lib/home";

export function Reads() {
  return (
    <section className="px-5 py-20 md:py-28">
      <div className="mx-auto grid max-w-content gap-10 md:grid-cols-2 md:items-start">
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-balance text-ink sm:text-5xl">
            Every detail, read and checked.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-ink">
            Snapit reads those fields from a photo or PDF, checks what is already posted, and posts
            the bill with the original document.
          </p>
        </div>
        <ul className="flex flex-col gap-3">
          {fields.map((field) => (
            <li key={field} className="text-2xl font-semibold tracking-tight text-ink">
              {field}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
