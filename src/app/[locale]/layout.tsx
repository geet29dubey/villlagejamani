import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import { fontVariables } from "../fonts";
import { isLocale, locales, localeMeta, type Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";
import { siteConfig } from "@/config/site";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd, placeJsonLd, websiteJsonLd } from "@/lib/structured-data";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const dynamicParams = false;

export const viewport: Viewport = {
  themeColor: "#FFF6E8",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const l: Locale = isLocale(locale) ? locale : "hi";
  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: siteConfig.name[l],
      template: l === "hi" ? "%s · ग्राम जमानी" : "%s · Village Jamani",
    },
    applicationName: siteConfig.name[l],
    icons: { icon: "/icon.svg" },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return (
    <html lang={localeMeta[locale].htmlLang} className={fontVariables}>
      <body>
        <a className="skip-link" href="#main">
          {ui.skipToContent[locale]}
        </a>
        <Header locale={locale} />
        <main id="main" tabIndex={-1}>
          {children}
        </main>
        <Footer locale={locale} />
        <JsonLd data={[websiteJsonLd(locale), placeJsonLd(locale)]} />
      </body>
    </html>
  );
}
