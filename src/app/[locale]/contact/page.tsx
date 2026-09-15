import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { business, mapsEmbedUrl, mapsDirectionsUrl, telHref } from "@/content/business";
import { ui } from "@/content/ui";
import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";
import { Container, Reveal, SectionHeading } from "@/components/ui";
import { ClockIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "@/components/icons";
import { whatsappHref } from "@/content/business";

const copy = {
  ar: {
    title: "تواصل معنا",
    description:
      "راسلنا عبر واتساب أو اتصل بنا مباشرة، أو زرنا في استوديو شارع العروبة بحي السليمانية.",
  },
  en: {
    title: "Contact us",
    description:
      "Reach us on WhatsApp or call us directly, or visit the studio on Al Urubah Road in As Sulaymaniyah.",
  },
} as const;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale: Locale = raw === "en" ? "en" : "ar";
  return buildMetadata({
    locale,
    path: "/contact",
    title: { ar: "تواصل معنا", en: "Contact us" },
    description: copy[locale].description,
  });
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return null;
  const locale = raw as Locale;
  const t = copy[locale];
  const ct = ui.contact;

  return (
    <>
      <PageHero
        kicker={<>{ui.sections.contact.kicker[locale]}</>}
        title={t.title}
        description={t.description}
      />

      <section className="py-16 md:py-24">
        <Container className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          {/* Contact cards */}
          <div className="flex flex-col gap-5">
            <Reveal className="flex items-start gap-4 rounded-2xl border border-white/5 bg-ink-soft p-6">
              <WhatsAppIcon className="mt-0.5 h-5 w-5 shrink-0 text-brass" />
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-fog">
                  {ct.whatsappTitle[locale]}
                </span>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold text-cream transition-colors hover:text-brass"
                >
                  {locale === "ar" ? "ابدأ محادثة الآن" : "Start a chat now"}
                </a>
                <span className="text-xs leading-relaxed text-fog">
                  {locale === "ar" ? "أسرع وسيلة لعرض سعر" : "The fastest way to get a quote"}
                </span>
              </div>
            </Reveal>

            <Reveal className="flex items-start gap-4 rounded-2xl border border-white/5 bg-ink-soft p-6" delay={50}>
              <PhoneIcon className="mt-0.5 h-5 w-5 shrink-0 text-brass" />
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-fog">
                  {ct.phone[locale]}
                </span>
                <a
                  href={telHref}
                  dir="ltr"
                  className="text-base font-semibold text-cream transition-colors hover:text-brass"
                >
                  {business.phone.display[locale]}
                </a>
                <span className="text-xs leading-relaxed text-fog">
                  {business.openingHours.display[locale]}
                </span>
              </div>
            </Reveal>

            <Reveal className="flex items-start gap-4 rounded-2xl border border-white/5 bg-ink-soft p-6" delay={100}>
              <MapPinIcon className="mt-0.5 h-5 w-5 shrink-0 text-brass" />
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-fog">
                  {ct.addressTitle[locale]}
                </span>
                <span className="text-base font-semibold text-cream" dir="auto">
                  {business.address[locale]}
                </span>
                <a
                  href={mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-brass transition-colors hover:text-brass-bright"
                >
                  {ui.actions.directions[locale]}
                </a>
              </div>
            </Reveal>

            <Reveal className="flex items-start gap-4 rounded-2xl border border-white/5 bg-ink-soft p-6" delay={150}>
              <ClockIcon className="mt-0.5 h-5 w-5 shrink-0 text-brass" />
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-fog">
                  {ct.hoursTitle[locale]}
                </span>
                <span className="text-base font-semibold text-cream">
                  {business.openingHours.display[locale]}
                </span>
                <span className="text-xs leading-relaxed text-fog">
                  {business.openingHours.note[locale]}
                </span>
              </div>
            </Reveal>

            <SectionHeading
              kicker={<>{t.title}</>}
              title={ct.form.title[locale]}
              description={ct.form.subtitle[locale]}
              className="mt-6"
            />
            <ContactForm locale={locale} />
          </div>

          {/* Map */}
          <div className="flex flex-col gap-5">
            <Reveal variant="fade" className="relative min-h-[480px] overflow-hidden rounded-3xl border border-white/5 lg:sticky lg:top-28">
              <iframe
                src={mapsEmbedUrl}
                title={ui.contact.mapTitle[locale]}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full grayscale-[35%]"
              />
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}