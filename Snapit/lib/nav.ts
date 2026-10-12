import { site } from "@/lib/site";

export const navLinks = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/blog", label: "Blog" },
  { href: site.appUrl, label: "Log in" },
] as const;

export const trySnapit = {
  href: site.whatsappUrl,
  label: "Try Snapit",
} as const;
