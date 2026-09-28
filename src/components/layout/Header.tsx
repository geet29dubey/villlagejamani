"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Locale } from "@/i18n/config";
import { ui } from "@/i18n/ui";
import { href, primaryNav } from "@/i18n/routes";
import { LogoMark } from "@/components/brand/Logo";
import { LanguageSwitcher } from "./LanguageSwitcher";

function isCurrent(pathname: string, target: string) {
  return pathname === target || pathname.startsWith(`${target}/`);
}

export function Header({ locale }: { locale: Locale }) {
  const pathname = usePathname() ?? "";
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = useCallback((returnFocus = true) => {
    setOpen(false);
    if (returnFocus) toggleRef.current?.focus();
  }, []);

  // Close the menu on navigation.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (!open) return;
    menuRef.current?.querySelector<HTMLElement>("a, button")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "Tab" && menuRef.current) {
        // Keep focus within the toggle + menu while open.
        const focusables = [
          toggleRef.current,
          ...Array.from(menuRef.current.querySelectorAll<HTMLElement>("a, button")),
        ].filter(Boolean) as HTMLElement[];
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    const onResize = () => {
      if (window.innerWidth >= 1024) close(false);
    };
    document.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
      document.body.classList.remove("menu-open");
    };
  }, [open, close]);

  return (
    <header className="site-header" data-compact={compact || open ? "true" : "false"}>
      <div className="container header-inner">
        <Link
          href={href(locale, "home")}
          className="brand"
          aria-label={`${ui.brandName[locale]} — ${ui.home[locale]}`}
        >
          <LogoMark className="brand__mark" />
          <span className="brand__text" aria-hidden="true">
            <span className="brand__name" lang="hi">
              जमानी
            </span>
            <span className="brand__sub">{ui.brandSub[locale]}</span>
          </span>
        </Link>

        <nav className="primary-nav" aria-label={ui.primaryNav[locale]}>
          <ul>
            {primaryNav.map((item) => {
              const target = href(locale, item.key);
              return (
                <li key={item.key}>
                  <Link
                    href={target}
                    className={item.key === "plan-your-visit" ? "nav-cta" : undefined}
                    aria-current={isCurrent(pathname, target) ? "page" : undefined}
                  >
                    {item.label[locale]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="header-actions">
          <LanguageSwitcher locale={locale} />
          <Link
            href={href(locale, "plan-your-visit")}
            className="btn btn--primary btn--sm header-cta"
          >
            {ui.planVisit[locale]}
          </Link>
          <button
            ref={toggleRef}
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? ui.closeMenu[locale] : ui.openMenu[locale]}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            ) : (
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              >
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="mobile-menu" ref={menuRef} hidden={!open}>
        <nav aria-label={ui.primaryNav[locale]}>
          <ul>
            <li>
              <Link
                className="mobile-menu__link"
                href={href(locale, "home")}
                aria-current={pathname === href(locale, "home") ? "page" : undefined}
              >
                {ui.home[locale]}
              </Link>
            </li>
            {primaryNav.map((item) => {
              const target = href(locale, item.key);
              return (
                <li key={item.key}>
                  <Link
                    className="mobile-menu__link"
                    href={target}
                    aria-current={isCurrent(pathname, target) ? "page" : undefined}
                  >
                    {item.label[locale]}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className="mobile-menu__foot">
          <LanguageSwitcher locale={locale} />
          <Link href={href(locale, "plan-your-visit")} className="btn btn--primary">
            {ui.planVisit[locale]}
          </Link>
          <Link href={href(locale, "contribute")} className="text-link">
            {ui.contributeMemory[locale]} →
          </Link>
        </div>
      </div>
    </header>
  );
}
