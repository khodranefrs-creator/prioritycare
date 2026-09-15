import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localePath, otherLocale } from "@/lib/i18n";
import { services } from "@/content/services";
import { navigationLinks } from "@/content/navigation";
import { ui } from "@/content/ui";
import { business, telHref, whatsappHref } from "@/content/business";
import { Mark } from "@/components/mark";
import {
  ClockIcon,
  InstagramIcon,
  MapPinIcon,
  PhoneIcon,
  TikTokIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { Container, Kicker } from "@/components/ui";

export function Footer({ locale }: { locale: Locale }) {
  const t = ui.footer;

  return (
    <footer className="border-t border-white/5 bg-ink-soft">
      <Container className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr] lg:gap-8">
        {/* Brand */}
        <div className="flex flex-col gap-6">
          <Mark locale={locale} />
          <p className="max-w-sm text-sm leading-relaxed text-mist">
            {t.description[locale]}
          </p>
          <div className="flex items-center gap-3" dir={getDir(locale)}>
            <a
              href="https://www.instagram.com/priority_care1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mist transition-colors hover:border-brass hover:text-brass"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
            <a
              href="https://www.tiktok.com/@prioritycare"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mist transition-colors hover:border-brass hover:text-brass"
            >
              <TikTokIcon className="h-4 w-4" />
            </a>
            <a
              href={whatsappHref()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-mist transition-colors hover:border-brass hover:text-brass"
            >
              <WhatsAppIcon className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Quick links */}
        <div className="flex flex-col gap-4">
          <Kicker mirror>{t.nav[locale]}</Kicker>
          <ul className="flex flex-col gap-2.5 text-sm text-mist">
            {navigationLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={localePath(locale, link.href)}
                  className="transition-colors hover:text-cream"
                >
                  {link.label[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="flex flex-col gap-4">
          <Kicker mirror>{t.servicesTitle[locale]}</Kicker>
          <ul className="flex flex-col gap-2.5 text-sm text-mist">
            {services.map((s) => (
              <li key={s.slug.en}>
                <Link
                  href={localePath(locale, `/services/${s.slug[locale]}`)}
                  className="transition-colors hover:text-cream"
                >
                  {s.title[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-4">
          <Kicker mirror>{t.contactTitle[locale]}</Kicker>
          <ul className="flex flex-col gap-3 text-sm text-mist">
            <li className="flex items-start gap-3">
              <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
              <span className="leading-relaxed">{business.address[locale]}</span>
            </li>
            <li>
              <a
                href={telHref}
                className="flex items-center gap-3 transition-colors hover:text-cream"
              >
                <PhoneIcon className="h-4 w-4 shrink-0 text-brass" />
                <span dir="ltr">{business.phone.display[locale]}</span>
              </a>
            </li>
            <li className="flex items-start gap-3">
              <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
              <span className="flex flex-col gap-0.5">
                <span>{business.openingHours.display[locale]}</span>
                <span className="text-xs text-fog">{business.openingHours.note[locale]}</span>
              </span>
            </li>
          </ul>
        </div>
      </Container>

      <Container className="flex flex-col gap-4 border-t border-white/5 py-8 md:flex-row md:items-center md:justify-between">
        <p className="text-xs text-fog">{t.copyright[locale]}</p>
        <p className="max-w-md text-xs leading-relaxed text-fog md:text-end">
          {t.editorial[locale]}
        </p>
        <a
          href={localePath(otherLocale[locale], "/")}
          className="text-xs font-medium tracking-wide text-mist transition-colors hover:text-brass"
          lang={otherLocale[locale]}
        >
          {ui.lang.switchTo[locale]}
        </a>
      </Container>
    </footer>
  );
}

function getDir(locale: Locale): "rtl" | "ltr" {
  return locale === "ar" ? "rtl" : "ltr";
}