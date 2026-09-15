import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";
import { isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import { faqs } from "@/content/faq";
import { ui } from "@/content/ui";
import { FaqAccordion } from "@/components/faq-accordion";
import { PageHero } from "@/components/page-hero";
import { ContactCta } from "@/components/sections/contact-cta";
import { Container } from "@/components/ui";

const copy = {
  ar: {
    title: "الأسئلة الشائعة",
    description:
      "إجابات مبنية على المعلومات الرسمية المنشورة عن مركز أولوية العناية. لم تجد سؤالك؟ تواصل معنا مباشرة.",
  },
  en: {
    title: "Frequently asked questions",
    description:
      "Answers based on officially published information about Priority Care. Didn't find your question? Reach out to us directly.",
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
    path: "/faq",
    title: { ar: "الأسئلة الشائعة", en: "FAQ" },
    description: copy[locale].description,
  });
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!isLocale(raw)) return null;
  const locale = raw as Locale;
  const t = copy[locale];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question[locale],
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer[locale],
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PageHero
        kicker={<>{ui.sections.faq.kicker[locale]}</>}
        title={t.title}
        description={t.description}
      />
      <section className="py-16 md:py-24">
        <Container className="mx-auto max-w-[920px]">
          <FaqAccordion items={faqs} locale={locale} defaultOpen={0} />
        </Container>
      </section>
      <ContactCta locale={locale} />
    </>
  );
}