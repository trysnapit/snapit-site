import type { Metadata } from "next";
import { DM_Sans, Manrope } from "next/font/google";
import { JsonLd } from "@/components/json-ld";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { site } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: site.title,
    template: "%s · Snapit",
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${dmSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col font-body">
        <a
          href="#main"
          className="absolute left-4 top-4 z-50 inline-flex min-h-11 -translate-y-24 items-center rounded-md bg-ink px-4 text-sm font-medium text-page focus:translate-y-0"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                name: site.name,
                url: site.domain,
                email: site.email,
              },
              {
                "@type": "WebSite",
                name: site.name,
                url: site.domain,
              },
            ],
          }}
        />
      </body>
    </html>
  );
}
