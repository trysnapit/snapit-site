import Link from "next/link";
import { site } from "@/lib/site";

const itemClass =
  "inline-flex min-h-11 items-center rounded-md px-3 text-sm text-muted hover:text-ink";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-ink/10">
      <div className="mx-auto flex max-w-content flex-col gap-2 px-4 py-6 sm:flex-row sm:flex-wrap sm:items-center">
        <p className="px-3 font-heading text-base font-semibold text-ink">{site.name}</p>
        <nav aria-label="Footer" className="flex flex-col sm:flex-row sm:flex-wrap">
          <a href={`mailto:${site.email}`} className={itemClass}>
            {site.email}
          </a>
          <a href={site.whatsappUrl} className={itemClass}>
            {site.whatsappDisplay}
          </a>
          <Link href="/blog" className={itemClass}>
            Blog
          </Link>
          <a href={site.privacyUrl} className={itemClass}>
            Privacy
          </a>
          <a href={site.termsUrl} className={itemClass}>
            Terms
          </a>
        </nav>
      </div>
    </footer>
  );
}
