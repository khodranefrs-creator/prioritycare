import { notFound } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import { isLocale } from "@/lib/i18n";
import { Hero } from "@/components/sections/hero";
import { TrustBand } from "@/components/sections/trust-band";
import { ServicesGrid } from "@/components/sections/services-grid";
import { WhyUs } from "@/components/sections/why-us";
import { Process } from "@/components/sections/process";
import { FaqPreview } from "@/components/sections/faq-preview";
import { SocialWork } from "@/components/sections/social-work";
import { Location } from "@/components/sections/location";
import { ContactCta } from "@/components/sections/contact-cta";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;

  return (
    <>
      <Hero locale={locale} />
      <TrustBand locale={locale} />
      <ServicesGrid locale={locale} />
      <WhyUs locale={locale} />
      <Process locale={locale} />
      <FaqPreview locale={locale} />
      <SocialWork locale={locale} />
      <Location locale={locale} />
      <ContactCta locale={locale} />
    </>
  );
}