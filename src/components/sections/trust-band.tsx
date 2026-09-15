import type { Locale } from "@/lib/i18n";
import { business, mapsDirectionsUrl, telHref, whatsappHref } from "@/content/business";
import { ui } from "@/content/ui";
import { Container, Reveal } from "@/components/ui";
import {
  ClockIcon,
  CreditCardIcon,
  MapPinIcon,
  PhoneIcon,
  StarIcon,
  WhatsAppIcon,
} from "@/components/icons";

export function TrustBand({ locale }: { locale: Locale }) {
  const t = ui.sections.trust;
  const items = [
    {
      icon: <StarIcon className="h-5 w-5" />,
      label: t.ratingLabel[locale],
      value: `${business.rating.value.toFixed(1)} / 5`,
      suffix: `${business.rating.count} ${t.reviewsSuffix[locale]}`,
    },
    {
      icon: <MapPinIcon className="h-5 w-5" />,
      label: t.locationLabel[locale],
      value: `${business.district[locale]} · ${business.city[locale]}`,
      suffix: business.street[locale],
    },
    {
      icon: <ClockIcon className="h-5 w-5" />,
      label: t.hoursLabel[locale],
      value: business.openingHours.display[locale],
      suffix: business.openingHours.note[locale],
    },
    {
      icon: <CreditCardIcon className="h-5 w-5" />,
      label: t.paymentLabel[locale],
      value: business.amenities.map((a) => a[locale]).join(" · "),
      suffix: ui.contact.form.note[locale],
    },
  ];

  return (
    <section className="border-y border-white/5 bg-ink-soft/60">
      <Container className="grid gap-px overflow-hidden bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, i) => (
          <Reveal
            key={i}
            delay={i * 50}
            className="flex flex-col gap-4 bg-ink p-6 md:p-8"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brass/12 text-brass">
              {item.icon}
            </span>
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-fog">
                {item.label}
              </span>
              <span className="text-sm font-semibold leading-snug text-cream">
                {item.value}
              </span>
              <span className="text-xs leading-relaxed text-fog">{item.suffix}</span>
            </div>
          </Reveal>
        ))}
      </Container>

      <Container className="flex flex-col items-center justify-between gap-6 py-8 md:flex-row">
        <p className="max-w-xl text-center text-sm leading-relaxed text-mist md:text-start">
          {locale === "ar"
            ? "أوقات وأسعار وعروض دقيقة تصلك مباشرة من المركز — راسلنا على واتساب أو اتصل بنا."
            : "Accurate hours, pricing, and offers straight from the studio — message us on WhatsApp or call."}
        </p>
        <div className="flex items-center gap-3">
          <a
            href={telHref}
            className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-mist transition-colors hover:border-brass hover:text-brass"
            aria-label={locale === "ar" ? "اتصال" : "Call"}
          >
            <PhoneIcon className="h-4.5 w-4.5" />
          </a>
          <a
            href={whatsappHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-brass px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-brass-bright"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {ui.sections.contact.kicker[locale]}
          </a>
          <a
            href={mapsDirectionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-12 items-center justify-center rounded-full border border-white/10 px-5 text-sm text-mist transition-colors hover:border-brass hover:text-brass"
          >
            {ui.actions.directions[locale]}
          </a>
        </div>
      </Container>
    </section>
  );
}