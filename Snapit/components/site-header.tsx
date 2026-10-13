import Link from "next/link";
import { MobileNav } from "@/components/mobile-nav";
import { Wordmark } from "@/components/wordmark";
import { navLinks, trySnapit } from "@/lib/nav";

const navItemClass =
  "inline-flex min-h-11 items-center rounded-full px-3 text-sm font-medium text-ink hover:text-accent";

const tryClass =
  "nudge min-h-11 items-center justify-center rounded-full bg-accent-fill px-4 text-sm font-semibold text-ink";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-ink/10 bg-page/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-content items-center gap-2 px-4 py-2">
        <Link href="/" className="inline-flex min-h-11 items-center rounded-md pr-1">
          <Wordmark />
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
        <a href={trySnapit.href} className={`${tryClass} ml-1 hidden md:inline-flex`}>
          {trySnapit.label}
        </a>
        <a href={trySnapit.href} className={`${tryClass} ml-auto inline-flex md:hidden`}>
          {trySnapit.label}
        </a>
        <MobileNav />
      </div>
    </header>
  );
}
