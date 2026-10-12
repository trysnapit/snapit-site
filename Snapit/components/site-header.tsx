import Link from "next/link";
import { MobileNav } from "@/components/mobile-nav";
import { navLinks, trySnapit } from "@/lib/nav";
import { site } from "@/lib/site";

const navItemClass =
  "inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-ink hover:text-accent";

export function SiteHeader() {
  return (
    <header className="relative border-b border-ink/10 bg-page">
      <div className="mx-auto flex max-w-content items-center gap-2 px-4 py-2">
        <Link href="/" className={`${navItemClass} font-heading text-lg font-semibold`}>
          {site.name}
        </Link>
        <nav aria-label="Primary" className="ml-auto hidden items-center md:flex">
          {navLinks.map((item) =>
            item.href.startsWith("/") ? (
              <Link key={item.href} href={item.href} className={navItemClass}>
                {item.label}
              </Link>
            ) : (
              <a key={item.href} href={item.href} className={navItemClass}>
                {item.label}
              </a>
            ),
          )}
        </nav>
        <a
          href={trySnapit.href}
          className="ml-1 hidden min-h-11 items-center rounded-md bg-ink px-4 text-sm font-semibold text-accent-fill md:inline-flex"
        >
          {trySnapit.label}
        </a>
        <MobileNav />
      </div>
    </header>
  );
}
