"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { locales, switchLocalePath, type Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";

/** हिन्दी / EN toggle that keeps the visitor on the same page (and section, via hash). */
export function LanguageSwitcher({ locale, className }: { locale: Locale; className?: string }) {
  const pathname = usePathname() ?? `/${locale}`;
  return (
    <nav
      className={["lang-switch", className].filter(Boolean).join(" ")}
      aria-label={ui.languageSwitch[locale]}
    >
      {locales.map((l) => {
        const target = switchLocalePath(pathname, l);
        const active = l === locale;
        return (
          <Link
            key={l}
            href={target}
            lang={l}
            hrefLang={l}
            aria-current={active ? "true" : undefined}
            onClick={(e) => {
              if (active) return;
              const hash = typeof window !== "undefined" ? window.location.hash : "";
              if (hash) {
                e.preventDefault();
                window.location.assign(`${target}${hash}`);
              }
            }}
          >
            {l === "hi" ? "हिन्दी" : "EN"}
            {l === "en" ? <span className="visually-hidden"> — English</span> : null}
          </Link>
        );
      })}
    </nav>
  );
}
