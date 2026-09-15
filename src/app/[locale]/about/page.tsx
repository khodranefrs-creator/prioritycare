import type { Metadata } from "next";
import Image from "next/image";
import type { Locale } from "@/lib/i18n";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { business, mapsDirectionsUrl, telHref, whatsappHref } from "@/content/business";
import { ui } from "@/content/ui";
import { editorialPhotos, unsplashUrl } from "@/content/images";
import { PageHero } from "@/components/page-hero";
import { ContactCta } from "@/components/sections/contact-cta";
import { Container, Reveal, SectionHeading, TickItem } from "@/components/ui";
import { ArrowIcon, ClockIcon, MapPinIcon, PhoneIcon, StarIcon, WhatsAppIcon } from "@/components/icons";

const copy = {
  ar: {
    title: "عن أولوية العناية",
    intro:
      "استوديو متخصص في حماية وعناية السيارات في الرياض، يُركّز على ما يهم فعلاً: الحفاظ على طلاء سيارتك ومقصورة أنيقة بأعلى معايير الاحترافية.",
    section1Title: "ما الذي نقدمه",
    section2Title: "لماذا تثق بنا",
    section3Title: "أرقام وأوقات موثقة",
  },
  en: {
    title: "About Priority Care",
    intro:
      "A specialist car protection and care studio in Riyadh, focused on what truly matters: preserving your car's paintwork and keeping the cabin immaculate to the highest professional standard.",
    section1Title: "What we provide",
    section2Title: "Why trust us",
    section3Title: "Documented facts & hours",
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
    path: "/about",
    title: { ar: "عن أولوية العناية", en: "About Priority Care" },
    description: copy[locale].intro,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return null;
  const locale = raw as Locale;
  const t = copy[locale];
  const heroPhoto = editorialPhotos[2];

  return (
    <>
      <PageHero
        kicker={<>{t.title}</>}
        title={t.intro}
      />

      <section className="py-16 md:py-24">
        <Container className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-5">
              <SectionHeading
                kicker={<>{t.section1Title}</>}
                title={
                  locale === "ar"
                    ? "خدمات الحماية والعناية لجميع أنواع السيارات"
                    : "Protection and care services for all vehicle types"
                }
              />
              <ul className="flex flex-col gap-3">
                {business.verifiedCategories[locale].map((c) => (
                  <TickItem key={c}>{c}</TickItem>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h2 className="text-xl font-semibold text-cream">{t.section2Title}</h2>
              <ul className="flex flex-col gap-3">
                <TickItem>
                  {locale === "ar"
                    ? `تقييم ${business.rating.value.toFixed(1)} من ٥ بناءً على ${business.rating.count} تقييم على الخرائط`
                    : `A ${business.rating.value.toFixed(1)} out of 5 rating based on ${business.rating.count} map reviews`}
                </TickItem>
                <TickItem>
                  {locale === "ar"
                    ? "معلوماتنا منشورة رسمياً على منصات الخرائط ودلائل الأعمال"
                    : "Our information is officially published on map platforms and business directories"}
                </TickItem>
                <TickItem>
                  {locale === "ar"
                    ? "نتواصل معك مباشرة عبر واتساب أو الهاتف"
                    : "We communicate directly with you via WhatsApp or phone"}
                </TickItem>
                {business.amenities.map((a) => (
                  <TickItem key={a.en}>{a[locale]}</TickItem>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <Reveal variant="fade" className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-white/5">
              <Image
                src={unsplashUrl(heroPhoto.id, { w: 1100 })}
                alt={heroPhoto.alt[locale]}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </Reveal>

            <Reveal className="rounded-3xl bg-ink-soft p-7">
              <h2 className="mb-5 text-xl font-semibold text-cream">{t.section3Title}</h2>
              <ul className="flex flex-col gap-4 text-sm">
                <li className="flex items-start gap-3 text-mist">
                  <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                  <span dir="auto">{business.address[locale]}</span>
                </li>
                <li className="flex items-start gap-3 text-mist">
                  <ClockIcon className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                  <span>{business.openingHours.display[locale]}</span>
                </li>
                <li className="flex items-start gap-3 text-mist">
                  <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                  <a href={telHref} dir="ltr" className="transition-colors hover:text-cream">
                    {business.phone.display[locale]}
                  </a>
                </li>
                <li className="flex items-start gap-3 text-mist">
                  <StarIcon className="mt-0.5 h-4 w-4 shrink-0 text-brass" />
                  <span>
                    {business.rating.value.toFixed(1)} / 5 — {business.rating.count}{" "}
                    {ui.sections.trust.reviewsSuffix[locale]}
                  </span>
                </li>
              </ul>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-brass px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-brass-bright"
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  {locale === "ar" ? "تواصل معنا" : "Contact us"}
                </a>
                <a
                  href={mapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm text-cream transition-colors hover:border-brass hover:text-brass"
                >
                  {ui.actions.directions[locale]}
                  <ArrowIcon className="h-4 w-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
      <ContactCta locale={locale} />
    </>
  );
}