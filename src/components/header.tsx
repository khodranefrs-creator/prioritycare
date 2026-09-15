"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { getDirection, otherLocale } from "@/lib/i18n";
import { bookingCta, resolveNavLinks } from "@/content/navigation";
import { ui } from "@/content/ui";
import { whatsappHref } from "@/content/business";
import { Mark } from "@/components/mark";
import { ArrowIcon, CloseIcon, MenuIcon, WhatsAppIcon } from "@/components/icons";
import { Container } from "@/components/ui";

export function Header() {
  const params = useParams<{ locale: string }>();
  const locale = (params?.locale === "en" ? "en" : "ar") as Locale;
  const dir = getDirection(locale);
  const links = resolveNavLinks(locale);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setOpenGroup(null);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const statelessPath = (href: string) => href.replace(/^\/(ar|en)/, "") || "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-ink/85 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <Container className="flex h-[72px] items-center justify-between gap-6 border-b border-white/5">
        <Link
          href={`/${locale}`}
          className="shrink-0 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
          aria-label="Priority Care — أولوية العناية"
        >
          <Mark locale={locale} />
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label={locale === "ar" ? "التنقل الرئيسي" : "Main navigation"}
          dir={dir}
        >
          {links.map((link, i) =>
            link.children ? (
              <div key={link.href} className="relative">
                <button
                  type="button"
                  className="flex items-center gap-1.5 rounded-full px-4 py-2 text-sm text-mist transition-colors hover:text-cream"
                  onClick={() => setOpenGroup(openGroup === i ? null : i)}
                  aria-expanded={openGroup === i}
                  aria-haspopup="true"
                >
                  {link.label[locale]}
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    className={`h-3.5 w-3.5 transition-transform ${openGroup === i ? "rotate-180" : ""}`}
                    aria-hidden
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </button>

                {openGroup === i ? (
                  <div
                    className="absolute start-0 top-full pt-3"
                    onMouseLeave={() => setOpenGroup(null)}
                  >
                    <div className="w-[340px] overflow-hidden rounded-2xl border border-white/10 bg-ink-soft shadow-raise backdrop-blur-xl">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpenGroup(null)}
                          className="group/c flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-white/[0.04]"
                        >
                          <span className="flex flex-col gap-1 text-start">
                            <span className="text-sm font-medium text-cream transition-colors group-hover/c:text-brass">
                              {child.label[locale]}
                            </span>
                            {child.description ? (
                              <span className="text-xs text-fog">
                                {child.description[locale]}
                              </span>
                            ) : null}
                          </span>
                          <span className="shrink-0 font-display text-xs tabular-nums text-fog">
                            {child.index?.[locale]}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm text-mist transition-colors hover:text-cream"
              >
                {link.label[locale]}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={`/${locale}${statelessPath("/contact")}`}
            className="flex items-center gap-1.5 rounded-full px-3 py-2 text-xs font-medium tracking-wide text-mist transition-colors hover:text-cream"
          >
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em]" lang={otherLocale[locale]}>
              {ui.lang.switchTo[locale]}
            </span>
          </Link>
          <Link
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2.5 rounded-full bg-brass px-5 py-2.5 text-sm font-medium text-ink transition-all duration-300 hover:bg-brass-bright"
          >
            <WhatsAppIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
            {bookingCta[locale]}
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-cream lg:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label={ui.nav.openMenu[locale]}
        >
          <MenuIcon className="h-5 w-5" />
        </button>
      </Container>

      {/* Mobile menu */}
      {menuOpen ? (
        <div className="fixed inset-0 z-[60] flex flex-col bg-ink lg:hidden" role="dialog" aria-modal="true">
          <Container className="flex h-[72px] items-center justify-between border-b border-white/5">
            <Mark locale={locale} />
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-cream"
              onClick={() => setMenuOpen(false)}
              aria-label={ui.nav.closeMenu[locale]}
            >
              <CloseIcon className="h-5 w-5" />
            </button>
          </Container>

          <div className="flex-1 overflow-y-auto">
            <Container className="flex flex-col py-8">
              {links.map((link, i) => (
                <div key={link.href} className="border-b border-white/5">
                  <div className="flex items-center justify-between">
                    <Link
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className="py-4 text-lg font-medium text-cream"
                    >
                      {link.label[locale]}
                    </Link>
                    {link.children ? (
                      <button
                        type="button"
                        onClick={() => setOpenGroup(openGroup === i ? null : i)}
                        aria-expanded={openGroup === i}
                        className="flex h-10 w-10 items-center justify-center text-mist"
                      >
                        <ArrowIcon
                          className={`h-4 w-4 transition-transform ${
                            openGroup === i ? "rotate-90" : ""
                          }`}
                        />
                      </button>
                    ) : null}
                  </div>
                  {openGroup === i && link.children ? (
                    <div className="flex flex-col pb-4">
                      {link.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMenuOpen(false)}
                          className="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-mist transition-colors hover:bg-white/[0.04] hover:text-cream"
                        >
                          <span>{child.label[locale]}</span>
                          <span className="text-[11px] tabular-nums text-fog">{child.index?.[locale]}</span>
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}

              <div className="mt-8 flex flex-col gap-4">
                <Link
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-center gap-3 rounded-full bg-brass px-6 py-4 text-sm font-medium text-ink"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {bookingCta[locale]}
                </Link>
                <Link
                  href={`/${otherLocale[locale]}`}
                  className="flex items-center justify-center gap-2 rounded-full border border-white/10 px-6 py-4 text-sm text-cream"
                  lang={otherLocale[locale]}
                >
                  {ui.lang.switchTo[locale]}
                </Link>
              </div>
            </Container>
          </div>
        </div>
      ) : null}
    </header>
  );
}