import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import { localePath } from "@/lib/i18n";
import { ui } from "@/content/ui";
import { business } from "@/content/business";
import { Container, Reveal, SectionHeading, TickItem } from "@/components/ui";
import { ArrowIcon, ShieldIcon, SparkleIcon, DropIcon, SunIcon } from "@/components/icons";

const reasons: Record<Locale, { title: string; text: string; icon: "shield" | "gloss" | "drop" | "sun" }[]> = {
  ar: [
    {
      title: "حماية معتمدة ومتخصصة",
      text: "نركز على خدمات الحماية والعناية فقط — PPF، نانو سيراميك، عزل حراري، وتلميع، لجميع أنواع السيارات.",
      icon: "shield",
    },
    {
      title: "نتائج تدوم",
      text: "من التحضير التمهيدي للطلاء حتى التركيب النهائي، كل خطوة موجّهة لنتيجة تبقى معك طويلًا.",
      icon: "drop",
    },
    {
      title: "موقع مناسب في وسط الرياض",
      text: `نستقبلك في ${business.district.ar} على ${business.street.ar}، مع مواقف مريحة للعملاء.`,
      icon: "sun",
    },
    {
      title: "تواصل مباشر وسريع",
      text: "عرض السعر والموعد عبر واتساب، ودفع بالبطاقة في المركز — من دون تعقيد.",
      icon: "gloss",
    },
  ],
  en: [
    {
      title: "Specialised, verified protection",
      text: "We focus purely on protection and care — PPF, nano ceramic, window tinting, and polishing — for all vehicle types.",
      icon: "shield",
    },
    {
      title: "Results that last",
      text: "From paint preparation to final installation, every step is aimed at a finish that stays with you.",
      icon: "drop",
    },
    {
      title: "Centrally located in Riyadh",
      text: `We receive you in ${business.district.en} on ${business.street.en}, with convenient customer parking.`,
      icon: "sun",
    },
    {
      title: "Direct, fast communication",
      text: "Quotes and appointments over WhatsApp, card payment at the studio — no friction.",
      icon: "gloss",
    },
  ],
};

const iconMap = {
  shield: ShieldIcon,
  gloss: SparkleIcon,
  drop: DropIcon,
  sun: SunIcon,
};

export function WhyUs({ locale }: { locale: Locale }) {
  const t = ui.sections.why;
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1fr] lg:gap-20">
          <div className="flex flex-col gap-8">
            <SectionHeading
              kicker={<>{t.kicker[locale]}</>}
              title={t.title[locale]}
            />
            <ul className="grid gap-4 sm:grid-cols-2">
              {reasons[locale].map((reason, i) => {
                const Icon = iconMap[reason.icon];
                return (
                  <li key={reason.title}>
                    <Reveal delay={i * 60} className="h-full rounded-2xl border border-white/5 bg-ink-soft p-6">
                      <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brass/12 text-brass">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="mb-2 text-base font-semibold text-cream">{reason.title}</h3>
                      <p className="text-sm leading-relaxed text-mist">{reason.text}</p>
                    </Reveal>
                  </li>
                );
              })}
            </ul>
          </div>

          <Reveal className="flex flex-col justify-between gap-10 rounded-3xl bg-bone p-8 md:p-12" variant="fade">
            <div className="flex flex-col gap-8">
              <div>
                <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.34em] text-brass-deep">
                  {locale === "ar" ? "منذ اللحظة الأولى" : "From the first moment"}
                </p>
                <p className="text-balance text-2xl font-semibold leading-snug text-ink md:text-3xl" dir="auto">
                  {locale === "ar"
                    ? "الفرق بين سيارة تُرمَّم وآخرى تُحفظ، هو التفاصيل التي لا تراها."
                    : "The difference between a restored car and a preserved one lies in the details you never see."}
                </p>
              </div>
              <ul className="flex flex-col gap-3 text-ink/80">
                <TickItem tone="light">
                  {locale === "ar"
                    ? "ملف رسمي ببيانات موثقة وتقييم ٥.٠ من ١٢ تقييم"
                    : "Official listing with documented details and a 5.0 rating from 12 reviews"}
                </TickItem>
                <TickItem tone="light">
                  {locale === "ar"
                    ? "خدمات لأصحاب السيارات الجديدة والمستعملة على حد سواء"
                    : "Services for owners of both new and pre-owned vehicles"}
                </TickItem>
                <TickItem tone="light">
                  {locale === "ar"
                    ? "تواصل كامل باللغة العربية أو الإنجليزية"
                    : "Full support in Arabic or English"}
                </TickItem>
              </ul>
            </div>
            <Link
              href={localePath(locale, "/about")}
              className="group inline-flex items-center gap-2 text-sm font-medium text-ink"
            >
              {locale === "ar" ? "اقرأ المزيد عنا" : "Read more about us"}
              <ArrowIcon className="h-4 w-4 transition-transform group-hover:-translate-x-1 rtl:rotate-180 rtl:group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}