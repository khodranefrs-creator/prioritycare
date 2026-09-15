import type { Locale } from "@/lib/i18n";
import { ui } from "@/content/ui";
import { Container, Reveal, SectionHeading } from "@/components/ui";

const steps: Record<Locale, { title: string; text: string }[]> = {
  ar: [
    {
      title: "التقييم والاستشارة",
      text: "نفحص حالة الطلاء ونستمع لاحتياجك لنحدد الأنسب — فيلم، سيراميك، عزل، أو تلميع.",
    },
    {
      title: "التحضير التمهيدي",
      text: "تنظيف عميق وإعداد كامل للسطح لضمان أعلى ترابط لطبقة الحماية.",
    },
    {
      title: "التطبيق الدقيق",
      text: "تركيب وتطبيق بأيدٍ خبيرة مع فحص كل تفصيلة خلال العمل.",
    },
    {
      title: "الفحص والتسليم",
      text: "مراجعة النتيجة معك وتقديم إرشادات العناية الموصى بها.",
    },
  ],
  en: [
    {
      title: "Assessment & consultation",
      text: "We inspect the paint and listen to your needs to recommend the right service — film, ceramic, tinting, or polishing.",
    },
    {
      title: "Preparation",
      text: "Deep cleaning and full surface prep to guarantee optimal bonding of the protective layer.",
    },
    {
      title: "Precise application",
      text: "Installation by experienced hands, with every detail checked throughout.",
    },
    {
      title: "Inspection & delivery",
      text: "We review the result with you and share recommended aftercare guidance.",
    },
  ],
};

export function Process({ locale }: { locale: Locale }) {
  const t = ui.sections.process;
  return (
    <section className="border-t border-white/5 py-24 md:py-32">
      <Container>
        <SectionHeading
          kicker={<>{t.kicker[locale]}</>}
          title={t.title[locale]}
          align="center"
          className="mb-16"
        />
        <ol className="grid gap-px overflow-hidden rounded-2xl bg-white/[0.05] md:grid-cols-4">
          {steps[locale].map((step, i) => (
            <li key={step.title}>
              <Reveal delay={i * 70} className="flex h-full flex-col gap-4 bg-ink p-7 md:p-8">
                <span className="font-display text-sm tabular-nums tracking-[0.2em] text-brass" dir="ltr">
                  0{i + 1}
                </span>
                <h3 className="text-base font-semibold text-cream">{step.title}</h3>
                <p className="text-sm leading-relaxed text-mist">{step.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}