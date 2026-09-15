import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { services, getServiceBySlug } from "@/content/services";
import { getFaqsByKeys } from "@/content/faq";
import { serviceImages, unsplashUrl } from "@/content/images";
import { ui } from "@/content/ui";
import { whatsappHref } from "@/content/business";
import Image from "next/image";
import { SITE_URL } from "@/lib/site";
import { PageHero } from "@/components/page-hero";
import { FaqAccordion } from "@/components/faq-accordion";
import { Container, Kicker, Reveal, SectionHeading, TickItem } from "@/components/ui";
import { ArrowIcon, WhatsAppIcon } from "@/components/icons";

const serviceSchema = (
  name: string,
  description: string,
  url: string,
  provider: string,
) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  url,
  provider: { "@type": "AutoBodyShop", name: provider },
  areaServed: "Riyadh",
});

export function generateStaticParams() {
  return services.flatMap((service) => [
    { locale: "ar", slug: service.slug.ar },
    { locale: "en", slug: service.slug.en },
  ]);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const locale: Locale = raw === "en" ? "en" : "ar";
  const service = getServiceBySlug(slug, locale);
  if (!service) return buildMetadata({ locale, path: "/services" });
  return buildMetadata({
    locale,
    path: `/services/${service.slug[locale]}`,
    title: {
      ar: `${service.title.ar} — أولوية العناية`,
      en: `${service.title.en} — Priority Care`,
    },
    description: service.shortDescription,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: raw, slug } = await params;
  const locale: Locale = raw === "en" ? "en" : "ar";
  const service = getServiceBySlug(slug, locale);
  if (!service) notFound();

  const t = ui.servicePage;
  const faqItems = getFaqsByKeys(service.faqKeys);
  const related = services.filter((s) => s.slug.en !== service.slug.en);
  const image = serviceImages[service.slug.en];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            serviceSchema(
              service.title[locale],
              service.shortDescription[locale],
              `${SITE_URL}${localePath(locale, `/services/${service.slug[locale]}`)}`,
              "Priority Care Autodetailing",
            ),
          ),
        }}
      />
      <PageHero
        kicker={<>{`${service.index[locale]} · ${service.kicker[locale]}`}</>}
        title={service.title[locale]}
        tall
      />

      <section className="py-16 md:py-24">
        <Container className="grid gap-16 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <div className="flex flex-col gap-14">
            <div className="flex flex-col gap-5">
              <Kicker mirror>{t.overview[locale]}</Kicker>
              <p className="max-w-2xl text-balance text-lg leading-relaxed text-cream/90">
                {service.description[locale]}
              </p>
            </div>

            <div className="flex flex-col gap-5">
              <h2 className="text-xl font-semibold text-cream">{t.benefits[locale]}</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.benefits.map((b) => (
                  <TickItem key={b.en}>{b[locale]}</TickItem>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h2 className="text-xl font-semibold text-cream">{t.provided[locale]}</h2>
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.whatWeProvide.map((w) => (
                  <TickItem key={w.en}>{w[locale]}</TickItem>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5">
              <h2 className="text-xl font-semibold text-cream">{t.processTitle[locale]}</h2>
              <ol className="flex flex-col gap-3">
                {service.process.map((step, i) => (
                  <li
                    key={step.en}
                    className="flex items-start gap-4 rounded-2xl border border-white/5 bg-ink-soft p-5"
                  >
                    <span
                      className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brass/12 font-display text-xs tabular-nums text-brass"
                      dir="ltr"
                    >
                      0{i + 1}
                    </span>
                    <span className="text-sm leading-relaxed text-mist">{step[locale]}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          <aside className="flex flex-col gap-6 lg:sticky lg:top-28 lg:self-start">
            <Reveal className="overflow-hidden rounded-3xl border border-white/5">
              <div className="relative aspect-[4/3]">
                <Image
                  src={unsplashUrl(image.id, { w: 800 })}
                  alt={image.alt[locale]}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col gap-4 bg-ink-soft p-6">
                <h3 className="text-lg font-semibold text-cream">{t.ctaTitle[locale]}</h3>
                <p className="text-sm leading-relaxed text-mist">{t.ctaSubtitle[locale]}</p>
                <a
                  href={whatsappHref(service.whatsappMessage[locale])}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-1 inline-flex items-center justify-center gap-3 rounded-full bg-brass px-6 py-4 text-sm font-medium text-ink transition-colors hover:bg-brass-bright"
                >
                  <WhatsAppIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
                  {ui.actions.requestQuote[locale]}
                </a>
                <span className="text-xs leading-relaxed text-fog">
                  {locale === "ar"
                    ? "رسالتك تتضمن تلقائيًا اسم الخدمة — عدّل عليها بحرية قبل الإرسال."
                    : "Your message includes the service name automatically — edit freely before sending."}
                </span>
              </div>
            </Reveal>

            {related.length > 0 ? (
              <div className="flex flex-col gap-3">
                <span className="px-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-fog">
                  {t.related[locale]}
                </span>
                {related.map((r) => (
                  <Link
                    key={r.slug.en}
                    href={localePath(locale, `/services/${r.slug[locale]}`)}
                    className="group flex items-center justify-between gap-4 rounded-2xl border border-white/5 bg-ink-soft px-5 py-4 transition-colors hover:border-white/10"
                  >
                    <span className="flex flex-col gap-0.5">
                      <span className="text-sm font-medium text-cream">{r.title[locale]}</span>
                      <span className="text-xs text-fog">{r.kicker[locale]}</span>
                    </span>
                    <ArrowIcon className="h-4 w-4 text-brass transition-transform group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1" />
                  </Link>
                ))}
              </div>
            ) : null}
          </aside>
        </Container>
      </section>

      {faqItems.length > 0 ? (
        <section className="border-t border-white/5 py-20 md:py-24">
          <Container className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-16">
            <div>
              <SectionHeading
                kicker={<>{ui.sections.faq.kicker[locale]}</>}
                title={ui.sections.faq.title[locale]}
              />
            </div>
            <FaqAccordion items={faqItems} locale={locale} defaultOpen={0} />
          </Container>
        </section>
      ) : null}

      <section className="border-t border-white/5 pb-24">
        <Container className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-ink-soft px-8 py-10 md:flex-row md:items-center">
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brass">
              {locale === "ar" ? "لنبدأ" : "Let's start"}
            </span>
            <h2 className="text-2xl font-semibold text-cream">
              {locale === "ar" ? `مهتم بخدمة ${service.title.ar}؟` : `Interested in ${service.title.en}?`}
            </h2>
          </div>
          <a
            href={whatsappHref(service.whatsappMessage[locale])}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-brass px-7 py-4 text-sm font-medium text-ink transition-colors hover:bg-brass-bright"
          >
            <WhatsAppIcon className="h-4 w-4 transition-transform group-hover:scale-110" />
            {ui.actions.requestQuote[locale]}
          </a>
        </Container>
      </section>
    </>
  );
}