"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, trySnapit } from "@/lib/nav";

const itemClass =
  "flex min-h-11 items-center rounded-md px-3 text-base font-medium text-ink hover:text-accent";

export function MobileNav() {
  const [open, setOpen] = useState(false);

  function close() {
    setOpen(false);
  }

  return (
    <>
      <button
        type="button"
        className="ml-auto inline-flex min-h-11 items-center rounded-md px-3 text-sm font-medium text-ink md:hidden"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((current) => !current)}
      >
        Menu
      </button>
      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full z-40 border-b border-ink/10 bg-page px-4 py-2 md:hidden"
        >
          {navLinks.map((item) =>
            item.href.startsWith("/") ? (
              <Link key={item.href} href={item.href} className={itemClass} onClick={close}>
                {item.label}
              </Link>
            ) : (
              <a key={item.href} href={item.href} className={itemClass} onClick={close}>
                {item.label}
              </a>
            ),
          )}
          <a href={trySnapit.href} className={`${itemClass} font-semibold`} onClick={close}>
            {trySnapit.label}
          </a>
        </nav>
      ) : null}
    </>
  );
}
