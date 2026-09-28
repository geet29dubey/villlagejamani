import Link from "next/link";
import type { Metadata } from "next";
import { fontVariables } from "./fonts";
import { siteConfig } from "@/config/site";
import { LogoMark } from "@/components/brand/Logo";

/**
 * Root fallback. On Cloudflare Pages, public/_redirects sends "/" to "/hi" (Hindi default)
 * before this page is served. Elsewhere, this bilingual chooser redirects to Hindi.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: "जमानी · Jamani — near Itarsi, Madhya Pradesh",
  alternates: {
    canonical: "/hi",
    languages: { hi: "/hi", en: "/en", "x-default": "/hi" },
  },
  robots: { index: false, follow: true },
};

export default function RootChooser() {
  return (
    <html lang="hi" className={fontVariables}>
      <head>
        <meta httpEquiv="refresh" content="3;url=/hi" />
      </head>
      <body>
        <main className="chooser" style={{ paddingTop: 0 }}>
          <LogoMark className="chooser__logo" />
          <h1 className="chooser__title">जमानी · Jamani</h1>
          <p>भाषा चुनें · Choose your language</p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <Link className="btn btn--primary" href="/hi" lang="hi" hrefLang="hi">
              हिन्दी
            </Link>
            <Link className="btn btn--secondary" href="/en" lang="en" hrefLang="en">
              English
            </Link>
          </div>
        </main>
      </body>
    </html>
  );
}
