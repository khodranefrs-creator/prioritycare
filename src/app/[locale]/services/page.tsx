import type { Metadata } from "next";
import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { isLocale, localePath } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { services } from "@/content/services";
import { serviceImages, unsplashUrl } from "@/content/images";
import { ui } from "@/content/ui";
import { PageHero } from "@/components/page-hero";
import { ContactCta } from "@/components/sections/contact-cta";
import Image from "next/image";
import { ArrowIcon } from "@/components/icons";
import { Container, Reveal } from "@/components/ui";

const pageCopy = {
  ar: {
    kicker: "خدماتنا",
    title: "حماية وعناية بمعايير احترافية",
    description:
      "أربع خدمات متخصصة مذكورة في الملف الرسمي للمركز، لكل منها منهجية موثقة من التحضير حتى التسليم.",
  },
  en: {
    kicker: "Our services",
    title: "Protection and care at a professional standard",
    description:
      "Four specialist services listed on the studio's official profile, each with a documented approach from preparation to delivery.",
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
    path: "/services",
    title: { ar: "خدماتنا", en: "Our services" },
    description: pageCopy[locale].description,
  });
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return null;
  const locale = raw as Locale;
  const copy = pageCopy[locale];

  return (
    <>
      <PageHero
        kicker={<>{copy.kicker}</>}
        title={copy.title}
        description={copy.description}
      />
      <section className="py-16 md:py-24">
        <Container>
          <div className="flex flex-col gap-4">
            {services.map((service, i) => {
              const image = serviceImages[service.slug.en];
              const reverse = i % 2 === 1;
              return (
                <Reveal key={service.slug.en}>
                  <Link
                    href={localePath(locale, `/services/${service.slug[locale]}`)}
                    className={`group grid items-center gap-8 overflow-hidden rounded-3xl border border-white/5 bg-ink-soft transition-colors hover:border-white/10 md:grid-cols-2 md:gap-0`}
                  >
                    <div
                      className={`relative aspect-[16/10] overflow-hidden md:aspect-[3/2] ${
                        reverse ? "md:order-2" : ""
                      }`}
                    >
                      <Image
                        src={unsplashUrl(image.id, { w: 1200 })}
                        alt={image.alt[locale]}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover opacity-80 transition-all duration-700 group-hover:scale-[1.03]"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent md:bg-none" />
                    </div>
                    <div
                      className={`flex flex-col gap-4 p-8 md:p-12 ${
                        reverse ? "md:order-1" : ""
                      }`}
                    >
                      <span className="font-display text-sm tabular-nums tracking-[0.2em] text-brass">
                        {service.index[locale]}
                      </span>
                      <h2 className="text-2xl font-semibold text-cream md:text-3xl">
                        {service.title[locale]}
                      </h2>
                      <p className="max-w-lg text-sm leading-relaxed text-mist">
                        {service.description[locale]}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-1">
                        {service.benefits.slice(0, 3).map((b) => (
                          <span
                            key={b.en}
                            className="rounded-full border border-white/10 px-3.5 py-1.5 text-xs text-mist"
                          >
                            {b[locale]}
                          </span>
                        ))}
                      </div>
                      <span className="mt-2 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-brass">
                        {ui.actions.viewService[locale]}
                        <ArrowIcon className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
      <ContactCta locale={locale} />
    </>
  );
}