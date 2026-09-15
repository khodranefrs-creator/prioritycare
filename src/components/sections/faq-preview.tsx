import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { faqs } from "@/content/faq";
import { ui } from "@/content/ui";
import { FaqAccordion } from "@/components/faq-accordion";
import { Container, SectionHeading } from "@/components/ui";
import { ArrowIcon } from "@/components/icons";

export function FaqPreview({ locale }: { locale: Locale }) {
  const t = ui.sections.faq;
  const items = faqs.slice(0, 6);
  return (
    <section className="border-t border-white/5 py-24 md:py-32" id="faq">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div className="flex flex-col gap-6 lg:sticky lg:top-32 lg:self-start">
            <SectionHeading
              kicker={<>{t.kicker[locale]}</>}
              title={t.title[locale]}
              description={
                locale === "ar"
                  ? "إجابات مبنية على المعلومات الرسمية المنشورة عن المركز."
                  : "Answers based on officially published information about the studio."
              }
            />
            <Link
              href={localePath(locale, "/faq")}
              className="group inline-flex items-center gap-2 text-sm font-medium text-brass"
            >
              {locale === "ar" ? "عرض جميع الأسئلة" : "View all questions"}
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1" />
            </Link>
          </div>
          <FaqAccordion items={items} locale={locale} defaultOpen={0} />
        </div>
      </Container>
    </section>
  );
}