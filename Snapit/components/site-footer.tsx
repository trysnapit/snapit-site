import Link from "next/link";
import { Wordmark } from "@/components/wordmark";
import { site } from "@/lib/site";

const itemClass =
  "inline-flex min-h-11 items-center rounded-full px-3 text-sm text-muted hover:text-ink";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-ink/10">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-5 py-10 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <Wordmark />
          <p className="mt-3 max-w-none text-sm text-muted">WhatsApp it. It’s in your books.</p>
        </div>
        <nav aria-label="Footer" className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-end">
          <Link href="/blog" className={itemClass}>
            Blog
          </Link>
          <a href="/llms.txt" className={itemClass}>
            llms.txt
          </a>
          <a href={site.privacyUrl} className={itemClass}>
            Privacy
          </a>
          <a href={site.termsUrl} className={itemClass}>
            Terms
          </a>
          <a href={`mailto:${site.email}`} className={itemClass}>
            {site.email}
          </a>
          <a href={site.whatsappUrl} className={itemClass}>
            {site.whatsappDisplay}
          </a>
        </nav>
      </div>
    </footer>
  );
}
